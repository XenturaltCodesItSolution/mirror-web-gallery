import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  rating: number;
  patients: number;
  isPopular?: boolean;
  category: string;
  imageAlt: string;
  image?: string;
  detailedDescription?: string;
  additionalImages?: string[];
  features?: string[];
  requirements?: string[];
}

interface ServiceContextType {
  services: Service[];
  addService: (service: Omit<Service, 'id'>) => void;
  updateService: (id: string, service: Partial<Service>) => void;
  deleteService: (id: string) => void;
  getService: (id: string) => Service | undefined;
}

const ServiceContext = createContext<ServiceContextType | undefined>(undefined);

const initialServices: Service[] = [
  {
    id: '1',
    title: "Internal Medicine",
    description: "From common symptoms like colds, fever, and gastroenteritis to lifestyle diseases. Experienced doctors provide careful examinations.",
    price: "$30",
    duration: "15 min",
    rating: 4.8,
    patients: 1250,
    isPopular: true,
    category: "Internal",
    imageAlt: "Internal Medicine Doctor Photo",
    detailedDescription: "Our internal medicine specialists provide comprehensive care for adult patients. We focus on the prevention, diagnosis, and treatment of adult diseases with a holistic approach to healthcare.",
    features: ["Comprehensive health checkups", "Chronic disease management", "Preventive care", "Health screenings"],
    requirements: ["Valid ID", "Insurance information", "Medical history"]
  },
  {
    id: '2',
    title: "Dermatology",
    description: "From skin problems like eczema, atopic dermatitis, acne to cosmetic dermatology, specialists will provide treatment.",
    price: "$35",
    duration: "20 min",
    rating: 4.9,
    patients: 890,
    category: "Dermatology",
    imageAlt: "Dermatology Specialist Photo",
    detailedDescription: "Expert dermatological care for all skin conditions. Our specialists use the latest treatments and technologies to ensure optimal skin health.",
    features: ["Skin cancer screening", "Acne treatment", "Cosmetic procedures", "Skin allergy testing"],
    requirements: ["Clean skin (no makeup)", "List of current medications", "Medical history"]
  },
  {
    id: '3',
    title: "Psychiatry",
    description: "Specialists provide counseling for mental health issues such as depression, anxiety disorders, and panic disorders.",
    price: "$50",
    duration: "30 min",
    rating: 4.7,
    patients: 670,
    category: "Psychiatry",
    imageAlt: "Psychiatrist Photo",
    detailedDescription: "Professional mental health support with compassionate care. We provide therapy and medication management for various mental health conditions.",
    features: ["Individual therapy", "Medication management", "Crisis intervention", "Treatment planning"],
    requirements: ["Insurance verification", "Emergency contact", "Previous therapy records if available"]
  },
  {
    id: '4',
    title: "Pediatrics",
    description: "From children's symptoms like fever, cough, rash to vaccination consultations, pediatric specialists will respond.",
    price: "$28",
    duration: "15 min",
    rating: 4.9,
    patients: 1100,
    isPopular: true,
    category: "Pediatrics",
    imageAlt: "Pediatrician Photo",
    detailedDescription: "Specialized healthcare for infants, children, and adolescents. Our pediatricians focus on the physical, mental, and social health of children.",
    features: ["Well-child visits", "Vaccinations", "Growth monitoring", "Developmental assessments"],
    requirements: ["Guardian present", "Vaccination records", "Growth chart if available"]
  },
  {
    id: '5',
    title: "Gynecology",
    description: "Specialists will examine women's specific concerns such as menstrual irregularities, menopause, and pregnancy-related consultations.",
    price: "$40",
    duration: "25 min",
    rating: 4.8,
    patients: 750,
    category: "Gynecology",
    imageAlt: "Gynecologist Photo",
    detailedDescription: "Comprehensive women's health services including routine gynecological care, family planning, and specialized treatments.",
    features: ["Annual exams", "Family planning", "Pregnancy care", "Menopause management"],
    requirements: ["Medical history", "Last menstrual period date", "Insurance information"]
  },
  {
    id: '6',
    title: "Orthopedics",
    description: "Specialists provide advice on orthopedic symptoms such as stiff shoulders, back pain, and joint pain.",
    price: "$38",
    duration: "20 min",
    rating: 4.6,
    patients: 580,
    category: "Orthopedics",
    imageAlt: "Orthopedic Doctor Photo",
    detailedDescription: "Expert care for bones, joints, and muscles. Our orthopedic specialists treat injuries and conditions affecting the musculoskeletal system.",
    features: ["Injury assessment", "Joint replacement", "Sports medicine", "Physical therapy referrals"],
    requirements: ["X-rays if available", "Pain level assessment", "Activity limitations list"]
  },
  {
    id: '7',
    title: "Ophthalmology",
    description: "Specialists will examine ophthalmologic symptoms such as eye pain, vision loss, and dry eyes.",
    price: "$32",
    duration: "15 min",
    rating: 4.7,
    patients: 420,
    category: "Eye Care",
    imageAlt: "Ophthalmologist Photo",
    detailedDescription: "Complete eye care services including routine eye exams, vision correction, and treatment of eye diseases.",
    features: ["Eye exams", "Vision testing", "Glaucoma screening", "Contact lens fitting"],
    requirements: ["Current glasses/contacts", "Eye symptom history", "Insurance card"]
  },
  {
    id: '8',
    title: "ENT (Ear, Nose, Throat)",
    description: "Specialists provide ENT treatment for symptoms such as sore throat, nasal congestion, and ear symptoms.",
    price: "$33",
    duration: "18 min",
    rating: 4.5,
    patients: 350,
    category: "ENT",
    imageAlt: "ENT Specialist Photo",
    detailedDescription: "Specialized care for ear, nose, and throat conditions. Our ENT specialists diagnose and treat a wide range of conditions.",
    features: ["Hearing tests", "Sinus treatment", "Throat procedures", "Allergy management"],
    requirements: ["Symptom timeline", "Allergy information", "Previous treatments tried"]
  }
];

export const ServiceProvider = ({ children }: { children: ReactNode }) => {
  const [services, setServices] = useState<Service[]>(initialServices);

  const addService = (service: Omit<Service, 'id'>) => {
    const newService = {
      ...service,
      id: Date.now().toString()
    };
    setServices(prev => [...prev, newService]);
  };

  const updateService = (id: string, updatedService: Partial<Service>) => {
    setServices(prev => prev.map(service => 
      service.id === id ? { ...service, ...updatedService } : service
    ));
  };

  const deleteService = (id: string) => {
    setServices(prev => prev.filter(service => service.id !== id));
  };

  const getService = (id: string) => {
    return services.find(service => service.id === id);
  };

  return (
    <ServiceContext.Provider value={{
      services,
      addService,
      updateService,
      deleteService,
      getService
    }}>
      {children}
    </ServiceContext.Provider>
  );
};

export const useServices = () => {
  const context = useContext(ServiceContext);
  if (!context) {
    throw new Error('useServices must be used within a ServiceProvider');
  }
  return context;
};