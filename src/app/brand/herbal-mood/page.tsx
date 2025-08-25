"use client"

import React from 'react'
import ProductCard from '@/components/ui/ProductCard'
import Link from 'next/link'

const HerbalMoodPage = () => {
  const heroImage = "https://placehold.co/1920x600?text=Herbal+Mood+Nature+and+Wellness+botanical+garden+with+essential+oil+distillation+and+natural+ingredients"
  
  const herbalMoodProducts = [
    {
      id: 'herbal-lavender-oil',
      name: 'Pure Lavender Essential Oil',
      description: 'Premium therapeutic-grade lavender oil sourced from French lavender fields, perfect for relaxation, stress relief, and promoting better sleep quality.',
      price: 18.99,
      image: 'https://placehold.co/400x400?text=Pure+Lavender+Essential+Oil+in+amber+bottle+with+natural+lavender+sprigs+and+dropper',
      category: 'essential-oils',
      brand: 'Herbal Mood',
      inStock: true
    },
    {
      id: 'herbal-blend-calm',
      name: 'Calming Essential Oil Blend',
      description: 'Expertly crafted blend of lavender, chamomile, and bergamot essential oils designed for ultimate relaxation and stress relief.',
      price: 26.99,
      image: 'https://placehold.co/400x400?text=Calming+Essential+Oil+Blend+with+botanical+ingredients+display+and+peaceful+ambiance',
      category: 'essential-oils',
      brand: 'Herbal Mood',
      inStock: true
    },
    {
      id: 'herbal-energize-blend',
      name: 'Energizing Citrus Blend',
      description: 'Invigorating blend of sweet orange, lemon, and peppermint oils to boost energy and mental clarity throughout your day.',
      price: 24.99,
      image: 'https://placehold.co/400x400?text=Energizing+Citrus+Blend+with+fresh+citrus+fruits+and+vibrant+natural+colors',
      category: 'essential-oils',
      brand: 'Herbal Mood',
      inStock: true
    },
    {
      id: 'herbal-soap-oatmeal',
      name: 'Oatmeal Honey Handmade Soap',
      description: 'Gentle exfoliating soap crafted with natural oatmeal, raw honey, and shea butter for soft, smooth, and nourished skin.',
      price: 12.99,
      image: 'https://placehold.co/400x400?text=Handmade+Oatmeal+Honey+Soap+with+natural+textures+ingredients+and+rustic+presentation',
      category: 'soap-candles',
      brand: 'Herbal Mood',
      inStock: true
    },
    {
      id: 'herbal-soap-charcoal',
      name: 'Activated Charcoal Detox Soap',
      description: 'Deep-cleansing handmade soap with activated charcoal and tea tree oil to purify and detoxify your skin naturally.',
      price: 14.99,
      image: 'https://placehold.co/400x400?text=Activated+Charcoal+Detox+Soap+with+black+charcoal+texture+and+natural+ingredients',
      category: 'soap-candles',
      brand: 'Herbal Mood',
      inStock: true
    },
    {
      id: 'herbal-candle-eucalyptus',
      name: 'Eucalyptus Soy Candle',
      description: 'Hand-poured soy candle infused with pure eucalyptus essential oil, creating a refreshing and invigorating atmosphere in any space.',
      price: 19.99,
      image: 'https://placehold.co/400x400?text=Eucalyptus+Soy+Candle+with+natural+wax+minimalist+design+and+eucalyptus+leaves',
      category: 'soap-candles',
      brand: 'Herbal Mood',
      inStock: true
    },
    {
      id: 'herbal-hair-growth-oil',
      name: 'Hair Growth Oil',
      description: 'Nourishing blend of rosemary, castor, and jojoba oils enriched with biotin to promote healthy hair growth and scalp health.',
      price: 29.99,
      image: 'https://placehold.co/400x400?text=Hair+Growth+Oil+with+natural+botanical+ingredients+dropper+and+hair+care+elements',
      category: 'hair-care',
      brand: 'Herbal Mood',
      inStock: true
    },
    {
      id: 'herbal-dry-shampoo',
      name: 'Natural Herbal Dry Shampoo',
      description: 'Organic dry shampoo with arrowroot powder and essential oils to refresh hair between washes while adding natural volume.',
      price: 16.99,
      image: 'https://placehold.co/400x400?text=Natural+Herbal+Dry+Shampoo+with+organic+powder+and+botanical+ingredients',
      category: 'hair-care',
      brand: 'Herbal Mood',
      inStock: true
    }
  ]

  const moodCategories = [
    {
      mood: "Relaxation & Calm",
      products: ["Lavender Oil", "Calming Blend", "Eucalyptus Candle"],
      description: "Unwind and find peace with our soothing collection designed to reduce stress and promote tranquility."
    },
    {
      mood: "Energy & Focus",
      products: ["Energizing Citrus Blend", "Peppermint Oil", "Rosemary Oil"],
      description: "Boost your energy and mental clarity with invigorating scents that awaken your senses."
    },
    {
      mood: "Self-Care & Pampering",
      products: ["Handmade Soaps", "Hair Growth Oil", "Luxury Candles"],
      description: "Indulge in luxurious self-care rituals that nourish your body and soul."
    },
    {
      mood: "Natural Cleansing",
      products: ["Charcoal Soap", "Dry Shampoo", "Purifying Blends"],
      description: "Cleanse and purify naturally with our gentle yet effective cleansing products."
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <img 
          src={heroImage}
          alt="Herbal Mood Nature and Wellness showcasing botanical garden with essential oil distillation, natural ingredients, and artisanal crafting process"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.backgroundColor = '#f3f4f6';
            target.style.display = 'flex';
            target.style.alignItems = 'center';
            target.style.justifyContent = 'center';
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-4">
            Herbal Mood
          </h1>
          <p className="text-xl md:text-2xl mb-6 font-light">
            Nature & Wellness
          </p>
          <p className="text-2xl font-semibold mb-4 text-green-200">
            "Balance Your Mood with Nature"
          </p>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed">
            Discover the power of nature's finest ingredients crafted into 
            artisanal products that nurture your well-being and enhance your mood.
          </p>
        </div>
      </section>

      {/* Brand Philosophy Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://placehold.co/600x500?text=Herbal+Mood+artisan+crafting+natural+products+with+botanical+ingredients+and+traditional+methods"
                alt="Herbal Mood artisan crafting natural products with botanical ingredients, traditional methods, and sustainable practices"
                className="rounded-lg shadow-lg w-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.backgroundColor = '#f3f4f6';
                  target.style.minHeight = '500px';
                  target.style.display = 'flex';
                  target.style.alignItems = 'center';
                  target.style.justifyContent = 'center';
                }}
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-green-900 font-serif mb-6">
                Crafted by Nature, Inspired by Wellness
              </h2>
              <div className="w-16 h-1 bg-green-700 mb-6"></div>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Herbal Mood embodies the ancient wisdom of botanical healing combined 
                with modern artisanal craftsmanship. Every product is carefully created 
                to support your emotional well-being and enhance your daily rituals.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                From our therapeutic essential oils to our handcrafted soaps and candles, 
                each item is made with sustainable practices and eco-friendly packaging 
                that reflects our commitment to both your health and the planet.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                Our artisanal approach ensures that every product maintains the highest 
                quality while preserving the natural integrity of our carefully sourced ingredients.
              </p>
              <Link 
                href="/shop?category=essential-oils"
                className="inline-block bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Explore Herbal Mood
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mood Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-900 font-serif mb-6">
              Find Your Perfect Mood
            </h2>
            <div className="w-24 h-1 bg-green-700 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover products tailored to enhance your mood and support your wellness journey 
              through the power of natural aromatherapy and botanical ingredients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {moodCategories.map((category, index) => (
              <div key={index} className="bg-green-50 p-8 rounded-lg border border-green-100 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-green-900 mb-4">
                  {category.mood}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {category.description}
                </p>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-green-700 uppercase tracking-wide">
                    Featured Products:
                  </span>
                  <div className="mt-2">
                    {category.products.map((product, idx) => (
                      <span key={idx} className="inline-block bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-900 font-serif mb-6">
              Herbal Mood Collection
            </h2>
            <div className="w-24 h-1 bg-green-700 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our complete range of artisanal wellness products, each crafted 
              with love and the finest natural ingredients to support your well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {herbalMoodProducts.map((product) => (
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
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif mb-6">
              Our Commitment to Sustainability
            </h2>
            <div className="w-24 h-1 bg-green-300 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-700 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Eco-Friendly Packaging</h3>
              <p className="text-green-100 leading-relaxed">
                All our products come in recyclable, biodegradable, or reusable packaging 
                to minimize environmental impact.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-700 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🌿</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Sustainably Sourced</h3>
              <p className="text-green-100 leading-relaxed">
                We partner with ethical suppliers who practice sustainable farming 
                and fair trade principles.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-700 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">♻️</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Zero Waste Goal</h3>
              <p className="text-green-100 leading-relaxed">
                Our production process aims for zero waste through recycling, 
                composting, and responsible manufacturing practices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HerbalMoodPage
