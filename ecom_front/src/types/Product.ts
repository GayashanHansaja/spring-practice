export interface Product {
  id: number;
  name: string;
  description: string;
  brand: string;
  price: number;
  category?: string;
  releaseDate: Date;
  available?: boolean;
  quantity: number;
  imageUrl?: string;
}