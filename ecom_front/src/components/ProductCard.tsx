import type { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
  onProductClick?: (product: Product) => void;
}

export default function ProductCard({ product, onProductClick }: ProductCardProps) {
  const handleClick = () => {
    if (onProductClick) {
      onProductClick(product);
    }
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden"
      onClick={handleClick}
    >
      <div className="aspect-w-16 aspect-h-12 overflow-hidden">
        <img
          src={product.imageUrl || '/placeholder-image.jpg'}
          alt={product.name}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.currentTarget.src = '/placeholder-image.jpg';
          }}
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mb-2">
          <span className="text-2xl font-bold text-blue-600">
            ${product.price.toFixed(2)}
          </span>
          
          {product.rating && (
            <div className="flex items-center">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`w-4 h-4 ${
                      index < Math.floor(product.rating!) ? 'fill-current' : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-1 text-sm text-gray-600">
                ({product.rating.toFixed(1)})
              </span>
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          {product.category && (
            <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
              {product.category}
            </span>
          )}
          
          <div className="flex items-center">
            <div className={`w-2 h-2 rounded-full mr-2 ${
              product.inStock !== false ? 'bg-green-400' : 'bg-red-400'
            }`}></div>
            <span className={`text-xs ${
              product.inStock !== false ? 'text-green-600' : 'text-red-600'
            }`}>
              {product.inStock !== false ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
        </div>
        
        <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
