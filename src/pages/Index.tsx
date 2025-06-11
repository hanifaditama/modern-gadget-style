
import { ShoppingBag, Shield, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import WhatsAppButton from "@/components/WhatsAppButton";
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
  const featuredProducts = [
    {
      id: 1,
      name: "MacBook Pro 16-inch",
      price: "$2,499",
      originalPrice: "$2,799",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=400&fit=crop",
      badge: "Best Seller",
      inStock: true
    },
    {
      id: 2,
      name: "iPhone 15 Pro",
      price: "$999",
      originalPrice: "$1,199",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=400&fit=crop",
      badge: "New",
      inStock: true
    },
    {
      id: 3,
      name: "Surface Laptop Studio",
      price: "$1,799",
      originalPrice: "$1,999",
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&h=400&fit=crop",
      badge: "Sale",
      inStock: false
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
      description: "On orders over $500"
    }
  ];

  const handleBuyClick = (productName: string) => {
    const message = `Hi! I'm interested in buying ${productName}. Can you provide more details?`;
    const whatsappUrl = `https://wa.me/15551234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
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
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        <li>
                          <Link 
                            to="/catalog?category=macbook"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">MacBooks</div>
                          </Link>
                        </li>
                        <li>
                          <Link 
                            to="/catalog?category=iphone"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">iPhones</div>
                          </Link>
                        </li>
                        <li>
                          <Link 
                            to="/catalog?category=windows"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Windows Laptops</div>
                          </Link>
                        </li>
                        <li>
                          <Link 
                            to="/catalog?category=gaming"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Gaming Laptops</div>
                          </Link>
                        </li>
                        <li>
                          <Link 
                            to="/catalog?category=office"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Office Laptops</div>
                          </Link>
                        </li>
                      </ul>
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
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {product.badge}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-foreground">
                          {product.price}
                        </span>
                        <span className="text-lg text-muted-foreground line-through">
                          {product.originalPrice}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className={`text-sm font-medium px-2 py-1 rounded ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {product.inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                      </div>
                      <Button 
                        size="sm" 
                        className="ml-4"
                        disabled={!product.inStock}
                        onClick={() => handleBuyClick(product.name)}
                      >
                        Buy
                      </Button>
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
      <WhatsAppButton phoneNumber="15551234567" />
    </div>
  );
};

export default Index;
