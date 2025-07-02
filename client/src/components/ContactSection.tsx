import { Mail, MapPin, Users } from "lucide-react";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email Us",
      content: "wvmathclub@gmail.com",
      color: "bg-math-orange",
      link: "mailto:wvmathclub@gmail.com"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Location",
      content: "Westview High School\nG Building\nSan Diego, CA",
      color: "bg-wolverine-blue"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Organized By",
      content: "Westview High School\nMath Club",
      color: "bg-math-green"
    }
  ];

  return (
    <section id="contact" className="bg-pattern-cream pattern-overlay py-16">
      <div className="content-layer max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl md:text-5xl text-center text-wolverine-blue mb-12">
          Get In Touch
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg">
              <div className={`${info.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                <div className="text-white text-2xl">
                  {info.icon}
                </div>
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">{info.title}</h3>
              {info.link ? (
                <a 
                  href={info.link} 
                  className="text-math-orange hover:text-orange-600 font-semibold"
                >
                  {info.content}
                </a>
              ) : (
                <p className="text-gray-600 whitespace-pre-line">
                  {info.content}
                </p>
              )}
            </div>
          ))}
        </div>
        
        {/* Sponsor Section */}
        <div className="mt-16 text-center">
          <h3 className="font-display text-2xl text-wolverine-blue mb-6">
            Proudly Sponsored By
          </h3>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg inline-block">
            <p className="text-xl font-semibold text-gray-800">Jane Street Capital</p>
          </div>
        </div>
      </div>
    </section>
  );
}
