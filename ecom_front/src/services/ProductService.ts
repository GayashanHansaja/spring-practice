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

  static async createProduct(product: Omit<Product, 'id'>): Promise<Product> {
    try {
      const response = await fetch(`${API_BASE_URL}/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.warn('Backend not available, using mock data:', error);
      // Return the product with a generated ID for mock purposes
      return {
        ...product,
        id: Date.now(),
      } as Product;
    }
  }

  static async updateProduct(id: number, product: Omit<Product, 'id'>): Promise<Product> {
    try {
      const response = await fetch(`${API_BASE_URL}/products/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.warn('Backend not available, using mock data:', error);
      // Return the updated product for mock purposes
      return {
        ...product,
        id: id,
      } as Product;
    }
  }

  static async deleteProduct(id: number): Promise<void> {
    try {
      const response = await fetch(`${API_BASE_URL}/products/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.warn('Backend not available, using mock data:', error);
      // For mock purposes, we'll just log the deletion
      console.log(`Mock: Product with id ${id} deleted`);
    }
  }
}
