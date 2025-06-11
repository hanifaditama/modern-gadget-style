
import { ShoppingBag, Award, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const About = () => {
  const stats = [
    {
      icon: Award,
      title: "5 Years",
      description: "In business"
    },
    {
      icon: Users,
      title: "10,000+",
      description: "Happy customers"
    },
    {
      icon: Clock,
      title: "24/7",
      description: "Customer support"
    }
  ];

  // Navigation component
  const Navigation = () => (
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
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About TechHub</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are your trusted technology partner, specializing in premium gadgets including MacBooks, 
            Windows laptops, and iPhones. Our commitment is to provide quality products at unbeatable prices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {stat.title}
                </h3>
                <p className="text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2019, TechHub began with a simple mission: to make premium technology 
                accessible to everyone. What started as a small operation has grown into a trusted 
                retailer serving thousands of customers.
              </p>
              <p>
                We specialize in carefully selected gadgets including the latest MacBooks, 
                high-performance Windows laptops, and cutting-edge iPhones. Every product we sell 
                is backed by our commitment to quality and customer satisfaction.
              </p>
              <p>
                Our team of tech enthusiasts works tirelessly to curate the best products and 
                provide exceptional service to help you find the perfect device for your needs.
              </p>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold mb-1">Quality Guaranteed</h3>
                  <p className="text-muted-foreground">All our products come with manufacturer warranty and quality assurance.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold mb-1">Competitive Prices</h3>
                  <p className="text-muted-foreground">We offer the best prices in the market without compromising on quality.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold mb-1">Expert Support</h3>
                  <p className="text-muted-foreground">Our knowledgeable team is here to help you make the right choice.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold mb-1">Fast Service</h3>
                  <p className="text-muted-foreground">Quick responses and efficient service to get you what you need.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center bg-muted/30 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Device?</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Browse our collection of premium gadgets or get in touch with our team for personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/catalog">Browse Products</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
