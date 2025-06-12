
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

interface PriceFilterProps {
  priceRange: number[];
  minPrice: string;
  maxPrice: string;
  onPriceRangeChange: (value: number[]) => void;
  onMinPriceChange: (value: string) => void;
  onMaxPriceChange: (value: string) => void;
  onPriceInputChange: () => void;
  formatPrice: (price: number) => string;
}

export const PriceFilter = ({
  priceRange,
  minPrice,
  maxPrice,
  onPriceRangeChange,
  onMinPriceChange,
  onMaxPriceChange,
  onPriceInputChange,
  formatPrice,
}: PriceFilterProps) => (
  <div className="space-y-4">
    <div className="grid grid-cols-2 gap-2">
      <div>
        <label className="text-xs text-muted-foreground">Min Price</label>
        <Input
          type="number"
          value={minPrice}
          onChange={(e) => onMinPriceChange(e.target.value)}
          onBlur={onPriceInputChange}
          placeholder="Min"
        />
      </div>
      <div>
        <label className="text-xs text-muted-foreground">Max Price</label>
        <Input
          type="number"
          value={maxPrice}
          onChange={(e) => onMaxPriceChange(e.target.value)}
          onBlur={onPriceInputChange}
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
        onPriceRangeChange(value);
        onMinPriceChange(value[0].toString());
        onMaxPriceChange(value[1].toString());
      }}
    />
    <div className="flex items-center justify-between text-sm text-muted-foreground">
      <span>{formatPrice(priceRange[0])}</span>
      <span>{formatPrice(priceRange[1])}</span>
    </div>
  </div>
);
