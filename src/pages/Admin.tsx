import React, { useState, useEffect } from 'react';
import { useServices, Service } from '@/contexts/ServiceContext';
import { useContactInfo } from '@/contexts/ContactContext';
import { useAdmin } from '@/contexts/AdminContext';
import { useSiteSettings } from '@/contexts/SiteSettingsContext';
import { useMenu } from '@/contexts/MenuContext';
import { useBackgroundImages } from '@/contexts/BackgroundContext';
import { useContent } from '@/contexts/ContentContext';
import { useGlobalSettings } from '@/contexts/GlobalSettingsContext';
import { useBloodTests } from '@/contexts/BloodTestContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Edit, Trash2, Upload, X, LogOut, Settings, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const Admin = () => {
  const { services, addService, updateService, deleteService } = useServices();
  const { contactInfo, updateContactInfo } = useContactInfo();
  const { siteSettings, updateSiteSettings } = useSiteSettings();
  const { menuItems, addMenuItem, updateMenuItem, deleteMenuItem } = useMenu();
  const { backgroundImages, addBackgroundImage, updateBackgroundImage, deleteBackgroundImage } = useBackgroundImages();
  const { 
    bannerContent, aboutSection, testimonials, faqs, blogPosts,
    updateBannerContent, updateAboutSection, addTestimonial, updateTestimonial, deleteTestimonial,
    addFAQ, updateFAQ, deleteFAQ, addBlogPost, updateBlogPost, deleteBlogPost 
  } = useContent();
  const { settings, updateSettings, currencies, languages } = useGlobalSettings();
  const { bloodTests, addBloodTest, updateBloodTest, deleteBloodTest } = useBloodTests();
  const { isLoggedIn, login, logout } = useAdmin();
  const { toast } = useToast();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [contactForm, setContactForm] = useState(contactInfo);
  const [siteForm, setSiteForm] = useState(siteSettings);

  // State for new menu item form
  const [newMenuItem, setNewMenuItem] = useState({
    title: '',
    path: '',
    order: menuItems.length + 1
  });

  // State for new background image form
  const [newBackgroundImage, setNewBackgroundImage] = useState({
    url: '',
    alt: '',
    order: backgroundImages.length + 1
  });

  // State for banner content form
  const [bannerForm, setBannerForm] = useState(bannerContent);
  const [aboutForm, setAboutForm] = useState(aboutSection);

  // State for new testimonial form
  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    role: '',
    company: '',
    content: '',
    rating: 5,
    imageUrl: ''
  });

  // State for new FAQ form
  const [newFAQ, setNewFAQ] = useState({
    question: '',
    answer: '',
    category: 'General'
  });

  // State for new blog post form
  const [newBlogPost, setNewBlogPost] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    publishDate: new Date().toISOString().split('T')[0],
    category: '',
    imageUrl: '',
    tags: []
  });

  // State for blood test management
  const [newBloodTest, setNewBloodTest] = useState({
    name: '',
    price: '',
    originalPrice: '',
    description: '',
    sampleType: 'Blood',
    fasting: 'Not Required',
    reportTime: '6 hours',
    category: 'Basic',
    popular: false
  });
  const [editingBloodTest, setEditingBloodTest] = useState<any>(null);
  const [isBloodTestDialogOpen, setIsBloodTestDialogOpen] = useState(false);

  // Update forms when context changes
  useEffect(() => {
    setContactForm(contactInfo);
  }, [contactInfo]);

  useEffect(() => {
    setSiteForm(siteSettings);
  }, [siteSettings]);
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    duration: '',
    rating: 4.5,
    patients: 0,
    isPopular: false,
    category: '',
    imageAlt: '',
    image: '',
    detailedDescription: '',
    features: [''],
    requirements: [''],
    additionalImages: ['']
  });

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      price: '',
      duration: '',
      rating: 4.5,
      patients: 0,
      isPopular: false,
      category: '',
      imageAlt: '',
      image: '',
      detailedDescription: '',
      features: [''],
      requirements: [''],
      additionalImages: ['']
    });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(loginForm.username, loginForm.password);
    if (success) {
      toast({
        title: "Login successful",
        description: "Welcome to admin panel."
      });
    } else {
      toast({
        title: "Login failed",
        description: "Invalid username or password.",
        variant: "destructive"
      });
    }
  };

  const handleContactUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    updateContactInfo(contactForm);
    toast({
      title: "Contact info updated",
      description: "Contact information has been updated successfully."
    });
  };

  const handleSiteSettingsUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    updateSiteSettings(siteForm);
    toast({
      title: "Site settings updated",
      description: "Website settings have been updated successfully."
    });
  };

  // If not logged in, show login form
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  value={loginForm.username}
                  onChange={(e) => setLoginForm(prev => ({ ...prev, username: e.target.value }))}
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
                  required
                />
              </div>
              <Button type="submit" variant="medical" className="w-full">
                Login
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                Demo credentials: admin / admin123
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const serviceData = {
      ...formData,
      features: formData.features.filter(f => f.trim() !== ''),
      requirements: formData.requirements.filter(r => r.trim() !== ''),
      additionalImages: formData.additionalImages.filter(img => img.trim() !== '')
    };

    if (editingService) {
      updateService(editingService.id, serviceData);
      toast({
        title: "Service updated",
        description: "Service has been updated successfully."
      });
      setEditingService(null);
    } else {
      addService(serviceData);
      toast({
        title: "Service added",
        description: "New service has been added successfully."
      });
      setIsAddDialogOpen(false);
    }
    
    resetForm();
  };

  const handleEdit = (service: Service) => {
    setEditingService(service);
    setFormData({
      title: service.title,
      description: service.description,
      price: service.price,
      duration: service.duration,
      rating: service.rating,
      patients: service.patients,
      isPopular: service.isPopular || false,
      category: service.category,
      imageAlt: service.imageAlt,
      image: service.image || '',
      detailedDescription: service.detailedDescription || '',
      features: service.features?.length ? service.features : [''],
      requirements: service.requirements?.length ? service.requirements : [''],
      additionalImages: service.additionalImages?.length ? service.additionalImages : ['']
    });
  };

  const handleDelete = (id: string) => {
    deleteService(id);
    toast({
      title: "Service deleted",
      description: "Service has been deleted successfully."
    });
  };

  const updateArrayField = (field: 'features' | 'requirements' | 'additionalImages', index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  const addArrayField = (field: 'features' | 'requirements' | 'additionalImages') => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeArrayField = (field: 'features' | 'requirements' | 'additionalImages', index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  // Blood Test Management Functions
  const handleBloodTestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingBloodTest) {
      updateBloodTest(editingBloodTest.id, newBloodTest);
      toast({
        title: "Blood test updated",
        description: "Blood test has been updated successfully."
      });
      setEditingBloodTest(null);
    } else {
      addBloodTest(newBloodTest);
      toast({
        title: "Blood test added",
        description: "New blood test has been added successfully."
      });
      setIsBloodTestDialogOpen(false);
    }
    
    resetBloodTestForm();
  };

  const handleEditBloodTest = (bloodTest: any) => {
    setEditingBloodTest(bloodTest);
    setNewBloodTest({
      name: bloodTest.name,
      price: bloodTest.price,
      originalPrice: bloodTest.originalPrice,
      description: bloodTest.description,
      sampleType: bloodTest.sampleType,
      fasting: bloodTest.fasting,
      reportTime: bloodTest.reportTime,
      category: bloodTest.category,
      popular: bloodTest.popular
    });
  };

  const handleDeleteBloodTest = (id: string) => {
    deleteBloodTest(id);
    toast({
      title: "Blood test deleted",
      description: "Blood test has been deleted successfully."
    });
  };

  const resetBloodTestForm = () => {
    setNewBloodTest({
      name: '',
      price: '',
      originalPrice: '',
      description: '',
      sampleType: 'Blood',
      fasting: 'Not Required',
      reportTime: '6 hours',
      category: 'Basic',
      popular: false
    });
  };

  const ServiceForm = () => (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="title">Service Title</Label>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="category">Category</Label>
          <Input
            id="category"
            value={formData.category}
            onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="description">Short Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
          required
        />
      </div>

      <div>
        <Label htmlFor="detailedDescription">Detailed Description</Label>
        <Textarea
          id="detailedDescription"
          value={formData.detailedDescription}
          onChange={(e) => setFormData(prev => ({ ...prev, detailedDescription: e.target.value }))}
          rows={4}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="price">Price</Label>
          <Input
            id="price"
            value={formData.price}
            onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
            placeholder={`${settings?.currency?.symbol || '$'}30`}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="duration">Duration</Label>
          <Input
            id="duration"
            value={formData.duration}
            onChange={(e) => setFormData(prev => ({ ...prev, duration: e.target.value }))}
            placeholder="15 min"
            required
          />
        </div>
        
        <div>
          <Label htmlFor="rating">Rating</Label>
          <Input
            id="rating"
            type="number"
            min="1"
            max="5"
            step="0.1"
            value={formData.rating}
            onChange={(e) => setFormData(prev => ({ ...prev, rating: parseFloat(e.target.value) }))}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="patients">Number of Patients</Label>
          <Input
            id="patients"
            type="number"
            value={formData.patients}
            onChange={(e) => setFormData(prev => ({ ...prev, patients: parseInt(e.target.value) }))}
            required
          />
        </div>
        
        <div className="flex items-center space-x-2">
          <Switch
            id="isPopular"
            checked={formData.isPopular}
            onCheckedChange={(checked) => setFormData(prev => ({ ...prev, isPopular: checked }))}
          />
          <Label htmlFor="isPopular">Mark as Popular</Label>
        </div>
      </div>

      <div>
        <Label htmlFor="image">Main Image URL</Label>
        <Input
          id="image"
          value={formData.image}
          onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
          placeholder="https://example.com/image.jpg"
        />
      </div>

      <div>
        <Label htmlFor="imageAlt">Image Alt Text</Label>
        <Input
          id="imageAlt"
          value={formData.imageAlt}
          onChange={(e) => setFormData(prev => ({ ...prev, imageAlt: e.target.value }))}
          required
        />
      </div>

      {/* Features Section */}
      <div>
        <Label>Features</Label>
        {formData.features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-2 mb-2">
            <Input
              value={feature}
              onChange={(e) => updateArrayField('features', index, e.target.value)}
              placeholder="Enter feature"
            />
            {formData.features.length > 1 && (
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => removeArrayField('features', index)}
              >
                <X className="w-4 h-4" />
              </Button>
            )}
          </div>
        ))}
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => addArrayField('features')}
          className="mt-2"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Feature
        </Button>
      </div>

      {/* Requirements Section */}
      <div>
        <Label>Requirements</Label>
        {formData.requirements.map((requirement, index) => (
          <div key={index} className="flex items-center space-x-2 mb-2">
            <Input
              value={requirement}
              onChange={(e) => updateArrayField('requirements', index, e.target.value)}
              placeholder="Enter requirement"
            />
            {formData.requirements.length > 1 && (
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => removeArrayField('requirements', index)}
              >
                <X className="w-4 h-4" />
              </Button>
            )}
          </div>
        ))}
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => addArrayField('requirements')}
          className="mt-2"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Requirement
        </Button>
      </div>

      {/* Additional Images Section */}
      <div>
        <Label>Additional Images</Label>
        {formData.additionalImages.map((image, index) => (
          <div key={index} className="flex items-center space-x-2 mb-2">
            <Input
              value={image}
              onChange={(e) => updateArrayField('additionalImages', index, e.target.value)}
              placeholder="https://example.com/image.jpg"
            />
            {formData.additionalImages.length > 1 && (
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => removeArrayField('additionalImages', index)}
              >
                <X className="w-4 h-4" />
              </Button>
            )}
          </div>
        ))}
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => addArrayField('additionalImages')}
          className="mt-2"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Image
        </Button>
      </div>

      <div className="flex justify-end space-x-2">
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            setEditingService(null);
            setIsAddDialogOpen(false);
            resetForm();
          }}
        >
          Cancel
        </Button>
        <Button type="submit">
          {editingService ? 'Update Service' : 'Add Service'}
        </Button>
      </div>
    </form>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-foreground">Admin Panel</h1>
        <Button onClick={logout} variant="outline">
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </div>

      <Tabs defaultValue="services" className="space-y-6">
            <TabsList className="grid w-full grid-cols-8">
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="bloodtests">Blood Tests</TabsTrigger>
              <TabsTrigger value="contact">Contact Info</TabsTrigger>
              <TabsTrigger value="menu">Menu</TabsTrigger>
              <TabsTrigger value="backgrounds">Backgrounds</TabsTrigger>
              <TabsTrigger value="content">Content</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
              <TabsTrigger value="global-settings">Global</TabsTrigger>
            </TabsList>

        <TabsContent value="services" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Service Management</h2>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Service
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Add New Service</DialogTitle>
                </DialogHeader>
                <ServiceForm />
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="relative">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      <Badge variant="outline" className="mt-1">
                        {service.category}
                      </Badge>
                      {service.isPopular && (
                        <Badge className="ml-2 bg-medical-red text-white">Popular</Badge>
                      )}
                    </div>
                    <div className="flex space-x-1">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(service)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(service.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-bold text-medical-blue">{service.price}</span>
                    <span>{service.duration}</span>
                    <span>★ {service.rating}</span>
                  </div>
                  {service.image && (
                    <div className="mt-2">
                      <img
                        src={service.image}
                        alt={service.imageAlt}
                        className="w-full h-24 object-cover rounded"
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="contact" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Contact Information Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleContactUpdate} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm(prev => ({ ...prev, phone: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="address" className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Address
                  </Label>
                  <Input
                    id="address"
                    value={contactForm.address}
                    onChange={(e) => setContactForm(prev => ({ ...prev, address: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="businessHours" className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Business Hours
                  </Label>
                  <Input
                    id="businessHours"
                    value={contactForm.businessHours}
                    onChange={(e) => setContactForm(prev => ({ ...prev, businessHours: e.target.value }))}
                    required
                  />
                </div>
                <Button type="submit">
                  Update Contact Information
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Blood Tests Management Tab */}
        <TabsContent value="bloodtests" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Blood Test Management</h2>
            <Dialog open={isBloodTestDialogOpen} onOpenChange={setIsBloodTestDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Blood Test
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Add New Blood Test</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleBloodTestSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="bloodtest-name">Test Name</Label>
                      <Input
                        id="bloodtest-name"
                        value={newBloodTest.name}
                        onChange={(e) => setNewBloodTest(prev => ({ ...prev, name: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="bloodtest-category">Category</Label>
                      <select
                        id="bloodtest-category"
                        value={newBloodTest.category}
                        onChange={(e) => setNewBloodTest(prev => ({ ...prev, category: e.target.value }))}
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="Basic">Basic</option>
                        <option value="Cardiac">Cardiac</option>
                        <option value="Organ Function">Organ Function</option>
                        <option value="Hormonal">Hormonal</option>
                        <option value="Diabetes">Diabetes</option>
                        <option value="Vitamins">Vitamins</option>
                        <option value="Minerals">Minerals</option>
                        <option value="Inflammatory">Inflammatory</option>
                        <option value="Cancer Markers">Cancer Markers</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="bloodtest-description">Description</Label>
                    <Textarea
                      id="bloodtest-description"
                      value={newBloodTest.description}
                      onChange={(e) => setNewBloodTest(prev => ({ ...prev, description: e.target.value }))}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="bloodtest-price">Price</Label>
                      <Input
                        id="bloodtest-price"
                        value={newBloodTest.price}
                        onChange={(e) => setNewBloodTest(prev => ({ ...prev, price: e.target.value }))}
                        placeholder={`${settings?.currency?.symbol || '$'}25`}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="bloodtest-original-price">Original Price</Label>
                      <Input
                        id="bloodtest-original-price"
                        value={newBloodTest.originalPrice}
                        onChange={(e) => setNewBloodTest(prev => ({ ...prev, originalPrice: e.target.value }))}
                        placeholder={`${settings?.currency?.symbol || '$'}35`}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="bloodtest-sample-type">Sample Type</Label>
                      <select
                        id="bloodtest-sample-type"
                        value={newBloodTest.sampleType}
                        onChange={(e) => setNewBloodTest(prev => ({ ...prev, sampleType: e.target.value }))}
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="Blood">Blood</option>
                        <option value="Urine">Urine</option>
                        <option value="Saliva">Saliva</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="bloodtest-fasting">Fasting Requirement</Label>
                      <select
                        id="bloodtest-fasting"
                        value={newBloodTest.fasting}
                        onChange={(e) => setNewBloodTest(prev => ({ ...prev, fasting: e.target.value }))}
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="Not Required">Not Required</option>
                        <option value="8 hours">8 hours</option>
                        <option value="12 hours">12 hours</option>
                        <option value="24 hours">24 hours</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="bloodtest-report-time">Report Time</Label>
                      <select
                        id="bloodtest-report-time"
                        value={newBloodTest.reportTime}
                        onChange={(e) => setNewBloodTest(prev => ({ ...prev, reportTime: e.target.value }))}
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="6 hours">6 hours</option>
                        <option value="8 hours">8 hours</option>
                        <option value="12 hours">12 hours</option>
                        <option value="24 hours">24 hours</option>
                        <option value="48 hours">48 hours</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch
                      id="bloodtest-popular"
                      checked={newBloodTest.popular}
                      onCheckedChange={(checked) => setNewBloodTest(prev => ({ ...prev, popular: checked }))}
                    />
                    <Label htmlFor="bloodtest-popular">Mark as Popular</Label>
                  </div>

                  <div className="flex justify-end space-x-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setEditingBloodTest(null);
                        setIsBloodTestDialogOpen(false);
                        resetBloodTestForm();
                      }}
                    >
                      Cancel
                    </Button>
                    <Button type="submit">
                      {editingBloodTest ? 'Update Blood Test' : 'Add Blood Test'}
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bloodTests.map((test) => (
              <Card key={test.id} className="relative">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{test.name}</CardTitle>
                      <Badge variant="outline" className="mt-1">
                        {test.category}
                      </Badge>
                      {test.popular && (
                        <Badge className="ml-2 bg-medical-red text-white">Popular</Badge>
                      )}
                    </div>
                    <div className="flex space-x-1">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEditBloodTest(test)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteBloodTest(test.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{test.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mb-3">
                    <div>Price: {test.price}</div>
                    <div>Original: {test.originalPrice}</div>
                    <div>Report: {test.reportTime}</div>
                    <div>Fasting: {test.fasting}</div>
                  </div>
                  
                  <div className="text-xs">
                    <span>Sample: {test.sampleType}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Edit Blood Test Dialog */}
          {editingBloodTest && (
            <Dialog open={!!editingBloodTest} onOpenChange={() => setEditingBloodTest(null)}>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Edit Blood Test</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleBloodTestSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="edit-bloodtest-name">Test Name</Label>
                      <Input
                        id="edit-bloodtest-name"
                        value={newBloodTest.name}
                        onChange={(e) => setNewBloodTest(prev => ({ ...prev, name: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="edit-bloodtest-category">Category</Label>
                      <select
                        id="edit-bloodtest-category"
                        value={newBloodTest.category}
                        onChange={(e) => setNewBloodTest(prev => ({ ...prev, category: e.target.value }))}
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="Basic">Basic</option>
                        <option value="Cardiac">Cardiac</option>
                        <option value="Organ Function">Organ Function</option>
                        <option value="Hormonal">Hormonal</option>
                        <option value="Diabetes">Diabetes</option>
                        <option value="Vitamins">Vitamins</option>
                        <option value="Minerals">Minerals</option>
                        <option value="Inflammatory">Inflammatory</option>
                        <option value="Cancer Markers">Cancer Markers</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="edit-bloodtest-description">Description</Label>
                    <Textarea
                      id="edit-bloodtest-description"
                      value={newBloodTest.description}
                      onChange={(e) => setNewBloodTest(prev => ({ ...prev, description: e.target.value }))}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="edit-bloodtest-price">Price</Label>
                      <Input
                        id="edit-bloodtest-price"
                        value={newBloodTest.price}
                        onChange={(e) => setNewBloodTest(prev => ({ ...prev, price: e.target.value }))}
                        placeholder={`${settings?.currency?.symbol || '$'}25`}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="edit-bloodtest-original-price">Original Price</Label>
                      <Input
                        id="edit-bloodtest-original-price"
                        value={newBloodTest.originalPrice}
                        onChange={(e) => setNewBloodTest(prev => ({ ...prev, originalPrice: e.target.value }))}
                        placeholder={`${settings?.currency?.symbol || '$'}35`}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="edit-bloodtest-sample-type">Sample Type</Label>
                      <select
                        id="edit-bloodtest-sample-type"
                        value={newBloodTest.sampleType}
                        onChange={(e) => setNewBloodTest(prev => ({ ...prev, sampleType: e.target.value }))}
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="Blood">Blood</option>
                        <option value="Urine">Urine</option>
                        <option value="Saliva">Saliva</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="edit-bloodtest-fasting">Fasting Requirement</Label>
                      <select
                        id="edit-bloodtest-fasting"
                        value={newBloodTest.fasting}
                        onChange={(e) => setNewBloodTest(prev => ({ ...prev, fasting: e.target.value }))}
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="Not Required">Not Required</option>
                        <option value="8 hours">8 hours</option>
                        <option value="12 hours">12 hours</option>
                        <option value="24 hours">24 hours</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="edit-bloodtest-report-time">Report Time</Label>
                      <select
                        id="edit-bloodtest-report-time"
                        value={newBloodTest.reportTime}
                        onChange={(e) => setNewBloodTest(prev => ({ ...prev, reportTime: e.target.value }))}
                        className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="6 hours">6 hours</option>
                        <option value="8 hours">8 hours</option>
                        <option value="12 hours">12 hours</option>
                        <option value="24 hours">24 hours</option>
                        <option value="48 hours">48 hours</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch
                      id="edit-bloodtest-popular"
                      checked={newBloodTest.popular}
                      onCheckedChange={(checked) => setNewBloodTest(prev => ({ ...prev, popular: checked }))}
                    />
                    <Label htmlFor="edit-bloodtest-popular">Mark as Popular</Label>
                  </div>

                  <div className="flex justify-end space-x-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setEditingBloodTest(null);
                        resetBloodTestForm();
                      }}
                    >
                      Cancel
                    </Button>
                    <Button type="submit">
                      Update Blood Test
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          )}
        </TabsContent>

        {/* Menu Management Tab */}
        <TabsContent value="menu" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Menu Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Add New Menu Item */}
              <div className="border rounded-lg p-4 space-y-4">
                <h3 className="font-semibold">Add New Menu Item</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="menu-title">Title</Label>
                    <Input
                      id="menu-title"
                      placeholder="Menu Title"
                      value={newMenuItem.title}
                      onChange={(e) => setNewMenuItem(prev => ({...prev, title: e.target.value}))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="menu-path">Path</Label>
                    <Input
                      id="menu-path"
                      placeholder="/page-url"
                      value={newMenuItem.path}
                      onChange={(e) => setNewMenuItem(prev => ({...prev, path: e.target.value}))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="menu-order">Order</Label>
                    <Input
                      id="menu-order"
                      type="number"
                      placeholder="1"
                      value={newMenuItem.order}
                      onChange={(e) => setNewMenuItem(prev => ({...prev, order: parseInt(e.target.value) || 1}))}
                    />
                  </div>
                </div>
                <Button 
                  onClick={() => {
                    if (newMenuItem.title && newMenuItem.path) {
                      addMenuItem(newMenuItem);
                      setNewMenuItem({ title: '', path: '', order: menuItems.length + 1 });
                      toast({
                        title: "Menu item added",
                        description: "Menu item has been added successfully."
                      });
                    } else {
                      toast({
                        title: "Error",
                        description: "Please fill in all fields",
                        variant: "destructive"
                      });
                    }
                  }}
                  className="w-full"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Menu Item
                </Button>
              </div>

              {/* Existing Menu Items */}
              <div className="space-y-4">
                <h3 className="font-semibold">Current Menu Items</h3>
                {menuItems.map((item) => (
                  <div key={item.id} className="border rounded-lg p-4 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label>Title</Label>
                        <Input
                          value={item.title}
                          onChange={(e) => updateMenuItem(item.id, { title: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label>Path</Label>
                        <Input
                          value={item.path}
                          onChange={(e) => updateMenuItem(item.id, { path: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label>Order</Label>
                        <Input
                          type="number"
                          value={item.order}
                          onChange={(e) => updateMenuItem(item.id, { order: parseInt(e.target.value) || 1 })}
                        />
                      </div>
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => {
                        deleteMenuItem(item.id);
                        toast({
                          title: "Menu item deleted",
                          description: "Menu item has been deleted successfully."
                        });
                      }}
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Background Images Tab */}
        <TabsContent value="backgrounds" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Background Images Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Add New Background Image */}
              <div className="border rounded-lg p-4 space-y-4">
                <h3 className="font-semibold">Add New Background Image</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="bg-url">Image URL</Label>
                    <Input
                      id="bg-url"
                      placeholder="https://example.com/image.jpg"
                      value={newBackgroundImage.url}
                      onChange={(e) => setNewBackgroundImage(prev => ({...prev, url: e.target.value}))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="bg-alt">Alt Text</Label>
                    <Input
                      id="bg-alt"
                      placeholder="Image description"
                      value={newBackgroundImage.alt}
                      onChange={(e) => setNewBackgroundImage(prev => ({...prev, alt: e.target.value}))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="bg-order">Order</Label>
                    <Input
                      id="bg-order"
                      type="number"
                      placeholder="1"
                      value={newBackgroundImage.order}
                      onChange={(e) => setNewBackgroundImage(prev => ({...prev, order: parseInt(e.target.value) || 1}))}
                    />
                  </div>
                </div>
                <Button 
                  onClick={() => {
                    if (newBackgroundImage.url && newBackgroundImage.alt) {
                      addBackgroundImage(newBackgroundImage);
                      setNewBackgroundImage({ url: '', alt: '', order: backgroundImages.length + 1 });
                      toast({
                        title: "Background image added",
                        description: "Background image has been added successfully."
                      });
                    } else {
                      toast({
                        title: "Error",
                        description: "Please fill in all fields",
                        variant: "destructive"
                      });
                    }
                  }}
                  className="w-full"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Background Image
                </Button>
              </div>

              {/* Existing Background Images */}
              <div className="space-y-4">
                <h3 className="font-semibold">Current Background Images</h3>
                {backgroundImages.map((image) => (
                  <div key={image.id} className="border rounded-lg p-4 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>Image URL</Label>
                        <Input
                          value={image.url}
                          onChange={(e) => updateBackgroundImage(image.id, { url: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label>Alt Text</Label>
                        <Input
                          value={image.alt}
                          onChange={(e) => updateBackgroundImage(image.id, { alt: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex-1">
                        <Label>Order</Label>
                        <Input
                          type="number"
                          value={image.order}
                          onChange={(e) => updateBackgroundImage(image.id, { order: parseInt(e.target.value) || 1 })}
                        />
                      </div>
                      <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
                        <img
                          src={image.url}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => {
                        deleteBackgroundImage(image.id);
                        toast({
                          title: "Background image deleted",
                          description: "Background image has been deleted successfully."
                        });
                      }}
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Content Tab */}
        <TabsContent value="content" className="space-y-6">
          {/* Banner Content Management */}
          <Card>
            <CardHeader>
              <CardTitle>Homepage Banner Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="banner-title">Main Title</Label>
                  <Input
                    id="banner-title"
                    value={bannerForm.title}
                    onChange={(e) => setBannerForm(prev => ({...prev, title: e.target.value}))}
                  />
                </div>
                <div>
                  <Label htmlFor="banner-subtitle">Subtitle</Label>
                  <Input
                    id="banner-subtitle"
                    value={bannerForm.subtitle}
                    onChange={(e) => setBannerForm(prev => ({...prev, subtitle: e.target.value}))}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="banner-description">Description</Label>
                <Textarea
                  id="banner-description"
                  value={bannerForm.description}
                  onChange={(e) => setBannerForm(prev => ({...prev, description: e.target.value}))}
                  rows={3}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="primary-btn">Primary Button Text</Label>
                  <Input
                    id="primary-btn"
                    value={bannerForm.primaryButtonText}
                    onChange={(e) => setBannerForm(prev => ({...prev, primaryButtonText: e.target.value}))}
                  />
                </div>
                <div>
                  <Label htmlFor="secondary-btn">Secondary Button Text</Label>
                  <Input
                    id="secondary-btn"
                    value={bannerForm.secondaryButtonText}
                    onChange={(e) => setBannerForm(prev => ({...prev, secondaryButtonText: e.target.value}))}
                  />
                </div>
              </div>
              <Button 
                onClick={() => {
                  updateBannerContent(bannerForm);
                  toast({
                    title: "Banner updated",
                    description: "Homepage banner content has been updated successfully."
                  });
                }}
                className="w-full"
              >
                Update Banner Content
              </Button>
            </CardContent>
          </Card>

          {/* About Section Management */}
          <Card>
            <CardHeader>
              <CardTitle>About Us Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="about-title">Title</Label>
                <Input
                  id="about-title"
                  value={aboutForm.title}
                  onChange={(e) => setAboutForm(prev => ({...prev, title: e.target.value}))}
                />
              </div>
              <div>
                <Label htmlFor="about-description">Description</Label>
                <Textarea
                  id="about-description"
                  value={aboutForm.description}
                  onChange={(e) => setAboutForm(prev => ({...prev, description: e.target.value}))}
                  rows={3}
                />
              </div>
              <div>
                <Label htmlFor="about-image">Image URL</Label>
                <Input
                  id="about-image"
                  value={aboutForm.imageUrl}
                  onChange={(e) => setAboutForm(prev => ({...prev, imageUrl: e.target.value}))}
                />
              </div>
              <div>
                <Label>Features (comma-separated)</Label>
                <Input
                  value={aboutForm.features.join(', ')}
                  onChange={(e) => setAboutForm(prev => ({...prev, features: e.target.value.split(', ').filter(f => f.trim())}))}
                />
              </div>
              <Button 
                onClick={() => {
                  updateAboutSection(aboutForm);
                  toast({
                    title: "About section updated",
                    description: "About us section has been updated successfully."
                  });
                }}
                className="w-full"
              >
                Update About Section
              </Button>
            </CardContent>
          </Card>

          {/* Testimonials Management */}
          <Card>
            <CardHeader>
              <CardTitle>Testimonials Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Add New Testimonial */}
              <div className="border rounded-lg p-4 space-y-4">
                <h3 className="font-semibold">Add New Testimonial</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Name</Label>
                    <Input
                      value={newTestimonial.name}
                      onChange={(e) => setNewTestimonial(prev => ({...prev, name: e.target.value}))}
                    />
                  </div>
                  <div>
                    <Label>Role</Label>
                    <Input
                      value={newTestimonial.role}
                      onChange={(e) => setNewTestimonial(prev => ({...prev, role: e.target.value}))}
                    />
                  </div>
                  <div>
                    <Label>Company</Label>
                    <Input
                      value={newTestimonial.company}
                      onChange={(e) => setNewTestimonial(prev => ({...prev, company: e.target.value}))}
                    />
                  </div>
                  <div>
                    <Label>Rating</Label>
                    <Input
                      type="number"
                      min="1"
                      max="5"
                      value={newTestimonial.rating}
                      onChange={(e) => setNewTestimonial(prev => ({...prev, rating: parseInt(e.target.value) || 5}))}
                    />
                  </div>
                </div>
                <div>
                  <Label>Image URL</Label>
                  <Input
                    value={newTestimonial.imageUrl}
                    onChange={(e) => setNewTestimonial(prev => ({...prev, imageUrl: e.target.value}))}
                  />
                </div>
                <div>
                  <Label>Testimonial Content</Label>
                  <Textarea
                    value={newTestimonial.content}
                    onChange={(e) => setNewTestimonial(prev => ({...prev, content: e.target.value}))}
                    rows={3}
                  />
                </div>
                <Button 
                  onClick={() => {
                    if (newTestimonial.name && newTestimonial.content) {
                      addTestimonial(newTestimonial);
                      setNewTestimonial({ name: '', role: '', company: '', content: '', rating: 5, imageUrl: '' });
                      toast({
                        title: "Testimonial added",
                        description: "New testimonial has been added successfully."
                      });
                    }
                  }}
                  className="w-full"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Testimonial
                </Button>
              </div>

              {/* Existing Testimonials */}
              <div className="space-y-4">
                <h3 className="font-semibold">Current Testimonials</h3>
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="border rounded-lg p-4 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>Name</Label>
                        <Input
                          value={testimonial.name}
                          onChange={(e) => updateTestimonial(testimonial.id, { name: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label>Role</Label>
                        <Input
                          value={testimonial.role}
                          onChange={(e) => updateTestimonial(testimonial.id, { role: e.target.value })}
                        />
                      </div>
                    </div>
                    <div>
                      <Label>Content</Label>
                      <Textarea
                        value={testimonial.content}
                        onChange={(e) => updateTestimonial(testimonial.id, { content: e.target.value })}
                        rows={2}
                      />
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => {
                        deleteTestimonial(testimonial.id);
                        toast({
                          title: "Testimonial deleted",
                          description: "Testimonial has been deleted successfully."
                        });
                      }}
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* FAQ Management */}
          <Card>
            <CardHeader>
              <CardTitle>FAQ Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Add New FAQ */}
              <div className="border rounded-lg p-4 space-y-4">
                <h3 className="font-semibold">Add New FAQ</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Question</Label>
                    <Input
                      value={newFAQ.question}
                      onChange={(e) => setNewFAQ(prev => ({...prev, question: e.target.value}))}
                    />
                  </div>
                  <div>
                    <Label>Category</Label>
                    <Input
                      value={newFAQ.category}
                      onChange={(e) => setNewFAQ(prev => ({...prev, category: e.target.value}))}
                    />
                  </div>
                </div>
                <div>
                  <Label>Answer</Label>
                  <Textarea
                    value={newFAQ.answer}
                    onChange={(e) => setNewFAQ(prev => ({...prev, answer: e.target.value}))}
                    rows={3}
                  />
                </div>
                <Button 
                  onClick={() => {
                    if (newFAQ.question && newFAQ.answer) {
                      addFAQ(newFAQ);
                      setNewFAQ({ question: '', answer: '', category: 'General' });
                      toast({
                        title: "FAQ added",
                        description: "New FAQ has been added successfully."
                      });
                    }
                  }}
                  className="w-full"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add FAQ
                </Button>
              </div>

              {/* Existing FAQs */}
              <div className="space-y-4">
                <h3 className="font-semibold">Current FAQs</h3>
                {faqs.map((faq) => (
                  <div key={faq.id} className="border rounded-lg p-4 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>Question</Label>
                        <Input
                          value={faq.question}
                          onChange={(e) => updateFAQ(faq.id, { question: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label>Category</Label>
                        <Input
                          value={faq.category}
                          onChange={(e) => updateFAQ(faq.id, { category: e.target.value })}
                        />
                      </div>
                    </div>
                    <div>
                      <Label>Answer</Label>
                      <Textarea
                        value={faq.answer}
                        onChange={(e) => updateFAQ(faq.id, { answer: e.target.value })}
                        rows={2}
                      />
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => {
                        deleteFAQ(faq.id);
                        toast({
                          title: "FAQ deleted",
                          description: "FAQ has been deleted successfully."
                        });
                      }}
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Blog Post Management */}
          <Card>
            <CardHeader>
              <CardTitle>Blog Post Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Add New Blog Post */}
              <div className="border rounded-lg p-4 space-y-4">
                <h3 className="font-semibold">Add New Blog Post</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label>Title</Label>
                    <Input
                      value={newBlogPost.title}
                      onChange={(e) => setNewBlogPost(prev => ({...prev, title: e.target.value}))}
                    />
                  </div>
                  <div>
                    <Label>Author</Label>
                    <Input
                      value={newBlogPost.author}
                      onChange={(e) => setNewBlogPost(prev => ({...prev, author: e.target.value}))}
                    />
                  </div>
                  <div>
                    <Label>Category</Label>
                    <Input
                      value={newBlogPost.category}
                      onChange={(e) => setNewBlogPost(prev => ({...prev, category: e.target.value}))}
                    />
                  </div>
                  <div>
                    <Label>Publish Date</Label>
                    <Input
                      type="date"
                      value={newBlogPost.publishDate}
                      onChange={(e) => setNewBlogPost(prev => ({...prev, publishDate: e.target.value}))}
                    />
                  </div>
                </div>
                <div>
                  <Label>Image URL</Label>
                  <Input
                    value={newBlogPost.imageUrl}
                    onChange={(e) => setNewBlogPost(prev => ({...prev, imageUrl: e.target.value}))}
                  />
                </div>
                <div>
                  <Label>Excerpt</Label>
                  <Textarea
                    value={newBlogPost.excerpt}
                    onChange={(e) => setNewBlogPost(prev => ({...prev, excerpt: e.target.value}))}
                    rows={2}
                  />
                </div>
                <div>
                  <Label>Content</Label>
                  <Textarea
                    value={newBlogPost.content}
                    onChange={(e) => setNewBlogPost(prev => ({...prev, content: e.target.value}))}
                    rows={4}
                  />
                </div>
                <Button 
                  onClick={() => {
                    if (newBlogPost.title && newBlogPost.content) {
                      addBlogPost(newBlogPost);
                      setNewBlogPost({
                        title: '', excerpt: '', content: '', author: '',
                        publishDate: new Date().toISOString().split('T')[0],
                        category: '', imageUrl: '', tags: []
                      });
                      toast({
                        title: "Blog post added",
                        description: "New blog post has been added successfully."
                      });
                    }
                  }}
                  className="w-full"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Blog Post
                </Button>
              </div>

              {/* Existing Blog Posts */}
              <div className="space-y-4">
                <h3 className="font-semibold">Current Blog Posts</h3>
                {blogPosts.map((post) => (
                  <div key={post.id} className="border rounded-lg p-4 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label>Title</Label>
                        <Input
                          value={post.title}
                          onChange={(e) => updateBlogPost(post.id, { title: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label>Author</Label>
                        <Input
                          value={post.author}
                          onChange={(e) => updateBlogPost(post.id, { author: e.target.value })}
                        />
                      </div>
                    </div>
                    <div>
                      <Label>Excerpt</Label>
                      <Textarea
                        value={post.excerpt}
                        onChange={(e) => updateBlogPost(post.id, { excerpt: e.target.value })}
                        rows={2}
                      />
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => {
                        deleteBlogPost(post.id);
                        toast({
                          title: "Blog post deleted",
                          description: "Blog post has been deleted successfully."
                        });
                      }}
                    >
                      <Trash2 className="w-4 h-4 mr-2" />
                      Delete
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Website Settings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSiteSettingsUpdate} className="space-y-4">
                <div>
                  <Label htmlFor="websiteName">Website Name</Label>
                  <Input
                    id="websiteName"
                    value={siteForm.websiteName}
                    onChange={(e) => setSiteForm(prev => ({ ...prev, websiteName: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="logoUrl">Logo URL</Label>
                  <Input
                    id="logoUrl"
                    value={siteForm.logoUrl}
                    onChange={(e) => setSiteForm(prev => ({ ...prev, logoUrl: e.target.value }))}
                    placeholder="https://example.com/logo.png"
                  />
                  {siteForm.logoUrl && (
                    <div className="mt-2">
                      <img
                        src={siteForm.logoUrl}
                        alt="Logo preview"
                        className="w-16 h-16 object-cover rounded border"
                      />
                    </div>
                  )}
                </div>
                <div>
                  <Label htmlFor="bannerUrl">Banner/Hero Image URL</Label>
                  <Input
                    id="bannerUrl"
                    value={siteForm.bannerUrl}
                    onChange={(e) => setSiteForm(prev => ({ ...prev, bannerUrl: e.target.value }))}
                    placeholder="https://example.com/banner.jpg"
                  />
                  {siteForm.bannerUrl && (
                    <div className="mt-2">
                      <img
                        src={siteForm.bannerUrl}
                        alt="Banner preview"
                        className="w-full h-32 object-cover rounded border"
                      />
                    </div>
                  )}
                </div>
                <div>
                  <Label htmlFor="favicon">Favicon URL</Label>
                  <Input
                    id="favicon"
                    value={siteForm.favicon}
                    onChange={(e) => setSiteForm(prev => ({ ...prev, favicon: e.target.value }))}
                    placeholder="https://example.com/favicon.ico"
                  />
                </div>
                <Button type="submit">
                  Update Website Settings
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Global Settings Tab */}
        <TabsContent value="global-settings">
          <Card>
            <CardHeader>
              <CardTitle>Global Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Currency Settings */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Currency Settings</h3>
                <div>
                  <Label htmlFor="currency">Default Currency</Label>
                  <select
                    id="currency"
                    value={settings.currency.code}
                    onChange={(e) => {
                      const selectedCurrency = currencies.find(c => c.code === e.target.value);
                      if (selectedCurrency) {
                        updateSettings({ currency: selectedCurrency });
                        toast({
                          title: "Currency Updated",
                          description: `Currency changed to ${selectedCurrency.name}`,
                        });
                      }
                    }}
                    className="w-full p-2 border rounded-md"
                  >
                    {currencies.map(currency => (
                      <option key={currency.code} value={currency.code}>
                        {currency.symbol} - {currency.name} ({currency.code})
                      </option>
                    ))}
                  </select>
                  <p className="text-sm text-muted-foreground mt-1">
                    Current: {settings.currency.symbol} ({settings.currency.name})
                  </p>
                </div>
              </div>

              {/* Language Settings */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Language Settings</h3>
                <div>
                  <Label htmlFor="language">Default Language</Label>
                  <select
                    id="language"
                    value={settings.language.code}
                    onChange={(e) => {
                      const selectedLanguage = languages.find(l => l.code === e.target.value);
                      if (selectedLanguage) {
                        updateSettings({ language: selectedLanguage });
                        toast({
                          title: "Language Updated",
                          description: `Language changed to ${selectedLanguage.name}`,
                        });
                      }
                    }}
                    className="w-full p-2 border rounded-md"
                  >
                    {languages.map(language => (
                      <option key={language.code} value={language.code}>
                        {language.name} ({language.code})
                      </option>
                    ))}
                  </select>
                  <p className="text-sm text-muted-foreground mt-1">
                    Current: {settings.language.name}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h4 className="font-medium mb-2">Preview</h4>
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-sm">
                    Sample price: <span className="font-bold">{settings.currency.symbol}99</span>
                  </p>
                  <p className="text-sm">
                    Language: <span className="font-bold">{settings.language.name}</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Edit Dialog */}
      {editingService && (
        <Dialog open={!!editingService} onOpenChange={() => setEditingService(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Edit Service</DialogTitle>
            </DialogHeader>
            <ServiceForm />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};