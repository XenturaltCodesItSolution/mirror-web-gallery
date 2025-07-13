import { ServiceCard } from "./ServiceCard";

export const ServicesSection = () => {
  const services = [
    {
      title: "内科・一般診療",
      description: "風邪、発熱、胃腸炎など日常的な症状から生活習慣病まで幅広く対応。経験豊富な医師が丁寧に診察いたします。",
      price: "¥3,000",
      duration: "15分",
      rating: 4.8,
      patients: 1250,
      isPopular: true,
      category: "内科",
      imageAlt: "Internal Medicine Doctor Photo"
    },
    {
      title: "皮膚科診療",
      description: "湿疹、アトピー、ニキビなどの皮膚トラブルから美容皮膚科まで専門医が対応いたします。",
      price: "¥3,500",
      duration: "20分",
      rating: 4.9,
      patients: 890,
      category: "皮膚科",
      imageAlt: "Dermatology Specialist Photo"
    },
    {
      title: "精神科・心療内科",
      description: "うつ病、不安障害、パニック障害など心の健康問題について専門医がカウンセリングを行います。",
      price: "¥5,000",
      duration: "30分",
      rating: 4.7,
      patients: 670,
      category: "精神科",
      imageAlt: "Psychiatrist Photo"
    },
    {
      title: "小児科診療",
      description: "お子様の発熱、咳、発疹などの症状から予防接種の相談まで小児科専門医が対応いたします。",
      price: "¥2,800",
      duration: "15分",
      rating: 4.9,
      patients: 1100,
      isPopular: true,
      category: "小児科",
      imageAlt: "Pediatrician Photo"
    },
    {
      title: "婦人科診療",
      description: "生理不順、更年期障害、妊娠に関する相談など女性特有のお悩みについて専門医が診察いたします。",
      price: "¥4,000",
      duration: "25分",
      rating: 4.8,
      patients: 750,
      category: "婦人科",
      imageAlt: "Gynecologist Photo"
    },
    {
      title: "整形外科診療",
      description: "肩こり、腰痛、関節痛などの整形外科的な症状について専門医がアドバイスいたします。",
      price: "¥3,800",
      duration: "20分",
      rating: 4.6,
      patients: 580,
      category: "整形外科",
      imageAlt: "Orthopedic Doctor Photo"
    },
    {
      title: "眼科診療",
      description: "目の痛み、視力低下、ドライアイなどの眼科症状について専門医が診察いたします。",
      price: "¥3,200",
      duration: "15分",
      rating: 4.7,
      patients: 420,
      category: "眼科",
      imageAlt: "Ophthalmologist Photo"
    },
    {
      title: "耳鼻咽喉科診療",
      description: "のどの痛み、鼻づまり、耳の症状など耳鼻咽喉科領域の診療を専門医が行います。",
      price: "¥3,300",
      duration: "18分",
      rating: 4.5,
      patients: 350,
      category: "耳鼻科",
      imageAlt: "ENT Specialist Photo"
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            診療科目一覧
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            各分野の専門医が、オンラインで質の高い医療サービスを提供いたします。
            お気軽にご相談ください。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            その他の診療科目についてもお気軽にお問い合わせください
          </p>
          <button className="text-medical-blue hover:text-medical-red transition-colors font-medium">
            全ての診療科目を見る →
          </button>
        </div>
      </div>
    </section>
  );
};