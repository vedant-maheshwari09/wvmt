import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Mail } from "lucide-react";

export default function RegistrationSection() {
  return (
    <section id="registration" className="bg-gradient-to-br from-wolverine-blue via-math-purple to-wolverine-blue pattern-overlay py-16">
      <div className="content-layer max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl">
          <h2 className="font-display text-4xl md:text-5xl text-wolverine-blue mb-8">
            Ready to Register?
          </h2>
          
          <div className="mb-8">
            <p className="text-xl text-gray-700 mb-4">
              Registration is quick and easy! Click the link below to secure your spot.
            </p>
            <p className="text-lg text-gray-600">
              Remember: Payment of $15 per student is due at check-in on tournament day (cash or check accepted).
            </p>
          </div>
          
          <div className="bg-wolverine-gold/10 rounded-2xl p-4 sm:p-6 mb-8">
            <h3 className="font-display text-xl sm:text-2xl text-wolverine-blue mb-4">Registration Link</h3>
            <Button
              asChild
              className="bg-math-orange hover:bg-orange-600 text-white font-bold py-3 px-4 sm:py-4 sm:px-8 rounded-2xl text-base sm:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto"
              size="lg"
            >
              <a href="https://tinyurl.com/wvmt2025" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <ExternalLink className="mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span className="text-center break-all sm:break-normal">Register at tinyurl.com/wvmt2025</span>
              </a>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-math-green/10 rounded-2xl p-6">
              <h4 className="font-bold text-lg text-math-green mb-3">Sample Questions</h4>
              <p className="text-gray-700 mb-3">Want to see what types of problems you'll encounter?</p>
              <a 
                href="https://tinyurl.com/wvmtrounddescription" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-math-green hover:text-green-700 font-semibold inline-flex items-center"
              >
                <FileText className="mr-2 h-4 w-4" />
                View Round Descriptions
              </a>
            </div>
            
            <div className="bg-wolverine-blue/10 rounded-2xl p-6">
              <h4 className="font-bold text-lg text-wolverine-blue mb-3">Questions?</h4>
              <p className="text-gray-700 mb-3">Need more information or have concerns?</p>
              <a 
                href="mailto:wvmathclub@gmail.com" 
                className="text-wolverine-blue hover:text-blue-800 font-semibold inline-flex items-center"
              >
                <Mail className="mr-2 h-4 w-4" />
                wvmathclub@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
