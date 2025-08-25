"use client"

import React from 'react'
import ProductCard from '@/components/ui/ProductCard'
import Link from 'next/link'

const DeroicePage = () => {

  const heroImage = "https://placehold.co/1920x600?text=Deroice+Skincare+Innovation+modern+laboratory+with+natural+ingredients+and+scientific+equipment"
  
  const deroiceProducts = [
    {
      id: 'deroice-acne-cleanser',
      name: 'Acne Foaming Cleanser',
      description: 'Deep-cleansing foaming cleanser that targets acne-causing bacteria while maintaining skin balance with salicylic acid and tea tree oil.',
      price: 24.99,
      image: 'https://placehold.co/400x400?text=Deroice+Acne+Foaming+Cleanser+with+clean+modern+packaging+and+pump+dispenser',
      category: 'skincare',
      brand: 'Deroice',
      inStock: true
    },
    {
      id: 'deroice-facial-cleanser',
      name: 'Foaming Facial Cleanser',
      description: 'Gentle daily cleanser that removes impurities while nourishing your skin with natural ingredients like aloe vera and chamomile.',
      price: 22.99,
      image: 'https://placehold.co/400x400?text=Deroice+Foaming+Facial+Cleanser+with+elegant+minimalist+design+and+natural+elements',
      category: 'skincare',
      brand: 'Deroice',
      inStock: true
    },
    {
      id: 'deroice-brightening-cream',
      name: 'Brightening Cream',
      description: 'Advanced brightening formula with vitamin C and niacinamide that evens skin tone and reduces dark spots for radiant, glowing skin.',
      price: 34.99,
      image: 'https://placehold.co/400x400?text=Deroice+Brightening+Cream+with+luxury+skincare+packaging+and+golden+accents',
      category: 'skincare',
      brand: 'Deroice',
      inStock: true
    },
    {
      id: 'deroice-sunscreen',
      name: 'Sunscreen SPF 50+',
      description: 'Broad-spectrum protection with zinc oxide and natural ingredients that shield your skin from harmful UV rays without white residue.',
      price: 28.99,
      image: 'https://placehold.co/400x400?text=Deroice+Sunscreen+SPF+50+with+protective+formula+design+and+UV+protection+symbols',
      category: 'skincare',
      brand: 'Deroice',
      inStock: true
    }
  ]

  const benefits = [
    {
      title: "Science-Based Formulations",
      description: "Each product is developed using proven scientific research and clinical testing to ensure maximum effectiveness."
    },
    {
      title: "Natural Active Ingredients",
      description: "We combine powerful natural actives with modern skincare science for gentle yet effective results."
    },
    {
      title: "Visible Results",
      description: "Our customers see noticeable improvements in their skin within 2-4 weeks of consistent use."
    },
    {
      title: "Dermatologist Tested",
      description: "All Deroice products are tested by dermatologists and suitable for sensitive skin types."
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <img 
          src={heroImage}
          alt="Deroice Skincare Innovation showcasing modern laboratory with natural ingredients, scientific equipment, and advanced skincare research"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.backgroundColor = '#f3f4f6';
            target.style.display = 'flex';
            target.style.alignItems = 'center';
            target.style.justifyContent = 'center';
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold font-serif mb-4">
            Deroice
          </h1>
          <p className="text-xl md:text-2xl mb-6 font-light">
            Skincare Innovation
          </p>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed">
            Where modern science meets natural beauty. Advanced formulations 
            designed to deliver visible results for healthier, more radiant skin.
          </p>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-green-900 font-serif mb-6">
                The Science of Beautiful Skin
              </h2>
              <div className="w-16 h-1 bg-green-700 mb-6"></div>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Deroice represents the perfect fusion of cutting-edge skincare science 
                and natural ingredients. Our research-driven approach ensures that every 
                product delivers measurable results while being gentle on your skin.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                From our acne-fighting cleansers to our brightening treatments, each 
                Deroice product is formulated with clinically proven ingredients that 
                work synergistically to address specific skin concerns.
              </p>
              <Link 
                href="/shop?category=skincare"
                className="inline-block bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Shop Deroice Products
              </Link>
            </div>
            <div>
              <img 
                src="https://placehold.co/600x500?text=Deroice+skincare+laboratory+with+scientists+developing+natural+formulations+and+testing+ingredients"
                alt="Deroice skincare laboratory showcasing scientists developing natural formulations, testing ingredients, and quality control processes"
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
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-900 font-serif mb-6">
              Why Choose Deroice?
            </h2>
            <div className="w-24 h-1 bg-green-700 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the difference that science-backed skincare can make for your skin health and appearance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-green-100">
                <h3 className="text-xl font-bold text-green-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-900 font-serif mb-6">
              Deroice Product Collection
            </h2>
            <div className="w-24 h-1 bg-green-700 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our complete range of scientifically formulated skincare solutions 
              designed to address your specific skin concerns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deroiceProducts.map((product) => (
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

      {/* Skincare Routine Section */}
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-serif mb-6">
            Your Daily Deroice Routine
          </h2>
          <p className="text-xl mb-12 leading-relaxed">
            Follow our recommended skincare routine for optimal results and healthier-looking skin.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Cleanse</h3>
              <p className="text-green-100 text-sm">
                Start with our Foaming Facial Cleanser or Acne Cleanser
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Treat</h3>
              <p className="text-green-100 text-sm">
                Apply Brightening Cream to target specific concerns
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Protect</h3>
              <p className="text-green-100 text-sm">
                Finish with our SPF 50+ Sunscreen during the day
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Maintain</h3>
              <p className="text-green-100 text-sm">
                Use consistently for 4-6 weeks to see visible results
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DeroicePage
