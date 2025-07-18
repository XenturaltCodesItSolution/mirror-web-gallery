import React, { createContext, useContext, useState, ReactNode } from 'react';

interface BackgroundImage {
  id: string;
  url: string;
  alt: string;
  order: number;
}

interface BackgroundContextType {
  backgroundImages: BackgroundImage[];
  addBackgroundImage: (image: Omit<BackgroundImage, 'id'>) => void;
  updateBackgroundImage: (id: string, image: Partial<BackgroundImage>) => void;
  deleteBackgroundImage: (id: string) => void;
  reorderBackgroundImages: (images: BackgroundImage[]) => void;
}

const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined);

const defaultBackgroundImages: BackgroundImage[] = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    alt: 'Medical consultation',
    order: 1
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
    alt: 'Healthcare team',
    order: 2
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    alt: 'Medical equipment',
    order: 3
  }
];

export const BackgroundProvider = ({ children }: { children: ReactNode }) => {
  const [backgroundImages, setBackgroundImages] = useState<BackgroundImage[]>(defaultBackgroundImages);

  const addBackgroundImage = (image: Omit<BackgroundImage, 'id'>) => {
    const newImage: BackgroundImage = {
      ...image,
      id: Date.now().toString(),
    };
    setBackgroundImages(prev => [...prev, newImage].sort((a, b) => a.order - b.order));
  };

  const updateBackgroundImage = (id: string, updates: Partial<BackgroundImage>) => {
    setBackgroundImages(prev => 
      prev.map(image => 
        image.id === id ? { ...image, ...updates } : image
      ).sort((a, b) => a.order - b.order)
    );
  };

  const deleteBackgroundImage = (id: string) => {
    setBackgroundImages(prev => prev.filter(image => image.id !== id));
  };

  const reorderBackgroundImages = (images: BackgroundImage[]) => {
    setBackgroundImages(images);
  };

  return (
    <BackgroundContext.Provider value={{
      backgroundImages,
      addBackgroundImage,
      updateBackgroundImage,
      deleteBackgroundImage,
      reorderBackgroundImages,
    }}>
      {children}
    </BackgroundContext.Provider>
  );
};

export const useBackgroundImages = () => {
  const context = useContext(BackgroundContext);
  if (context === undefined) {
    throw new Error('useBackgroundImages must be used within a BackgroundProvider');
  }
  return context;
};