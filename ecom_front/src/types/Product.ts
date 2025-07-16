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
  imageName?: string;
  imageType?: string;
  image?: string; // Base64 encoded image data for frontend display
}