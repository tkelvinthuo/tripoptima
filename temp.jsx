import { Button } from "@/components/ui/button";
import { MapPin, Star, Users, Plane } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/90 to-orange-900/90 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80')"
        }}
      ></div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-15">
        <div className="absolute top-20 left-10 animate-pulse">
          <div className="w-3 h-3 bg-amber-400 rounded-full opacity-70"></div>
        </div>
        <div className="absolute top-40 right-20 animate-pulse delay-1000">
          <div className="w-2 h-2 bg-orange-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute bottom-32 left-16 animate-pulse delay-2000">
          <div className="w-4 h-4 bg-amber-300 rounded-full opacity-50"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <div className="max-w-5xl mx-auto">
          {/* Subtitle */}
          <div className="inline-flex items-center bg-amber-600/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-amber-400/30">
            <MapPin className="mr-2 text-amber-400" size={16} />
            <span className="text-amber-200 text-sm font-medium">Discover East Africa's Hidden Treasures</span>
          </div>

          <h1 className="text-6xl lg:text-8xl font-bold mb-8 animate-fade-in">
            <span className="block text-white">Journey Into</span>
            <span className="block bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Wild Africa
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl mb-10 text-amber-100 leading-relaxed max-w-4xl mx-auto">
            From the thundering hooves of the Great Migration to the snow-capped peaks of Mount Kilimanjaro, 
            experience Africa's raw beauty through our premium logistics and safari services. 
            <span className="block mt-2 font-semibold text-amber-200">
              Where every journey tells an ancient story.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white text-lg px-10 py-7 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 border border-amber-400/30"
            >
              <MapPin className="mr-2" size={20} />
              Start Your Safari
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-amber-400 text-amber-100 hover:bg-amber-400 hover:text-amber-900 text-lg px-10 py-7 rounded-full backdrop-blur-sm bg-amber-600/10 transition-all duration-300"
            >
              <Plane className="mr-2" size={20} />
              Explore Services
            </Button>
          </div>

          {/* Enhanced Stats with African Theme */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="flex flex-col items-center p-8 backdrop-blur-sm bg-gradient-to-b from-amber-600/20 to-orange-600/20 rounded-2xl border border-amber-400/20 hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <MapPin className="text-white" size={28} />
              </div>
              <div className="text-4xl font-bold mb-2 text-amber-200">15+</div>
              <div className="text-amber-100 font-medium">National Parks & Reserves</div>
              <div className="text-amber-300 text-sm mt-1">Including Maasai Mara & Amboseli</div>
            </div>
            
            <div className="flex flex-col items-center p-8 backdrop-blur-sm bg-gradient-to-b from-amber-600/20 to-orange-600/20 rounded-2xl border border-amber-400/20 hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <Users className="text-white" size={28} />
              </div>
              <div className="text-4xl font-bold mb-2 text-amber-200">8,000+</div>
              <div className="text-amber-100 font-medium">Happy Adventurers</div>
              <div className="text-amber-300 text-sm mt-1">From 50+ countries worldwide</div>
            </div>
            
            <div className="flex flex-col items-center p-8 backdrop-blur-sm bg-gradient-to-b from-amber-600/20 to-orange-600/20 rounded-2xl border border-amber-400/20 hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
                <Star className="text-white" size={28} />
              </div>
              <div className="text-4xl font-bold mb-2 text-amber-200">4.9</div>
              <div className="text-amber-100 font-medium">Excellence Rating</div>
              <div className="text-amber-300 text-sm mt-1">Based on 2,000+ reviews</div>
            </div>
          </div>

          {/* African Quote */}
          <div className="mt-16 max-w-3xl mx-auto">
            <blockquote className="text-lg italic text-amber-200 border-l-4 border-amber-400 pl-6">
              "In Africa, you have space. There are huge empty places. It's a profound silence." 
              <footer className="text-amber-300 mt-2 not-italic">- African Proverb</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;