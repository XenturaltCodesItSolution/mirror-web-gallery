import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, Shield, Users, Stethoscope } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-medical-blue-light to-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div className="inline-block bg-medical-red text-white px-4 py-2 rounded-full text-sm font-medium">
              オンライン診療対応
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              信頼できる医師による
              <span className="text-medical-blue">オンライン診療</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              経験豊富な専門医による質の高い医療サービスを、
              ご自宅から安心してご利用いただけます。
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="medical" size="lg" className="text-lg px-8 py-6">
                今すぐ診療予約
              </Button>
              <Button variant="medical-outline" size="lg" className="text-lg px-8 py-6">
                医師一覧を見る
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-medical-blue rounded-full flex items-center justify-center mx-auto mb-2">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-medium">24時間対応</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-medical-red rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-medium">安全・安心</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-medical-blue rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-medium">専門医多数</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-medical-red rounded-full flex items-center justify-center mx-auto mb-2">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <p className="text-sm font-medium">高品質診療</p>
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
                <h3 className="text-xl font-bold text-gray-900">専門医による診療</h3>
                <p className="text-gray-600 mt-2">
                  各分野のエキスパートが丁寧に診察いたします
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};