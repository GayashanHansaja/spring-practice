import type { Product } from '../types/Product';

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    description: "High-quality wireless headphones with noise cancellation and 20-hour battery life.",
    brand: "TechSound",
    price: 8999.99,
    category: "Electronics",
    releaseDate: new Date('2024-01-15'),
    available: true,
    quantity: 25,
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Feature-rich smartwatch with health monitoring, GPS, and 7-day battery life.",
    brand: "FitTech",
    price: 24999.99,
    category: "Electronics",
    releaseDate: new Date('2024-03-10'),
    available: true,
    quantity: 15,
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    name: "Organic Cotton T-Shirt",
    description: "Comfortable and sustainable organic cotton t-shirt in various colors.",
    brand: "EcoWear",
    price: 2499.99,
    category: "Clothing",
    releaseDate: new Date('2024-02-20'),
    available: true,
    quantity: 50,
    imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    name: "Coffee Maker",
    description: "Programmable coffee maker with thermal carafe and auto shut-off feature.",
    brand: "BrewMaster",
    price: 7999.99,
    category: "Home & Kitchen",
    releaseDate: new Date('2024-01-05'),
    available: false,
    quantity: 0,
    imageUrl: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    name: "Yoga Mat",
    description: "Premium eco-friendly yoga mat with superior grip and cushioning.",
    brand: "ZenFlex",
    price: 3999.99,
    category: "Sports & Fitness",
    releaseDate: new Date('2024-04-01'),
    available: true,
    quantity: 30,
    imageUrl: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    name: "Laptop Backpack",
    description: "Durable laptop backpack with multiple compartments and USB charging port.",
    brand: "TechPack",
    price: 5499.99,
    category: "Accessories",
    releaseDate: new Date('2024-02-14'),
    available: true,
    quantity: 20,
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop"
  },
  {
    id: 7,
    name: "Wireless Phone Charger",
    description: "Fast wireless charging pad compatible with all Qi-enabled devices.",
    brand: "PowerFlow",
    price: 1999.99,
    category: "Electronics",
    releaseDate: new Date('2024-03-25'),
    available: true,
    quantity: 40,
    imageUrl: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop"
  },
  {
    id: 8,
    name: "Ceramic Dinnerware Set",
    description: "Elegant 16-piece ceramic dinnerware set perfect for everyday use.",
    brand: "HomeStyle",
    price: 11999.99,
    category: "Home & Kitchen",
    releaseDate: new Date('2024-01-30'),
    available: true,
    quantity: 12,
    imageUrl: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop"
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
