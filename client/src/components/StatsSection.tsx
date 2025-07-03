export default function StatsSection() {
  const stats = [
    {
      number: "250+",
      label: "Participants",
      subtitle: "Last Year",
      color: "text-wolverine-blue"
    },
    {
      number: "40+",
      label: "Schools",
      subtitle: "San Diego Area",
      color: "text-math-purple"
    },
    {
      number: "3-8",
      label: "Grade Levels",
      subtitle: "Elementary & Middle",
      color: "text-wolverine-gold"
    },
    {
      number: "$15",
      label: "Entry Fee",
      subtitle: "Includes Lunch!",
      color: "text-math-orange"
    }
  ];

  return (
    <section className="bg-math-green pattern-overlay py-16">
      <div className="content-layer max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <div className={`text-4xl font-display ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-600 font-semibold">{stat.label}</div>
              <div className="text-sm text-gray-500 mt-2">{stat.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
