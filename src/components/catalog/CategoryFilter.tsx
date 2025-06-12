
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Category } from "@/types/catalog";

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  selectedSubcategory: string;
  openCategories: string[];
  onCategorySelect: (categoryId: string, subcategoryId?: string) => void;
  onToggleCategory: (categoryId: string) => void;
  isMobile?: boolean;
}

export const CategoryFilter = ({
  categories,
  selectedCategory,
  selectedSubcategory,
  openCategories,
  onCategorySelect,
  onToggleCategory,
}: CategoryFilterProps) => (
  <div className="space-y-2">
    <Button
      variant={selectedCategory === "all" ? "default" : "outline"}
      size="sm"
      className="justify-start text-xs px-3 py-2 h-auto w-full"
      onClick={() => onCategorySelect("all")}
    >
      All Products
    </Button>
    
    {categories.slice(1).map((category) => (
      <div key={category.id}>
        {category.subcategories.length > 0 ? (
          <Collapsible 
            open={openCategories.includes(category.id)}
            onOpenChange={() => onToggleCategory(category.id)}
          >
            <CollapsibleTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="justify-between text-xs px-3 py-2 h-auto w-full"
              >
                {category.name}
                <ChevronDown 
                  className={`h-3 w-3 transition-transform ${
                    openCategories.includes(category.id) ? 'rotate-180' : ''
                  }`}
                />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-1 ml-3 space-y-1">
              <Button
                variant={selectedCategory === category.id && selectedSubcategory === "all" ? "default" : "ghost"}
                size="sm"
                className="justify-start text-xs px-3 py-1 h-auto w-full"
                onClick={() => onCategorySelect(category.id, "all")}
              >
                All {category.name}
              </Button>
              {category.subcategories.map((subcategory) => (
                <Button
                  key={subcategory.id}
                  variant={
                    selectedCategory === category.id && selectedSubcategory === subcategory.id 
                      ? "default" 
                      : "ghost"
                  }
                  size="sm"
                  className="justify-start text-xs px-3 py-1 h-auto w-full"
                  onClick={() => onCategorySelect(category.id, subcategory.id)}
                >
                  {subcategory.name}
                </Button>
              ))}
            </CollapsibleContent>
          </Collapsible>
        ) : (
          <Button
            variant={selectedCategory === category.id ? "default" : "outline"}
            size="sm"
            className="justify-start text-xs px-3 py-2 h-auto w-full"
            onClick={() => onCategorySelect(category.id)}
          >
            {category.name}
          </Button>
        )}
      </div>
    ))}
  </div>
);
