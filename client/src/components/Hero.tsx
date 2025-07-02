import { Button } from "@/components/ui/button";
import { Rocket, Info } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pattern-overlay bg-gradient-to-br from-wolverine-blue via-math-purple to-wolverine-blue diagonal-pattern">
      <div className="content-layer max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-white wolverine-shadow mb-8 leading-tight">
            WESTVIEW<br />
            <span className="text-wolverine-gold">MATH</span><br />
            TOURNAMENT
          </h1>

          {/* Hero Subtext */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 mb-12 max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl font-semibold text-wolverine-blue mb-4">
              Saturday, May 17, 2025
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              9:30 AM - 3:30 PM • Westview High School
            </p>
            <p className="text-xl text-gray-800 leading-relaxed">
              A fun, MATHCOUNTS-style math competition for elementary and middle school students organized by the Math Club at Westview High School. Join us for a day of mathematical challenges, friendly competition, and exciting prizes!
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              onClick={() => scrollToSection('registration')}
              className="bg-math-orange hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-2xl text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              size="lg"
            >
              <Rocket className="mr-2 h-5 w-5" />
              Register Now
            </Button>
            <Button
              onClick={() => scrollToSection('about')}
              variant="outline"
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-bold py-4 px-8 rounded-2xl text-xl transition-all duration-300 border-2 border-white/30"
              size="lg"
            >
              <Info className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
