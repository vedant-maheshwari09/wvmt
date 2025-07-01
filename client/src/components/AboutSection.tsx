import { Calendar, MapPin, Trophy, Info } from "lucide-react";

export default function AboutSection() {
  const details = [
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "What & When",
      gradient: "from-wolverine-blue to-math-purple",
      items: [
        "Date: Saturday, May 17, 2025",
        "Time: 9:30 AM - 3:30 PM",
        "Style: MATHCOUNTS-style competition",
        "Divisions: Elementary (3rd-5th) & Middle School (6th-8th)"
      ]
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Location & Cost",
      gradient: "from-math-green to-emerald-600",
      items: [
        "Where: Westview High School G Building",
        "Cost: $15 per student",
        "Includes: All rounds + lunch",
        "Payment: Cash or check at check-in"
      ]
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Competition Rounds",
      gradient: "from-math-purple to-purple-700",
      items: [
        "Individual Round: Test your personal skills",
        "Team Round: Collaborate with teammates",
        "Buzzer Round: Fast-paced elimination bracket",
        "Prizes: Awards for top performers!"
      ]
    },
    {
      icon: <Info className="h-8 w-8" />,
      title: "Good to Know",
      gradient: "from-math-orange to-red-600",
      items: [
        "Lunch: Pizza, snacks, and drinks provided",
        "Bring: Pencils/pens (scratch paper provided)",
        "Questions: Written by experienced students",
        "Sponsor: Jane Street Capital"
      ]
    }
  ];

  return (
    <section id="about" className="bg-white pattern-overlay py-16">
      <div className="content-layer max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl md:text-5xl text-center text-wolverine-blue mb-12">
          Tournament Details
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {details.map((detail, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br ${detail.gradient} rounded-3xl p-8 text-white shadow-xl`}
            >
              <div className="flex items-center mb-6">
                <div className="text-3xl text-wolverine-gold mr-4">
                  {detail.icon}
                </div>
                <h3 className="font-display text-2xl">{detail.title}</h3>
              </div>
              <ul className="space-y-3 text-lg">
                {detail.items.map((item, itemIndex) => {
                  const [label, ...rest] = item.split(': ');
                  return (
                    <li key={itemIndex}>
                      <strong>{label}:</strong> {rest.join(': ')}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
