import outdoorPhoto from "@assets/Screenshot 2025-06-29 010915_1751189560254.png";
import classroomPhoto from "@assets/Screenshot 2025-06-29 010800_1751189560255.png";

export default function PhotoSection() {
  return (
    <section id="photos" className="bg-pattern-cream pattern-overlay py-16">
      <div className="content-layer max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl md:text-5xl text-center text-wolverine-blue mb-12">
          Tournament Experience
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-3xl p-6 shadow-xl">
            <img 
              src={outdoorPhoto} 
              alt="Tournament participants outdoors" 
              className="w-full h-80 object-cover rounded-2xl mb-4"
            />
            <h3 className="font-display text-2xl text-wolverine-blue mb-2">Amazing Turnout</h3>
            <p className="text-gray-700">
              Over 250 students from across San Diego joined us for an incredible day of mathematical competition and fun!
            </p>
          </div>
          
          <div className="bg-white rounded-3xl p-6 shadow-xl">
            <img 
              src={classroomPhoto} 
              alt="Students competing in classroom" 
              className="w-full h-80 object-cover rounded-2xl mb-4"
            />
            <h3 className="font-display text-2xl text-wolverine-blue mb-2">Focused Competition</h3>
            <p className="text-gray-700">
              Students showcase their problem-solving skills in our carefully designed Individual, Team, and Buzzer rounds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
