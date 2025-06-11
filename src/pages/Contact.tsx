
import { ShoppingBag, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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

const Contact = () => {
  const locations = [
    {
      id: 1,
      name: "Main Store",
      address: "123 Tech Street, Silicon Valley, CA 94301",
      phone: "+1 (555) 123-4567",
      email: "store@techhub.com",
      hours: "Mon-Sat: 10AM - 8PM, Sun: 12PM - 6PM",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.639179300927!2d-122.1430196842772!3d37.4419792798305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbc96de8dc419%3A0x35165762d6b80a7!2sStanford%20University!5e0!3m2!1sen!2sus!4v1623767667266!5m2!1sen!2sus"
    },
    {
      id: 2,
      name: "Downtown Branch",
      address: "456 Urban Center, San Francisco, CA 94105",
      phone: "+1 (555) 987-6543",
      email: "downtown@techhub.com",
      hours: "Mon-Fri: 9AM - 7PM, Sat: 10AM - 6PM, Sun: Closed",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0536229852553!2d-122.41941708426773!3d37.77492907976009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c5afe7f79%3A0xdbf78a9033d589!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1623767980276!5m2!1sen!2sus"
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
                  <Link to="/catalog">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      All Products
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
                  <Link to="/contact">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Contact Us
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
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our products or need assistance? Reach out to our friendly team or visit one of our store locations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input id="subject" placeholder="How can we help you?" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea id="message" placeholder="Tell us about your inquiry..." className="min-h-[150px]" />
              </div>
              
              <Button className="w-full sm:w-auto">Send Message</Button>
            </form>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-primary mt-1 mr-3" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  <p className="text-muted-foreground">Monday - Friday, 9AM - 6PM</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-primary mt-1 mr-3" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">support@techhub.com</p>
                  <p className="text-muted-foreground">sales@techhub.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MessageCircle className="w-5 h-5 text-primary mt-1 mr-3" />
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <p className="text-muted-foreground">+1 (555) 987-6543</p>
                  <p className="text-muted-foreground">Chat with us anytime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-semibold mb-6">Our Locations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map(location => (
            <Card key={location.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="h-[300px] w-full">
                  <iframe
                    src={location.mapUrl}
                    className="w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    title={`Map for ${location.name}`}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{location.name}</h3>
                  <div className="space-y-3">
                    <div className="flex">
                      <MapPin className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                      <span>{location.address}</span>
                    </div>
                    <div className="flex">
                      <Phone className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                      <span>{location.phone}</span>
                    </div>
                    <div className="flex">
                      <Mail className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                      <span>{location.email}</span>
                    </div>
                    <div>
                      <p className="font-medium">Opening Hours</p>
                      <p className="text-muted-foreground">{location.hours}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
