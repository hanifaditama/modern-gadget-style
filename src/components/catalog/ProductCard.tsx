
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types/catalog";

interface ProductCardProps {
  product: Product;
  onProductClick: (product: Product) => void;
  onBuyClick: (productName: string) => void;
  onMarketplaceClick: (productName: string, marketplace: string) => void;
  formatPrice: (price: number) => string;
}

export const ProductCard = ({
  product,
  onProductClick,
  onBuyClick,
  onMarketplaceClick,
  formatPrice,
}: ProductCardProps) => (
  <Card className="group cursor-pointer border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
    <CardContent className="p-0">
      <div 
        className="relative overflow-hidden rounded-t-lg cursor-pointer"
        onClick={() => onProductClick(product)}
      >
        <img 
          src={product.images[0]} 
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
      
      <div className="p-6 h-[380px] flex flex-col">
        <h3 className="text-xl font-semibold text-foreground mb-4 flex-grow-0">
          {product.name}
        </h3>
        
        <div className="flex-grow flex flex-col justify-end space-y-4">
          {/* Price Section */}
          <div className="space-y-1">
            <div className="flex flex-col">
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
              <span className="text-xl font-bold text-foreground">
                {formatPrice(product.price)}
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
              onClick={() => onBuyClick(product.name)}
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
                onClick={() => onMarketplaceClick(product.name, 'Tokopedia')}
              >
                <img src="/lovable-uploads/ecc6a3c5-f7ab-48ab-b6ae-d9160c317aa6.png" alt="Tokopedia" className="w-3 h-3 mr-1" />
                Tokopedia
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="text-xs h-8"
                onClick={() => onMarketplaceClick(product.name, 'Shopee')}
              >
                <img src="/lovable-uploads/eb83872b-9662-4acb-b949-33bf73d2991a.png" alt="Shopee" className="w-3 h-3 mr-1" />
                Shopee
              </Button>
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);
