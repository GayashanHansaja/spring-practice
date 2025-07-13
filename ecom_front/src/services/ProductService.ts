import type { Product } from '../types/Product';
import { config } from '../config/config';
import { MockProductService } from './MockProductService';

const API_BASE_URL = config.API_BASE_URL;

export class ProductService {
  static async getAllProducts(): Promise<Product[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/products`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.warn('Backend not available, using mock data:', error);
      // Fallback to mock data when backend is not available
      return MockProductService.getAllProducts();
    }
  }

  static async getProductById(id: number): Promise<Product> {
    try {
      const response = await fetch(`${API_BASE_URL}/products/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.warn('Backend not available, using mock data:', error);
      return MockProductService.getProductById(id);
    }
  }

  static async getProductsByCategory(category: string): Promise<Product[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/products/category/${category}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.warn('Backend not available, using mock data:', error);
      return MockProductService.getProductsByCategory(category);
    }
  }
}
