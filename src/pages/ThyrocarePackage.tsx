import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, Star, Shield } from "lucide-react";

const ThyrocarePackage = () => {
  const packages = [
    {
      id: 1,
      name: "Basic Thyroid Package",
      price: "$49",
      originalPrice: "$65",
      tests: ["TSH", "T3", "T4"],
      description: "Essential thyroid function tests for basic screening",
      reportTime: "6-8 hours",
      sampleType: "Blood",
      fasting: "Not Required",
      popular: false
    },
    {
      id: 2,
      name: "Complete Thyroid Package",
      price: "$89",
      originalPrice: "$120",
      tests: ["TSH", "T3", "T4", "Free T3", "Free T4", "Anti-TPO"],
      description: "Comprehensive thyroid assessment including antibodies",
      reportTime: "6-8 hours",
      sampleType: "Blood",
      fasting: "Not Required",
      popular: true
    },
    {
      id: 3,
      name: "Advanced Thyroid Package",
      price: "$149",
      originalPrice: "$200",
      tests: ["TSH", "T3", "T4", "Free T3", "Free T4", "Anti-TPO", "Anti-Thyroglobulin", "Reverse T3"],
      description: "Advanced thyroid function assessment with comprehensive antibody panel",
      reportTime: "12-24 hours",
      sampleType: "Blood",
      fasting: "Not Required",
      popular: false
    },
    {
      id: 4,
      name: "Thyroid + Diabetes Package",
      price: "$119",
      originalPrice: "$160",
      tests: ["TSH", "T3", "T4", "Free T3", "Free T4", "HbA1c", "Fasting Glucose", "Post Meal Glucose"],
      description: "Combined thyroid and diabetes screening package",
      reportTime: "6-8 hours",
      sampleType: "Blood",
      fasting: "12 hours fasting required",
      popular: false
    }
  ];

  const features = [
    {
      icon: <Shield className="w-6 h-6 text-medical-blue" />,
      title: "NABL Accredited Labs",
      description: "All tests performed in NABL accredited laboratories"
    },
    {
      icon: <Clock className="w-6 h-6 text-medical-blue" />,
      title: "Fast Results",
      description: "Get your reports within 6-24 hours"
    },
    {
      icon: <Users className="w-6 h-6 text-medical-blue" />,
      title: "Expert Consultation",
      description: "Free consultation with endocrinologist"
    },
    {
      icon: <Star className="w-6 h-6 text-medical-blue" />,
      title: "Home Sample Collection",
      description: "Convenient home sample collection available"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-medical-blue to-medical-light py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Thyrocare Packages
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Comprehensive thyroid health packages with accurate results and expert consultation
          </p>
          <div className="flex items-center justify-center space-x-4 text-white/80">
            <Shield className="w-5 h-5" />
            <span>NABL Accredited • ISO Certified • Trusted by Millions</span>
          </div>
        </div>
      </section>

      {/* About Thyroid Health */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-medical-blue mb-6">
              Why Thyroid Health Matters
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              The thyroid gland plays a crucial role in regulating metabolism, energy levels, and overall health. 
              Thyroid disorders are common but often go undiagnosed. Regular thyroid screening can help detect 
              issues early and ensure proper treatment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-medical-blue mb-4">
              Choose Your Thyroid Package
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select from our range of thyroid packages designed to meet different health needs and budgets
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg) => (
              <Card key={pkg.id} className={`relative overflow-hidden ${pkg.popular ? 'ring-2 ring-medical-blue' : ''}`}>
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-medical-blue text-white px-4 py-1 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-medical-blue">
                    {pkg.name}
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <span className="text-3xl font-bold text-green-600">
                      {pkg.price}
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      {pkg.originalPrice}
                    </span>
                    <Badge variant="secondary">
                      Save {Math.round((1 - parseInt(pkg.price.slice(1)) / parseInt(pkg.originalPrice.slice(1))) * 100)}%
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div>
                      <h4 className="font-semibold text-sm text-medical-blue mb-2">Tests Included:</h4>
                      <div className="flex flex-wrap gap-2">
                        {pkg.tests.map((test, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {test}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>{pkg.reportTime}</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>{pkg.sampleType}</span>
                      </div>
                      <div className="flex items-center col-span-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>{pkg.fasting}</span>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full" variant={pkg.popular ? "medical" : "medical-outline"}>
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Thyrocare */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-medical-blue mb-4">
              Why Choose Thyrocare
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              India's leading diagnostic chain with cutting-edge technology and expert healthcare professionals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-medical-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-medical-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
              <p className="text-gray-600">NABL accredited labs with stringent quality control measures</p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-medical-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-medical-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Team</h3>
              <p className="text-gray-600">Experienced pathologists and healthcare professionals</p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-medical-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-medical-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quick Results</h3>
              <p className="text-gray-600">Fast and accurate test results with digital reports</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThyrocarePackage;