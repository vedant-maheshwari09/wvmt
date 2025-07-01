import { Users } from "lucide-react";

export default function WelcomeSection() {
  return (
    <section className="bg-pattern-cream pattern-overlay py-16">
      <div className="content-layer max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Welcome Card */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-wolverine-blue mb-6">
            Welcome to WMT 2025!
          </h2>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              The Wolverine Math Tournament is a fun, MATHCOUNTS-style math competition for elementary and middle school students organized by the Math Club at Westview High School. Join us for a day of mathematical challenges, friendly competition, and exciting prizes!
            </p>
          </div>
        </div>
        
        {/* For Everyone Section */}
        <div className="bg-gradient-to-r from-wolverine-blue to-math-purple rounded-3xl p-8 text-center shadow-xl">
          <div className="mb-6">
            <Users className="mx-auto h-16 w-16 text-wolverine-gold mb-4" />
            <h3 className="font-display text-3xl text-white mb-4">For Everyone</h3>
          </div>
          <p className="text-xl text-blue-100 leading-relaxed">
            All 3rd-8th graders from around San Diego are invited to participate and showcase their mathematical skills!
          </p>
        </div>
      </div>
    </section>
  );
}
