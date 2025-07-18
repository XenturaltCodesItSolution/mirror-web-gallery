import React, { createContext, useContext, useState, ReactNode } from 'react';

interface BannerContent {
  title: string;
  subtitle: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

interface AboutSection {
  title: string;
  description: string;
  imageUrl: string;
  features: string[];
}

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  imageUrl: string;
}

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  category: string;
  imageUrl: string;
  tags: string[];
}

interface ContentContextType {
  bannerContent: BannerContent;
  aboutSection: AboutSection;
  testimonials: Testimonial[];
  faqs: FAQ[];
  blogPosts: BlogPost[];
  updateBannerContent: (content: BannerContent) => void;
  updateAboutSection: (section: AboutSection) => void;
  addTestimonial: (testimonial: Omit<Testimonial, 'id'>) => void;
  updateTestimonial: (id: string, testimonial: Partial<Testimonial>) => void;
  deleteTestimonial: (id: string) => void;
  addFAQ: (faq: Omit<FAQ, 'id'>) => void;
  updateFAQ: (id: string, faq: Partial<FAQ>) => void;
  deleteFAQ: (id: string) => void;
  addBlogPost: (post: Omit<BlogPost, 'id'>) => void;
  updateBlogPost: (id: string, post: Partial<BlogPost>) => void;
  deleteBlogPost: (id: string) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

const defaultBannerContent: BannerContent = {
  title: "Trusted Medical Care with",
  subtitle: "Online Consultation",
  description: "High-quality medical services provided by experienced specialists, accessible safely and conveniently from your home.",
  primaryButtonText: "Book Consultation Now",
  primaryButtonLink: "/book-consultation",
  secondaryButtonText: "View Our Doctors",
  secondaryButtonLink: "/doctors"
};

const defaultAboutSection: AboutSection = {
  title: "Expert Medical Care",
  description: "We provide comprehensive healthcare services with a team of experienced medical professionals dedicated to your wellbeing.",
  imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3",
  features: [
    "24/7 Available",
    "Safe & Secure",
    "Expert Doctors",
    "Quality Care"
  ]
};

const defaultTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Patient',
    company: '',
    content: 'Excellent service and professional doctors. Highly recommended!',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b1e5?ixlib=rb-4.0.3&w=150'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Patient',
    company: '',
    content: 'Quick and convenient online consultations. Great experience!',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=150'
  }
];

const defaultFAQs: FAQ[] = [
  {
    id: '1',
    question: 'How do I book an appointment?',
    answer: 'You can book an appointment through our website by clicking the "Book Consultation" button.',
    category: 'Appointments'
  },
  {
    id: '2',
    question: 'What are your consultation hours?',
    answer: 'We offer 24/7 online consultations with our medical team.',
    category: 'General'
  }
];

const defaultBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Telemedicine',
    excerpt: 'Exploring how digital health is transforming healthcare delivery.',
    content: 'Telemedicine has revolutionized the way we deliver healthcare...',
    author: 'Dr. Smith',
    publishDate: '2024-01-15',
    category: 'Healthcare Technology',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3',
    tags: ['telemedicine', 'digital health', 'healthcare']
  }
];

export const ContentProvider = ({ children }: { children: ReactNode }) => {
  const [bannerContent, setBannerContent] = useState<BannerContent>(defaultBannerContent);
  const [aboutSection, setAboutSection] = useState<AboutSection>(defaultAboutSection);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(defaultTestimonials);
  const [faqs, setFaqs] = useState<FAQ[]>(defaultFAQs);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(defaultBlogPosts);

  const updateBannerContent = (content: BannerContent) => {
    setBannerContent(content);
  };

  const updateAboutSection = (section: AboutSection) => {
    setAboutSection(section);
  };

  const addTestimonial = (testimonial: Omit<Testimonial, 'id'>) => {
    const newTestimonial: Testimonial = {
      ...testimonial,
      id: Date.now().toString(),
    };
    setTestimonials(prev => [...prev, newTestimonial]);
  };

  const updateTestimonial = (id: string, updates: Partial<Testimonial>) => {
    setTestimonials(prev => 
      prev.map(testimonial => 
        testimonial.id === id ? { ...testimonial, ...updates } : testimonial
      )
    );
  };

  const deleteTestimonial = (id: string) => {
    setTestimonials(prev => prev.filter(testimonial => testimonial.id !== id));
  };

  const addFAQ = (faq: Omit<FAQ, 'id'>) => {
    const newFAQ: FAQ = {
      ...faq,
      id: Date.now().toString(),
    };
    setFaqs(prev => [...prev, newFAQ]);
  };

  const updateFAQ = (id: string, updates: Partial<FAQ>) => {
    setFaqs(prev => 
      prev.map(faq => 
        faq.id === id ? { ...faq, ...updates } : faq
      )
    );
  };

  const deleteFAQ = (id: string) => {
    setFaqs(prev => prev.filter(faq => faq.id !== id));
  };

  const addBlogPost = (post: Omit<BlogPost, 'id'>) => {
    const newPost: BlogPost = {
      ...post,
      id: Date.now().toString(),
    };
    setBlogPosts(prev => [...prev, newPost]);
  };

  const updateBlogPost = (id: string, updates: Partial<BlogPost>) => {
    setBlogPosts(prev => 
      prev.map(post => 
        post.id === id ? { ...post, ...updates } : post
      )
    );
  };

  const deleteBlogPost = (id: string) => {
    setBlogPosts(prev => prev.filter(post => post.id !== id));
  };

  return (
    <ContentContext.Provider value={{
      bannerContent,
      aboutSection,
      testimonials,
      faqs,
      blogPosts,
      updateBannerContent,
      updateAboutSection,
      addTestimonial,
      updateTestimonial,
      deleteTestimonial,
      addFAQ,
      updateFAQ,
      deleteFAQ,
      addBlogPost,
      updateBlogPost,
      deleteBlogPost,
    }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};