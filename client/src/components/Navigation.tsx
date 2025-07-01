import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-wolverine-blue grid-pattern shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-wolverine-gold rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-wolverine-blue">
                <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div className="text-white">
              <h1 className="font-display text-lg">WMT</h1>
              <p className="text-xs text-blue-200">2025</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-wolverine-gold transition-colors duration-200 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-blue-200 hover:text-white transition-colors duration-200"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('schedule')}
              className="text-blue-200 hover:text-white transition-colors duration-200"
            >
              Schedule
            </button>
            <button 
              onClick={() => scrollToSection('registration')}
              className="text-blue-200 hover:text-white transition-colors duration-200"
            >
              Registration
            </button>
            <button 
              onClick={() => scrollToSection('photos')}
              className="text-blue-200 hover:text-white transition-colors duration-200"
            >
              Photos
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-blue-200 hover:text-white transition-colors duration-200"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-wolverine-gold"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-wolverine-blue border-t border-blue-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 text-white hover:text-wolverine-gold transition-colors duration-200"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-blue-200 hover:text-white transition-colors duration-200"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('schedule')}
                className="block w-full text-left px-3 py-2 text-blue-200 hover:text-white transition-colors duration-200"
              >
                Schedule
              </button>
              <button 
                onClick={() => scrollToSection('registration')}
                className="block w-full text-left px-3 py-2 text-blue-200 hover:text-white transition-colors duration-200"
              >
                Registration
              </button>
              <button 
                onClick={() => scrollToSection('photos')}
                className="block w-full text-left px-3 py-2 text-blue-200 hover:text-white transition-colors duration-200"
              >
                Photos
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-blue-200 hover:text-white transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
