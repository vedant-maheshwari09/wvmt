import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ExternalLink, Calendar, MapPin, Users, Trophy, Mail, FileText, Send, UserCheck, Megaphone, User, Coffee, UserPlus, Pizza, Zap, Award } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Import tournament assets
import outdoorPhoto from "@assets/Screenshot 2025-06-29 010915_1751189560254.png";
import classroomPhoto from "@assets/Screenshot 2025-06-29 010800_1751189560255.png";
import wolverineClaw from "@assets/westview-claw-011_1751189478918.png";
import wolverineHead from "@assets/Westview-Wolverine_1751189478920.png";
import janeStreetLogo from "@assets/jane_street.BK-zXjbl_1751194308583.avif";
import campusMap from "@assets/image_1751196156393.png";

// Tournament archive materials
import msIndividualRound from "@assets/WVMT_MS_2025__Individual_Round_1751223102312.pdf";
import msTeamRound from "@assets/WVMT_MS_2025__Team_Round_1751223102310.pdf";
import esIndividualRound from "@assets/WVMT_ES_2025__Individual_Round_1751223102316.pdf";
import esTeamRound from "@assets/WVMT_ES_2025__Team_Round_1751223102314.pdf";
// Solutions data available but hosted differently due to file format
import tournamentInfo from "@assets/WVMT 2025 Information_1751195547673.pdf";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");
  const [isDark, setIsDark] = useState(false);
  const { toast } = useToast();

  const stats = [
    { number: "250+", label: "Participants", subtitle: "Last Year", color: "text-blue-600" },
    { number: "40+", label: "Schools", subtitle: "San Diego Area", color: "text-purple-600" },
    { number: "1-8", label: "Grade Levels", subtitle: "Elementary & Middle", color: "text-amber-600" },
    { number: "$15", label: "Entry Fee", subtitle: "Includes Lunch!", color: "text-orange-600" }
  ];

  const scheduleItems = [
    { time: "9:30 - 10:15", title: "Registration", description: "Check in students, pay registration fees, bring pencils/pens (scratch paper provided)", color: "bg-blue-500", icon: UserCheck },
    { time: "10:15 - 10:30", title: "Welcome Announcement", description: "Opening announcements and enter classrooms", color: "bg-purple-500", icon: Megaphone },
    { time: "10:30 - 11:30", title: "Individual Round", description: "Test personal mathematical skills and problem-solving", color: "bg-green-500", icon: User },
    { time: "11:30 - 11:45", title: "Break", description: "Parents/coaches please stay out of competition rooms during rounds", color: "bg-gray-400", icon: Coffee },
    { time: "11:45 - 12:30", title: "Team Round", description: "Collaborative problem-solving with your team", color: "bg-amber-500", icon: Users },
    { time: "12:30 - 1:30", title: "Lunch", description: "Pizza, chips, and water provided for all participants", color: "bg-orange-500", icon: Pizza },
    { time: "1:45 - 2:45", title: "Buzzer Round", description: "Fast-paced elimination bracket where teams compete head-to-head", color: "bg-red-500", icon: Zap },
    { time: "2:45 - 3:00", title: "Break", description: "Preparation for awards ceremony", color: "bg-gray-400", icon: Coffee },
    { time: "3:00 - 3:30", title: "Awards Ceremony and Cleanup", description: "Celebrating our winners and tournament wrap-up", color: "bg-blue-500", icon: Award }
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

      {/* Floating mathematical elements */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {isDark ? (
          <>
            {/* Dark version - existing elements */}
            <div className="absolute top-20 left-20 w-16 h-16 border-2 border-purple-400/30 rounded-lg rotate-45 animate-float"></div>
            <div className="absolute top-40 right-32 w-12 h-12 bg-blue-400/20 rounded-full animate-float-slow"></div>
            <div className="absolute bottom-32 left-40 w-20 h-20 border-2 border-cyan-400/30 rotate-12 animate-float"></div>
            <div className="absolute bottom-60 right-60 text-3xl text-blue-400/40 animate-float" style={{ fontFamily: 'Outfit, sans-serif' }}>∑</div>
            <div className="absolute top-80 left-80 text-5xl text-cyan-400/30 animate-float-slow" style={{ fontFamily: 'Outfit, sans-serif' }}>∞</div>
            
            {/* Medium-sized math symbols around title area */}
            <div className="absolute top-32 left-1/4 text-6xl text-slate-400/30 animate-float-slow" style={{ fontFamily: 'Outfit, sans-serif' }}>+</div>
            <div className="absolute top-24 right-1/4 text-5xl text-gray-400/35 animate-float" style={{ fontFamily: 'Outfit, sans-serif' }}>×</div>
            <div className="absolute top-40 left-1/6 text-4xl text-stone-400/40 animate-float-slow" style={{ fontFamily: 'Outfit, sans-serif' }}>√</div>
            <div className="absolute top-36 right-1/6 text-5xl text-slate-400/30 animate-float" style={{ fontFamily: 'Outfit, sans-serif' }}>π</div>
            <div className="absolute top-52 left-1/3 text-4xl text-gray-400/35 animate-float-slow" style={{ fontFamily: 'Outfit, sans-serif' }}>∫</div>
            <div className="absolute top-48 right-1/3 text-5xl text-stone-400/30 animate-float" style={{ fontFamily: 'Outfit, sans-serif' }}>=</div>
            <div className="absolute top-28 left-1/2 transform -translate-x-1/2 text-4xl text-slate-400/25 animate-float-slow" style={{ fontFamily: 'Outfit, sans-serif' }}>∆</div>
          </>
        ) : (
          <>
            {/* Light version - evenly distributed bright math symbols */}
            {/* Top row */}
            <div className="absolute top-12 left-[8%] text-5xl text-orange-600 animate-float-slow" style={{ fontFamily: 'Outfit, sans-serif' }}>π</div>
            <div className="absolute top-16 left-[25%] text-4xl text-green-600 animate-float" style={{ fontFamily: 'Outfit, sans-serif' }}>∑</div>
            <div className="absolute top-20 left-[42%] text-5xl text-purple-600 animate-float-slow" style={{ fontFamily: 'Outfit, sans-serif' }}>δ</div>
            <div className="absolute top-14 left-[58%] text-4xl text-red-600 animate-float" style={{ fontFamily: 'Outfit, sans-serif' }}>∫</div>
            <div className="absolute top-18 left-[75%] text-5xl text-cyan-600 animate-float-slow" style={{ fontFamily: 'Outfit, sans-serif' }}>√</div>
            <div className="absolute top-22 left-[92%] text-4xl text-yellow-600 animate-float" style={{ fontFamily: 'Outfit, sans-serif' }}>ψ</div>
            
            {/* Second row */}
            <div className="absolute top-[20%] left-[12%] text-4xl text-pink-600 animate-float" style={{ fontFamily: 'Outfit, sans-serif' }}>μ</div>
            <div className="absolute top-[22%] left-[30%] text-5xl text-indigo-600 animate-float-slow" style={{ fontFamily: 'Outfit, sans-serif' }}>ω</div>
            <div className="absolute top-[18%] left-[48%] text-4xl text-emerald-600 animate-float" style={{ fontFamily: 'Outfit, sans-serif' }}>λ</div>
            <div className="absolute top-[24%] left-[65%] text-5xl text-rose-600 animate-float-slow" style={{ fontFamily: 'Outfit, sans-serif' }}>θ</div>
            <div className="absolute top-[20%] left-[82%] text-4xl text-blue-600 animate-float" style={{ fontFamily: 'Outfit, sans-serif' }}>γ</div>
            
            {/* Third row */}
            <div className="absolute top-[35%] left-[15%] text-5xl text-amber-600 animate-float-slow" style={{ fontFamily: 'Outfit, sans-serif' }}>σ</div>
            <div className="absolute top-[38%] left-[35%] text-4xl text-teal-600 animate-float" style={{ fontFamily: 'Outfit, sans-serif' }}>τ</div>
            <div className="absolute top-[32%] left-[55%] text-5xl text-violet-600 animate-float-slow" style={{ fontFamily: 'Outfit, sans-serif' }}>ε</div>
            <div className="absolute top-[36%] left-[75%] text-4xl text-lime-600 animate-float" style={{ fontFamily: 'Outfit, sans-serif' }}>κ</div>
            
            {/* Fourth row */}
            <div className="absolute top-[50%] left-[10%] text-4xl text-sky-600 animate-float" style={{ fontFamily: 'Outfit, sans-serif' }}>η</div>
            <div className="absolute top-[52%] left-[28%] text-5xl text-fuchsia-600 animate-float-slow" style={{ fontFamily: 'Outfit, sans-serif' }}>ρ</div>
            <div className="absolute top-[48%] left-[45%] text-4xl text-orange-600 animate-float" style={{ fontFamily: 'Outfit, sans-serif' }}>ξ</div>
            <div className="absolute top-[54%] left-[62%] text-5xl text-green-600 animate-float-slow" style={{ fontFamily: 'Outfit, sans-serif' }}>χ</div>
            <div className="absolute top-[50%] left-[80%] text-4xl text-purple-600 animate-float" style={{ fontFamily: 'Outfit, sans-serif' }}>ζ</div>
            
            {/* Fifth row */}
            <div className="absolute top-[65%] left-[18%] text-5xl text-red-600 animate-float-slow" style={{ fontFamily: 'Outfit, sans-serif' }}>ν</div>
            <div className="absolute top-[68%] left-[38%] text-4xl text-cyan-600 animate-float" style={{ fontFamily: 'Outfit, sans-serif' }}>ι</div>
            <div className="absolute top-[62%] left-[58%] text-5xl text-yellow-600 animate-float-slow" style={{ fontFamily: 'Outfit, sans-serif' }}>∞</div>
            <div className="absolute top-[66%] left-[78%] text-4xl text-pink-600 animate-float" style={{ fontFamily: 'Outfit, sans-serif' }}>∂</div>
            
            {/* Bottom row */}
            <div className="absolute bottom-16 left-[8%] text-4xl text-indigo-600 animate-float" style={{ fontFamily: 'Outfit, sans-serif' }}>Δ</div>
            <div className="absolute bottom-20 left-[25%] text-5xl text-emerald-600 animate-float-slow" style={{ fontFamily: 'Outfit, sans-serif' }}>φ</div>
            <div className="absolute bottom-12 left-[42%] text-4xl text-rose-600 animate-float" style={{ fontFamily: 'Outfit, sans-serif' }}>α</div>
            <div className="absolute bottom-18 left-[58%] text-5xl text-blue-600 animate-float-slow" style={{ fontFamily: 'Outfit, sans-serif' }}>β</div>
            <div className="absolute bottom-14 left-[75%] text-4xl text-amber-600 animate-float" style={{ fontFamily: 'Outfit, sans-serif' }}>∀</div>
            <div className="absolute bottom-22 left-[92%] text-5xl text-teal-600 animate-float-slow" style={{ fontFamily: 'Outfit, sans-serif' }}>∃</div>
            
            {/* Additional symbols for density */}
            <div className="absolute top-[28%] left-[20%] text-4xl text-violet-600 animate-float" style={{ fontFamily: 'Outfit, sans-serif' }}>∈</div>
            <div className="absolute top-[42%] left-[85%] text-5xl text-lime-600 animate-float-slow" style={{ fontFamily: 'Outfit, sans-serif' }}>∉</div>
            <div className="absolute top-[58%] left-[25%] text-4xl text-sky-600 animate-float" style={{ fontFamily: 'Outfit, sans-serif' }}>≠</div>
            <div className="absolute top-[72%] left-[50%] text-5xl text-fuchsia-600 animate-float-slow" style={{ fontFamily: 'Outfit, sans-serif' }}>≤</div>
            <div className="absolute top-[78%] left-[70%] text-4xl text-orange-600 animate-float" style={{ fontFamily: 'Outfit, sans-serif' }}>≥</div>
            <div className="absolute top-[85%] left-[15%] text-5xl text-green-600 animate-float-slow" style={{ fontFamily: 'Outfit, sans-serif' }}>±</div>
          </>
        )}
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
        
        {/* Mathematical symbols pattern on the right side - diagonal layout */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Top right area - diagonal pattern */}
          <div className="absolute top-[15%] right-[10%] text-2xl text-cyan-500 animate-float" style={{ fontFamily: 'serif' }}>□</div>
          <div className="absolute top-[18%] right-[6%] text-3xl text-pink-500 animate-float-slow" style={{ fontFamily: 'serif' }}>○</div>
          <div className="absolute top-[22%] right-[12%] text-4xl text-pink-600 font-bold animate-float">2025</div>
          <div className="absolute top-[20%] right-[2%] text-2xl text-green-500 animate-float-slow" style={{ fontFamily: 'serif' }}>△</div>
          
          {/* Middle right area */}
          <div className="absolute top-[35%] right-[8%] text-2xl text-purple-600 animate-float" style={{ fontFamily: 'serif' }}>x²</div>
          <div className="absolute top-[32%] right-[15%] text-2xl text-purple-500 animate-float-slow" style={{ fontFamily: 'serif' }}>π</div>
          <div className="absolute top-[38%] right-[4%] text-2xl text-purple-600 animate-float" style={{ fontFamily: 'serif' }}>a² + b² = c²</div>
          <div className="absolute top-[42%] right-[12%] text-3xl text-blue-500 animate-float-slow" style={{ fontFamily: 'serif' }}>Σ</div>
          <div className="absolute top-[45%] right-[2%] text-2xl text-gray-400 animate-float" style={{ fontFamily: 'serif' }}>√</div>
          
          {/* Lower right area */}
          <div className="absolute top-[55%] right-[10%] text-2xl text-green-500 animate-float" style={{ fontFamily: 'serif' }}>△</div>
          <div className="absolute top-[58%] right-[6%] text-8xl text-blue-500 animate-float-slow" style={{ fontFamily: 'serif' }}>|</div>
          <div className="absolute top-[52%] right-[14%] text-2xl text-red-500 animate-float" style={{ fontFamily: 'serif' }}>△</div>
          <div className="absolute top-[60%] right-[2%] text-2xl text-orange-500 animate-float-slow" style={{ fontFamily: 'serif' }}>∞</div>
          <div className="absolute top-[62%] right-[8%] text-3xl text-yellow-500 animate-float">42</div>
          <div className="absolute top-[68%] right-[12%] text-2xl text-gray-400 animate-float-slow" style={{ fontFamily: 'serif' }}>3.14</div>
          <div className="absolute top-[70%] right-[4%] text-2xl text-pink-500 animate-float" style={{ fontFamily: 'serif' }}>e</div>
          
          {/* Calculator and geometric shapes */}
          <div className="absolute top-[75%] right-[8%] text-4xl animate-float-slow">🔢</div>
          <div className="absolute top-[78%] right-[2%] text-3xl animate-float">📊</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className={`flex w-full mb-8 backdrop-blur-xl border rounded-2xl p-2 ${
            isDark 
              ? 'bg-white/10 border-white/20' 
              : 'bg-white/80 border-gray-200 shadow-lg'
          }`}>
            {['home', 'about', 'schedule', 'registration', 'logistics', 'archive', 'contact'].map((tab) => (
              <TabsTrigger 
                key={tab}
                value={tab} 
                className={`flex-1 font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-yellow-500 data-[state=active]:text-white rounded-xl transition-all py-2 px-1 text-xs sm:text-sm text-center ${
                  isDark 
                    ? 'text-white hover:bg-white/20' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {tab === 'logistics' ? 'Logistics' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>

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
                  <h1 className={`text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold mb-6 text-left ${
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
                    The Wolverine Math Tournament is a fun, MATHCOUNTS-style math competition for elementary and middle school students. Join us for a day of mathematical challenges, friendly competition, and exciting prizes!
                  </p>
                  <div className={`bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl px-6 py-4 mb-6 border ${
                    isDark ? 'border-white/10' : 'border-emerald-200'
                  }`}>
                    <h3 className={`text-xl font-bold mb-2 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`} style={{ fontFamily: 'Orbitron, monospace' }}>For Everyone</h3>
                    <p className={`text-base ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>All 3rd-8th graders from around San Diego are invited to participate and showcase their mathematical skills!</p>
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
                <div className={`text-base sm:text-lg font-semibold ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Year of WMT</div>
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
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className={`flex items-center space-x-6 p-4 backdrop-blur-sm rounded-2xl border ${
                      isDark ? 'bg-white/5 border-white/10' : 'bg-gray-50/80 border-gray-200'
                    }`}>
                      <div className={`${item.color} text-white px-4 py-2 rounded-xl font-bold min-w-[140px] text-center`}>
                        {item.time}
                      </div>
                      <div className={`${item.color} text-white p-3 rounded-xl`}>
                        <IconComponent size={24} />
                      </div>
                      <div>
                        <h3 className={`font-bold text-lg ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>{item.title}</h3>
                        <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </TabsContent>


          {/* Registration Tab */}
          <TabsContent value="registration" className="space-y-8">
            <div className={`backdrop-blur-xl border rounded-3xl p-8 shadow-xl text-center ${
              isDark ? 'bg-white/10 border-white/20' : 'bg-white/80 border-gray-200'
            }`}>
              <h2 className={`text-3xl font-bold mb-8 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`} style={{ fontFamily: 'Outfit, sans-serif' }}>Ready to Register?</h2>
              
              <div className="mb-8">
                <p className={`text-xl mb-4 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>Registration is quick and easy! Click the link below to secure your spot.</p>
                <p className={`text-lg ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>Payment of $15 per student is due at check-in (cash or check accepted).</p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/10">
                <Button asChild className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-bold py-4 px-12 rounded-2xl text-xl shadow-lg hover:scale-105 transition-all duration-300">
                  <a href="https://tinyurl.com/wvmt2025" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Register at tinyurl.com/wvmt2025
                  </a>
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className={`backdrop-blur-xl border rounded-2xl p-6 ${
                  isDark ? 'bg-white/10 border-white/20' : 'bg-white/80 border-gray-200'
                }`}>
                  <h3 className={`font-bold text-lg mb-3 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`} style={{ fontFamily: 'Outfit, sans-serif' }}>Round Description</h3>
                  <p className={`mb-3 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>Want to see what problems you'll encounter?</p>
                  <a href="https://tinyurl.com/wvmtrounddescription" target="_blank" rel="noopener noreferrer" 
                     className="text-green-400 hover:text-green-300 font-semibold inline-flex items-center">
                    <FileText className="mr-2 h-4 w-4" />
                    View Round Descriptions
                  </a>
                </div>
                
                <div className={`backdrop-blur-xl border rounded-2xl p-6 ${
                  isDark ? 'bg-white/10 border-white/20' : 'bg-white/80 border-gray-200'
                }`}>
                  <h3 className={`font-bold text-lg mb-3 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`} style={{ fontFamily: 'Outfit, sans-serif' }}>Questions?</h3>
                  <p className={`mb-3 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>Need more information?</p>
                  <a href="mailto:wvmathclub@gmail.com" className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center">
                    <Mail className="mr-2 h-4 w-4" />
                    wvmathclub@gmail.com
                  </a>
                </div>
              </div>
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
                <div className="flex items-center justify-center gap-3 mb-4">
                  <MapPin className={`h-8 w-8 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                  <h2 className={`text-3xl font-bold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`} style={{ fontFamily: 'Outfit, sans-serif' }}>
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
                <div className="flex items-center justify-center gap-3 mb-4">
                  <FileText className={`h-8 w-8 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                  <h2 className={`text-3xl font-bold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`} style={{ fontFamily: 'Playfair Display, serif' }}>
                    Tournament Archive
                  </h2>
                </div>
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
                      href={esIndividualRound}
                      download="WVMT_2025_Elementary_Individual_Round.pdf"
                      className={`flex items-center gap-2 hover:underline transition-colors ${
                        isDark 
                          ? 'text-blue-300 hover:text-blue-200' 
                          : 'text-blue-600 hover:text-blue-800'
                      }`}
                    >
                      <FileText className={`h-4 w-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                      <span className="text-sm">
                        Individual Round (25 problems) - Download PDF
                      </span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                    <a 
                      href={esTeamRound}
                      download="WVMT_2025_Elementary_Team_Round.pdf"
                      className={`flex items-center gap-2 hover:underline transition-colors ${
                        isDark 
                          ? 'text-blue-300 hover:text-blue-200' 
                          : 'text-blue-600 hover:text-blue-800'
                      }`}
                    >
                      <FileText className={`h-4 w-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                      <span className="text-sm">
                        Team Round (10 problems) - Download PDF
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
                      href={msIndividualRound}
                      download="WVMT_2025_MiddleSchool_Individual_Round.pdf"
                      className={`flex items-center gap-2 hover:underline transition-colors ${
                        isDark 
                          ? 'text-purple-300 hover:text-purple-200' 
                          : 'text-purple-600 hover:text-purple-800'
                      }`}
                    >
                      <FileText className={`h-4 w-4 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
                      <span className="text-sm">
                        Individual Round (25 problems) - Download PDF
                      </span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                    <a 
                      href={msTeamRound}
                      download="WVMT_2025_MiddleSchool_Team_Round.pdf"
                      className={`flex items-center gap-2 hover:underline transition-colors ${
                        isDark 
                          ? 'text-purple-300 hover:text-purple-200' 
                          : 'text-purple-600 hover:text-purple-800'
                      }`}
                    >
                      <FileText className={`h-4 w-4 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
                      <span className="text-sm">
                        Team Round (10 problems) - Download PDF
                      </span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                {/* Solutions Section */}
                <div className={`p-8 rounded-3xl border text-center ${
                  isDark 
                    ? 'bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-purple-500/30' 
                    : 'bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200'
                }`}>
                  <h3 className={`text-2xl font-bold mb-4 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>Problem Solutions Available</h3>
                  <p className={`text-lg mb-6 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Complete solutions for all tournament problems are now available for coaches and participants.
                  </p>
                  
                  <Button 
                    onClick={() => {
                      // Create solutions content
                      const solutionsContent = `2025 Westview Math Tournament - Complete Solutions

MIDDLE SCHOOL INDIVIDUAL ROUND SOLUTIONS:
1. 10
2. 97
3. 300
4. 61
5. 104
6. 60
7. 70
8. 136
9. 32
10. 65/3
11. 76
12. 40
13. 5/18
14. 96
15. 26
16. 3/68
17. 48
18. 15/4
19. 2√2-2
20. 40312
21. 84
22. 3631
23. 3/5
24. 9140
25. 73/11

MIDDLE SCHOOL TEAM ROUND SOLUTIONS:
1. 132
2. 5
3. 32/3
4. 5√3
5. 13/32
6. 11/42
7. 2√10/3
8. 40
9. 2897
10. 343

ELEMENTARY SCHOOL INDIVIDUAL ROUND SOLUTIONS:
1. 2
2. Aiden
3. 13
4. 39
5. 9
6. 3rd or third
7. 10
8. 4
9. 97
10. 48
11. 3
12. 16
13. 300
14. 60% or 60
15. 44% or 44
16. 3
17. 6
18. 104
19. 7
20. 8
21. 136
22. 8
23. 35
24. 639
25. 9:45 PM

ELEMENTARY SCHOOL TEAM ROUND SOLUTIONS:
1. 13/86
2. 5/16
3. 150
4. 35 (seconds)
5. 37 (tokens)
6. 91 (meters)
7. 10 (minutes)
8. 36
9. 17
10. 320

For detailed step-by-step solutions and explanations, contact wvmathclub@gmail.com`;

                      // Create and download the solutions file
                      const blob = new Blob([solutionsContent], { type: 'text/plain' });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.href = url;
                      a.download = 'WVMT_2025_Complete_Solutions.txt';
                      document.body.appendChild(a);
                      a.click();
                      document.body.removeChild(a);
                      URL.revokeObjectURL(url);
                    }}
                    className={`mb-6 ${
                      isDark 
                        ? 'bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700' 
                        : 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600'
                    } text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition-all duration-300`}
                  >
                    <FileText className="h-5 w-5 mr-2 inline" />
                    Download Complete Solutions
                  </Button>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
                    <div className={`p-4 rounded-xl ${
                      isDark ? 'bg-blue-900/50' : 'bg-blue-100'
                    }`}>
                      <div className={`text-2xl font-bold ${
                        isDark ? 'text-blue-300' : 'text-blue-700'
                      }`}>Elementary</div>
                      <div className={`text-sm ${
                        isDark ? 'text-blue-200' : 'text-blue-600'
                      }`}>Individual: 25 solutions<br />Team: 10 solutions</div>
                    </div>
                    <div className={`p-4 rounded-xl ${
                      isDark ? 'bg-purple-900/50' : 'bg-purple-100'
                    }`}>
                      <div className={`text-2xl font-bold ${
                        isDark ? 'text-purple-300' : 'text-purple-700'
                      }`}>Middle School</div>
                      <div className={`text-sm ${
                        isDark ? 'text-purple-200' : 'text-purple-600'
                      }`}>Individual: 25 solutions<br />Team: 10 solutions</div>
                    </div>
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
