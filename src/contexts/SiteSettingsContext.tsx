import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface SiteSettings {
  websiteName: string;
  logoUrl: string;
  bannerUrl: string;
  favicon: string;
}

interface SiteSettingsContextType {
  siteSettings: SiteSettings;
  updateSiteSettings: (settings: Partial<SiteSettings>) => void;
}

const SiteSettingsContext = createContext<SiteSettingsContextType | undefined>(undefined);

const initialSiteSettings: SiteSettings = {
  websiteName: "Medical Consultation",
  logoUrl: "",
  bannerUrl: "",
  favicon: ""
};

export const SiteSettingsProvider = ({ children }: { children: ReactNode }) => {
  const [siteSettings, setSiteSettings] = useState<SiteSettings>(initialSiteSettings);

  const updateSiteSettings = (settings: Partial<SiteSettings>) => {
    setSiteSettings(prev => ({ ...prev, ...settings }));
  };

  return (
    <SiteSettingsContext.Provider value={{
      siteSettings,
      updateSiteSettings
    }}>
      {children}
    </SiteSettingsContext.Provider>
  );
};

export const useSiteSettings = () => {
  const context = useContext(SiteSettingsContext);
  if (!context) {
    throw new Error('useSiteSettings must be used within a SiteSettingsProvider');
  }
  return context;
};