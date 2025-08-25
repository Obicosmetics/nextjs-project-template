import React from 'react'
import Link from 'next/link'

interface ProductCardProps {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  brand?: string
  inStock?: boolean
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  description,
  price,
  image,
  category,
  brand,
  inStock = true
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-green-100">
      <div className="relative">
        <Link href={`/product/${id}`}>
          <div className="relative h-64 overflow-hidden">
            <img 
              src={image}
              alt={`${name} - ${description}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.backgroundColor = '#f3f4f6';
                target.style.display = 'flex';
                target.style.alignItems = 'center';
                target.style.justifyContent = 'center';
                target.style.color = '#6b7280';
                target.style.fontSize = '14px';
                target.style.textAlign = 'center';
                target.style.padding = '20px';
                target.innerHTML = 'Product Image';
              }}
            />
            {!inStock && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <span className="text-white font-semibold text-lg">Out of Stock</span>
              </div>
            )}
          </div>
        </Link>
        {brand && (
          <div className="absolute top-2 left-2">
            <span className="bg-green-700 text-white px-2 py-1 rounded-md text-xs font-medium">
              {brand}
            </span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="mb-2">
          <span className="text-xs text-green-600 font-medium uppercase tracking-wide">
            {category}
          </span>
        </div>
        
        <Link href={`/product/${id}`}>
          <h3 className="text-lg font-bold text-green-900 mb-2 hover:text-green-700 transition-colors line-clamp-2">
            {name}
          </h3>
        </Link>
        
        <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3">
          {description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-green-700">
            ${price.toFixed(2)}
          </div>
          
          <button 
            className={`px-4 py-2 rounded-md font-medium transition-colors duration-300 ${
              inStock 
                ? 'bg-green-700 hover:bg-green-800 text-white' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            disabled={!inStock}
          >
            {inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
