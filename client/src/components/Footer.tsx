import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-wolverine-blue text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Footer Logo */}
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-wolverine-gold rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-8 h-8 text-wolverine-blue">
                <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div>
              <h3 className="font-display text-2xl">Westview Math Tournament</h3>
              <p className="text-blue-200">May 17, 2025</p>
            </div>
          </div>
          
          <div className="border-t border-blue-700 pt-6">
            <p className="text-blue-200 mb-2">
              © 2025 Westview High School Math Club. All rights reserved.
            </p>
            <p className="text-sm text-blue-300">
              Questions? Email us at{" "}
              <a 
                href="mailto:wvmathclub@gmail.com" 
                className="text-wolverine-gold hover:text-yellow-300 inline-flex items-center"
              >
                <Mail className="mr-1 h-4 w-4" />
                wvmathclub@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
