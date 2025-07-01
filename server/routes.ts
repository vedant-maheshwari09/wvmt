import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMailingListSchema } from "@shared/schema";
import crypto from "crypto";

export async function registerRoutes(app: Express): Promise<Server> {
  // Mailing list subscription endpoint
  app.post("/api/mailing-list/subscribe", async (req, res) => {
    try {
      const { email } = insertMailingListSchema.parse(req.body);
      
      // Check if email is already subscribed
      const existingEntry = await storage.getMailingListEntry(email);
      if (existingEntry) {
        if (existingEntry.verified) {
          return res.status(400).json({ 
            error: "Email is already subscribed and verified" 
          });
        } else {
          return res.status(400).json({ 
            error: "Email is already subscribed but not verified. Please check your email for verification instructions." 
          });
        }
      }

      // Generate verification token
      const verificationToken = crypto.randomBytes(32).toString('hex');
      
      // Add to storage
      await storage.addEmailToMailingList(email, verificationToken);
      
      // In a real app, you would send an email here
      // For now, we'll return the verification URL
      const verificationUrl = `${req.protocol}://${req.get('host')}/api/mailing-list/verify?token=${verificationToken}`;
      
      res.json({ 
        message: "Subscription initiated. Please verify your email address.",
        verificationUrl, // This would normally be sent via email
        notice: "In a production environment, this link would be sent to your email address."
      });
    } catch (error) {
      res.status(400).json({ error: "Invalid email address" });
    }
  });

  // Email verification endpoint
  app.get("/api/mailing-list/verify", async (req, res) => {
    try {
      const { token } = req.query;
      
      if (!token || typeof token !== 'string') {
        return res.status(400).json({ error: "Invalid verification token" });
      }

      const verifiedEntry = await storage.verifyEmail(token);
      
      if (!verifiedEntry) {
        return res.status(400).json({ error: "Invalid or expired verification token" });
      }

      res.json({ 
        message: "Email successfully verified! You've been subscribed to the WVMT mailing list.",
        email: verifiedEntry.email 
      });
    } catch (error) {
      res.status(500).json({ error: "Verification failed" });
    }
  });

  // Check subscription status endpoint
  app.get("/api/mailing-list/status/:email", async (req, res) => {
    try {
      const { email } = req.params;
      const entry = await storage.getMailingListEntry(email);
      
      if (!entry) {
        return res.json({ subscribed: false, verified: false });
      }
      
      res.json({ 
        subscribed: true, 
        verified: entry.verified,
        subscribedAt: entry.subscribedAt,
        verifiedAt: entry.verifiedAt
      });
    } catch (error) {
      res.status(500).json({ error: "Failed to check status" });
    }
  });

  // Get all verified subscribers (admin endpoint)
  app.get("/api/mailing-list/subscribers", async (req, res) => {
    try {
      const subscribers = await storage.getVerifiedSubscribers();
      res.json({
        count: subscribers.length,
        subscribers: subscribers.map(sub => ({
          email: sub.email,
          subscribedAt: sub.subscribedAt,
          verifiedAt: sub.verifiedAt
        }))
      });
    } catch (error) {
      res.status(500).json({ error: "Failed to get subscribers" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
