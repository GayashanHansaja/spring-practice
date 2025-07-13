import { useState, useEffect, useMemo } from 'react';
import type { Product } from '../types/Product';
import { ProductService } from '../services/ProductService';
import ProductGrid from '../components/ProductGrid';
import SearchAndFilter from '../components/SearchAndFilter';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedProducts = await ProductService.getAllProducts();
        setProducts(fetchedProducts);
      } catch (err) {
        setError('Failed to fetch products. Please check if your backend is running.');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Get unique categories from products
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(products.map(product => product.category).filter(Boolean))
    ) as string[];
    return uniqueCategories.sort();
  }, [products]);

  // Filter products based on search term and selected category
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory]);

  const handleProductClick = (product: Product) => {
    console.log('Product clicked:', product);
    // You can implement navigation to product detail page here
    // For example: navigate(`/products/${product.id}`);
  };

  const handleRefresh = async () => {
    setLoading(true);
    setError(null);
    try {
      const fetchedProducts = await ProductService.getAllProducts();
      setProducts(fetchedProducts);
    } catch (err) {
      setError('Failed to refresh products.');
      console.error('Error refreshing products:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold text-gray-900">Our Products</h1>
            <button
              onClick={handleRefresh}
              disabled={loading}
              className="flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-100 rounded-md hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Refresh
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter */}
        <SearchAndFilter
          onSearchChange={setSearchTerm}
          onCategoryChange={setSelectedCategory}
          categories={categories}
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
        />

        {/* Results Count */}
        {!loading && !error && (
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredProducts.length} of {products.length} products
              {searchTerm && ` for "${searchTerm}"`}
              {selectedCategory && ` in "${selectedCategory}"`}
            </p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">Error loading products</h3>
                <div className="mt-2 text-sm text-red-700">
                  <p>{error}</p>
                </div>
                <div className="mt-4">
                  <button
                    onClick={handleRefresh}
                    className="bg-red-100 text-red-800 px-3 py-1 rounded text-sm hover:bg-red-200"
                  >
                    Try Again
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <ProductGrid
          products={filteredProducts}
          loading={loading}
          onProductClick={handleProductClick}
        />
      </div>
    </div>
  );
}
