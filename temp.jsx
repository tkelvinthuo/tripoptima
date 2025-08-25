import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-green-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to start your African adventure? Contact our expert team for personalized service
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input 
                  placeholder="First Name" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                />
                <Input 
                  placeholder="Last Name" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                />
              </div>
              <Input 
                placeholder="Email Address" 
                type="email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
              />
              <Input 
                placeholder="Phone Number" 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
              />
              <Textarea 
                placeholder="Tell us about your travel plans..." 
                rows={4}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
              />
              <Button className="w-full bg-gradient-to-r from-green-600 to-amber-600 hover:from-green-700 hover:to-amber-700 text-white">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="text-amber-400 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-gray-300">+254 700 123 456</p>
                    <p className="text-gray-300">+254 711 987 654</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="text-amber-400 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-gray-300">info@safarilogistics.com</p>
                    <p className="text-gray-300">bookings@safarilogistics.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPin className="text-amber-400 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-gray-300">Westlands, Nairobi</p>
                    <p className="text-gray-300">Kenya, East Africa</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="text-amber-400 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Operating Hours</h4>
                    <p className="text-gray-300">24/7 Customer Support</p>
                    <p className="text-gray-300">Office: Mon-Fri 8AM-6PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="font-semibold mb-3 text-lg">Why Choose Safari Logistics?</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• 10+ years of experience in African tourism</li>
                <li>• Licensed and insured operations</li>
                <li>• Professional multilingual guides</li>
                <li>• Modern, well-maintained vehicle fleet</li>
                <li>• 24/7 customer support</li>
                <li>• Competitive pricing with no hidden fees</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
