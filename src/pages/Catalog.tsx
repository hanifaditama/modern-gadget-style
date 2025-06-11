import { useState } from "react";
import { ShoppingBag, Filter, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
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
  const [priceRange, setPriceRange] = useState<number[]>([0, 50000000]);
  const [minPrice, setMinPrice] = useState<string>("0");
  const [maxPrice, setMaxPrice] = useState<string>("50000000");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      price: 41650000,
      originalPrice: 46650000,
      images: [
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=400&fit=crop"
      ],
      badge: "Best Seller",
      category: "macbook",
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
      price: 16650000,
      originalPrice: 19990000,
      images: [
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&h=400&fit=crop"
      ],
      badge: "New",
      category: "iphone",
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
      price: 26900000,
      originalPrice: 29900000,
      images: [
        "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=600&h=400&fit=crop"
      ],
      badge: "Sale",
      category: "windows",
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
    },
    {
      id: 4,
      name: "ASUS ROG Zephyrus",
      price: 29900000,
      originalPrice: 32900000,
      images: [
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&h=400&fit=crop"
      ],
      badge: "Gaming",
      category: "gaming",
      inStock: true,
      description: "ASUS ROG Zephyrus is a high-performance gaming laptop with powerful graphics and a sleek design, perfect for gamers and content creators.",
      specifications: {
        "Processor": "AMD Ryzen 9 5900HS",
        "Memory": "16GB DDR4",
        "Storage": "1TB NVMe SSD",
        "Display": "15.6-inch FHD 165Hz",
        "Graphics": "NVIDIA GeForce RTX 3080",
        "Battery": "Up to 8 hours",
        "Operating System": "Windows 10"
      }
    },
    {
      id: 5,
      name: "iPhone 14",
      price: 13300000,
      originalPrice: 14900000,
      images: [
        "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&h=400&fit=crop"
      ],
      badge: "",
      category: "iphone",
      inStock: true,
      description: "The iPhone 14 features advanced dual-camera system, improved battery life, and powerful A15 Bionic chip for smooth performance.",
      specifications: {
        "Chip": "A15 Bionic",
        "Display": "6.1-inch Super Retina XDR",
        "Camera": "Dual 12MP cameras",
        "Storage": "128GB",
        "Operating System": "iOS 16",
        "Material": "Aluminum and glass",
        "Water Resistance": "Rated IP68"
      }
    },
    {
      id: 6,
      name: "Dell XPS 13",
      price: 18900000,
      originalPrice: 21900000,
      images: [
        "https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&h=400&fit=crop"
      ],
      badge: "Office",
      category: "office",
      inStock: false,
      description: "Dell XPS 13 is a premium ultrabook with a stunning display, powerful performance, and sleek design for professionals on the go.",
      specifications: {
        "Processor": "Intel Core i7-1165G7",
        "Memory": "16GB LPDDR4x",
        "Storage": "512GB SSD",
        "Display": "13.4-inch FHD+ InfinityEdge",
        "Graphics": "Intel Iris Xe",
        "Battery": "Up to 12 hours",
        "Operating System": "Windows 10"
      }
    },
    {
      id: 7,
      name: "MacBook Air",
      price: 16650000,
      originalPrice: 19990000,
      images: [
        "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&h=400&fit=crop"
      ],
      badge: "Popular",
      category: "macbook",
      inStock: true,
      description: "MacBook Air with M2 chip delivers incredible performance and battery life in a thin and light design, perfect for everyday use.",
      specifications: {
        "Processor": "Apple M2 chip",
        "Memory": "8GB unified memory",
        "Storage": "256GB SSD",
        "Display": "13.6-inch Retina display",
        "Graphics": "8-core GPU",
        "Battery": "Up to 18 hours",
        "Operating System": "macOS Ventura"
      }
    },
    {
      id: 8,
      name: "Lenovo ThinkPad X1",
      price: 20900000,
      originalPrice: 23900000,
      images: [
        "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=600&h=400&fit=crop"
      ],
      badge: "Office",
      category: "office",
      inStock: true,
      description: "Lenovo ThinkPad X1 is a durable and powerful business laptop with excellent keyboard and security features.",
      specifications: {
        "Processor": "Intel Core i7-1165G7",
        "Memory": "16GB DDR4",
        "Storage": "1TB SSD",
        "Display": "14-inch FHD",
        "Graphics": "Intel Iris Xe",
        "Battery": "Up to 15 hours",
        "Operating System": "Windows 10 Pro"
      }
    },
    {
      id: 9,
      name: "Razer Blade 15",
      price: 34900000,
      originalPrice: 37900000,
      images: [
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&h=400&fit=crop"
      ],
      badge: "Gaming",
      category: "gaming",
      inStock: true,
      description: "Razer Blade 15 is a high-end gaming laptop with powerful specs, sleek design, and customizable RGB lighting.",
      specifications: {
        "Processor": "Intel Core i7-11800H",
        "Memory": "16GB DDR4",
        "Storage": "1TB SSD",
        "Display": "15.6-inch FHD 360Hz",
        "Graphics": "NVIDIA GeForce RTX 3070",
        "Battery": "Up to 6 hours",
        "Operating System": "Windows 10"
      }
    }
  ];

  // Filter products by category and price
  const filteredProducts = allProducts.filter(product => {
    const categoryMatch = selectedCategory === "all" || product.category === selectedCategory;
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    return categoryMatch && priceMatch;
  });

  const handleBuyClick = (productName: string) => {
    const message = `Hi! I'm interested in buying ${productName}. Can you provide more details?`;
    const whatsappUrl = `https://wa.me/15551234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleMarketplaceClick = (productName: string, marketplace: string) => {
    const message = `Hi! I'm interested in buying ${productName} through ${marketplace}.`;
    const whatsappUrl = `https://wa.me/15551234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePriceInputChange = () => {
    const min = parseInt(minPrice) || 0;
    const max = parseInt(maxPrice) || 50000000;
    setPriceRange([min, max]);
  };

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
                      {categories.slice(1).map((category) => (
                        <Link 
                          key={category.id}
                          to={`/catalog?category=${category.id}`}
                          className="block px-3 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                          onClick={() => setSelectedCategory(category.id)}
                        >
                          {category.name}
                        </Link>
                      ))}
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
  );

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

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

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
                    <div className="grid grid-cols-1 gap-2">
                      {categories.map((category) => (
                        <Button
                          key={category.id}
                          variant={selectedCategory === category.id ? "default" : "outline"}
                          size="sm"
                          className="justify-start"
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
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="text-xs text-muted-foreground">Min Price</label>
                          <Input
                            type="number"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                            onBlur={handlePriceInputChange}
                            placeholder="Min"
                          />
                        </div>
                        <div>
                          <label className="text-xs text-muted-foreground">Max Price</label>
                          <Input
                            type="number"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                            onBlur={handlePriceInputChange}
                            placeholder="Max"
                          />
                        </div>
                      </div>
                      <Slider
                        defaultValue={[0, 50000000]}
                        max={50000000}
                        step={100000}
                        value={priceRange}
                        onValueChange={(value) => {
                          setPriceRange(value);
                          setMinPrice(value[0].toString());
                          setMaxPrice(value[1].toString());
                        }}
                      />
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{formatPrice(priceRange[0])}</span>
                        <span>{formatPrice(priceRange[1])}</span>
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
                  <div className="grid grid-cols-1 gap-2">
                    {categories.map((category) => (
                      <Button
                        key={category.id}
                        variant={selectedCategory === category.id ? "default" : "outline"}
                        size="sm"
                        className="justify-start"
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
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-xs text-muted-foreground">Min Price</label>
                        <Input
                          type="number"
                          value={minPrice}
                          onChange={(e) => setMinPrice(e.target.value)}
                          onBlur={handlePriceInputChange}
                          placeholder="Min"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-muted-foreground">Max Price</label>
                        <Input
                          type="number"
                          value={maxPrice}
                          onChange={(e) => setMaxPrice(e.target.value)}
                          onBlur={handlePriceInputChange}
                          placeholder="Max"
                        />
                      </div>
                    </div>
                    <Slider
                      defaultValue={[0, 50000000]}
                      max={50000000}
                      step={100000}
                      value={priceRange}
                      onValueChange={(value) => {
                        setPriceRange(value);
                        setMinPrice(value[0].toString());
                        setMaxPrice(value[1].toString());
                      }}
                    />
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>{formatPrice(priceRange[0])}</span>
                      <span>{formatPrice(priceRange[1])}</span>
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
                              src={product.images ? product.images[0] : product.image} 
                              alt={product.name}
                              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            {product.badge && (
                              <div className="absolute top-4 left-4">
                                <Badge className="bg-primary text-primary-foreground">
                                  {product.badge}
                                </Badge>
                              </div>
                            )}
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
                                  <div className="flex items-center space-x-3 mb-4">
                                    <span className="text-3xl font-bold text-foreground">
                                      {formatPrice(selectedProduct.price)}
                                    </span>
                                    <span className="text-xl text-muted-foreground line-through">
                                      {formatPrice(selectedProduct.originalPrice)}
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
                                        className="text-xs"
                                        onClick={() => handleMarketplaceClick(selectedProduct.name, 'Tokopedia')}
                                      >
                                        🟢 Tokopedia
                                      </Button>
                                      <Button 
                                        variant="outline" 
                                        size="sm"
                                        className="text-xs"
                                        onClick={() => handleMarketplaceClick(selectedProduct.name, 'Shopee')}
                                      >
                                        🟠 Shopee
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
                                        <span className="text-muted-foreground">{value}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                      
                      <div className="p-6 h-[380px] flex flex-col">
                        <h3 className="text-xl font-semibold text-foreground mb-4 flex-grow-0">
                          {product.name}
                        </h3>
                        
                        <div className="flex-grow flex flex-col justify-end space-y-4">
                          {/* Price Section */}
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <span className="text-2xl font-bold text-foreground">
                                {formatPrice(product.price)}
                              </span>
                              <span className="text-lg text-muted-foreground line-through">
                                {formatPrice(product.originalPrice)}
                              </span>
                            </div>
                          </div>
                          
                          {/* Stock Status */}
                          <div>
                            <Badge 
                              variant={product.inStock ? "default" : "destructive"}
                              className="w-full justify-center py-2"
                            >
                              {product.inStock ? 'In Stock' : 'Out of Stock'}
                            </Badge>
                          </div>
                          
                          {/* Buy Button */}
                          <div>
                            <Button 
                              className="w-full"
                              disabled={!product.inStock}
                              onClick={() => handleBuyClick(product.name)}
                            >
                              Buy Now
                            </Button>
                          </div>
                          
                          {/* Marketplace Buttons */}
                          <div className="space-y-2">
                            <p className="text-sm text-muted-foreground text-center">Also available at:</p>
                            <div className="grid grid-cols-2 gap-2">
                              <Button 
                                variant="outline" 
                                size="sm"
                                className="text-xs h-8"
                                onClick={() => handleMarketplaceClick(product.name, 'Tokopedia')}
                              >
                                🟢 Tokopedia
                              </Button>
                              <Button 
                                variant="outline" 
                                size="sm"
                                className="text-xs h-8"
                                onClick={() => handleMarketplaceClick(product.name, 'Shopee')}
                              >
                                🟠 Shopee
                              </Button>
                            </div>
                          </div>
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
                      setPriceRange([0, 50000000]);
                      setMinPrice("0");
                      setMaxPrice("50000000");
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
