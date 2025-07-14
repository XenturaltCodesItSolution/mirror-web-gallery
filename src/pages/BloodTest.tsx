import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Droplet, Clock, Shield, Star, Filter } from "lucide-react";
import { useState } from "react";

const BloodTest = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const bloodTests = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
      name: "Kidney Function Test (KFT)",
      price: "$32",
      originalPrice: "$42",
      description: "Evaluation of kidney health and function",
      sampleType: "Blood",
      fasting: "Not Required",
      reportTime: "8 hours",
      category: "Organ Function",
      popular: false
    },
    {
      id: 5,
      name: "Thyroid Profile (T3, T4, TSH)",
      price: "$45",
      originalPrice: "$60",
      description: "Complete thyroid function assessment",
      sampleType: "Blood",
      fasting: "Not Required",
      reportTime: "12 hours",
      category: "Hormonal",
      popular: true
    },
    {
      id: 6,
      name: "Diabetes Panel (HbA1c + Glucose)",
      price: "$40",
      originalPrice: "$55",
      description: "Comprehensive diabetes monitoring panel",
      sampleType: "Blood",
      fasting: "12 hours",
      reportTime: "8 hours",
      category: "Diabetes",
      popular: true
    },
    {
      id: 7,
      name: "Vitamin D Test",
      price: "$50",
      originalPrice: "$70",
      description: "Vitamin D deficiency assessment",
      sampleType: "Blood",
      fasting: "Not Required",
      reportTime: "24 hours",
      category: "Vitamins",
      popular: false
    },
    {
      id: 8,
      name: "Vitamin B12 Test",
      price: "$45",
      originalPrice: "$60",
      description: "Vitamin B12 levels assessment",
      sampleType: "Blood",
      fasting: "Not Required",
      reportTime: "24 hours",
      category: "Vitamins",
      popular: false
    },
    {
      id: 9,
      name: "Iron Studies",
      price: "$55",
      originalPrice: "$75",
      description: "Complete iron deficiency and overload assessment",
      sampleType: "Blood",
      fasting: "12 hours",
      reportTime: "12 hours",
      category: "Minerals",
      popular: false
    },
    {
      id: 10,
      name: "CRP (C-Reactive Protein)",
      price: "$25",
      originalPrice: "$35",
      description: "Inflammation marker assessment",
      sampleType: "Blood",
      fasting: "Not Required",
      reportTime: "6 hours",
      category: "Inflammatory",
      popular: false
    },
    {
      id: 11,
      name: "PSA (Prostate Specific Antigen)",
      price: "$60",
      originalPrice: "$80",
      description: "Prostate health screening for men",
      sampleType: "Blood",
      fasting: "Not Required",
      reportTime: "24 hours",
      category: "Cancer Markers",
      popular: false
    },
    {
      id: 12,
      name: "CA 125 (Ovarian Cancer Marker)",
      price: "$65",
      originalPrice: "$85",
      description: "Ovarian cancer screening marker for women",
      sampleType: "Blood",
      fasting: "Not Required",
      reportTime: "24 hours",
      category: "Cancer Markers",
      popular: false
    }
  ];

  const categories = ["All", "Basic", "Cardiac", "Organ Function", "Hormonal", "Diabetes", "Vitamins", "Minerals", "Inflammatory", "Cancer Markers"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTests = bloodTests.filter(test => {
    const matchesSearch = test.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         test.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || test.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const popularTests = bloodTests.filter(test => test.popular);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-medical-blue to-medical-light py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Blood Test Services
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Comprehensive blood testing services with accurate results and expert analysis
          </p>
          <div className="flex items-center justify-center space-x-4 text-white/80">
            <Droplet className="w-5 h-5" />
            <span>NABL Accredited Labs • Fast Results • Home Collection Available</span>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search blood tests..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-500" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-medical-blue"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Tests */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-medical-blue mb-4">Popular Blood Tests</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Most commonly ordered blood tests with special pricing and fast results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularTests.map((test) => (
              <Card key={test.id} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                <div className="absolute top-4 right-4">
                  <Badge variant="destructive">Popular</Badge>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-medical-blue pr-16">
                    {test.name}
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-green-600">{test.price}</span>
                    <span className="text-lg text-gray-500 line-through">{test.originalPrice}</span>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">{test.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{test.reportTime}</span>
                    </div>
                    <div className="flex items-center">
                      <Droplet className="w-3 h-3 mr-1" />
                      <span>{test.sampleType}</span>
                    </div>
                    <div className="flex items-center col-span-2">
                      <Shield className="w-3 h-3 mr-1" />
                      <span>Fasting: {test.fasting}</span>
                    </div>
                  </div>

                  <Button className="w-full" variant="medical" size="sm">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Tests */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-medical-blue mb-4">All Blood Tests</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete list of available blood tests with detailed information
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTests.map((test) => (
              <Card key={test.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg font-bold text-medical-blue flex-1">
                      {test.name}
                    </CardTitle>
                    <Badge variant="outline" className="text-xs ml-2">
                      {test.category}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-green-600">{test.price}</span>
                    <span className="text-sm text-gray-500 line-through">{test.originalPrice}</span>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">{test.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{test.reportTime}</span>
                    </div>
                    <div className="flex items-center">
                      <Droplet className="w-3 h-3 mr-1" />
                      <span>{test.sampleType}</span>
                    </div>
                    <div className="flex items-center col-span-2">
                      <Shield className="w-3 h-3 mr-1" />
                      <span>Fasting: {test.fasting}</span>
                    </div>
                  </div>

                  <Button className="w-full" variant="medical-outline" size="sm">
                    Book Test
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredTests.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No tests found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-medical-blue mb-4">Why Choose Our Blood Tests</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <Shield className="w-12 h-12 text-medical-blue mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">NABL Accredited</h3>
              <p className="text-gray-600 text-sm">All tests performed in NABL accredited laboratories</p>
            </Card>

            <Card className="text-center p-6">
              <Clock className="w-12 h-12 text-medical-blue mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Fast Results</h3>
              <p className="text-gray-600 text-sm">Get your reports within 6-24 hours</p>
            </Card>

            <Card className="text-center p-6">
              <Droplet className="w-12 h-12 text-medical-blue mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Home Collection</h3>
              <p className="text-gray-600 text-sm">Free home sample collection service available</p>
            </Card>

            <Card className="text-center p-6">
              <Star className="w-12 h-12 text-medical-blue mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Expert Analysis</h3>
              <p className="text-gray-600 text-sm">Reports reviewed by experienced pathologists</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BloodTest;