import { useState, useEffect, useMemo } from 'react';
import type { Product } from '../types/Product';
import { ProductService } from '../services/ProductService';
import ProductGrid from '../components/ProductGrid';
import SearchAndFilter from '../components/SearchAndFilter';
import ProductDetail from '../components/ProductDetail';
import AddProduct from '../components/AddProduct';
import UpdateProduct from '../components/UpdateProduct';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showUpdateProduct, setShowUpdateProduct] = useState(false);
  const [productToUpdate, setProductToUpdate] = useState<Product | null>(null);
  const [showManageMode, setShowManageMode] = useState(false);

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
    setSelectedProductId(product.id);
  };

  const handleCloseProductDetail = () => {
    setSelectedProductId(null);
  };

  const handleShowAddProduct = () => {
    setShowAddProduct(true);
  };

  const handleCloseAddProduct = () => {
    setShowAddProduct(false);
  };

  const handleProductAdded = (newProduct: Product) => {
    setProducts(prevProducts => [newProduct, ...prevProducts]);
    setShowAddProduct(false);
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

  const handleEditProduct = (product: Product) => {
    setProductToUpdate(product);
    setShowUpdateProduct(true);
  };

  const handleCloseUpdateProduct = () => {
    setShowUpdateProduct(false);
    setProductToUpdate(null);
  };

  const handleProductUpdated = (updatedProduct: Product) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
    setShowUpdateProduct(false);
    setProductToUpdate(null);
  };

  const handleDeleteProduct = async (productId: number) => {
    try {
      await ProductService.deleteProduct(productId);
      setProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
      // Close product detail modal if the deleted product was being viewed
      if (selectedProductId === productId) {
        setSelectedProductId(null);
      }
    } catch (err) {
      console.error('Error deleting product:', err);
      alert('Failed to delete product. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold text-gray-900">Our Products</h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowManageMode(!showManageMode)}
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors ${
                  showManageMode
                    ? 'text-white bg-purple-600 hover:bg-purple-700 focus:ring-purple-500'
                    : 'text-purple-600 bg-purple-100 hover:bg-purple-200 focus:ring-purple-500'
                }`}
              >
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
                {showManageMode ? 'View Mode' : 'Manage Mode'}
              </button>
              <button
                onClick={handleShowAddProduct}
                className="flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Add Product
              </button>
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
          onEdit={handleEditProduct}
          onDelete={handleDeleteProduct}
          showActions={showManageMode}
        />
      </div>

      {/* Product Detail Modal */}
      {selectedProductId && (
        <ProductDetail
          productId={selectedProductId}
          onClose={handleCloseProductDetail}
        />
      )}

      {/* Add Product Modal */}
      {showAddProduct && (
        <AddProduct
          onProductAdded={handleProductAdded}
          onClose={handleCloseAddProduct}
        />
      )}

      {/* Update Product Modal */}
      {showUpdateProduct && productToUpdate && (
        <UpdateProduct
          product={productToUpdate}
          onProductUpdated={handleProductUpdated}
          onClose={handleCloseUpdateProduct}
        />
      )}
    </div>
  );
}
