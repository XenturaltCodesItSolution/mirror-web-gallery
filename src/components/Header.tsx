import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContactInfo } from "@/contexts/ContactContext";
import { useSiteSettings } from "@/contexts/SiteSettingsContext";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { contactInfo } = useContactInfo();
  const { siteSettings } = useSiteSettings();

  return (
    <header className="bg-white shadow-md">
      {/* Top contact bar */}
      <div className="bg-medical-blue text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>Phone: {contactInfo.phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Hours: {contactInfo.businessHours}</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">{contactInfo.email}</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            {siteSettings.logoUrl ? (
              <img src={siteSettings.logoUrl} alt="Logo" className="w-10 h-10 rounded-full object-cover" />
            ) : (
              <div className="w-10 h-10 bg-medical-blue rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">{siteSettings.websiteName.charAt(0)}</span>
              </div>
            )}
            <h1 className="text-xl md:text-2xl font-bold text-medical-blue">
              {siteSettings.websiteName}
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-medical-blue transition-colors">
              Home
            </Link>
            <Link to="/offers" className="text-gray-700 hover:text-medical-blue transition-colors">
              Offers
            </Link>
            <Link to="/thyrocare-package" className="text-gray-700 hover:text-medical-blue transition-colors">
              Thyrocare Package
            </Link>
            <Link to="/thyrocare-profile" className="text-gray-700 hover:text-medical-blue transition-colors">
              Thyrocare Profile
            </Link>
            <Link to="/blood-test" className="text-gray-700 hover:text-medical-blue transition-colors">
              Blood Test
            </Link>
            <Link to="/diagnostic-centres" className="text-gray-700 hover:text-medical-blue transition-colors">
              Diagnostic Centres
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-medical-blue transition-colors">
              Blog
            </Link>
            <Link to="/shop" className="text-gray-700 hover:text-medical-blue transition-colors">
              Shop
            </Link>
            <Link to="/admin" className="text-gray-700 hover:text-medical-blue transition-colors">
              Admin
            </Link>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="medical-outline" size="sm">
              Login
            </Button>
            <Button variant="medical" size="sm">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2 pt-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-medical-blue transition-colors py-2 px-4 border-b"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/offers" 
                className="text-gray-700 hover:text-medical-blue transition-colors py-2 px-4 border-b"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Offers
              </Link>
              <Link 
                to="/thyrocare-package" 
                className="text-gray-700 hover:text-medical-blue transition-colors py-2 px-4 border-b"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Thyrocare Package
              </Link>
              <Link 
                to="/thyrocare-profile" 
                className="text-gray-700 hover:text-medical-blue transition-colors py-2 px-4 border-b"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Thyrocare Profile
              </Link>
              <Link 
                to="/blood-test" 
                className="text-gray-700 hover:text-medical-blue transition-colors py-2 px-4 border-b"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blood Test
              </Link>
              <Link 
                to="/diagnostic-centres" 
                className="text-gray-700 hover:text-medical-blue transition-colors py-2 px-4 border-b"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Diagnostic Centres
              </Link>
              <Link 
                to="/blog" 
                className="text-gray-700 hover:text-medical-blue transition-colors py-2 px-4 border-b"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/shop" 
                className="text-gray-700 hover:text-medical-blue transition-colors py-2 px-4 border-b"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                to="/admin" 
                className="text-gray-700 hover:text-medical-blue transition-colors py-2 px-4 border-b"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Admin
              </Link>
              
              {/* Auth buttons moved below menu items */}
              <div className="flex flex-col space-y-2 pt-4 px-4">
                <Button variant="medical-outline" size="sm" className="w-full">
                  Login
                </Button>
                <Button variant="medical" size="sm" className="w-full">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};