import { ServiceCard } from "./ServiceCard";

export const ServicesSection = () => {
  const services = [
    {
      title: "Internal Medicine",
      description: "From common symptoms like colds, fever, and gastroenteritis to lifestyle diseases. Experienced doctors provide careful examinations.",
      price: "$30",
      duration: "15 min",
      rating: 4.8,
      patients: 1250,
      isPopular: true,
      category: "Internal",
      imageAlt: "Internal Medicine Doctor Photo"
    },
    {
      title: "Dermatology",
      description: "From skin problems like eczema, atopic dermatitis, acne to cosmetic dermatology, specialists will provide treatment.",
      price: "$35",
      duration: "20 min",
      rating: 4.9,
      patients: 890,
      category: "Dermatology",
      imageAlt: "Dermatology Specialist Photo"
    },
    {
      title: "Psychiatry",
      description: "Specialists provide counseling for mental health issues such as depression, anxiety disorders, and panic disorders.",
      price: "$50",
      duration: "30 min",
      rating: 4.7,
      patients: 670,
      category: "Psychiatry",
      imageAlt: "Psychiatrist Photo"
    },
    {
      title: "Pediatrics",
      description: "From children's symptoms like fever, cough, rash to vaccination consultations, pediatric specialists will respond.",
      price: "$28",
      duration: "15 min",
      rating: 4.9,
      patients: 1100,
      isPopular: true,
      category: "Pediatrics",
      imageAlt: "Pediatrician Photo"
    },
    {
      title: "Gynecology",
      description: "Specialists will examine women's specific concerns such as menstrual irregularities, menopause, and pregnancy-related consultations.",
      price: "$40",
      duration: "25 min",
      rating: 4.8,
      patients: 750,
      category: "Gynecology",
      imageAlt: "Gynecologist Photo"
    },
    {
      title: "Orthopedics",
      description: "Specialists provide advice on orthopedic symptoms such as stiff shoulders, back pain, and joint pain.",
      price: "$38",
      duration: "20 min",
      rating: 4.6,
      patients: 580,
      category: "Orthopedics",
      imageAlt: "Orthopedic Doctor Photo"
    },
    {
      title: "Ophthalmology",
      description: "Specialists will examine ophthalmologic symptoms such as eye pain, vision loss, and dry eyes.",
      price: "$32",
      duration: "15 min",
      rating: 4.7,
      patients: 420,
      category: "Eye Care",
      imageAlt: "Ophthalmologist Photo"
    },
    {
      title: "ENT (Ear, Nose, Throat)",
      description: "Specialists provide ENT treatment for symptoms such as sore throat, nasal congestion, and ear symptoms.",
      price: "$33",
      duration: "18 min",
      rating: 4.5,
      patients: 350,
      category: "ENT",
      imageAlt: "ENT Specialist Photo"
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Medical Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialists in each field provide high-quality medical services online.
            Feel free to consult with us anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Please feel free to contact us about other medical specialties as well
          </p>
          <button className="text-medical-blue hover:text-medical-red transition-colors font-medium">
            View All Medical Services →
          </button>
        </div>
      </div>
    </section>
  );
};