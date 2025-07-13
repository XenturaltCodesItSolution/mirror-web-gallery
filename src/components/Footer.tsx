import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Shield, Heart, Users } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-medical-blue rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <h3 className="text-xl font-bold">Medical Consultation</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              信頼できる医師による質の高いオンライン医療サービスを提供しています。
              いつでも、どこでも安心して医療相談をご利用いただけます。
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm">
                <Shield className="w-4 h-4 text-medical-blue" />
                <span>安全・安心</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Heart className="w-4 h-4 text-medical-red" />
                <span>高品質診療</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-medical-blue">診療科目</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">内科・一般診療</a></li>
              <li><a href="#" className="hover:text-white transition-colors">皮膚科診療</a></li>
              <li><a href="#" className="hover:text-white transition-colors">精神科・心療内科</a></li>
              <li><a href="#" className="hover:text-white transition-colors">小児科診療</a></li>
              <li><a href="#" className="hover:text-white transition-colors">婦人科診療</a></li>
              <li><a href="#" className="hover:text-white transition-colors">整形外科診療</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-medical-blue">サポート</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">ご利用方法</a></li>
              <li><a href="#" className="hover:text-white transition-colors">よくある質問</a></li>
              <li><a href="#" className="hover:text-white transition-colors">料金について</a></li>
              <li><a href="#" className="hover:text-white transition-colors">お支払い方法</a></li>
              <li><a href="#" className="hover:text-white transition-colors">キャンセルポリシー</a></li>
              <li><a href="#" className="hover:text-white transition-colors">技術的サポート</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-medical-blue">お問い合わせ</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-medical-blue" />
                <span>0120-123-456</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-medical-blue" />
                <span>info@medical-consult.jp</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-medical-blue mt-0.5" />
                <div>
                  <p>〒100-0001</p>
                  <p>東京都千代田区千代田1-1-1</p>
                </div>
              </div>
            </div>
            
            <Button variant="medical" size="sm" className="w-full">
              今すぐ診療予約
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-medical-blue">50,000+</div>
              <div className="text-sm text-gray-400">診療実績</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-medical-red">200+</div>
              <div className="text-sm text-gray-400">提携医師</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-medical-blue">4.8</div>
              <div className="text-sm text-gray-400">平均評価</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-medical-red">24h</div>
              <div className="text-sm text-gray-400">対応時間</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 Medical Consultation. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">プライバシーポリシー</a>
              <a href="#" className="hover:text-white transition-colors">利用規約</a>
              <a href="#" className="hover:text-white transition-colors">特定商取引法</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};