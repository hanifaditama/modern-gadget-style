import { useState } from "react";
import { Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Navigation } from "@/components/catalog/Navigation";
import { CategoryFilter } from "@/components/catalog/CategoryFilter";
import { PriceFilter } from "@/components/catalog/PriceFilter";
import { ProductCard } from "@/components/catalog/ProductCard";
import { ProductDialog } from "@/components/catalog/ProductDialog";
import { Product, Category } from "@/types/catalog";

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<number[]>([0, 50000000]);
  const [minPrice, setMinPrice] = useState<string>("0");
  const [maxPrice, setMaxPrice] = useState<string>("50000000");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [openCategories, setOpenCategories] = useState<string[]>([]);

  const categories: Category[] = [
    { 
      id: "all", 
      name: "All Products",
      subcategories: []
    },
    { 
      id: "macbook", 
      name: "MacBooks",
      subcategories: [
        { id: "macbook-air", name: "MacBook Air" },
        { id: "macbook-pro", name: "MacBook Pro" }
      ]
    },
    { 
      id: "iphone", 
      name: "iPhones",
      subcategories: [
        { id: "iphone-15", name: "iPhone 15 Series" },
        { id: "iphone-14", name: "iPhone 14 Series" },
        { id: "iphone-13", name: "iPhone 13 Series" }
      ]
    },
    { 
      id: "windows", 
      name: "Windows Laptops",
      subcategories: [
        { id: "intel-i3", name: "Intel i3" },
        { id: "intel-i5", name: "Intel i5" },
        { id: "intel-i7", name: "Intel i7" },
        { id: "intel-i9", name: "Intel i9" }
      ]
    },
    { 
      id: "gaming", 
      name: "Gaming Laptops",
      subcategories: [
        { id: "asus-rog", name: "ASUS ROG" },
        { id: "razer", name: "Razer" },
        { id: "msi", name: "MSI" }
      ]
    },
    { 
      id: "office", 
      name: "Office Laptops",
      subcategories: [
        { id: "dell", name: "Dell" },
        { id: "lenovo", name: "Lenovo" },
        { id: "hp", name: "HP" }
      ]
    }
  ];

  const allProducts: Product[] = [
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
      subcategory: "macbook-pro",
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
      subcategory: "iphone-15",
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
      subcategory: "intel-i7",
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
      subcategory: "asus-rog",
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
      subcategory: "iphone-14",
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
      subcategory: "dell",
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
      subcategory: "macbook-air",
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
      subcategory: "lenovo",
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
      subcategory: "razer",
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

  // Filter products by category, subcategory and price
  const filteredProducts = allProducts.filter(product => {
    const categoryMatch = selectedCategory === "all" || product.category === selectedCategory;
    const subcategoryMatch = selectedSubcategory === "all" || product.subcategory === selectedSubcategory;
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    return categoryMatch && subcategoryMatch && priceMatch;
  });

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

  const handlePriceInputChange = () => {
    const min = parseInt(minPrice) || 0;
    const max = parseInt(maxPrice) || 50000000;
    setPriceRange([min, max]);
  };

  const toggleCategory = (categoryId: string) => {
    setOpenCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleCategorySelect = (categoryId: string, subcategoryId?: string) => {
    setSelectedCategory(categoryId);
    setSelectedSubcategory(subcategoryId || "all");
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleDialogClose = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        categories={categories}
        onCategorySelect={setSelectedCategory}
      />
      
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
          {/* Mobile Filters */}
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
                    <CategoryFilter
                      categories={categories}
                      selectedCategory={selectedCategory}
                      selectedSubcategory={selectedSubcategory}
                      openCategories={openCategories}
                      onCategorySelect={handleCategorySelect}
                      onToggleCategory={toggleCategory}
                      isMobile={true}
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium mb-3">Price Range</h3>
                    <PriceFilter
                      priceRange={priceRange}
                      minPrice={minPrice}
                      maxPrice={maxPrice}
                      onPriceRangeChange={setPriceRange}
                      onMinPriceChange={setMinPrice}
                      onMaxPriceChange={setMaxPrice}
                      onPriceInputChange={handlePriceInputChange}
                      formatPrice={formatPrice}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Desktop Filters */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <div className="border rounded-lg p-4 space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Categories</h3>
                  <CategoryFilter
                    categories={categories}
                    selectedCategory={selectedCategory}
                    selectedSubcategory={selectedSubcategory}
                    openCategories={openCategories}
                    onCategorySelect={handleCategorySelect}
                    onToggleCategory={toggleCategory}
                  />
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-medium mb-3">Price Range</h3>
                  <PriceFilter
                    priceRange={priceRange}
                    minPrice={minPrice}
                    maxPrice={maxPrice}
                    onPriceRangeChange={setPriceRange}
                    onMinPriceChange={setMinPrice}
                    onMaxPriceChange={setMaxPrice}
                    onPriceInputChange={handlePriceInputChange}
                    formatPrice={formatPrice}
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onProductClick={handleProductClick}
                    onBuyClick={handleBuyClick}
                    onMarketplaceClick={handleMarketplaceClick}
                    formatPrice={formatPrice}
                  />
                ))
              ) : (
                <div className="col-span-3 py-12 text-center">
                  <p className="text-lg text-muted-foreground">No products found matching your filters.</p>
                  <Button 
                    variant="outline" 
                    className="mt-4" 
                    onClick={() => {
                      setSelectedCategory("all");
                      setSelectedSubcategory("all");
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

      <ProductDialog
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={handleDialogClose}
        onBuyClick={handleBuyClick}
        onMarketplaceClick={handleMarketplaceClick}
        formatPrice={formatPrice}
      />
    </div>
  );
};

export default Catalog;
