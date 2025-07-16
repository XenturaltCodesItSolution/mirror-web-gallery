import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  businessHours: string;
}

interface ContactContextType {
  contactInfo: ContactInfo;
  updateContactInfo: (info: Partial<ContactInfo>) => void;
}

const ContactContext = createContext<ContactContextType | undefined>(undefined);

const initialContactInfo: ContactInfo = {
  phone: "0120-123-456",
  email: "info@medical-consult.com",
  address: "123 Medical Center Dr, Healthcare City, HC 12345",
  businessHours: "Mon-Fri 9:00-18:00"
};

export const ContactProvider = ({ children }: { children: ReactNode }) => {
  const [contactInfo, setContactInfo] = useState<ContactInfo>(initialContactInfo);

  const updateContactInfo = (info: Partial<ContactInfo>) => {
    setContactInfo(prev => ({ ...prev, ...info }));
  };

  return (
    <ContactContext.Provider value={{
      contactInfo,
      updateContactInfo
    }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContactInfo = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error('useContactInfo must be used within a ContactProvider');
  }
  return context;
};