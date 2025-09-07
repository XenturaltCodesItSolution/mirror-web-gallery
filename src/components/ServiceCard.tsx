import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useGlobalSettings } from "@/contexts/GlobalSettingsContext";
import { BookingForm } from "@/components/BookingForm";
import { useState } from "react";

interface ServiceCardProps {
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
}

export const ServiceCard = ({
  id,
  title,
  description,
  price,
  duration,
  rating,
  patients,
  isPopular = false,
  category,
  imageAlt,
  image
}: ServiceCardProps) => {
  const { settings } = useGlobalSettings();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  return (
    <Card className="relative group hover:shadow-xl transition-all duration-300 border-2 hover:border-medical-blue">
      {isPopular && (
        <div className="absolute -top-3 left-4 z-10">
          <Badge className="bg-medical-red text-white">Popular</Badge>
        </div>
      )}
      
      <CardHeader className="pb-4">
        {/* Image */}
        <div className="aspect-[4/3] bg-gradient-to-br from-medical-blue-light to-white rounded-lg mb-4 flex items-center justify-center overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-center">
              <div className="w-16 h-16 bg-medical-blue rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white text-2xl font-bold">{category.charAt(0)}</span>
              </div>
              <p className="text-sm text-gray-500">{imageAlt}</p>
            </div>
          )}
        </div>
        
        <div className="space-y-2">
          <Badge variant="outline" className="text-medical-blue border-medical-blue">
            {category}
          </Badge>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-medical-blue transition-colors">
            {title}
          </h3>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span>{rating}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>{patients} patients</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
        </div>

        {/* Price and CTA */}
        <div className="border-t pt-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="text-2xl font-bold text-medical-blue">
                {settings.currency.symbol}{price.replace(/^[\$₹€£¥]/, '')}
              </span>
              <span className="text-gray-500 text-sm ml-1">+</span>
            </div>
            <Button 
              variant={isPopular ? "medical-red" : "medical"} 
              size="sm"
              className="shrink-0"
              onClick={() => setIsBookingOpen(true)}
            >
              Book Now
            </Button>
          </div>
          
          <Button variant="outline" className="w-full text-sm" asChild>
            <Link to={`/service/${id}`}>
              View Details
            </Link>
          </Button>
        </div>
      </CardContent>
      
      <BookingForm
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        itemName={title}
        itemPrice={`${settings.currency.symbol}${price.replace(/^[\$₹€£¥]/, '')}`}
        itemType="service"
      />
    </Card>
  );
};