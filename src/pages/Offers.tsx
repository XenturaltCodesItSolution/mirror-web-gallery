import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, Percent } from "lucide-react";

const Offers = () => {
  const offers = [
    {
      id: 1,
      title: "Complete Health Checkup",
      originalPrice: "$299",
      discountedPrice: "$199",
      discount: "33% OFF",
      description: "Comprehensive health package including 80+ tests",
      features: ["Blood Sugar", "Lipid Profile", "Liver Function", "Kidney Function", "Thyroid Profile"],
      validTill: "Dec 31, 2024",
      popularity: "Most Popular"
    },
    {
      id: 2,
      title: "Heart Health Package",
      originalPrice: "$199",
      discountedPrice: "$129",
      discount: "35% OFF",
      description: "Complete cardiac health assessment package",
      features: ["ECG", "Echo Cardiogram", "Stress Test", "Lipid Profile", "Cardiac Markers"],
      validTill: "Dec 31, 2024",
      popularity: "Trending"
    },
    {
      id: 3,
      title: "Diabetes Care Package",
      originalPrice: "$149",
      discountedPrice: "$99",
      discount: "33% OFF",
      description: "Comprehensive diabetes monitoring and care",
      features: ["HbA1c", "Fasting Glucose", "Post Meal Glucose", "Insulin Level", "Microalbumin"],
      validTill: "Dec 31, 2024",
      popularity: "Best Value"
    },
    {
      id: 4,
      title: "Women's Health Package",
      originalPrice: "$249",
      discountedPrice: "$179",
      discount: "28% OFF",
      description: "Specialized health package for women",
      features: ["Pap Smear", "Mammography", "Bone Density", "Thyroid Profile", "Vitamin D"],
      validTill: "Dec 31, 2024",
      popularity: "Recommended"
    },
    {
      id: 5,
      title: "Senior Citizen Package",
      originalPrice: "$349",
      discountedPrice: "$249",
      discount: "29% OFF",
      description: "Comprehensive health package for seniors",
      features: ["Complete Blood Count", "Vitamin B12", "Bone Health", "Heart Check", "Cancer Markers"],
      validTill: "Dec 31, 2024",
      popularity: "Age 60+"
    },
    {
      id: 6,
      title: "Executive Health Package",
      originalPrice: "$499",
      discountedPrice: "$349",
      discount: "30% OFF",
      description: "Premium health package for executives",
      features: ["Full Body Scan", "Stress Analysis", "Nutrition Assessment", "Fitness Evaluation", "Health Coaching"],
      validTill: "Dec 31, 2024",
      popularity: "Premium"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-medical-blue to-medical-blue py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Special Health Offers
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Take advantage of our limited-time offers and save on premium health packages
          </p>
          <div className="flex items-center justify-center space-x-4 text-white/80">
            <Clock className="w-5 h-5" />
            <span>Limited Time Offers - Don't Miss Out!</span>
          </div>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer) => (
              <Card key={offer.id} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                <div className="absolute top-4 right-4">
                  <Badge variant="destructive" className="text-sm font-bold">
                    {offer.discount}
                  </Badge>
                </div>
                
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="text-xs">
                    {offer.popularity}
                  </Badge>
                </div>

                <CardHeader className="pt-12">
                  <CardTitle className="text-xl font-bold text-medical-blue">
                    {offer.title}
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-green-600">
                      {offer.discountedPrice}
                    </span>
                    <span className="text-lg text-muted-foreground line-through">
                      {offer.originalPrice}
                    </span>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-4">{offer.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <h4 className="font-semibold text-sm text-medical-blue">Includes:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {offer.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <Star className="w-3 h-3 text-yellow-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>Valid till {offer.validTill}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      <span>1000+ booked</span>
                    </div>
                  </div>

                  <Button className="w-full" variant="medical">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Promotions */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-medical-blue mb-4">
              Additional Promotions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take advantage of these special promotions to save even more on your health packages
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <Percent className="w-12 h-12 text-medical-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Bulk Booking Discount</h3>
              <p className="text-muted-foreground mb-4">Book for 3+ family members and get additional 15% off</p>
              <Button variant="medical-outline">Learn More</Button>
            </Card>

            <Card className="text-center p-6">
              <Users className="w-12 h-12 text-medical-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Refer & Earn</h3>
              <p className="text-muted-foreground mb-4">Refer friends and earn up to $50 credit for each referral</p>
              <Button variant="medical-outline">Refer Now</Button>
            </Card>

            <Card className="text-center p-6">
              <Star className="w-12 h-12 text-medical-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Loyalty Program</h3>
              <p className="text-muted-foreground mb-4">Join our loyalty program and earn points on every booking</p>
              <Button variant="medical-outline">Join Now</Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offers;