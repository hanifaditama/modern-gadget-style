
import { ShoppingBag, Shield, Truck, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useState } from "react";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const featuredProducts = [
    {
      id: 1,
      name: "MacBook Pro 16-inch",
      price: 25000000,
      originalPrice: 30000000,
      images: [
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1496181133206-80ce9b886505?w=600&h=400&fit=crop"
      ],
      badge: "Best Seller",
      inStock: true,
      description: "The most powerful MacBook Pro ever. With the blazing-fast M2 Pro or M2 Max chip — along with up to 22 hours of battery life — MacBook Pro enables creatives, developers, and entrepreneurs to push the boundaries of what's possible.",
      specifications: {
        "Processor": "Apple M2 Pro 12-core CPU",
        "Memory": "16GB unified memory",
        "Storage": "512GB SSD storage",
        "Display": "16.2-inch Liquid Retina XDR display",
        "Graphics": "19-core GPU",
        "Battery": "Up to 22 hours video playback",
        "Operating System": "macOS Ventura"
      }
    },
    {
      id: 2,
      name: "iPhone 15 Pro",
      price: 15000000,
      originalPrice: 17000000,
      images: [
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&h=400&fit=crop"
      ],
      badge: "New",
      inStock: true,
      description: "iPhone 15 Pro. Forged in titanium and featuring the groundbreaking A17 Pro chip, a customizable Action Button, and the most powerful iPhone camera system ever.",
      specifications: {
        "Chip": "A17 Pro chip",
        "Display": "6.1-inch Super Retina XDR display",
        "Camera": "Pro camera system (48MP Main, 12MP Ultra Wide, 12MP Telephoto)",
        "Storage": "128GB",
        "Operating System": "iOS 17",
        "Material": "Titanium with textured matte glass back",
        "Water Resistance": "Rated IP68"
      }
    },
    {
      id: 3,
      name: "Surface Laptop Studio",
      price: 20000000,
      originalPrice: 22000000,
      images: [
        "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=600&h=400&fit=crop"
      ],
      badge: "Sale",
      inStock: false,
      description: "The Surface Laptop Studio is a versatile device designed for creators and professionals, featuring a unique hinge design and powerful performance.",
      specifications: {
        "Processor": "Intel Core i7-11370H",
        "Memory": "32GB RAM",
        "Storage": "1TB SSD",
        "Display": "14.4-inch PixelSense Flow touch display",
        "Graphics": "NVIDIA GeForce RTX 3050 Ti",
        "Battery": "Up to 19 hours",
        "Operating System": "Windows 11 Pro"
      }
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "1 Year Warranty",
      description: "Comprehensive protection on all devices"
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On orders over Rp 5,000,000"
    }
  ];

  const handleBuyClick = (productName: string) => {
    const message = `Hi! I'm interested in buying ${productName}. Can you provide more details?`;
    const whatsappUrl = `https://wa.me/+628988030869?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleMarketplaceClick = (productName: string, marketplace: string) => {
    const message = `Hi! I'm interested in buying ${productName} through ${marketplace}.`;
    const whatsappUrl = `https://wa.me/+628988030869?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const marketplaces = [
    {
      name: "Tokopedia",
      logo: "/lovable-uploads/ecc6a3c5-f7ab-48ab-b6ae-d9160c317aa6.png",
      url: "https://tokopedia.com/yourstorename"
    },
    {
      name: "Shopee", 
      logo: "/lovable-uploads/eb83872b-9662-4acb-b949-33bf73d2991a.png",
      url: "https://shopee.co.id/yourstorename"
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const nextImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prev) => 
        prev === selectedProduct.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProduct) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProduct.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Link to="/" className="flex items-center space-x-2">
                <ShoppingBag className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold text-foreground">TechHub</span>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link to="/">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Home
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <Link to="/catalog">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Products
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[200px] p-2">
                        <Link 
                          to="/catalog?category=macbook"
                          className="block px-3 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          MacBooks
                        </Link>
                        <Link 
                          to="/catalog?category=iphone"
                          className="block px-3 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          iPhones
                        </Link>
                        <Link 
                          to="/catalog?category=windows"
                          className="block px-3 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          Windows Laptops
                        </Link>
                        <Link 
                          to="/catalog?category=gaming"
                          className="block px-3 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          Gaming Laptops
                        </Link>
                        <Link 
                          to="/catalog?category=office"
                          className="block px-3 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          Office Laptops
                        </Link>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <Link to="/about">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        About Us
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            
            <Button variant="outline" size="sm" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Premium Tech.
              <span className="block text-primary">Unbeatable Prices.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover the latest MacBooks, Windows laptops, and iPhones at incredible prices. 
              Quality guaranteed, service exceptional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-3" asChild>
                <Link to="/catalog">Shop Now</Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3" asChild>
                <Link to="/catalog">View Catalog</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hand-picked devices that deliver exceptional performance and value
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group cursor-pointer border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div 
                        className="relative overflow-hidden rounded-t-lg cursor-pointer"
                        onClick={() => {
                          setSelectedProduct(product);
                          setCurrentImageIndex(0);
                        }}
                      >
                        <img 
                          src={product.images[0]} 
                          alt={product.name}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                            {product.badge}
                          </span>
                        </div>
                      </div>
                    </DialogTrigger>
                    
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold">{selectedProduct?.name}</DialogTitle>
                      </DialogHeader>
                      
                      {selectedProduct && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {/* Image Carousel */}
                          <div className="relative">
                            <div className="relative overflow-hidden rounded-lg">
                              <img 
                                src={selectedProduct.images[currentImageIndex]} 
                                alt={selectedProduct.name}
                                className="w-full h-96 object-cover"
                              />
                              
                              {selectedProduct.images.length > 1 && (
                                <>
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                                    onClick={prevImage}
                                  >
                                    <ChevronLeft className="h-4 w-4" />
                                  </Button>
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                                    onClick={nextImage}
                                  >
                                    <ChevronRight className="h-4 w-4" />
                                  </Button>
                                </>
                              )}
                            </div>
                            
                            {/* Image Thumbnails */}
                            {selectedProduct.images.length > 1 && (
                              <div className="flex gap-2 mt-4 overflow-x-auto">
                                {selectedProduct.images.map((image, index) => (
                                  <img
                                    key={index}
                                    src={image}
                                    alt={`${selectedProduct.name} ${index + 1}`}
                                    className={`w-16 h-16 object-cover rounded cursor-pointer border-2 ${
                                      index === currentImageIndex ? 'border-primary' : 'border-gray-200'
                                    }`}
                                    onClick={() => setCurrentImageIndex(index)}
                                  />
                                ))}
                              </div>
                            )}
                          </div>
                          
                          {/* Product Details */}
                          <div className="space-y-6">
                            <div>
                              <div className="flex flex-col space-y-1 mb-4">
                                <span className="text-lg text-muted-foreground line-through">
                                  {formatPrice(selectedProduct.originalPrice)}
                                </span>
                                <span className="text-3xl font-bold text-foreground">
                                  {formatPrice(selectedProduct.price)}
                                </span>
                              </div>
                              
                              <div className="mb-4">
                                <Badge variant={selectedProduct.inStock ? "default" : "destructive"}>
                                  {selectedProduct.inStock ? 'In Stock' : 'Out of Stock'}
                                </Badge>
                              </div>
                              
                              <Button 
                                className="w-full mb-4"
                                disabled={!selectedProduct.inStock}
                                onClick={() => handleBuyClick(selectedProduct.name)}
                              >
                                Buy Now
                              </Button>
                              
                              <div className="space-y-2">
                                <p className="text-sm text-muted-foreground text-center">Also available at:</p>
                                <div className="grid grid-cols-2 gap-2">
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                    className="text-sm h-10 px-3"
                                    onClick={() => handleMarketplaceClick(selectedProduct.name, 'Tokopedia')}
                                  >
                                    <img src="/lovable-uploads/ecc6a3c5-f7ab-48ab-b6ae-d9160c317aa6.png" alt="Tokopedia" className="w-5 h-5 mr-2" />
                                    Tokopedia
                                  </Button>
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                    className="text-sm h-10 px-3"
                                    onClick={() => handleMarketplaceClick(selectedProduct.name, 'Shopee')}
                                  >
                                    <img src="/lovable-uploads/eb83872b-9662-4acb-b949-33bf73d2991a.png" alt="Shopee" className="w-5 h-5 mr-2" />
                                    Shopee
                                  </Button>
                                </div>
                              </div>
                            </div>
                            
                            {/* Description */}
                            <div>
                              <h3 className="text-lg font-semibold mb-2">Description</h3>
                              <p className="text-muted-foreground">{selectedProduct.description}</p>
                            </div>
                            
                            {/* Specifications */}
                            <div>
                              <h3 className="text-lg font-semibold mb-2">Specifications</h3>
                              <div className="space-y-2">
                                {Object.entries(selectedProduct.specifications).map(([key, value]) => (
                                  <div key={key} className="flex justify-between py-1 border-b border-border/50">
                                    <span className="font-medium">{key}:</span>
                                    <span className="text-muted-foreground">{String(value)}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {product.name}
                    </h3>
                    <div className="space-y-3">
                      {/* Price Section - moved original price above current price */}
                      <div className="flex flex-col">
                        <span className="text-sm text-muted-foreground line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                        <span className="text-xl font-bold text-foreground">
                          {formatPrice(product.price)}
                        </span>
                      </div>
                      
                      {/* Stock Status */}
                      <div className="flex items-center">
                        <span className={`text-sm font-medium px-2 py-1 rounded ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {product.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                      </div>
                      
                      {/* Buy Button */}
                      <Button 
                        size="sm" 
                        className="w-full"
                        disabled={!product.inStock}
                        onClick={() => handleBuyClick(product.name)}
                      >
                        Buy Now
                      </Button>
                      
                      {/* Marketplace Buttons */}
                      <div className="space-y-2">
                        <p className="text-sm text-muted-foreground text-center">Also available at:</p>
                        <div className="grid grid-cols-2 gap-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="text-sm h-10 px-2"
                            onClick={() => handleMarketplaceClick(product.name, 'Tokopedia')}
                          >
                            <img src="/lovable-uploads/ecc6a3c5-f7ab-48ab-b6ae-d9160c317aa6.png" alt="Tokopedia" className="w-4 h-4 mr-1" />
                            Tokopedia
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="text-sm h-10 px-2"
                            onClick={() => handleMarketplaceClick(product.name, 'Shopee')}
                          >
                            <img src="/lovable-uploads/eb83872b-9662-4acb-b949-33bf73d2991a.png" alt="Shopee" className="w-4 h-4 mr-1" />
                            Shopee
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/catalog">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketplace Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Find Us on Marketplaces
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Shop our products on your favorite marketplace platforms
            </p>
          </div>
          
          <div className="flex justify-center items-center gap-8">
            {marketplaces.map((marketplace) => (
              <Card 
                key={marketplace.name} 
                className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                onClick={() => window.open(marketplace.url, '_blank')}
              >
                <CardContent className="p-8 text-center">
                  <img 
                    src={marketplace.logo} 
                    alt={marketplace.name}
                    className="h-12 w-auto mx-auto mb-4 object-contain"
                  />
                  <h3 className="text-xl font-semibold">{marketplace.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <ShoppingBag className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold text-foreground">TechHub</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Your trusted partner for premium technology products
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-3">Products</h3>
              <ul className="space-y-2">
                <li><Link to="/catalog?category=macbook" className="text-muted-foreground hover:text-foreground transition-colors">MacBooks</Link></li>
                <li><Link to="/catalog?category=iphone" className="text-muted-foreground hover:text-foreground transition-colors">iPhones</Link></li>
                <li><Link to="/catalog?category=windows" className="text-muted-foreground hover:text-foreground transition-colors">Windows Laptops</Link></li>
                <li><Link to="/catalog?category=gaming" className="text-muted-foreground hover:text-foreground transition-colors">Gaming Laptops</Link></li>
                <li><Link to="/catalog?category=office" className="text-muted-foreground hover:text-foreground transition-colors">Office Laptops</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-3">Support</h3>
              <ul className="space-y-2">
                <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact Us</Link></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Warranty</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Shipping</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Returns</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-3">Visit Us</h3>
              <address className="not-italic text-muted-foreground">
                <p>123 Tech Street</p>
                <p>Silicon Valley, CA 94301</p>
                <p className="mt-2">+1 (555) 123-4567</p>
                <p>support@techhub.com</p>
              </address>
            </div>
          </div>
          
          <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} TechHub. All rights reserved.</p>
            <div className="flex space-x-6 text-sm text-muted-foreground mt-4 md:mt-0">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* WhatsApp Button */}
      <WhatsAppButton phoneNumber="+628988030869" />
    </div>
  );
};

export default Index;
