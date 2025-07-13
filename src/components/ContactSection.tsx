import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            お問い合わせ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ご質問やご相談がございましたら、お気軽にお問い合わせください。
            専門スタッフが迅速に対応いたします。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-medical-blue">
                お問い合わせフォーム
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    お名前 <span className="text-medical-red">*</span>
                  </label>
                  <Input placeholder="山田 太郎" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    フリガナ <span className="text-medical-red">*</span>
                  </label>
                  <Input placeholder="ヤマダ タロウ" className="w-full" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  メールアドレス <span className="text-medical-red">*</span>
                </label>
                <Input type="email" placeholder="example@email.com" className="w-full" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  電話番号
                </label>
                <Input type="tel" placeholder="090-1234-5678" className="w-full" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  お問い合わせ内容 <span className="text-medical-red">*</span>
                </label>
                <Textarea 
                  placeholder="ご質問やご相談内容をお書きください"
                  className="w-full min-h-[120px]"
                />
              </div>

              <Button variant="medical" className="w-full py-6 text-lg">
                送信する
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-medical-blue">
                  お電話でのお問い合わせ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-medical-blue rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-medical-blue">0120-123-456</p>
                    <p className="text-gray-600">通話料無料</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-medical-red rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">受付時間</p>
                    <p className="text-gray-600">平日 9:00 - 18:00</p>
                    <p className="text-gray-600">土曜 9:00 - 14:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-medical-blue">
                  その他のお問い合わせ方法
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-medical-blue rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">メール</p>
                    <p className="text-medical-blue">info@medical-consult.jp</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-medical-red rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium">所在地</p>
                    <p className="text-gray-600">〒100-0001</p>
                    <p className="text-gray-600">東京都千代田区千代田1-1-1</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-medical-blue-light border-medical-blue">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold text-medical-blue mb-2">
                  緊急時のご相談
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  体調に異常を感じた場合は、まずは最寄りの救急外来をご利用ください。
                  オンライン診療は緊急時の対応には適しておりません。
                </p>
                <Button variant="medical-red" size="sm">
                  緊急連絡先一覧
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};