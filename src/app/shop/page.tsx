"use client"

import React, { useState } from 'react'
import ProductCard from '@/components/ui/ProductCard'

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('name')

  // Sample product data - in a real app, this would come from an API or database
  const products = [
    // Deroice Products
    {
      id: 'deroice-acne-cleanser',
      name: 'Acne Foaming Cleanser',
      description: 'Deep-cleansing foaming cleanser that targets acne-causing bacteria while maintaining skin balance.',
      price: 24.99,
      image: 'https://placehold.co/400x400?text=Deroice+Acne+Foaming+Cleanser+with+clean+modern+packaging',
      category: 'skincare',
      brand: 'Deroice',
      inStock: true
    },
    {
      id: 'deroice-facial-cleanser',
      name: 'Foaming Facial Cleanser',
      description: 'Gentle daily cleanser that removes impurities while nourishing your skin with natural ingredients.',
      price: 22.99,
      image: 'https://placehold.co/400x400?text=Deroice+Foaming+Facial+Cleanser+with+elegant+minimalist+design',
      category: 'skincare',
      brand: 'Deroice',
      inStock: true
    },
    {
      id: 'deroice-brightening-cream',
      name: 'Brightening Cream',
      description: 'Advanced brightening formula that evens skin tone and reduces dark spots for radiant skin.',
      price: 34.99,
      image: 'https://placehold.co/400x400?text=Deroice+Brightening+Cream+with+luxury+skincare+packaging',
      category: 'skincare',
      brand: 'Deroice',
      inStock: true
    },
    {
      id: 'deroice-sunscreen',
      name: 'Sunscreen SPF 50+',
      description: 'Broad-spectrum protection with natural ingredients that shield your skin from harmful UV rays.',
      price: 28.99,
      image: 'https://placehold.co/400x400?text=Deroice+Sunscreen+SPF+50+with+protective+formula+design',
      category: 'skincare',
      brand: 'Deroice',
      inStock: true
    },

    // Herbal Mood Products
    {
      id: 'herbal-lavender-oil',
      name: 'Pure Lavender Essential Oil',
      description: 'Premium therapeutic-grade lavender oil for relaxation, stress relief, and better sleep.',
      price: 18.99,
      image: 'https://placehold.co/400x400?text=Pure+Lavender+Essential+Oil+in+amber+bottle+with+natural+elements',
      category: 'essential-oils',
      brand: 'Herbal Mood',
      inStock: true
    },
    {
      id: 'herbal-blend-calm',
      name: 'Calming Essential Oil Blend',
      description: 'Expertly crafted blend of lavender, chamomile, and bergamot for ultimate relaxation.',
      price: 26.99,
      image: 'https://placehold.co/400x400?text=Calming+Essential+Oil+Blend+with+botanical+ingredients+display',
      category: 'essential-oils',
      brand: 'Herbal Mood',
      inStock: true
    },
    {
      id: 'herbal-soap-oatmeal',
      name: 'Oatmeal Honey Handmade Soap',
      description: 'Gentle exfoliating soap with natural oatmeal and honey for soft, smooth skin.',
      price: 12.99,
      image: 'https://placehold.co/400x400?text=Handmade+Oatmeal+Honey+Soap+with+natural+textures+and+ingredients',
      category: 'soap-candles',
      brand: 'Herbal Mood',
      inStock: true
    },
    {
      id: 'herbal-candle-eucalyptus',
      name: 'Eucalyptus Soy Candle',
      description: 'Hand-poured soy candle with pure eucalyptus essential oil for a refreshing atmosphere.',
      price: 19.99,
      image: 'https://placehold.co/400x400?text=Eucalyptus+Soy+Candle+with+natural+wax+and+minimalist+design',
      category: 'soap-candles',
      brand: 'Herbal Mood',
      inStock: true
    },
    {
      id: 'herbal-hair-growth-oil',
      name: 'Hair Growth Oil',
      description: 'Nourishing blend of natural oils to promote healthy hair growth and scalp health.',
      price: 29.99,
      image: 'https://placehold.co/400x400?text=Hair+Growth+Oil+with+natural+botanical+ingredients+and+dropper',
      category: 'hair-care',
      brand: 'Herbal Mood',
      inStock: true
    },

    // Vitadose Products
    {
      id: 'vitadose-hair-lotion',
      name: 'Hair Growth Lotion',
      description: 'Advanced formula that strengthens hair follicles and promotes healthy hair growth.',
      price: 32.99,
      image: 'https://placehold.co/400x400?text=Vitadose+Hair+Growth+Lotion+with+professional+hair+care+design',
      category: 'hair-care',
      brand: 'Vitadose',
      inStock: true
    },
    {
      id: 'vitadose-hair-mask',
      name: 'Intensive Hair Mask',
      description: 'Deep conditioning treatment that repairs damaged hair and restores natural shine.',
      price: 27.99,
      image: 'https://placehold.co/400x400?text=Vitadose+Intensive+Hair+Mask+with+luxury+hair+treatment+packaging',
      category: 'hair-care',
      brand: 'Vitadose',
      inStock: true
    },

    // Natural Oils
    {
      id: 'jojoba-oil',
      name: 'Pure Jojoba Oil',
      description: 'Cold-pressed jojoba oil perfect for skin and hair care, closely mimics natural sebum.',
      price: 21.99,
      image: 'https://placehold.co/400x400?text=Pure+Jojoba+Oil+in+amber+bottle+with+natural+golden+color',
      category: 'natural-oils',
      brand: 'OBI Natural',
      inStock: true
    },
    {
      id: 'argan-oil',
      name: 'Moroccan Argan Oil',
      description: 'Premium argan oil rich in vitamin E and antioxidants for hair and skin nourishment.',
      price: 35.99,
      image: 'https://placehold.co/400x400?text=Moroccan+Argan+Oil+with+premium+quality+and+elegant+packaging',
      category: 'natural-oils',
      brand: 'OBI Natural',
      inStock: true
    }
  ]

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'skincare', label: 'Natural Skincare' },
    { value: 'essential-oils', label: 'Essential Oils & Blends' },
    { value: 'hair-care', label: 'Hair Care' },
    { value: 'soap-candles', label: 'Handmade Soap & Candles' },
    { value: 'natural-oils', label: 'Natural Oils' }
  ]

  const sortOptions = [
    { value: 'name', label: 'Name A-Z' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'brand', label: 'Brand' }
  ]

  const filteredProducts = products.filter(product => 
    selectedCategory === 'all' || product.category === selectedCategory
  )

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'brand':
        return (a.brand || '').localeCompare(b.brand || '')
      default:
        return a.name.localeCompare(b.name)
    }
  })

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 font-serif mb-6">
            Shop All Products
          </h1>
          <div className="w-24 h-1 bg-green-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our complete collection of natural personal care products, 
            crafted with premium ingredients and over 40 years of expertise.
          </p>
        </div>
      </section>

      {/* Filters and Sort */}
      <section className="py-8 bg-white border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                    selectedCategory === category.value
                      ? 'bg-green-700 text-white'
                      : 'bg-green-100 text-green-700 hover:bg-green-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-4">
              <span className="text-gray-600 font-medium">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-green-200 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-gray-600">
            Showing {sortedProducts.length} products
            {selectedCategory !== 'all' && (
              <span> in {categories.find(cat => cat.value === selectedCategory)?.label}</span>
            )}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {sortedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  image={product.image}
                  category={product.category}
                  brand={product.brand}
                  inStock={product.inStock}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your filters or search criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-green-900 font-serif mb-4">
            Stay Updated with OBI
          </h2>
          <p className="text-gray-600 mb-8">
            Get the latest updates on new products, special offers, and natural beauty tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ShopPage
