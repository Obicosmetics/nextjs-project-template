"use client"

import React from 'react'
import Link from 'next/link'

const HomePage = () => {
  const heroImage = "https://placehold.co/1920x1080?text=Elegant+organic+hero+banner+with+natural+textures+and+minimalist+design+showcasing+luxury+personal+care+products"
  
  const categories = [
    {
      title: "Essential Oils & Blends",
      description: "Pure, therapeutic-grade essential oils and custom blends for wellness and aromatherapy.",
      image: "https://placehold.co/400x300?text=Premium+essential+oils+collection+with+natural+botanical+elements",
      link: "/shop?category=essential-oils"
    },
    {
      title: "Natural Skincare",
      description: "Science-based skincare solutions with natural ingredients for healthy, glowing skin.",
      image: "https://placehold.co/400x300?text=Luxury+natural+skincare+products+with+clean+minimalist+packaging",
      link: "/brand/deroice"
    },
    {
      title: "Hair Care Solutions",
      description: "Strengthening and growth-boosting treatments for healthy, beautiful hair.",
      image: "https://placehold.co/400x300?text=Professional+hair+care+products+with+natural+ingredients+and+elegant+design",
      link: "/brand/vitadose"
    },
    {
      title: "Handmade Soap & Candles",
      description: "Artisanal soaps and soy candles crafted with natural ingredients and essential oils.",
      image: "https://placehold.co/400x300?text=Handcrafted+artisanal+soaps+and+candles+with+natural+textures+and+earthy+tones",
      link: "/brand/herbal-mood"
    },
    {
      title: "Natural Oils",
      description: "Premium carrier oils including Jojoba, Castor, Almond, and Argan for beauty and wellness.",
      image: "https://placehold.co/400x300?text=Collection+of+premium+natural+carrier+oils+in+elegant+amber+bottles",
      link: "/shop?category=natural-oils"
    },
    {
      title: "Wellness Products",
      description: "Holistic wellness solutions to balance your mood and enhance your natural beauty.",
      image: "https://placehold.co/400x300?text=Wellness+and+mood+balancing+products+with+natural+botanical+ingredients",
      link: "/brand/herbal-mood"
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img 
          src={heroImage}
          alt="Elegant organic hero banner showcasing natural textures, eco-friendly design, and the tagline 'Where Nature Meets Science – Luxury Personal Care & Oils'"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.backgroundColor = '#f3f4f6';
            target.style.display = 'flex';
            target.style.alignItems = 'center';
            target.style.justifyContent = 'center';
            target.alt = 'Hero Banner - Where Nature Meets Science';
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 leading-tight">
            Where Nature Meets Science
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Luxury Personal Care & Oils
          </p>
          <p className="text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Discover premium natural products crafted with over 40 years of expertise 
            in personal care, essential oils, and wellness solutions.
          </p>
          <Link 
            href="/shop"
            className="inline-block bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 font-serif mb-6">
              Over 40 Years of Excellence
            </h2>
            <div className="w-24 h-1 bg-green-700 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://placehold.co/600x400?text=OBI+Consumer+Products+manufacturing+facility+with+modern+equipment+and+natural+ingredients"
                alt="OBI Consumer Products manufacturing facility showcasing modern equipment, quality control processes, and natural ingredient preparation"
                className="rounded-lg shadow-lg w-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.backgroundColor = '#f3f4f6';
                  target.style.minHeight = '400px';
                  target.style.display = 'flex';
                  target.style.alignItems = 'center';
                  target.style.justifyContent = 'center';
                }}
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-green-900 mb-4">
                Pioneering Natural Personal Care Since 1984
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                OBI Consumer Products Ltd. has been at the forefront of natural personal care innovation 
                for over four decades. Our expertise spans essential oils, advanced skincare formulations, 
                handmade soaps, aromatic candles, hair care solutions, and holistic wellness products.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                We are committed to delivering luxury quality at affordable prices, ensuring that 
                premium natural care is accessible to everyone. Our products combine traditional 
                wisdom with modern science to create effective, safe, and sustainable solutions.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-700">40+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-700">100+</div>
                  <div className="text-gray-600">Natural Products</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 font-serif mb-6">
              Explore Our Product Categories
            </h2>
            <div className="w-24 h-1 bg-green-700 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of natural personal care products, 
              each crafted with premium ingredients and decades of expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-green-100">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={category.image}
                    alt={category.description}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.backgroundColor = '#f3f4f6';
                      target.style.display = 'flex';
                      target.style.alignItems = 'center';
                      target.style.justifyContent = 'center';
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-green-900 mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <Link 
                    href={category.link}
                    className="inline-block bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-md font-medium transition-colors duration-300"
                  >
                    Explore Products
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">
            Experience the OBI Difference
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Join thousands of satisfied customers who trust OBI Consumer Products 
            for their natural personal care needs. Quality, affordability, and 
            sustainability in every product.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/shop"
              className="bg-white text-green-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Shop All Products
            </Link>
            <Link 
              href="/about"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-900 transition-colors duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
