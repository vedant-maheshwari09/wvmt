import { useState, useEffect, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ExternalLink, Calendar, MapPin, Users, Trophy, Mail, FileText, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Import tournament assets
import outdoorPhoto from "@assets/Screenshot 2025-06-29 010915_1751331559852.png";
import classroomPhoto from "@assets/Screenshot 2025-06-29 010800_1751331593796.png";
import wolverineClaw from "@assets/westview-claw-011_1751331638152.png";
import wolverineHead from "@assets/Westview-Wolverine_1751331638152.png";
import janeStreetLogo from "@assets/jane_street.BK-zXjbl_1751331638151.avif";
import campusMap from "@assets/image_1751196156393.png";

// Tournament archive materials - using properly encoded paths for PDF serving (includes solutions)
const msIndividualRound = "/assets/" + encodeURIComponent("WVMT_MS_2025__Individual_Round (2)_1751332512191.pdf");
const msTeamRound = "/assets/" + encodeURIComponent("WVMT_MS_2025__Team_Round (2)_1751332512190.pdf");
const esIndividualRound = "/assets/" + encodeURIComponent("WVMT_ES_2025__Individual_Round (3)_1751332512192.pdf");
const esTeamRound = "/assets/" + encodeURIComponent("WVMT_ES_2025__Team_Round (2)_1751332512192.pdf");

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");
  const [isDark, setIsDark] = useState(false);
  const { toast } = useToast();
  const tabsListRef = useRef<HTMLDivElement>(null);

  // Only reset scroll on page load to show Home tab
  useEffect(() => {
    if (tabsListRef.current) {
      tabsListRef.current.scrollLeft = 0;
    }
  }, []);

  const stats = [
    { number: "250+", label: "Participants", subtitle: "Last Year", color: "text-blue-600" },
    { number: "40+", label: "Schools", subtitle: "San Diego Area", color: "text-purple-600" },
    { number: "1-8", label: "Grade Levels", subtitle: "Elementary & Middle", color: "text-amber-600" },
    { number: "$15", label: "Entry Fee", subtitle: "Includes Lunch!", color: "text-orange-600" }
  ];

  const scheduleItems = [
    { startTime: "9:30", endTime: "10:15", title: "Registration", description: "Check in students, pay registration fees, bring pencils/pens (scratch paper provided)", color: "bg-blue-500" },
    { startTime: "10:15", endTime: "10:30", title: "Welcome Announcement", description: "Opening announcements and enter classrooms", color: "bg-purple-500" },
    { startTime: "10:30", endTime: "11:30", title: "Individual Round", description: "Test personal mathematical skills and problem-solving", color: "bg-green-500" },
    { startTime: "11:30", endTime: "11:45", title: "Break", description: "Parents/coaches please stay out of competition rooms during rounds", color: "bg-gray-400" },
    { startTime: "11:45", endTime: "12:30", title: "Team Round", description: "Collaborative problem-solving with your team", color: "bg-amber-500" },
    { startTime: "12:30", endTime: "1:30", title: "Lunch", description: "Pizza, chips, and water provided for all participants", color: "bg-orange-500" },
    { startTime: "1:45", endTime: "2:45", title: "Buzzer Round", description: "Fast-paced elimination bracket where teams compete head-to-head", color: "bg-red-500" },
    { startTime: "2:45", endTime: "3:00", title: "Break", description: "Preparation for awards ceremony", color: "bg-gray-400" },
    { startTime: "3:00", endTime: "3:30", title: "Awards Ceremony and Cleanup", description: "Celebrating our winners and tournament wrap-up", color: "bg-blue-500" }
  ];



  return (
    <div className={`min-h-screen relative overflow-hidden transition-all duration-1000 ${
      isDark 
        ? 'bg-black' 
        : 'bg-gradient-to-br from-gray-50 via-slate-50 to-blue-50'
    }`}>
      {/* Theme Toggle */}
      <button 
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-6 right-6 z-50 p-3 rounded-2xl backdrop-blur-xl border transition-all duration-300 hover:scale-110 ${
          isDark 
            ? 'bg-white/10 border-white/20 text-white hover:bg-white/20' 
            : 'bg-white/80 border-gray-200 text-gray-800 hover:bg-white shadow-lg'
        }`}
      >
        {isDark ? '☀️' : '🌙'}
      </button>

      {/* Animated gradient background */}
      <div className="fixed inset-0 z-0">
        {isDark ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-slate-700/30 via-blue-700/25 to-teal-700/30"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(34,197,94,0.15),rgba(255,255,255,0))]"></div>
            <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/12 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-400/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
          </>
        ) : (
          <>
            <div className="absolute inset-0" style={{ backgroundColor: 'hsl(195, 40%, 85%)' }}></div>
          </>
        )}
      </div>

      {/* Floating mathematical elements - evenly spaced */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Top row - evenly distributed */}
        <div className="absolute top-[8%] left-[15%] text-6xl animate-float-slow" style={{ fontFamily: 'serif', color: '#FF0000' }}>π</div>
        <div className="absolute top-[12%] left-[35%] text-5xl animate-float" style={{ fontFamily: 'serif', color: '#FF8000' }}>∑</div>
        <div className="absolute top-[6%] left-[55%] text-5xl animate-float-slow" style={{ fontFamily: 'serif', color: '#FFFF00' }}>√</div>
        <div className="absolute top-[10%] left-[75%] text-5xl animate-float" style={{ fontFamily: 'serif', color: '#00FF00' }}>∞</div>
        <div className="absolute top-[14%] left-[85%] text-5xl animate-float-slow" style={{ fontFamily: 'serif', color: '#0080FF' }}>∫</div>
        <div className="absolute top-[4%] left-[5%] text-5xl animate-float" style={{ fontFamily: 'serif', color: '#4000FF' }}>∏</div>
        <div className="absolute top-[16%] left-[95%] text-5xl animate-float-slow" style={{ fontFamily: 'serif', color: '#8000FF' }}>∀</div>
        
        {/* Additional symbols around title region */}
        <div className="absolute top-[22%] left-[30%] text-5xl animate-float" style={{ fontFamily: 'serif', color: '#FF20A0', textShadow: '0 0 8px rgba(255, 32, 160, 0.6)' }}>Θ</div>
        <div className="absolute top-[20%] left-[70%] text-5xl animate-float-slow" style={{ fontFamily: 'serif', color: '#20FF60', textShadow: '0 0 8px rgba(32, 255, 96, 0.6)' }}>Σ</div>
        <div className="absolute top-[24%] left-[50%] text-5xl animate-float" style={{ fontFamily: 'serif', color: '#6020FF', textShadow: '0 0 8px rgba(96, 32, 255, 0.6)' }}>Ω</div>
        <div className="absolute top-[21%] left-[15%] text-5xl animate-float-slow" style={{ fontFamily: 'serif', color: '#FF6020', textShadow: '0 0 8px rgba(255, 96, 32, 0.6)' }}>∆</div>
        <div className="absolute top-[19%] left-[40%] text-5xl animate-float" style={{ fontFamily: 'serif', color: '#60FF20', textShadow: '0 0 8px rgba(96, 255, 32, 0.6)' }}>Λ</div>
        <div className="absolute top-[23%] left-[80%] text-5xl animate-float-slow" style={{ fontFamily: 'serif', color: '#2060FF', textShadow: '0 0 8px rgba(32, 96, 255, 0.6)' }}>Φ</div>
        <div className="absolute top-[25%] left-[35%] text-5xl animate-float" style={{ fontFamily: 'serif', color: '#FF6060', textShadow: '0 0 8px rgba(255, 96, 96, 0.6)' }}>Ψ</div>
        <div className="absolute top-[18%] left-[60%] text-5xl animate-float-slow" style={{ fontFamily: 'serif', color: '#60FFFF', textShadow: '0 0 8px rgba(96, 255, 255, 0.6)' }}>Γ</div>
        <div className="absolute top-[26%] left-[20%] text-5xl animate-float" style={{ fontFamily: 'serif', color: '#FFFF60', textShadow: '0 0 8px rgba(255, 255, 96, 0.6)' }}>Ξ</div>
        
        {/* Second row */}
        <div className="absolute top-[25%] left-[8%] text-5xl animate-float" style={{ fontFamily: 'serif', color: '#FF00FF' }}>θ</div>
        <div className="absolute top-[28%] left-[25%] text-5xl animate-float-slow" style={{ fontFamily: 'serif', color: '#FF0080' }}>λ</div>
        <div className="absolute top-[22%] left-[45%] text-5xl animate-float" style={{ fontFamily: 'serif', color: '#8000FF' }}>α</div>
        <div className="absolute top-[26%] left-[65%] text-5xl animate-float-slow" style={{ fontFamily: 'serif', color: '#FF8080' }}>β</div>
        <div className="absolute top-[30%] left-[85%] text-5xl animate-float" style={{ fontFamily: 'serif', color: '#00FFFF' }}>γ</div>
        <div className="absolute top-[20%] left-[2%] text-5xl animate-float-slow" style={{ fontFamily: 'serif', color: '#00FF80' }}>∃</div>
        <div className="absolute top-[32%] left-[98%] text-5xl animate-float" style={{ fontFamily: 'serif', color: '#80FFFF' }}>≡</div>
        
        {/* Third row */}
        <div className="absolute top-[42%] left-[12%] text-5xl animate-float-slow" style={{ fontFamily: 'serif', color: '#80FF00' }}>δ</div>
        <div className="absolute top-[38%] left-[30%] text-5xl animate-float" style={{ fontFamily: 'serif', color: '#00FF40' }}>ε</div>
        <div className="absolute top-[40%] left-[50%] text-5xl animate-float-slow" style={{ fontFamily: 'serif', color: '#FFFF80' }}>ζ</div>
        <div className="absolute top-[44%] left-[70%] text-5xl animate-float" style={{ fontFamily: 'serif', color: '#FF4000' }}>η</div>
        <div className="absolute top-[36%] left-[88%] text-5xl animate-float-slow" style={{ fontFamily: 'serif', color: '#FFA000' }}>μ</div>
        <div className="absolute top-[46%] left-[3%] text-5xl animate-float" style={{ fontFamily: 'serif', color: '#FFFF40' }}>≈</div>
        <div className="absolute top-[34%] left-[93%] text-5xl animate-float-slow" style={{ fontFamily: 'serif', color: '#40FF40' }}>≥</div>
        
        {/* Fourth row */}
        <div className="absolute top-[58%] left-[5%] text-5xl animate-float" style={{ fontFamily: 'serif', color: '#4080FF' }}>ν</div>
        <div className="absolute top-[55%] left-[22%] text-5xl animate-float-slow" style={{ fontFamily: 'serif', color: '#6040FF' }}>ξ</div>
        <div className="absolute top-[60%] left-[40%] text-5xl animate-float" style={{ fontFamily: 'serif', color: '#C040FF' }}>ρ</div>
        <div className="absolute top-[52%] left-[58%] text-5xl animate-float-slow" style={{ fontFamily: 'serif', color: '#FF40C0' }}>σ</div>
        <div className="absolute top-[56%] left-[78%] text-5xl animate-float" style={{ fontFamily: 'serif', color: '#FF4080' }}>τ</div>
        <div className="absolute top-[62%] left-[92%] text-5xl animate-float-slow" style={{ fontFamily: 'serif', color: '#C080FF' }}>φ</div>
        <div className="absolute top-[50%] left-[1%] text-5xl animate-float" style={{ fontFamily: 'serif', color: '#FF80FF' }}>⊕</div>
        <div className="absolute top-[64%] left-[95%] text-5xl animate-float-slow" style={{ fontFamily: 'serif', color: '#80FFFF' }}>⊗</div>
        
        {/* Fifth row */}
        <div className="absolute top-[72%] left-[10%] text-5xl animate-float-slow" style={{ fontFamily: 'serif', color: '#40FFFF' }}>χ</div>
        <div className="absolute top-[68%] left-[28%] text-5xl animate-float" style={{ fontFamily: 'serif', color: '#80C0FF' }}>ψ</div>
        <div className="absolute top-[70%] left-[48%] text-5xl animate-float-slow" style={{ fontFamily: 'serif', color: '#80FF40' }}>ω</div>
        <div className="absolute top-[74%] left-[68%] text-5xl animate-float" style={{ fontFamily: 'serif', color: '#40FF80' }}>Δ</div>
        <div className="absolute top-[66%] left-[86%] text-5xl animate-float-slow" style={{ fontFamily: 'serif', color: '#FFC040' }}>Φ</div>
        <div className="absolute top-[76%] left-[5%] text-5xl animate-float" style={{ fontFamily: 'serif', color: '#FF6060' }}>⊥</div>
        <div className="absolute top-[64%] left-[90%] text-5xl animate-float-slow" style={{ fontFamily: 'serif', color: '#FFA060' }}>⊂</div>
        
        {/* Sixth row */}
        <div className="absolute top-[82%] left-[15%] text-5xl animate-float" style={{ fontFamily: 'serif', color: '#FFFF60' }}>⊃</div>
        <div className="absolute top-[80%] left-[35%] text-5xl animate-float-slow" style={{ fontFamily: 'serif', color: '#60FF60' }}>⊆</div>
        <div className="absolute top-[84%] left-[55%] text-5xl animate-float" style={{ fontFamily: 'serif', color: '#6060FF' }}>⊇</div>
        <div className="absolute top-[78%] left-[75%] text-5xl animate-float-slow" style={{ fontFamily: 'serif', color: '#8060FF' }}>⊤</div>
        <div className="absolute top-[86%] left-[95%] text-5xl animate-float" style={{ fontFamily: 'serif', color: '#FF60FF' }}>∪</div>
        
        {/* Bottom row */}
        <div className="absolute bottom-[12%] left-[18%] text-5xl animate-float" style={{ fontFamily: 'serif', color: '#FF60C0' }}>Ψ</div>
        <div className="absolute bottom-[8%] left-[38%] text-5xl animate-float-slow" style={{ fontFamily: 'serif', color: '#FF6080' }}>Ω</div>
        <div className="absolute bottom-[10%] left-[58%] text-5xl animate-float" style={{ fontFamily: 'serif', color: '#C060FF' }}>∂</div>
        <div className="absolute bottom-[14%] left-[78%] text-5xl animate-float-slow" style={{ fontFamily: 'serif', color: '#FF80C0' }}>∇</div>
        <div className="absolute bottom-[6%] left-[8%] text-5xl animate-float" style={{ fontFamily: 'serif', color: '#60FFFF' }}>∩</div>
        <div className="absolute bottom-[16%] left-[88%] text-5xl animate-float-slow" style={{ fontFamily: 'serif', color: '#60FFC0' }}>∈</div>
        <div className="absolute bottom-[4%] left-[68%] text-5xl animate-float" style={{ fontFamily: 'serif', color: '#80C0FF' }}>∉</div>
      </div>

      {/* Header */}
      <div className="relative z-20 pt-4 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <img src={wolverineClaw} alt="Westview Logo" className="h-14 w-auto drop-shadow-2xl hover:scale-110 transition-transform duration-300" />
              
              {/* Jane Street Logo */}
              <img src={janeStreetLogo} alt="Jane Street" className="h-8 w-auto drop-shadow-2xl hover:scale-110 transition-transform duration-300" />
              
              <img src={wolverineHead} alt="Westview Wolverine" className="h-14 w-auto drop-shadow-2xl hover:scale-110 transition-transform duration-300" />
            </div>
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-wide leading-snug text-center ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent drop-shadow-lg" style={{ fontFamily: 'Fredoka One, cursive' }}>
                Wolverine
              </div>
              <div className={`${isDark ? 'text-white' : 'text-gray-900'} mt-1 drop-shadow-lg`} style={{ fontFamily: 'Fredoka One, cursive' }}>Math Tournament</div>
            </h1>
            <div className={`backdrop-blur-lg rounded-2xl px-8 py-5 inline-block border ${
              isDark 
                ? 'bg-white/10 border-white/20 animate-pulse-glow' 
                : 'bg-gradient-to-r from-purple-100 via-blue-200 via-cyan-200 to-yellow-50 border-gray-200 shadow-xl'
            }`}>
              <p className={`text-2xl sm:text-3xl font-bold mb-1 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`} style={{ fontFamily: 'Playfair Display, serif' }}>May 17, 2025</p>
              <p className={`text-lg sm:text-xl ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>9:30 AM - 3:30 PM • Westview High School</p>
            </div>
          </div>
        </div>
        

      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-2 sm:px-4 pb-20">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className={`mb-3 backdrop-blur-xl border rounded-xl px-1 pt-2 pb-4 md:p-0 ${
            isDark 
              ? 'bg-gray-800 border-gray-600' 
              : 'bg-white/80 border-gray-200 shadow-lg'
          }`}>
            <TabsList ref={tabsListRef} className={`w-full !bg-transparent p-0`}>
              <div className="flex flex-col gap-0 md:grid md:grid-cols-7 md:gap-0.5">
                {/* Top row on mobile: Home, About, Schedule, Registration */}
                <div className="grid grid-cols-4 gap-2 md:contents">
                  {['home', 'about', 'schedule', 'registration'].map((tab) => (
                    <TabsTrigger 
                      key={tab}
                      value={tab} 
                      className={`
                        font-medium md:font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-yellow-500 data-[state=active]:text-white 
                        rounded-md transition-all py-2 px-2 md:px-3 text-[11px] sm:text-[14px] md:text-[14px] lg:text-[16px] text-center h-[36px] md:h-[40px] 
                        flex items-center justify-center whitespace-nowrap w-full
                        ${
                          isDark 
                            ? 'text-gray-200 bg-gray-700 hover:bg-gray-600 hover:text-white' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }
                      `}
                    >
                      <span className="leading-tight">
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </span>
                    </TabsTrigger>
                  ))}
                </div>
                {/* Bottom row on mobile: Logistics, Archive, Contact */}
                <div className="grid grid-cols-3 gap-2 md:contents">
                  {['logistics', 'archive', 'contact'].map((tab) => (
                    <TabsTrigger 
                      key={tab}
                      value={tab} 
                      className={`
                        font-medium md:font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-yellow-500 data-[state=active]:text-white 
                        rounded-md transition-all py-2 px-2 md:px-3 text-[11px] sm:text-[14px] md:text-[14px] lg:text-[16px] text-center h-[36px] md:h-[40px] 
                        flex items-center justify-center whitespace-nowrap w-full
                        ${
                          isDark 
                            ? 'text-gray-200 bg-gray-700 hover:bg-gray-600 hover:text-white' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }
                      `}
                    >
                      <span className="leading-tight">
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </span>
                    </TabsTrigger>
                  ))}
                </div>
              </div>
            </TabsList>
          </div>

          {/* Home Tab */}
          <TabsContent value="home" className="space-y-8">
            {/* Hero Section with glass morphism */}
            <div className={`backdrop-blur-xl border rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl hover:scale-[1.02] transition-all duration-500 ${
              isDark 
                ? 'bg-white/10 border-white/20' 
                : 'bg-white/80 border-gray-200'
            }`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div>
                  <h1 className={`text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-6 text-left ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`} style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Welcome to the Wolverine Math Tournament 2025!
                  </h1>
                  <h2 className={`text-xl sm:text-2xl lg:text-3xl font-black mb-6 leading-relaxed ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`} style={{ fontFamily: 'Orbitron, monospace' }}>
                    Learn Math. 
                    <br />
                    <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                      Solve Problems.
                    </span>
                    <br />
                    Build Connections.
                  </h2>
                  <p className={`text-lg sm:text-xl mb-6 leading-relaxed ${
                    isDark ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    The Wolverine Math Tournament is a fun, MATHCOUNTS-style math competition for elementary and middle school students, organized by Math Club at Westview High School. Join us for a day of mathematical challenges, friendly competition, and exciting prizes!
                  </p>
                  <div className={`bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl px-6 py-4 mb-6 border ${
                    isDark ? 'border-white/10' : 'border-emerald-200'
                  }`}>
                    <h3 className={`text-xl font-bold mb-4 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`} style={{ fontFamily: 'Orbitron, monospace' }}>For Everyone</h3>
                    <p className={`text-base mb-4 ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>All students from around San Diego are invited to participate and showcase their mathematical skills!</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className={`backdrop-blur-sm rounded-xl px-4 py-3 border ${
                        isDark ? 'bg-white/5 border-white/10' : 'bg-white/50 border-emerald-100'
                      }`}>
                        <h4 className={`font-bold text-sm ${
                          isDark ? 'text-emerald-300' : 'text-emerald-700'
                        }`}>Elementary School Division</h4>
                        <p className={`text-sm ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>3rd-5th graders</p>
                      </div>
                      <div className={`backdrop-blur-sm rounded-xl px-4 py-3 border ${
                        isDark ? 'bg-white/5 border-white/10' : 'bg-white/50 border-blue-100'
                      }`}>
                        <h4 className={`font-bold text-sm ${
                          isDark ? 'text-blue-300' : 'text-blue-700'
                        }`}>Middle School Division</h4>
                        <p className={`text-sm ${
                          isDark ? 'text-gray-400' : 'text-gray-600'
                        }`}>6th-8th graders</p>
                      </div>
                    </div>
                  </div>
                  <a href="https://tinyurl.com/wvmt2025" target="_blank" rel="noopener noreferrer" 
                     className={`bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-8 py-3 rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-block ${
                       isDark ? 'animate-pulse-glow' : ''
                     }`}>
                    Register Now →
                  </a>
                </div>

                {/* Mathematical Illustration for Home */}
                <div className="hidden lg:block">
                  <div className={`p-4 rounded-2xl border ${
                    isDark 
                      ? 'bg-black/20 border-emerald-500/30' 
                      : 'bg-gradient-to-br from-purple-100 via-blue-200 via-cyan-300 to-yellow-200 border-emerald-200'
                  }`}>
                    <svg viewBox="0 0 320 380" className="w-full h-auto max-w-xs mx-auto">
                      {/* Mathematical Books Stack */}
                      <rect x="40" y="280" width="50" height="70" fill="#10B981" rx="4" />
                      <rect x="100" y="270" width="50" height="80" fill="#3B82F6" rx="4" />
                      <rect x="160" y="275" width="50" height="75" fill="#8B5CF6" rx="4" />
                      <rect x="220" y="265" width="50" height="85" fill="#F59E0B" rx="4" />
                      
                      {/* Book Details */}
                      <line x1="40" y1="295" x2="90" y2="295" stroke="white" strokeWidth="1.5" />
                      <line x1="100" y1="285" x2="150" y2="285" stroke="white" strokeWidth="1.5" />
                      <line x1="160" y1="290" x2="210" y2="290" stroke="white" strokeWidth="1.5" />
                      <line x1="220" y1="280" x2="270" y2="280" stroke="white" strokeWidth="1.5" />
                      
                      {/* Pencils */}
                      <rect x="80" y="180" width="6" height="70" fill="#F59E0B" rx="3" />
                      <rect x="80" y="180" width="6" height="12" fill="#F87171" rx="3" />
                      <polygon points="80,175 86,175 83,168" fill="#F87171" />
                      
                      <rect x="200" y="160" width="6" height="70" fill="#3B82F6" rx="3" />
                      <rect x="200" y="160" width="6" height="12" fill="#F87171" rx="3" />
                      <polygon points="200,155 206,155 203,148" fill="#F87171" />
                      
                      {/* Large 2025 */}
                      <text x="160" y="60" fill={isDark ? '#34D399' : '#10B981'} fontSize="36" fontWeight="bold" textAnchor="middle">2025</text>
                      
                      {/* Mathematical Symbols - arranged nicely */}
                      <text x="60" y="120" fill={isDark ? '#60A5FA' : '#3B82F6'} fontSize="28" fontWeight="bold">π</text>
                      <text x="260" y="110" fill={isDark ? '#A78BFA' : '#8B5CF6'} fontSize="24" fontWeight="bold">∑</text>
                      <text x="120" y="140" fill={isDark ? '#FCD34D' : '#F59E0B'} fontSize="20" fontWeight="bold">∫</text>
                      <text x="240" y="140" fill={isDark ? '#F87171' : '#EF4444'} fontSize="26" fontWeight="bold">√</text>
                      <text x="30" y="200" fill={isDark ? '#34D399' : '#10B981'} fontSize="18" fontWeight="bold">∞</text>
                      
                      {/* Fun Math Numbers */}
                      <text x="50" y="100" fill={isDark ? '#A78BFA' : '#8B5CF6'} fontSize="22" fontWeight="bold">x²</text>
                      <text x="280" y="180" fill={isDark ? '#60A5FA' : '#3B82F6'} fontSize="16" fontWeight="bold">3.14</text>
                      <text x="140" y="200" fill={isDark ? '#FCD34D' : '#F59E0B'} fontSize="20" fontWeight="bold">42</text>
                      <text x="270" y="220" fill={isDark ? '#F87171' : '#EF4444'} fontSize="18" fontWeight="bold">e</text>
                      
                      {/* Geometric Shapes */}
                      <circle cx="90" cy="30" r="12" fill="none" stroke={isDark ? '#F87171' : '#EF4444'} strokeWidth="2.5" />
                      <polygon points="230,25 242,42 218,42" fill={isDark ? '#34D399' : '#10B981'} />
                      <rect x="20" y="15" width="20" height="20" fill="none" stroke={isDark ? '#60A5FA' : '#3B82F6'} strokeWidth="2.5" />
                      
                      {/* Calculator */}
                      <rect x="250" y="240" width="50" height="35" fill={isDark ? '#374151' : '#6B7280'} rx="4" />
                      <rect x="253" y="243" width="44" height="8" fill={isDark ? '#1F2937' : '#374151'} rx="2" />
                      <circle cx="258" cy="260" r="2" fill={isDark ? '#9CA3AF' : '#D1D5DB'} />
                      <circle cx="267" cy="260" r="2" fill={isDark ? '#9CA3AF' : '#D1D5DB'} />
                      <circle cx="276" cy="260" r="2" fill={isDark ? '#9CA3AF' : '#D1D5DB'} />
                      <circle cx="285" cy="260" r="2" fill={isDark ? '#9CA3AF' : '#D1D5DB'} />
                      <circle cx="258" cy="268" r="2" fill={isDark ? '#9CA3AF' : '#D1D5DB'} />
                      <circle cx="267" cy="268" r="2" fill={isDark ? '#9CA3AF' : '#D1D5DB'} />
                      <circle cx="276" cy="268" r="2" fill={isDark ? '#9CA3AF' : '#D1D5DB'} />
                      <circle cx="285" cy="268" r="2" fill={isDark ? '#9CA3AF' : '#D1D5DB'} />
                      
                      {/* Floating Sparkles */}
                      <g fill={isDark ? '#FCD34D' : '#F59E0B'}>
                        <circle cx="100" cy="80" r="1.5" />
                        <circle cx="290" cy="70" r="1.5" />
                        <circle cx="40" cy="160" r="1.5" />
                        <circle cx="180" cy="120" r="1.5" />
                        <circle cx="220" cy="200" r="1.5" />
                        <circle cx="150" cy="240" r="1.5" />
                      </g>
                      
                      {/* Math Equation */}
                      <text x="160" y="100" fill={isDark ? '#A78BFA' : '#8B5CF6'} fontSize="14" fontWeight="bold" textAnchor="middle">a² + b² = c²</text>
                    </svg>
                  </div>
                </div>

              </div>
            </div>

            {/* Stats with glass morphism */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className={`backdrop-blur-xl border rounded-2xl p-6 text-center shadow-xl hover:scale-105 transition-transform duration-300 ${
                isDark ? 'bg-white/10 border-white/20' : 'bg-white/80 border-gray-200'
              }`}>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent" style={{ fontFamily: 'Outfit, sans-serif' }}>250+</div>
                <div className={`text-base sm:text-lg font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Annual competitors</div>
              </div>
              <div className={`backdrop-blur-xl border rounded-2xl p-6 text-center shadow-xl hover:scale-105 transition-transform duration-300 ${
                isDark ? 'bg-white/10 border-white/20' : 'bg-white/80 border-gray-200'
              }`}>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black mb-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent" style={{ fontFamily: 'Outfit, sans-serif' }}>6th</div>
                <div className={`text-base sm:text-lg font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Year of WVMT</div>
              </div>
              <div className={`backdrop-blur-xl border rounded-2xl p-6 text-center shadow-xl hover:scale-105 transition-transform duration-300 ${
                isDark ? 'bg-white/10 border-white/20' : 'bg-white/80 border-gray-200'
              }`}>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black mb-3 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent" style={{ fontFamily: 'Outfit, sans-serif' }}>40+</div>
                <div className={`text-base sm:text-lg font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Participating schools</div>
              </div>
              <div className={`backdrop-blur-xl border rounded-2xl p-6 text-center shadow-xl hover:scale-105 transition-transform duration-300 ${
                isDark ? 'bg-white/10 border-white/20' : 'bg-white/80 border-gray-200'
              }`}>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black mb-3 bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent" style={{ fontFamily: 'Outfit, sans-serif' }}>$15</div>
                <div className={`text-base sm:text-lg font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Entry fee (includes lunch)</div>
              </div>
            </div>

            {/* Tournament Details */}
            <div className={`backdrop-blur-xl border rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl ${
              isDark ? 'bg-white/10 border-white/20' : 'bg-white/80 border-gray-200'
            }`}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-black mb-3 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`} style={{ fontFamily: 'Outfit, sans-serif' }}>Time</h3>
                  <p className={`text-lg sm:text-xl lg:text-2xl font-bold ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>9:30 AM–3:30 PM</p>
                </div>
                <div>
                  <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-black mb-3 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`} style={{ fontFamily: 'Outfit, sans-serif' }}>Date</h3>
                  <p className={`text-lg sm:text-xl lg:text-2xl font-bold ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>May 17, 2025</p>
                </div>
                <div>
                  <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-black mb-3 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`} style={{ fontFamily: 'Outfit, sans-serif' }}>Location</h3>
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Westview High School</p>
                </div>
              </div>
            </div>

            {/* Tournament Photos with glassmorphism */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className={`backdrop-blur-xl border rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300 ${
                isDark ? 'bg-white/10 border-white/20' : 'bg-white/80 border-gray-200'
              }`}>
                <div className="relative">
                  <img src={outdoorPhoto} alt="Tournament Crowd" className="w-full h-48 sm:h-56 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className={`text-xl sm:text-2xl lg:text-3xl font-black mb-3 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`} style={{ fontFamily: 'Outfit, sans-serif' }}>Amazing Turnout</h3>
                  <p className={`text-base ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>Over 250 students from 40+ schools across San Diego joined us for an incredible day of mathematical competition!</p>
                </div>
              </div>
              
              <div className={`backdrop-blur-xl border rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300 ${
                isDark ? 'bg-white/10 border-white/20' : 'bg-white/80 border-gray-200'
              }`}>
                <div className="relative">
                  <img src={classroomPhoto} alt="Competition in Action" className="w-full h-48 sm:h-56 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className={`text-xl sm:text-2xl lg:text-3xl font-black mb-3 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`} style={{ fontFamily: 'Outfit, sans-serif' }}>Focused Competition</h3>
                  <p className={`text-base ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>Students showcase their problem-solving skills in Individual, Team, and exciting Buzzer rounds.</p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* About Tab */}
          <TabsContent value="about" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`backdrop-blur-xl border rounded-3xl p-8 shadow-xl ${
                isDark ? 'bg-white/10 border-white/20' : 'bg-white/80 border-gray-200'
              }`}>
                <Calendar className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className={`text-2xl font-bold mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`} style={{ fontFamily: 'Outfit, sans-serif' }}>What & When</h3>
                <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>Date:</strong> Saturday, May 17, 2025</li>
                  <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>Time:</strong> 9:30 AM - 3:30 PM</li>
                  <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>Style:</strong> MATHCOUNTS-style competition</li>
                  <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>Grades:</strong> 3rd-8th grade students</li>
                </ul>
              </div>

              <div className={`backdrop-blur-xl border rounded-3xl p-8 shadow-xl ${
                isDark ? 'bg-white/10 border-white/20' : 'bg-white/80 border-gray-200'
              }`}>
                <MapPin className="h-12 w-12 text-green-400 mb-4" />
                <h3 className={`text-2xl font-bold mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`} style={{ fontFamily: 'Outfit, sans-serif' }}>Location & Cost</h3>
                <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>Where:</strong> Westview High School G Building</li>
                  <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>Cost:</strong> $15 per student</li>
                  <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>Includes:</strong> All rounds + lunch</li>
                  <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>Payment:</strong> Cash or check at check-in</li>
                </ul>
              </div>

              <div className={`backdrop-blur-xl border rounded-3xl p-8 shadow-xl ${
                isDark ? 'bg-white/10 border-white/20' : 'bg-white/80 border-gray-200'
              }`}>
                <Trophy className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className={`text-2xl font-bold mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`} style={{ fontFamily: 'Outfit, sans-serif' }}>Competition Rounds</h3>
                <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>Individual:</strong> Test personal skills</li>
                  <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>Team:</strong> Collaborate with teammates</li>
                  <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>Buzzer:</strong> Fast elimination bracket</li>
                  <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>Prizes:</strong> Awards for top performers!</li>
                </ul>
              </div>

              <div className={`backdrop-blur-xl border rounded-3xl p-8 shadow-xl ${
                isDark ? 'bg-white/10 border-white/20' : 'bg-white/80 border-gray-200'
              }`}>
                <Users className="h-12 w-12 text-cyan-400 mb-4" />
                <h3 className={`text-2xl font-bold mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`} style={{ fontFamily: 'Outfit, sans-serif' }}>Good to Know</h3>
                <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>Lunch:</strong> Pizza, snacks, drinks provided</li>
                  <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>Bring:</strong> Pencils/pens (paper provided)</li>
                  <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>Questions:</strong> Written by experienced students</li>
                  <li><strong className={isDark ? 'text-white' : 'text-gray-900'}>Sponsor:</strong> Jane Street Capital</li>
                </ul>
              </div>
            </div>


          </TabsContent>

          {/* Schedule Tab */}
          <TabsContent value="schedule" className="space-y-8">
            <div className={`backdrop-blur-xl border rounded-3xl p-8 shadow-xl ${
              isDark ? 'bg-white/10 border-white/20' : 'bg-white/80 border-gray-200'
            }`}>
              <h2 className={`text-3xl font-bold text-center mb-8 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`} style={{ fontFamily: 'Outfit, sans-serif' }}>Tournament Schedule</h2>
              <div className="space-y-4">
                {scheduleItems.map((item, index) => {
                  return (
                    <div key={index} className={`flex items-center space-x-2 sm:space-x-4 p-3 sm:p-4 backdrop-blur-sm rounded-2xl border ${
                      isDark ? 'bg-white/5 border-white/10' : 'bg-gray-50/80 border-gray-200'
                    }`}>
                      <div className="flex-shrink-0">
                        <div className={`${item.color} text-white px-4 py-3 rounded-xl font-bold text-center text-sm min-w-[100px] sm:min-w-[140px]`}>
                          {/* Mobile: Two lines */}
                          <div className="sm:hidden leading-tight">
                            <div>{item.startTime} -</div>
                            <div>{item.endTime}</div>
                          </div>
                          {/* Desktop: Single line */}
                          <div className="hidden sm:block">
                            {item.startTime} - {item.endTime}
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className={`font-bold text-lg mb-2 break-normal ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>{item.title}</h3>
                        <p className={`break-normal ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </TabsContent>


          {/* Registration Tab */}
          <TabsContent value="registration" className="space-y-8">
            {/* Main Registration Section */}
            <div className={`backdrop-blur-xl border rounded-3xl p-6 sm:p-8 shadow-xl text-center ${
              isDark ? 'bg-white/10 border-white/20' : 'bg-white/80 border-gray-200'
            }`}>
              <h2 className={`text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`} style={{ fontFamily: 'Outfit, sans-serif' }}>Ready to Register?</h2>
              
              <div className="mb-6 sm:mb-8">
                <p className={`text-lg sm:text-xl mb-4 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>Registration is quick and easy! Click the link below to secure your spot.</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-4 sm:p-8 mb-8 border border-white/10">
                <Button asChild className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-bold py-4 sm:py-5 px-12 sm:px-20 rounded-2xl text-xl sm:text-2xl shadow-lg hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                  <a href="https://tinyurl.com/wvmt2025" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="text-lg sm:text-xl">Register Here</span>
                  </a>
                </Button>
              </div>
            </div>

            {/* Pricing Section */}
            <div className={`backdrop-blur-xl border rounded-3xl p-6 sm:p-8 shadow-xl ${
              isDark ? 'bg-white/10 border-white/20' : 'bg-white/80 border-gray-200'
            }`}>
              <div className="flex items-center justify-center mb-6">
                <h2 className={`text-2xl sm:text-3xl font-bold text-center ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`} style={{ fontFamily: 'Outfit, sans-serif' }}>Pricing</h2>
              </div>
              
              <div className="space-y-4 max-w-3xl mx-auto">
                <div className="flex items-start space-x-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-gray-300' : 'bg-gray-600'}`}></div>
                  <p className={`text-base sm:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    $15 per student (entry into Individual, Team, and Buzzer rounds)
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-gray-300' : 'bg-gray-600'}`}></div>
                  <p className={`text-base sm:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Registration fee covers lunch!
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-gray-300' : 'bg-gray-600'}`}></div>
                  <p className={`text-base sm:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Payment is due at check-in during the day of the tournament with cash or check
                  </p>
                </div>
              </div>
            </div>

            {/* More Info Section */}
            <div className={`backdrop-blur-xl border rounded-3xl p-6 sm:p-8 shadow-xl ${
              isDark ? 'bg-white/10 border-white/20' : 'bg-white/80 border-gray-200'
            }`}>
              <div className="flex items-center justify-center mb-6">
                <h2 className={`text-2xl sm:text-3xl font-bold text-center ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`} style={{ fontFamily: 'Outfit, sans-serif' }}>More Info</h2>
              </div>
              
              <div className="space-y-4 max-w-3xl mx-auto">
                <div className="flex items-start space-x-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-gray-300' : 'bg-gray-600'}`}></div>
                  <p className={`text-base sm:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Questions are written by Westview High School students with years of competition experience
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-gray-300' : 'bg-gray-600'}`}></div>
                  <p className={`text-base sm:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    There will be prizes!
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-gray-300' : 'bg-gray-600'}`}></div>
                  <p className={`text-base sm:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    Lunch (pizza, snacks, and drinks are provided)
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${isDark ? 'bg-gray-300' : 'bg-gray-600'}`}></div>
                  <div>
                    <p className={`text-base sm:text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Other questions?</p>
                    <div className="ml-4 mt-2">
                      <div className={`w-1.5 h-1.5 rounded-full inline-block mr-2 ${isDark ? 'bg-gray-400' : 'bg-gray-500'}`}></div>
                      <span className={`text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Email </span>
                      <a href="mailto:wvmathclub@gmail.com" className={`${isDark ? 'text-blue-300 hover:text-blue-200' : 'text-blue-600 hover:text-blue-700'} underline`}>
                        wvmathclub@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sample Questions Section */}
            <div className={`backdrop-blur-xl border rounded-3xl p-6 sm:p-8 shadow-xl text-center ${
              isDark ? 'bg-white/10 border-white/20' : 'bg-white/80 border-gray-200'
            }`}>
              <div className="flex items-center justify-center mb-6">
                <h2 className={`text-2xl sm:text-3xl font-bold text-center ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`} style={{ fontFamily: 'Outfit, sans-serif' }}>Sample Questions & Round Description</h2>
              </div>
              
              <div className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 mb-6 border border-white/10">
                <Button asChild className="bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-bold py-3 px-6 sm:px-8 rounded-xl text-base sm:text-lg shadow-lg hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                  <a href="https://tinyurl.com/wvmtsamplequestions" target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    <span className="text-sm sm:text-base">View Sample Questions</span>
                  </a>
                </Button>
              </div>
              
              <p className={`text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Check out example problems to get familiar with the tournament format and difficulty level.
              </p>
            </div>

            {/* Mailing List Section */}
            <div className={`backdrop-blur-xl border rounded-3xl p-8 shadow-xl text-center ${
              isDark ? 'bg-white/10 border-white/20' : 'bg-white/80 border-gray-200'
            }`}>
              <div className="flex items-center justify-center gap-3 mb-4">
                <Mail className={`h-8 w-8 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                <h2 className={`text-3xl font-bold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`} style={{ fontFamily: 'Outfit, sans-serif' }}>Stay Updated</h2>
              </div>
              <p className={`text-lg mb-8 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Join our mailing list for tournament updates and announcements
              </p>

              <div className={`backdrop-blur-xl border rounded-2xl p-6 ${
                isDark ? 'bg-black/30 border-emerald-500/30' : 'bg-white/60 border-emerald-200'
              }`}>
                <h3 className={`text-xl font-bold mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Get Tournament Updates</h3>
                <p className={`mb-6 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Stay informed about registration deadlines, practice materials, and tournament details.
                </p>
                
                <Button asChild className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-bold py-3 px-8 rounded-xl text-lg shadow-lg hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSe6W7IpVSSlQBkyHMyMSILMYZEb2J5elGFtKokM_tIlQWH6nQ/viewform?usp=header" target="_blank" rel="noopener noreferrer">
                    <Send className="mr-2 h-5 w-5" />
                    Join Mailing List
                  </a>
                </Button>
                
                <p className={`text-sm mt-4 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Opens Google Form in a new tab
                </p>
                
                <p className={`text-sm mt-2 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  We send 2-3 emails per year with tournament updates.<br />
                  To unsubscribe, contact us at wvmathclub@gmail.com
                </p>
              </div>
            </div>
          </TabsContent>

          {/* Logistics Tab */}
          <TabsContent value="logistics" className="space-y-8">
            <div className={`backdrop-blur-xl border rounded-3xl p-8 shadow-xl ${
              isDark ? 'bg-white/10 border-white/20' : 'bg-white/80 border-gray-200'
            }`}>
              <div className="text-center mb-8">
                <h2 className={`text-3xl font-bold mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`} style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Location & Logistics
                </h2>
                <p className={`text-lg ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Westview High School G Building
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Location Details */}
                <div className="space-y-6 flex flex-col justify-center">
                  <div className={`backdrop-blur-xl border rounded-2xl p-6 ${
                    isDark ? 'bg-white/10 border-white/20' : 'bg-white/80 border-gray-200'
                  }`}>
                    <h3 className={`text-xl font-bold mb-4 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`} style={{ fontFamily: 'Outfit, sans-serif' }}>Tournament Location</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className={`h-5 w-5 mt-1 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                        <div>
                          <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            Westview High School
                          </p>
                          <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            13500 Camino Del Sur<br />
                            San Diego, CA 92129
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Calendar className={`h-5 w-5 mt-1 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                        <div>
                          <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            May 17, 2025
                          </p>
                          <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            9:30 AM - 3:30 PM
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`backdrop-blur-xl border rounded-2xl p-6 ${
                    isDark ? 'bg-white/10 border-white/20' : 'bg-white/80 border-gray-200'
                  }`}>
                    <h3 className={`text-xl font-bold mb-4 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`} style={{ fontFamily: 'Outfit, sans-serif' }}>Parking & Arrival</h3>
                    <div className="space-y-2">
                      <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        • <strong>Parking:</strong> Available in school parking lots
                      </p>
                      <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        • <strong>Arrival:</strong> Please arrive by 9:30 AM for registration
                      </p>
                      <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        • <strong>Building:</strong> Head to G Building for check-in
                      </p>
                      <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        • <strong>What to bring:</strong> Pencils/pens (scratch paper provided)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Campus Map */}
                <div className="space-y-6">
                  <div className={`backdrop-blur-xl border rounded-2xl overflow-hidden ${
                    isDark ? 'bg-white/10 border-white/20' : 'bg-white/80 border-gray-200'
                  }`}>
                    <div className="p-6">
                      <h3 className={`text-xl font-bold mb-4 text-center ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`} style={{ fontFamily: 'Outfit, sans-serif' }}>Campus Map</h3>
                      <div className="relative">
                        <img 
                          src={campusMap} 
                          alt="Westview High School Campus Map showing G Building location for tournament registration and testing rooms" 
                          className="w-full h-auto rounded-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                      </div>
                      <p className={`text-sm mt-3 text-center ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <strong>G Building</strong> - Tournament registration and testing rooms<br />
                        Enter through the <strong>Main Entrance</strong> and proceed to G Building
                      </p>
                    </div>
                  </div>

                  <div className={`backdrop-blur-xl border rounded-2xl p-6 ${
                    isDark ? 'bg-white/10 border-white/20' : 'bg-white/80 border-gray-200'
                  }`}>
                    <h3 className={`text-xl font-bold mb-4 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`} style={{ fontFamily: 'Outfit, sans-serif' }}>Full Address</h3>
                    <div className="flex items-start gap-3">
                      <MapPin className={`h-5 w-5 mt-1 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                      <div>
                        <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          Westview High School
                        </p>
                        <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          13500 Camino Del Sur<br />
                          San Diego, CA 92129
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>



            </div>
          </TabsContent>

          {/* Photos Tab */}
          <TabsContent value="photos" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className={`backdrop-blur-xl border rounded-3xl overflow-hidden shadow-xl ${
                isDark ? 'bg-white/10 border-white/20' : 'bg-white/80 border-gray-200'
                }`}>
                  <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <MapPin className={`h-8 w-8 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                      <h2 className={`text-3xl font-bold ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`} style={{ fontFamily: 'Playfair Display, serif' }}>
                        Location & Logistics
                      </h2>
                    </div>
                    <p className={`text-lg ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Westview High School G Building
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Location Details */}
                    <div className="space-y-6">
                      <div className={`p-6 rounded-2xl border ${
                        isDark 
                          ? 'bg-black/30 border-emerald-500/30' 
                          : 'bg-white/60 border-emerald-200'
                      }`}>
                        <h3 className={`text-xl font-bold mb-4 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>Tournament Location</h3>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <MapPin className={`h-5 w-5 mt-1 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                            <div>
                              <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                Westview High School
                              </p>
                              <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                13500 Camino Del Sur<br />
                                San Diego, CA 92129
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Calendar className={`h-5 w-5 mt-1 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                            <div>
                              <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                May 17, 2025
                              </p>
                              <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                                9:30 AM - 3:30 PM
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className={`p-6 rounded-2xl border ${
                        isDark 
                          ? 'bg-black/30 border-blue-500/30' 
                          : 'bg-white/60 border-blue-200'
                      }`}>
                        <h3 className={`text-xl font-bold mb-4 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>Parking & Arrival</h3>
                        <div className="space-y-2">
                          <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            • <strong>Parking:</strong> Available in school parking lots
                          </p>
                          <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            • <strong>Arrival:</strong> Please arrive by 9:30 AM for registration
                          </p>
                          <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            • <strong>Building:</strong> Head to G Building for check-in
                          </p>
                          <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            • <strong>What to bring:</strong> Pencils/pens (scratch paper provided)
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Campus Map */}
                    <div className="space-y-6">
                      <div className={`rounded-2xl border overflow-hidden ${
                        isDark 
                          ? 'bg-black/30 border-gray-500/30' 
                          : 'bg-gray-50 border-gray-200'
                      }`}>
                        <div className="p-4">
                          <h4 className={`text-lg font-semibold mb-3 text-center ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}>Westview High School Campus Map</h4>
                          <div className="relative">
                            <img 
                              src={campusMap} 
                              alt="Westview High School Campus Map showing G Building location for tournament registration and testing rooms" 
                              className="w-full h-auto rounded-lg"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                          </div>
                          <p className={`text-sm mt-3 text-center ${
                            isDark ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            <strong>G Building</strong> - Tournament registration and testing rooms<br />
                            Enter through the <strong>Main Entrance</strong> and proceed to G Building
                          </p>
                        </div>
                      </div>

                      <div className={`p-6 rounded-2xl border ${
                        isDark 
                          ? 'bg-black/30 border-purple-500/30' 
                          : 'bg-white/60 border-purple-200'
                      }`}>
                        <h3 className={`text-xl font-bold mb-4 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>Address</h3>
                        <div className="flex items-start gap-3">
                          <MapPin className={`h-5 w-5 mt-1 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
                          <div>
                            <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                              Westview High School
                            </p>
                            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                              13500 Camino Del Sur<br />
                              San Diego, CA 92129
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mailing List Section */}
                  <div className="mt-12">
                    <div className="text-center mb-8">
                      <div className="flex items-center justify-center gap-3 mb-4">
                        <Mail className={`h-6 w-6 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                        <h3 className={`text-2xl font-bold ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`} style={{ fontFamily: 'Playfair Display, serif' }}>
                          Stay Updated
                        </h3>
                      </div>
                      <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        Join our mailing list for tournament updates and announcements
                      </p>
                    </div>

                    <div className="flex justify-center">
                      <Card className={`w-full max-w-md ${
                        isDark 
                          ? 'bg-black/50 border-emerald-500/30 backdrop-blur-sm' 
                          : 'bg-white/80 border-emerald-200 backdrop-blur-sm'
                      }`}>
                        <CardHeader className="text-center">
                          <CardTitle className={`text-xl ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}>
                            WVMT Mailing List
                          </CardTitle>
                          <CardDescription className={`${
                            isDark ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            We'll send 2-3 emails per year with tournament updates.
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="text-center">
                          <div className="space-y-4">
                            <p className={`text-sm ${
                              isDark ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                              Join our mailing list to receive tournament updates, announcements, and important information about the Westview Math Tournament.
                            </p>
                            
                            <Button 
                              asChild
                              className={`w-full ${
                                isDark 
                                  ? 'bg-emerald-600 hover:bg-emerald-700' 
                                  : 'bg-emerald-600 hover:bg-emerald-700'
                              } text-white`}
                            >
                              <a 
                                href="https://docs.google.com/forms/d/e/1FAIpQLSe6W7IpVSSlQBkyHMyMSILMYZEb2J5elGFtKokM_tIlQWH6nQ/viewform?usp=header"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Join Mailing List
                              </a>
                            </Button>
                            
                            <p className={`text-xs ${
                              isDark ? 'text-gray-400' : 'text-gray-500'
                            }`}>
                              Opens Google Form in a new tab
                            </p>
                          </div>
                          
                          <p className={`text-xs mt-6 text-center ${
                            isDark ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                            We send 2-3 emails per year with tournament updates.
                            <br />
                            To unsubscribe, contact us at{' '}
                            <a 
                              href="mailto:wvmathclub@gmail.com" 
                              className={`${isDark ? 'text-emerald-400' : 'text-emerald-600'} hover:underline`}
                            >
                              wvmathclub@gmail.com
                            </a>
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

              </div>
            </div>
          </TabsContent>

          {/* Photos Tab */}
          <TabsContent value="photos" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className={`backdrop-blur-xl border rounded-3xl overflow-hidden shadow-xl ${
                isDark ? 'bg-white/10 border-white/20' : 'bg-white/80 border-gray-200'
              }`}>
                <div className="relative">
                  <img src={outdoorPhoto} alt="Tournament participants outdoors" className="w-full h-80 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className={`text-2xl font-bold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`} style={{ fontFamily: 'Outfit, sans-serif' }}>Tournament Day Excitement</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Students and families gather for check-in as the excitement builds for a day of mathematical challenges and friendly competition.</p>
                </div>
              </div>
              
              <div className={`backdrop-blur-xl border rounded-3xl overflow-hidden shadow-xl ${
                isDark ? 'bg-white/10 border-white/20' : 'bg-white/80 border-gray-200'
              }`}>
                <div className="relative">
                  <img src={classroomPhoto} alt="Students competing in classroom" className="w-full h-80 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className={`text-2xl font-bold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`} style={{ fontFamily: 'Outfit, sans-serif' }}>Competition in Action</h3>
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Students demonstrate their mathematical prowess during the intense Individual and Team rounds, showcasing years of dedicated practice.</p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Archive Tab */}
          <TabsContent value="archive" className="space-y-8">
            <div className={`backdrop-blur-xl border rounded-3xl p-6 sm:p-8 shadow-2xl ${
              isDark 
                ? 'bg-white/10 border-white/20' 
                : 'bg-white/80 border-gray-200'
            }`}>
              <div className="text-center mb-8">
                <h2 className={`text-3xl font-bold mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`} style={{ fontFamily: 'Outfit, sans-serif' }}>
                  Tournament Archive
                </h2>
                <p className={`text-lg ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Official 2025 tournament materials and documents
                </p>
              </div>

              {/* Centered content layout */}
              <div className="max-w-4xl mx-auto">
                <div className="space-y-8">
                {/* Elementary School Materials */}
                <div className={`p-6 rounded-2xl border ${
                  isDark 
                    ? 'bg-black/30 border-blue-500/30' 
                    : 'bg-white/60 border-blue-200'
                }`}>
                  <h3 className={`text-xl font-bold mb-4 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>Elementary School</h3>
                  <div className="space-y-3">
                    <a 
                      href="https://drive.google.com/file/d/1KXQ_0JhD-4uat36r02qdA0n0Z_Febcqx/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 hover:underline transition-colors ${
                        isDark 
                          ? 'text-blue-300 hover:text-blue-200' 
                          : 'text-blue-600 hover:text-blue-800'
                      }`}
                    >
                      <FileText className={`h-4 w-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                      <span className="text-sm">
                        Individual Round (25 problems + solutions) - View PDF
                      </span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                    <a 
                      href="https://drive.google.com/file/d/1KYOu7d4AwXhE6qn700TlW65hzaoFEytj/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 hover:underline transition-colors ${
                        isDark 
                          ? 'text-blue-300 hover:text-blue-200' 
                          : 'text-blue-600 hover:text-blue-800'
                      }`}
                    >
                      <FileText className={`h-4 w-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                      <span className="text-sm">
                        Team Round (10 problems + solutions) - View PDF
                      </span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                {/* Middle School Materials */}
                <div className={`p-6 rounded-2xl border ${
                  isDark 
                    ? 'bg-black/30 border-purple-500/30' 
                    : 'bg-white/60 border-purple-200'
                }`}>
                  <h3 className={`text-xl font-bold mb-4 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>Middle School</h3>
                  <div className="space-y-3">
                    <a 
                      href="https://drive.google.com/file/d/1KTdgASKkJitt4ebsANY-XIUaqIEfk7yY/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 hover:underline transition-colors ${
                        isDark 
                          ? 'text-purple-300 hover:text-purple-200' 
                          : 'text-purple-600 hover:text-purple-800'
                      }`}
                    >
                      <FileText className={`h-4 w-4 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
                      <span className="text-sm">
                        Individual Round (25 problems + solutions) - View PDF
                      </span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                    <a 
                      href="https://drive.google.com/file/d/1KmbjIk_SPr9KYUs9dTuPnBIatia5Rabj/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 hover:underline transition-colors ${
                        isDark 
                          ? 'text-purple-300 hover:text-purple-200' 
                          : 'text-purple-600 hover:text-purple-800'
                      }`}
                    >
                      <FileText className={`h-4 w-4 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
                      <span className="text-sm">
                        Team Round (10 problems + solutions) - View PDF
                      </span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>



                {/* Contact for Materials */}
                <div className="text-center">
                  <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-2xl ${
                    isDark 
                      ? 'bg-black/30 border border-gray-500/30' 
                      : 'bg-gray-50 border border-gray-200'
                  }`}>
                    <Mail className={`h-5 w-5 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                    <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      For access to tournament materials, contact{' '}
                      <a 
                        href="mailto:wvmathclub@gmail.com" 
                        className={`font-semibold ${isDark ? 'text-emerald-400' : 'text-emerald-600'} hover:underline`}
                      >
                        wvmathclub@gmail.com
                      </a>
                    </span>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Contact Tab */}
          <TabsContent value="contact" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className={`backdrop-blur-xl border rounded-3xl p-6 text-center shadow-xl ${
                isDark ? 'bg-white/10 border-white/20' : 'bg-white/80 border-gray-200'
              }`}>
                <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className={`font-bold text-lg mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`} style={{ fontFamily: 'Outfit, sans-serif' }}>Email Us</h3>
                <a href="mailto:wvmathclub@gmail.com" className="text-orange-400 hover:text-orange-300 font-semibold">
                  wvmathclub@gmail.com
                </a>
              </div>
              
              <div className={`backdrop-blur-xl border rounded-3xl p-6 text-center shadow-xl ${
                isDark ? 'bg-white/10 border-white/20' : 'bg-white/80 border-gray-200'
              }`}>
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className={`font-bold text-lg mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`} style={{ fontFamily: 'Outfit, sans-serif' }}>Location</h3>
                <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Westview High School<br />G Building<br />San Diego, CA</p>
              </div>
              
              <div className={`backdrop-blur-xl border rounded-3xl p-6 text-center shadow-xl ${
                isDark ? 'bg-white/10 border-white/20' : 'bg-white/80 border-gray-200'
              }`}>
                <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className={`font-bold text-lg mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`} style={{ fontFamily: 'Outfit, sans-serif' }}>Organized By</h3>
                <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>Westview High School<br />Math Club</p>
              </div>
            </div>
            
            <div className={`backdrop-blur-xl border rounded-3xl p-8 shadow-xl text-center ${
              isDark ? 'bg-white/10 border-white/20' : 'bg-white/80 border-gray-200'
            }`}>
              <h3 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`} style={{ fontFamily: 'Outfit, sans-serif' }}>Proudly Sponsored By</h3>
              <p className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Jane Street Capital</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
