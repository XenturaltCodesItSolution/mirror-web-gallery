import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, User, Clock, Search, TrendingUp, Heart, Brain } from "lucide-react";
import { useState } from "react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const blogPosts = [
    {
      id: 1,
      title: "Understanding Thyroid Disorders: Symptoms and Treatment",
      excerpt: "Learn about the most common thyroid disorders, their symptoms, and how early detection can help in effective treatment.",
      content: "Thyroid disorders affect millions of people worldwide, yet many cases go undiagnosed...",
      author: "Dr. Sarah Johnson",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Thyroid Health",
      featured: true,
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "The Importance of Regular Blood Tests for Preventive Healthcare",
      excerpt: "Discover how regular blood testing can help detect health issues early and maintain optimal wellness.",
      content: "Preventive healthcare is becoming increasingly important in today's fast-paced world...",
      author: "Dr. Michael Chen",
      date: "2024-01-12",
      readTime: "7 min read",
      category: "Preventive Care",
      featured: true,
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Diabetes Management: Key Tests and Monitoring",
      excerpt: "Essential information about diabetes testing, monitoring blood sugar levels, and managing the condition effectively.",
      content: "Diabetes management requires consistent monitoring and the right diagnostic tests...",
      author: "Dr. Priya Sharma",
      date: "2024-01-10",
      readTime: "6 min read",
      category: "Diabetes",
      featured: false,
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "Heart Health: Cardiac Tests and When You Need Them",
      excerpt: "A comprehensive guide to cardiac tests, risk factors, and maintaining heart health through proper screening.",
      content: "Heart disease remains one of the leading causes of mortality worldwide...",
      author: "Dr. Robert Anderson",
      date: "2024-01-08",
      readTime: "8 min read",
      category: "Cardiac Health",
      featured: true,
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Women's Health: Essential Screening Tests by Age",
      excerpt: "Age-specific health screening guidelines for women, including when to start and how often to get tested.",
      content: "Women's health needs change throughout different life stages...",
      author: "Dr. Lisa Martinez",
      date: "2024-01-05",
      readTime: "9 min read",
      category: "Women's Health",
      featured: false,
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "Vitamin Deficiencies: Signs, Tests, and Solutions",
      excerpt: "Common vitamin deficiencies, their symptoms, diagnostic tests, and effective treatment approaches.",
      content: "Vitamin deficiencies are more common than many people realize...",
      author: "Dr. James Wilson",
      date: "2024-01-03",
      readTime: "5 min read",
      category: "Nutrition",
      featured: false,
      image: "/api/placeholder/400/250"
    },
    {
      id: 7,
      title: "Cancer Screening: Early Detection Saves Lives",
      excerpt: "Understanding different types of cancer screening tests and their importance in early detection and treatment.",
      content: "Early detection of cancer significantly improves treatment outcomes...",
      author: "Dr. Emily Davis",
      date: "2024-01-01",
      readTime: "10 min read",
      category: "Cancer Screening",
      featured: false,
      image: "/api/placeholder/400/250"
    },
    {
      id: 8,
      title: "Liver Health: Functions, Tests, and Maintenance",
      excerpt: "Everything you need to know about liver function, common liver tests, and tips for maintaining liver health.",
      content: "The liver is one of the most important organs in the human body...",
      author: "Dr. David Kumar",
      date: "2023-12-28",
      readTime: "7 min read",
      category: "Liver Health",
      featured: false,
      image: "/api/placeholder/400/250"
    }
  ];

  const categories = ["All", "Thyroid Health", "Preventive Care", "Diabetes", "Cardiac Health", "Women's Health", "Nutrition", "Cancer Screening", "Liver Health"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-medical-blue to-medical-light py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Health Blog
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Expert insights, health tips, and latest updates from medical professionals
          </p>
          <div className="flex items-center justify-center space-x-4 text-white/80">
            <TrendingUp className="w-5 h-5" />
            <span>Evidence-Based Articles • Expert Authored • Regularly Updated</span>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
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
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-medical-blue mb-4">Featured Articles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our most popular and important health articles curated by medical experts
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featuredPosts.slice(0, 4).map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 relative">
                  <Badge className="absolute top-4 left-4 bg-medical-blue text-white">
                    Featured
                  </Badge>
                  <Badge variant="secondary" className="absolute top-4 right-4">
                    {post.category}
                  </Badge>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-medical-blue leading-tight">
                    {post.title}
                  </CardTitle>
                  <p className="text-gray-600 text-sm">{post.excerpt}</p>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <Button className="w-full" variant="medical-outline">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-medical-blue mb-4">All Articles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse through our comprehensive collection of health articles and guides
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-40 bg-gray-200 relative">
                  <Badge variant="secondary" className="absolute top-3 right-3 text-xs">
                    {post.category}
                  </Badge>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-bold text-medical-blue leading-tight">
                    {post.title}
                  </CardTitle>
                  <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-xs text-gray-500 mb-4">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>

                  <Button className="w-full" variant="medical-outline" size="sm">
                    Read Article
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Health Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-medical-blue mb-4">Health Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore articles by health categories and find information relevant to your needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Cardiac Health</h3>
              <p className="text-gray-600 text-sm mb-4">Heart health, cardiac tests, and prevention</p>
              <Badge variant="outline">12 Articles</Badge>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <Brain className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Thyroid Health</h3>
              <p className="text-gray-600 text-sm mb-4">Thyroid disorders and management</p>
              <Badge variant="outline">8 Articles</Badge>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Preventive Care</h3>
              <p className="text-gray-600 text-sm mb-4">Preventive healthcare and screening</p>
              <Badge variant="outline">15 Articles</Badge>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <User className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">Women's Health</h3>
              <p className="text-gray-600 text-sm mb-4">Women-specific health topics</p>
              <Badge variant="outline">10 Articles</Badge>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-medical-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest health articles and updates directly in your inbox
          </p>
          
          <div className="max-w-md mx-auto flex gap-4">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
            <Button variant="secondary">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;