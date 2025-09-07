import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface BloodTest {
  id: string;
  name: string;
  price: string;
  originalPrice: string;
  description: string;
  sampleType: string;
  fasting: string;
  reportTime: string;
  category: string;
  popular: boolean;
}

interface BloodTestContextType {
  bloodTests: BloodTest[];
  addBloodTest: (bloodTest: Omit<BloodTest, 'id'>) => void;
  updateBloodTest: (id: string, bloodTest: Partial<BloodTest>) => void;
  deleteBloodTest: (id: string) => void;
}

const BloodTestContext = createContext<BloodTestContextType | undefined>(undefined);

const defaultBloodTests: BloodTest[] = [
  {
    id: '1',
    name: "Complete Blood Count (CBC)",
    price: "$25",
    originalPrice: "$35",
    description: "Comprehensive blood analysis including RBC, WBC, and platelet count",
    sampleType: "Blood",
    fasting: "Not Required",
    reportTime: "6 hours",
    category: "Basic",
    popular: true
  },
  {
    id: '2',
    name: "Lipid Profile",
    price: "$30",
    originalPrice: "$40",
    description: "Cholesterol and triglyceride levels assessment",
    sampleType: "Blood",
    fasting: "12 hours",
    reportTime: "8 hours",
    category: "Cardiac",
    popular: true
  },
  {
    id: '3',
    name: "Liver Function Test (LFT)",
    price: "$35",
    originalPrice: "$45",
    description: "Assessment of liver health and function",
    sampleType: "Blood",
    fasting: "8 hours",
    reportTime: "8 hours",
    category: "Organ Function",
    popular: false
  },
  {
    id: '4',
    name: "Thyroid Profile (T3, T4, TSH)",
    price: "$45",
    originalPrice: "$60",
    description: "Complete thyroid function assessment",
    sampleType: "Blood",
    fasting: "Not Required",
    reportTime: "12 hours",
    category: "Hormonal",
    popular: true
  }
];

export const BloodTestProvider = ({ children }: { children: ReactNode }) => {
  const [bloodTests, setBloodTests] = useState<BloodTest[]>(defaultBloodTests);

  const addBloodTest = (bloodTest: Omit<BloodTest, 'id'>) => {
    const newBloodTest: BloodTest = {
      ...bloodTest,
      id: Date.now().toString(),
    };
    setBloodTests(prev => [...prev, newBloodTest]);
  };

  const updateBloodTest = (id: string, updates: Partial<BloodTest>) => {
    setBloodTests(prev =>
      prev.map(test =>
        test.id === id ? { ...test, ...updates } : test
      )
    );
  };

  const deleteBloodTest = (id: string) => {
    setBloodTests(prev => prev.filter(test => test.id !== id));
  };

  return (
    <BloodTestContext.Provider value={{
      bloodTests,
      addBloodTest,
      updateBloodTest,
      deleteBloodTest,
    }}>
      {children}
    </BloodTestContext.Provider>
  );
};

export const useBloodTests = () => {
  const context = useContext(BloodTestContext);
  if (!context) {
    throw new Error('useBloodTests must be used within a BloodTestProvider');
  }
  return context;
};