
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, Camera } from "lucide-react";

const FeaturedPackages = () => {
  const packages = [
    {
      title: "Maasai Mara Adventure",
      description: "Witness the Great Migration in one of Africa's most famous game reserves",
      duration: "3 Days / 2 Nights",
      groupSize: "2-6 People",
      price: "$1,200",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1581852017103-68ac65514cf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      highlights: ["Big Five sightings", "Cultural village visit", "Hot air balloon ride", "Luxury tented camp"]
    },
    {
      title: "Amboseli Elephant Safari",
      description: "Get up close with majestic elephants against the backdrop of Mount Kilimanjaro",
      duration: "2 Days / 1 Night",
      groupSize: "2-8 People",
      price: "$850",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      highlights: ["Elephant herds", "Mt. Kilimanjaro views", "Observation Hill", "Maasai culture"]
    },
    {
      title: "Tsavo East & West Combo",
      description: "Explore Kenya's largest national parks known for red elephants and diverse wildlife",
      duration: "4 Days / 3 Nights",
      groupSize: "2-6 People",
      price: "$1,500",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      highlights: ["Red elephants", "Mzima Springs", "Lugard Falls", "Mudanda Rock"]
    }
  ];

  return (
    <section id="packages" className="py-20 bg-gradient-to-b from-green-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Featured Safari Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Carefully curated safari experiences showcasing Kenya's most spectacular wildlife destinations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden bg-white">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <Badge className="absolute top-4 right-4 bg-amber-500 hover:bg-amber-600 text-white">
                  Popular
                </Badge>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{pkg.title}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="text-amber-400 fill-current" size={16} />
                    <span className="text-sm">{pkg.rating}</span>
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {pkg.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1 text-green-600" />
                    {pkg.duration}
                  </div>
                  <div className="flex items-center">
                    <Users size={16} className="mr-1 text-green-600" />
                    {pkg.groupSize}
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {pkg.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <Camera size={14} className="mr-2 text-amber-600" />
                      {highlight}
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold text-green-600">
                    {pkg.price}
                    <span className="text-sm font-normal text-gray-500"> /person</span>
                  </div>
                  <Button className="bg-gradient-to-r from-green-600 to-amber-600 hover:from-green-700 hover:to-amber-700 text-white">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3"
          >
            View All Safari Packages
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackages;
