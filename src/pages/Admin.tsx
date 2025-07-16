import React, { useState } from 'react';
import { useServices, Service } from '@/contexts/ServiceContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { Plus, Edit, Trash2, Upload, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const Admin = () => {
  const { services, addService, updateService, deleteService } = useServices();
  const { toast } = useToast();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  
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
            placeholder="$30"
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
        <h1 className="text-3xl font-bold text-gray-900">Service Management</h1>
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