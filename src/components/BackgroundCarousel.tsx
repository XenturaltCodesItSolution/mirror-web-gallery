import { useEffect, useState } from 'react';
import { useBackgroundImages } from '@/contexts/BackgroundContext';

export const BackgroundCarousel = () => {
  const { backgroundImages } = useBackgroundImages();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (backgroundImages.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  if (backgroundImages.length === 0) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-medical-blue-light to-white" />
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      {backgroundImages.map((image, index) => (
        <div
          key={image.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/80" />
        </div>
      ))}
    </div>
  );
};