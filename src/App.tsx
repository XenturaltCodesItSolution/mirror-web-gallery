import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ServiceProvider } from "@/contexts/ServiceContext";
import { ContactProvider } from "@/contexts/ContactContext";
import { AdminProvider } from "@/contexts/AdminContext";
import { SiteSettingsProvider } from "@/contexts/SiteSettingsContext";
import { MenuProvider } from "@/contexts/MenuContext";
import { BackgroundProvider } from "@/contexts/BackgroundContext";
import { ContentProvider } from "@/contexts/ContentContext";
import { GlobalSettingsProvider } from "@/contexts/GlobalSettingsContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Offers from "./pages/Offers";
import ThyrocarePackage from "./pages/ThyrocarePackage";
import ThyrocareProfile from "./pages/ThyrocareProfile";
import BloodTest from "./pages/BloodTest";
import DiagnosticCentres from "./pages/DiagnosticCentres";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";
import { Admin } from "./pages/Admin";
import { ServiceDetails } from "./pages/ServiceDetails";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <GlobalSettingsProvider>
        <AdminProvider>
          <ServiceProvider>
            <ContactProvider>
              <SiteSettingsProvider>
                <MenuProvider>
                  <BackgroundProvider>
                    <ContentProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <div className="App">
                  <Header />
                  <main>
                    <Routes>
                      <Route path="/" element={<Index />} />
                      <Route path="/offers" element={<Offers />} />
                      <Route path="/thyrocare-package" element={<ThyrocarePackage />} />
                      <Route path="/thyrocare-profile" element={<ThyrocareProfile />} />
                      <Route path="/blood-test" element={<BloodTest />} />
                      <Route path="/diagnostic-centres" element={<DiagnosticCentres />} />
                      <Route path="/blog" element={<Blog />} />
                      <Route path="/shop" element={<Shop />} />
                      <Route path="/admin" element={<Admin />} />
                      <Route path="/service/:id" element={<ServiceDetails />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </main>
                  <Footer />
                </div>
                  </BrowserRouter>
                  </ContentProvider>
                </BackgroundProvider>
              </MenuProvider>
            </SiteSettingsProvider>
          </ContactProvider>
        </ServiceProvider>
      </AdminProvider>
      </GlobalSettingsProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;