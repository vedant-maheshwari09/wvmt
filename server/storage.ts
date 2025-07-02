import { users, type User, type InsertUser, type MailingListEntry, type InsertMailingList } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Mailing list operations
  addEmailToMailingList(email: string, verificationToken: string): Promise<MailingListEntry>;
  verifyEmail(token: string): Promise<MailingListEntry | undefined>;
  getMailingListEntry(email: string): Promise<MailingListEntry | undefined>;
  isEmailVerified(email: string): Promise<boolean>;
  getVerifiedSubscribers(): Promise<MailingListEntry[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private mailingList: Map<number, MailingListEntry>;
  private mailingListByEmail: Map<string, MailingListEntry>;
  private mailingListByToken: Map<string, MailingListEntry>;
  currentId: number;
  currentMailingId: number;

  constructor() {
    this.users = new Map();
    this.mailingList = new Map();
    this.mailingListByEmail = new Map();
    this.mailingListByToken = new Map();
    this.currentId = 1;
    this.currentMailingId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async addEmailToMailingList(email: string, verificationToken: string): Promise<MailingListEntry> {
    const id = this.currentMailingId++;
    const entry: MailingListEntry = {
      id,
      email,
      verified: false,
      verificationToken,
      subscribedAt: new Date(),
      verifiedAt: null,
    };
    
    this.mailingList.set(id, entry);
    this.mailingListByEmail.set(email, entry);
    this.mailingListByToken.set(verificationToken, entry);
    
    return entry;
  }

  async verifyEmail(token: string): Promise<MailingListEntry | undefined> {
    const entry = this.mailingListByToken.get(token);
    if (!entry || entry.verified) {
      return undefined;
    }

    const updatedEntry: MailingListEntry = {
      ...entry,
      verified: true,
      verifiedAt: new Date(),
      verificationToken: null,
    };

    this.mailingList.set(entry.id, updatedEntry);
    this.mailingListByEmail.set(entry.email, updatedEntry);
    this.mailingListByToken.delete(token);

    return updatedEntry;
  }

  async getMailingListEntry(email: string): Promise<MailingListEntry | undefined> {
    return this.mailingListByEmail.get(email);
  }

  async isEmailVerified(email: string): Promise<boolean> {
    const entry = this.mailingListByEmail.get(email);
    return entry?.verified || false;
  }

  async getVerifiedSubscribers(): Promise<MailingListEntry[]> {
    return Array.from(this.mailingList.values()).filter(entry => entry.verified);
  }
}

export const storage = new MemStorage();
