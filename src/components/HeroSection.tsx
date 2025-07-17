import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, Shield, Users, Stethoscope } from "lucide-react";
import { useSiteSettings } from "@/contexts/SiteSettingsContext";

export const HeroSection = () => {
  const { siteSettings } = useSiteSettings();
  
  return (
    <section 
      className="bg-gradient-to-br from-medical-blue-light to-white py-16"
      style={siteSettings.bannerUrl ? {
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.85)), url(${siteSettings.bannerUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : {}}
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="inline-block bg-medical-red text-white px-4 py-2 rounded-full text-sm font-medium">
              Online Consultation Available
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Trusted Medical Care with
              <span className="text-medical-blue"> Online Consultation</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              High-quality medical services provided by experienced specialists, 
              accessible safely and conveniently from your home.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="medical" size="lg" className="text-lg px-8 py-6">
                Book Consultation Now
              </Button>
              <Button variant="medical-outline" size="lg" className="text-lg px-8 py-6">
                View Our Doctors
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-medical-blue rounded-full flex items-center justify-center mx-auto mb-2">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-medium">24/7 Available</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-medical-red rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-medium">Safe & Secure</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-medical-blue rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-medium">Expert Doctors</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-medical-red rounded-full flex items-center justify-center mx-auto mb-2">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-medium">Quality Care</p>
              </div>
            </div>
          </div>

          {/* Right content - Doctor image placeholder */}
          <div className="relative">
            <Card className="bg-white p-8 shadow-xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-medical-blue-light to-medical-red-light rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-medical-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <Stethoscope className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-gray-600 font-medium">Doctor Image Placeholder</p>
                  <p className="text-sm text-gray-500">Replace with actual doctor photos</p>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <h3 className="text-xl font-bold text-gray-900">Expert Medical Care</h3>
                <p className="text-gray-600 mt-2">
                  Specialists in each field provide careful examinations
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};