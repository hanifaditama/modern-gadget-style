
import { useState } from "react";
import { ShoppingBag, Star, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
import { Separator } from "@/components/ui/separator";

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<number[]>([0, 3000]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const categories = [
    { id: "all", name: "All Products" },
    { id: "macbook", name: "MacBooks" },
    { id: "iphone", name: "iPhones" },
    { id: "windows", name: "Windows Laptops" },
    { id: "gaming", name: "Gaming Laptops" },
    { id: "office", name: "Office Laptops" }
  ];

  const allProducts = [
    {
      id: 1,
      name: "MacBook Pro 16-inch",
      price: 2499,
      originalPrice: 2799,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=400&fit=crop",
      rating: 4.9,
      reviews: 127,
      badge: "Best Seller",
      category: "macbook"
    },
    {
      id: 2,
      name: "iPhone 15 Pro",
      price: 999,
      originalPrice: 1199,
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=400&fit=crop",
      rating: 4.8,
      reviews: 89,
      badge: "New",
      category: "iphone"
    },
    {
      id: 3,
      name: "Surface Laptop Studio",
      price: 1799,
      originalPrice: 1999,
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&h=400&fit=crop",
      rating: 4.7,
      reviews: 56,
      badge: "Sale",
      category: "windows"
    },
    {
      id: 4,
      name: "ASUS ROG Zephyrus",
      price: 1999,
      originalPrice: 2199,
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&h=400&fit=crop",
      rating: 4.8,
      reviews: 75,
      badge: "Gaming",
      category: "gaming"
    },
    {
      id: 5,
      name: "iPhone 14",
      price: 799,
      originalPrice: 899,
      image: "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=600&h=400&fit=crop",
      rating: 4.5,
      reviews: 120,
      badge: "",
      category: "iphone"
    },
    {
      id: 6,
      name: "Dell XPS 13",
      price: 1299,
      originalPrice: 1499,
      image: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=600&h=400&fit=crop",
      rating: 4.6,
      reviews: 89,
      badge: "Office",
      category: "office"
    },
    {
      id: 7,
      name: "MacBook Air",
      price: 999,
      originalPrice: 1199,
      image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&h=400&fit=crop",
      rating: 4.7,
      reviews: 112,
      badge: "Popular",
      category: "macbook"
    },
    {
      id: 8,
      name: "Lenovo ThinkPad X1",
      price: 1399,
      originalPrice: 1599,
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&h=400&fit=crop",
      rating: 4.5,
      reviews: 78,
      badge: "Office",
      category: "office"
    },
    {
      id: 9,
      name: "Razer Blade 15",
      price: 2399,
      originalPrice: 2599,
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&h=400&fit=crop",
      rating: 4.7,
      reviews: 67,
      badge: "Gaming",
      category: "gaming"
    }
  ];

  // Filter products by category and price
  const filteredProducts = allProducts.filter(product => {
    const categoryMatch = selectedCategory === "all" || product.category === selectedCategory;
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    return categoryMatch && priceMatch;
  });

  // Create a Navigation component
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
                      {categories.slice(1).map((category) => (
                        <li key={category.id}>
                          <Link 
                            to={`/catalog?category=${category.id}`}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            onClick={() => setSelectedCategory(category.id)}
                          >
                            <div className="text-sm font-medium leading-none">{category.name}</div>
                          </Link>
                        </li>
                      ))}
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
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Products Catalog</h1>
          <Button 
            variant="outline"
            size="sm"
            className="flex items-center gap-2 md:hidden"
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
          >
            <Filter size={16} />
            <span>Filters</span>
          </Button>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters - Mobile */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 md:hidden">
              <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-background p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold">Filters</h2>
                  <Button variant="ghost" size="sm" onClick={() => setMobileFiltersOpen(false)}>
                    <X size={18} />
                  </Button>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium mb-3">Categories</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <Button
                          key={category.id}
                          variant={selectedCategory === category.id ? "default" : "outline"}
                          size="sm"
                          className="mr-2 mb-2"
                          onClick={() => setSelectedCategory(category.id)}
                        >
                          {category.name}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium mb-3">Price Range</h3>
                    <div className="space-y-4">
                      <Slider
                        defaultValue={[0, 3000]}
                        max={3000}
                        step={100}
                        value={priceRange}
                        onValueChange={setPriceRange}
                      />
                      <div className="flex items-center justify-between">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Filters - Desktop */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <div className="border rounded-lg p-4 space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <Button
                        key={category.id}
                        variant={selectedCategory === category.id ? "default" : "outline"}
                        size="sm"
                        className="mr-2 mb-2"
                        onClick={() => setSelectedCategory(category.id)}
                      >
                        {category.name}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-medium mb-3">Price Range</h3>
                  <div className="space-y-4">
                    <Slider
                      defaultValue={[0, 3000]}
                      max={3000}
                      step={100}
                      value={priceRange}
                      onValueChange={setPriceRange}
                    />
                    <div className="flex items-center justify-between">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <Card key={product.id} className="group cursor-pointer border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {product.badge && (
                          <div className="absolute top-4 left-4">
                            <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                              {product.badge}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {product.name}
                        </h3>
                        <div className="flex items-center mb-3">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-muted'}`} 
                              />
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground ml-2">
                            {product.rating} ({product.reviews} reviews)
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl font-bold text-foreground">
                              ${product.price}
                            </span>
                            <span className="text-lg text-muted-foreground line-through">
                              ${product.originalPrice}
                            </span>
                          </div>
                          <Button size="sm" className="ml-4">
                            Add to Cart
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <div className="col-span-3 py-12 text-center">
                  <p className="text-lg text-muted-foreground">No products found matching your filters.</p>
                  <Button 
                    variant="outline" 
                    className="mt-4" 
                    onClick={() => {
                      setSelectedCategory("all");
                      setPriceRange([0, 3000]);
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
