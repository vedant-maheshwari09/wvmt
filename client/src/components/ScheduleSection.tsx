export default function ScheduleSection() {
  const scheduleItems = [
    {
      time: "9:30 - 10:15",
      title: "Registration",
      description: "Check-in, payment, and getting settled. Bring pencils/pens!",
      color: "bg-wolverine-blue"
    },
    {
      time: "10:15 - 10:30",
      title: "Welcome & Setup",
      description: "Opening announcements and moving to competition rooms",
      color: "bg-math-purple"
    },
    {
      time: "10:30 - 11:30",
      title: "Individual Round",
      description: "Individual competition testing personal mathematical skills",
      color: "bg-math-green"
    },
    {
      time: "11:30 - 11:45",
      title: "Break",
      description: "Short break between rounds",
      color: "bg-gray-500"
    },
    {
      time: "11:45 - 12:30",
      title: "Team Round",
      description: "Collaborative problem-solving with teammates",
      color: "bg-wolverine-gold"
    },
    {
      time: "12:30 - 1:30",
      title: "Lunch Break",
      description: "Pizza, chips, and water provided for all participants",
      color: "bg-math-orange"
    },
    {
      time: "1:45 - 2:45",
      title: "Buzzer Round",
      description: "Fast-paced elimination bracket - the exciting finale!",
      color: "bg-red-600"
    },
    {
      time: "2:45 - 3:00",
      title: "Break",
      description: "Preparation for awards ceremony",
      color: "bg-gray-500"
    },
    {
      time: "3:00 - 3:30",
      title: "Awards & Cleanup",
      description: "Celebrating our winners and wrapping up the day",
      color: "bg-wolverine-blue"
    }
  ];

  return (
    <section id="schedule" className="bg-pattern-cream pattern-overlay py-16">
      <div className="content-layer max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-center text-wolverine-blue mb-8 sm:mb-12">
          Tournament Schedule
        </h2>
        
        <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-3 sm:p-6 lg:p-8 shadow-xl">
          <div className="space-y-2 sm:space-y-4">
            {scheduleItems.map((item, index) => {
              const colorClass = item.color === 'bg-wolverine-gold' ? 'text-black' : 'text-white';
              const bgClass = item.color === 'bg-gray-500' ? 'bg-gray-100' : 
                           item.color === 'bg-wolverine-gold' ? 'bg-wolverine-gold/10' :
                           item.color === 'bg-wolverine-blue' ? 'bg-wolverine-blue/10' :
                           item.color === 'bg-math-purple' ? 'bg-math-purple/10' :
                           item.color === 'bg-math-green' ? 'bg-math-green/10' :
                           item.color === 'bg-math-orange' ? 'bg-math-orange/10' :
                           'bg-red-100';
              
              return (
                <div key={index} className={`flex flex-col sm:flex-row sm:items-start space-y-2 sm:space-y-0 sm:space-x-4 p-3 sm:p-4 ${bgClass} rounded-xl sm:rounded-2xl`}>
                  <div className={`${item.color} ${colorClass} px-2 py-1 sm:px-3 sm:py-2 rounded-lg sm:rounded-xl font-bold text-center text-xs sm:text-base sm:min-w-[140px] w-full sm:w-auto`}>
                    {item.time}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-bold text-sm sm:text-lg mb-1 sm:mb-2 ${
                      item.color === 'bg-wolverine-blue' ? 'text-wolverine-blue' :
                      item.color === 'bg-math-purple' ? 'text-math-purple' :
                      item.color === 'bg-math-green' ? 'text-math-green' :
                      item.color === 'bg-wolverine-gold' ? 'text-yellow-700' :
                      item.color === 'bg-math-orange' ? 'text-orange-700' :
                      item.color === 'bg-red-600' ? 'text-red-600' :
                      'text-gray-600'
                    }`}>
                      {item.title}
                    </h3>
                    <p className="text-gray-700 text-xs sm:text-base">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
