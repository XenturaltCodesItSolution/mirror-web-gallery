import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, Award, Users, Building2, Microscope } from "lucide-react";

const ThyrocareProfile = () => {
  const stats = [
    { label: "Years of Excellence", value: "25+" },
    { label: "Tests Performed Daily", value: "1M+" },
    { label: "Cities Covered", value: "2000+" },
    { label: "Collection Centers", value: "5000+" }
  ];

  const services = [
    {
      category: "Pathology",
      tests: ["Blood Tests", "Urine Tests", "Stool Tests", "Tissue Biopsy", "Cytology"],
      description: "Comprehensive pathology services with state-of-the-art equipment"
    },
    {
      category: "Radiology",
      tests: ["X-Ray", "CT Scan", "MRI", "Ultrasound", "Mammography"],
      description: "Advanced imaging services with expert radiologist consultation"
    },
    {
      category: "Cardiology",
      tests: ["ECG", "Echo", "Stress Test", "Holter Monitoring", "TMT"],
      description: "Complete cardiac health assessment and monitoring"
    },
    {
      category: "Specialized Tests",
      tests: ["Genetic Testing", "Allergy Testing", "Hormone Tests", "Cancer Markers", "Infectious Disease"],
      description: "Specialized diagnostic tests with cutting-edge technology"
    }
  ];

  const certifications = [
    "NABL Accredited",
    "ISO 15189 Certified",
    "CAP Certified",
    "NABH Accredited",
    "ISO 9001:2015",
    "WHO-GMP Certified"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-medical-blue to-medical-light py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Thyrocare Technologies Ltd.
            </h1>
            <p className="text-xl mb-6">
              India's Leading Diagnostic Chain - Revolutionizing Healthcare Through Technology
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {certifications.map((cert, index) => (
                <Badge key={index} variant="secondary" className="bg-white/20 text-white border-white/30">
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-medical-blue mb-4">About Thyrocare</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Established in 1996, Thyrocare Technologies Limited is India's first and most advanced 
                Totally Automated Laboratory having its strong presence in more than 2000+ cities/towns 
                in India and internationally.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-6">
                <Building2 className="w-12 h-12 text-medical-blue mb-4" />
                <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                <p className="text-gray-600">
                  To provide accurate, reliable, and affordable diagnostic services to every individual, 
                  making healthcare accessible to all sections of society through cutting-edge technology 
                  and innovation.
                </p>
              </Card>

              <Card className="p-6">
                <Award className="w-12 h-12 text-medical-blue mb-4" />
                <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                <p className="text-gray-600">
                  To be the global leader in diagnostic services, setting new standards in healthcare 
                  through technological advancement, quality excellence, and customer satisfaction.
                </p>
              </Card>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6">
                  <div className="text-3xl font-bold text-medical-blue mb-2">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-medical-blue mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive diagnostic services across multiple specialties with state-of-the-art technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-medical-blue flex items-center">
                    <Microscope className="w-6 h-6 mr-2" />
                    {service.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tests.map((test, testIndex) => (
                      <Badge key={testIndex} variant="outline" className="text-xs">
                        {test}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-medical-blue mb-4">Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Led by visionary leaders with decades of experience in healthcare and technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Dr. A. Velumani</h3>
              <p className="text-medical-blue font-semibold mb-2">Founder & Chairman</p>
              <p className="text-gray-600 text-sm">
                Visionary entrepreneur who revolutionized diagnostic industry in India
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Dr. R. Kannan</h3>
              <p className="text-medical-blue font-semibold mb-2">Managing Director</p>
              <p className="text-gray-600 text-sm">
                Expert in laboratory operations and quality management systems
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Mr. S. Kumar</h3>
              <p className="text-medical-blue font-semibold mb-2">CTO</p>
              <p className="text-gray-600 text-sm">
                Technology leader driving digital transformation in healthcare
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-medical-blue text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-white/90 max-w-2xl mx-auto">
              Contact us for any queries or to learn more about our services
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 border-white/20 text-center p-6">
              <MapPin className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Head Office</h3>
              <p className="text-sm text-white/80">
                Thyrocare Technologies Ltd.<br/>
                Plot No. D-37/1, TTC Industrial Area,<br/>
                Turbhe, Navi Mumbai - 400705
              </p>
            </Card>

            <Card className="bg-white/10 border-white/20 text-center p-6">
              <Phone className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Phone</h3>
              <p className="text-sm text-white/80">
                Customer Care:<br/>
                +91-22-6718-6666<br/>
                Toll Free: 1800-208-8223
              </p>
            </Card>

            <Card className="bg-white/10 border-white/20 text-center p-6">
              <Mail className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-sm text-white/80">
                General Queries:<br/>
                info@thyrocare.com<br/>
                Support: support@thyrocare.com
              </p>
            </Card>

            <Card className="bg-white/10 border-white/20 text-center p-6">
              <Clock className="w-8 h-8 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Working Hours</h3>
              <p className="text-sm text-white/80">
                Monday - Friday:<br/>
                9:00 AM - 6:00 PM<br/>
                Saturday: 9:00 AM - 1:00 PM
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="secondary" size="lg">
              Contact Us Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThyrocareProfile;