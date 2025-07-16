import type { Product } from '../types/Product';

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    description: "High-quality wireless headphones with noise cancellation and 20-hour battery life.",
    brand: "TechSound",
    price: 8999,
    category: "Electronics",
    releaseDate: new Date('2024-01-15'),
    available: true,
    quantity: 25,
    imageName: "headphones.jpg",
    imageType: "image/jpeg",
    // You can add base64 image data here if needed
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Feature-rich smartwatch with health monitoring, GPS, and 7-day battery life.",
    brand: "FitTech",
    price: 24999,
    category: "Electronics",
    releaseDate: new Date('2024-03-10'),
    available: true,
    quantity: 15,
    imageName: "smartwatch.jpg",
    imageType: "image/jpeg",
  },
  {
    id: 3,
    name: "Organic Cotton T-Shirt",
    description: "Comfortable and sustainable organic cotton t-shirt in various colors.",
    brand: "EcoWear",
    price: 2499,
    category: "Clothing",
    releaseDate: new Date('2024-02-20'),
    available: true,
    quantity: 50,
    imageName: "tshirt.jpg",
    imageType: "image/jpeg",
  },
  {
    id: 4,
    name: "Coffee Maker",
    description: "Programmable coffee maker with thermal carafe and auto shut-off feature.",
    brand: "BrewMaster",
    price: 7999,
    category: "Home & Kitchen",
    releaseDate: new Date('2024-01-05'),
    available: false,
    quantity: 0,
    imageName: "coffee-maker.jpg",
    imageType: "image/jpeg",
  },
  {
    id: 5,
    name: "Yoga Mat",
    description: "Premium eco-friendly yoga mat with superior grip and cushioning.",
    brand: "ZenFlex",
    price: 3999,
    category: "Sports & Fitness",
    releaseDate: new Date('2024-04-01'),
    available: true,
    quantity: 30,
    imageName: "yoga-mat.jpg",
    imageType: "image/jpeg",
  },
  {
    id: 6,
    name: "Laptop Backpack",
    description: "Durable laptop backpack with multiple compartments and USB charging port.",
    brand: "TechPack",
    price: 5499,
    category: "Accessories",
    releaseDate: new Date('2024-02-14'),
    available: true,
    quantity: 20,
    imageName: "backpack.jpg",
    imageType: "image/jpeg",
  },
  {
    id: 7,
    name: "Wireless Phone Charger",
    description: "Fast wireless charging pad compatible with all Qi-enabled devices.",
    brand: "PowerFlow",
    price: 1999,
    category: "Electronics",
    releaseDate: new Date('2024-03-25'),
    available: true,
    quantity: 40,
    imageName: "wireless-charger.jpg",
    imageType: "image/jpeg",
  },
  {
    id: 8,
    name: "Ceramic Dinnerware Set",
    description: "Elegant 16-piece ceramic dinnerware set perfect for everyday use.",
    brand: "HomeStyle",
    price: 11999,
    category: "Home & Kitchen",
    releaseDate: new Date('2024-01-30'),
    available: true,
    quantity: 12,
    imageName: "dinnerware.jpg",
    imageType: "image/jpeg",
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
