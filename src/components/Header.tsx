import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-white shadow-md">
      {/* Top contact bar */}
      <div className="bg-medical-blue text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>お電話でのお問い合わせ: 0120-123-456</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>受付時間: 平日9:00-18:00</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4" />
            <span>info@medical-consult.jp</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-medical-blue rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <h1 className="text-2xl font-bold text-medical-blue">
              Medical Consultation
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-medical-blue transition-colors">
              診療科目
            </a>
            <a href="#doctors" className="text-gray-700 hover:text-medical-blue transition-colors">
              医師紹介
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-medical-blue transition-colors">
              料金案内
            </a>
            <a href="#contact" className="text-gray-700 hover:text-medical-blue transition-colors">
              お問い合わせ
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <Button variant="medical-outline" size="sm">
              ログイン
            </Button>
            <Button variant="medical" size="sm">
              新規登録
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};