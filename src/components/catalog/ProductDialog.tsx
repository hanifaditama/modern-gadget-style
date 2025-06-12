
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Product } from "@/types/catalog";

interface ProductDialogProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onBuyClick: (productName: string) => void;
  onMarketplaceClick: (productName: string, marketplace: string) => void;
  formatPrice: (price: number) => string;
}

export const ProductDialog = ({
  product,
  isOpen,
  onClose,
  onBuyClick,
  onMarketplaceClick,
  formatPrice,
}: ProductDialogProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (product) {
      setCurrentImageIndex((prev) => 
        prev === product.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (product) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? product.images.length - 1 : prev - 1
      );
    }
  };

  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{product.name}</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Carousel */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={product.images[currentImageIndex]} 
                alt={product.name}
                className="w-full h-96 object-cover"
              />
              
              {product.images.length > 1 && (
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
            {product.images.length > 1 && (
              <div className="flex gap-2 mt-4 overflow-x-auto">
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${product.name} ${index + 1}`}
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
                <span className="text-sm text-muted-foreground line-through">
                  {formatPrice(product.originalPrice)}
                </span>
                <span className="text-xl font-bold text-foreground">
                  {formatPrice(product.price)}
                </span>
              </div>
              
              <div className="mb-4">
                <Badge variant={product.inStock ? "default" : "destructive"}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </Badge>
              </div>
              
              <Button 
                className="w-full mb-4"
                disabled={!product.inStock}
                onClick={() => onBuyClick(product.name)}
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
                    onClick={() => onMarketplaceClick(product.name, 'Tokopedia')}
                  >
                    <img src="/lovable-uploads/ecc6a3c5-f7ab-48ab-b6ae-d9160c317aa6.png" alt="Tokopedia" className="w-4 h-4 mr-1" />
                    Tokopedia
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="text-xs"
                    onClick={() => onMarketplaceClick(product.name, 'Shopee')}
                  >
                    <img src="/lovable-uploads/eb83872b-9662-4acb-b949-33bf73d2991a.png" alt="Shopee" className="w-4 h-4 mr-1" />
                    Shopee
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-muted-foreground">{product.description}</p>
            </div>
            
            {/* Specifications */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Specifications</h3>
              <div className="space-y-2">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-1 border-b border-border/50">
                    <span className="font-medium">{key}:</span>
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
