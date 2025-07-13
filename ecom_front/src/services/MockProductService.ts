import type { Product } from '../types/Product';

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    description: "High-quality wireless headphones with noise cancellation and 20-hour battery life.",
    price: 89.99,
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    category: "Electronics",
    inStock: true,
    rating: 4.5
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Feature-rich smartwatch with health monitoring, GPS, and 7-day battery life.",
    price: 249.99,
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    category: "Electronics",
    inStock: true,
    rating: 4.3
  },
  {
    id: 3,
    name: "Organic Cotton T-Shirt",
    description: "Comfortable and sustainable organic cotton t-shirt in various colors.",
    price: 24.99,
    imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
    category: "Clothing",
    inStock: true,
    rating: 4.7
  },
  {
    id: 4,
    name: "Coffee Maker",
    description: "Programmable coffee maker with thermal carafe and auto shut-off feature.",
    price: 79.99,
    imageUrl: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop",
    category: "Home & Kitchen",
    inStock: false,
    rating: 4.2
  },
  {
    id: 5,
    name: "Yoga Mat",
    description: "Premium eco-friendly yoga mat with superior grip and cushioning.",
    price: 39.99,
    imageUrl: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=300&fit=crop",
    category: "Sports & Fitness",
    inStock: true,
    rating: 4.6
  },
  {
    id: 6,
    name: "Laptop Backpack",
    description: "Durable laptop backpack with multiple compartments and USB charging port.",
    price: 54.99,
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
    category: "Accessories",
    inStock: true,
    rating: 4.4
  },
  {
    id: 7,
    name: "Wireless Phone Charger",
    description: "Fast wireless charging pad compatible with all Qi-enabled devices.",
    price: 19.99,
    imageUrl: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
    category: "Electronics",
    inStock: true,
    rating: 4.1
  },
  {
    id: 8,
    name: "Ceramic Dinnerware Set",
    description: "Elegant 16-piece ceramic dinnerware set perfect for everyday use.",
    price: 119.99,
    imageUrl: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop",
    category: "Home & Kitchen",
    inStock: true,
    rating: 4.8
  }
];

export class MockProductService {
  static async getAllProducts(): Promise<Product[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return mockProducts;
  }

  static async getProductById(id: number): Promise<Product> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    const product = mockProducts.find(p => p.id === id);
    if (!product) {
      throw new Error(`Product with id ${id} not found`);
    }
    return product;
  }

  static async getProductsByCategory(category: string): Promise<Product[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    return mockProducts.filter(p => p.category === category);
  }
}
