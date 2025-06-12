
export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  images: string[];
  badge: string;
  category: string;
  subcategory: string;
  inStock: boolean;
  description: string;
  specifications: Record<string, string>;
}

export interface Category {
  id: string;
  name: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
}
