import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, Shield, Users, Stethoscope } from "lucide-react";
import { useSiteSettings } from "@/contexts/SiteSettingsContext";
import { BackgroundCarousel } from "@/components/BackgroundCarousel";
import { useContent } from "@/contexts/ContentContext";

export const HeroSection = () => {
  const { siteSettings } = useSiteSettings();
  const { bannerContent, aboutSection } = useContent();
  
  return (
    <section className="relative py-16 min-h-[600px] overflow-hidden">
      <BackgroundCarousel />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="inline-block bg-medical-red text-white px-4 py-2 rounded-full text-sm font-medium">
              Online Consultation Available
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {bannerContent.title}
              <span className="text-medical-blue"> {bannerContent.subtitle}</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              {bannerContent.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="medical" size="lg" className="text-lg px-8 py-6">
                {bannerContent.primaryButtonText}
              </Button>
              <Button variant="medical-outline" size="lg" className="text-lg px-8 py-6">
                {bannerContent.secondaryButtonText}
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
              {aboutSection.features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-medical-blue rounded-full flex items-center justify-center mx-auto mb-2">
                    {index === 0 && <Clock className="w-6 h-6 text-white" />}
                    {index === 1 && <Shield className="w-6 h-6 text-white" />}
                    {index === 2 && <Users className="w-6 h-6 text-white" />}
                    {index === 3 && <Stethoscope className="w-6 h-6 text-white" />}
                  </div>
                  <p className="text-sm font-medium">{feature}</p>
                </div>
              ))}
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
                <h3 className="text-xl font-bold text-gray-900">{aboutSection.title}</h3>
                <p className="text-gray-600 mt-2">
                  {aboutSection.description}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};