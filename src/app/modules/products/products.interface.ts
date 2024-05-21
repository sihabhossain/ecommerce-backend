// Define the structure for a variant
export interface TVariant {
  type: string;
  value: string;
}

// Define the structure for inventory details
export interface TInventory {
  quantity: number;
  inStock: boolean;
}

// Define the structure for the main product
export interface TProduct {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: TVariant[];
  inventory: TInventory;
}
