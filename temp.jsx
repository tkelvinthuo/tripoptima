import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Clock, Shield, Star, Quote, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ChauffeurServices = () => {
  const services = [
    {
      title: "Executive Business Travel",
      description: "Professional chauffeur services for business meetings and corporate events",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Executive vehicles", "Professional attire", "Punctual service", "Confidentiality"]
    },
    {
      title: "City Tours & Sightseeing",
      description: "Personalized guided tours of Nairobi and other major Kenyan cities",
      image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Local expertise", "Cultural insights", "Flexible itineraries", "Photo opportunities"]
    },
    {
      title: "Special Events & Occasions",
      description: "Luxury transportation for weddings, celebrations, and special occasions",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      features: ["Luxury fleet", "Special decorations", "Professional service", "Memorable experiences"]
    }
  ];

  const testimonials = [
    {
      name: "David Wilson",
      company: "Tech Solutions Ltd",
      rating: 5,
      comment: "Outstanding service for our business delegation. The chauffeur was professional, punctual, and knew all the best routes. Made our Nairobi meetings seamless.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "Alexandra Smith",
      company: "Personal Client",
      rating: 5,
      comment: "Perfect city tour experience! Our chauffeur guide shared fascinating stories about Nairobi's history and culture. Felt like traveling with a knowledgeable friend.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-amber-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 to-amber-900/80 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80')"
          }}
        ></div>
        
        <div className="relative z-20 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Premium Chauffeur Services
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto">
            Experience Kenya in style with our professional chauffeur services, 
            combining luxury, local expertise, and personalized attention.
          </p>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Luxury Travel Redefined
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our chauffeur services go beyond simple transportation. We provide a premium travel 
              experience with professional drivers who double as local ambassadors, sharing insights 
              about Kenya's rich culture, history, and hidden gems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <Users className="mx-auto text-purple-600 mb-4" size={48} />
                <CardTitle>Professional Chauffeurs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Experienced, licensed, and trained professionals with local expertise</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <Shield className="mx-auto text-green-600 mb-4" size={48} />
                <CardTitle>Executive Fleet</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Luxury vehicles maintained to the highest standards for your comfort</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <Clock className="mx-auto text-amber-600 mb-4" size={48} />
                <CardTitle>Flexible Scheduling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Adaptable to your itinerary with real-time schedule adjustments</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <MapPin className="mx-auto text-blue-600 mb-4" size={48} />
                <CardTitle>Local Knowledge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Insider knowledge of routes, attractions, and cultural experiences</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-gradient-to-b from-purple-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Chauffeur Services
            </h2>
            <p className="text-xl text-gray-600">
              Tailored transportation solutions for every occasion
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="relative h-48">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-purple-600 hover:bg-purple-700">
                    Premium
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-amber-600 hover:from-purple-700 hover:to-amber-700">
                    Book Service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-600">
              Exceptional service experiences from our valued clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.company}</CardDescription>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-amber-400 fill-current" size={16} />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <Quote className="text-purple-600 mb-2" size={20} />
                  <p className="text-gray-600 italic">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChauffeurServices;