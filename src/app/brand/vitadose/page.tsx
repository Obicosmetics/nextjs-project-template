"use client"

import React from 'react'
import ProductCard from '@/components/ui/ProductCard'
import Link from 'next/link'

const VitadosePage = () => {
  const heroImage = "https://placehold.co/1920x600?text=Vitadose+Hair+Care+Line+professional+salon+with+advanced+hair+treatment+products+and+healthy+hair"
  
  const vitadoseProducts = [
    {
      id: 'vitadose-hair-lotion',
      name: 'Hair Growth Lotion',
      description: 'Advanced formula enriched with biotin, keratin, and natural growth stimulants that strengthen hair follicles and promote healthy hair growth from root to tip.',
      price: 32.99,
      image: 'https://placehold.co/400x400?text=Vitadose+Hair+Growth+Lotion+with+professional+hair+care+design+and+pump+dispenser',
      category: 'hair-care',
      brand: 'Vitadose',
      inStock: true
    },
    {
      id: 'vitadose-hair-mask',
      name: 'Intensive Hair Mask',
      description: 'Deep conditioning treatment with argan oil, shea butter, and protein complex that repairs damaged hair and restores natural shine and elasticity.',
      price: 27.99,
      image: 'https://placehold.co/400x400?text=Vitadose+Intensive+Hair+Mask+with+luxury+hair+treatment+packaging+and+rich+texture',
      category: 'hair-care',
      brand: 'Vitadose',
      inStock: true
    },
    {
      id: 'vitadose-scalp-serum',
      name: 'Scalp Revitalizing Serum',
      description: 'Lightweight serum with peptides and botanical extracts that nourishes the scalp, reduces inflammation, and creates optimal conditions for hair growth.',
      price: 38.99,
      image: 'https://placehold.co/400x400?text=Vitadose+Scalp+Revitalizing+Serum+with+dropper+bottle+and+scalp+care+elements',
      category: 'hair-care',
      brand: 'Vitadose',
      inStock: true
    },
    {
      id: 'vitadose-strengthening-shampoo',
      name: 'Strengthening Shampoo',
      description: 'Gentle cleansing shampoo fortified with vitamins and minerals that strengthens weak hair while removing buildup and impurities.',
      price: 24.99,
      image: 'https://placehold.co/400x400?text=Vitadose+Strengthening+Shampoo+with+professional+bottle+design+and+hair+care+symbols',
      category: 'hair-care',
      brand: 'Vitadose',
      inStock: true
    },
    {
      id: 'vitadose-repair-conditioner',
      name: 'Repair & Restore Conditioner',
      description: 'Nourishing conditioner with ceramides and natural oils that detangles, smooths, and protects hair from environmental damage.',
      price: 26.99,
      image: 'https://placehold.co/400x400?text=Vitadose+Repair+Restore+Conditioner+with+matching+shampoo+design+and+smooth+texture',
      category: 'hair-care',
      brand: 'Vitadose',
      inStock: true
    },
    {
      id: 'vitadose-leave-in-treatment',
      name: 'Leave-In Treatment',
      description: 'Multi-benefit leave-in treatment that provides heat protection, UV defense, and continuous nourishment for all-day hair health.',
      price: 29.99,
      image: 'https://placehold.co/400x400?text=Vitadose+Leave+In+Treatment+with+spray+bottle+and+hair+protection+elements',
      category: 'hair-care',
      brand: 'Vitadose',
      inStock: true
    }
  ]

  const hairConcerns = [
    {
      concern: "Hair Loss & Thinning",
      solution: "Hair Growth Lotion + Scalp Serum",
      description: "Combat hair loss with our clinically proven growth stimulants and scalp-nourishing ingredients.",
      benefits: ["Stimulates follicles", "Reduces hair fall", "Increases density"]
    },
    {
      concern: "Damaged & Brittle Hair",
      solution: "Intensive Hair Mask + Repair Conditioner",
      description: "Restore strength and elasticity to damaged hair with our protein-rich repair treatments.",
      benefits: ["Repairs damage", "Prevents breakage", "Restores shine"]
    },
    {
      concern: "Dry & Frizzy Hair",
      solution: "Leave-In Treatment + Hair Mask",
      description: "Hydrate and smooth unruly hair with our moisture-locking formulations.",
      benefits: ["Deep hydration", "Frizz control", "Smooth texture"]
    },
    {
      concern: "Weak & Lifeless Hair",
      solution: "Strengthening Shampoo + Growth Lotion",
      description: "Revitalize weak hair with our vitamin-enriched strengthening system.",
      benefits: ["Strengthens strands", "Adds volume", "Improves texture"]
    }
  ]

  const ingredients = [
    {
      name: "Biotin (Vitamin B7)",
      benefit: "Essential for keratin production and hair follicle health"
    },
    {
      name: "Keratin Protein",
      benefit: "Rebuilds hair structure and strengthens damaged strands"
    },
    {
      name: "Argan Oil",
      benefit: "Rich in vitamin E and fatty acids for deep nourishment"
    },
    {
      name: "Peptide Complex",
      benefit: "Stimulates hair growth and improves scalp circulation"
    },
    {
      name: "Ceramides",
      benefit: "Seals the hair cuticle and prevents moisture loss"
    },
    {
      name: "Natural Botanicals",
      benefit: "Soothe scalp irritation and provide antioxidant protection"
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <img 
          src={heroImage}
          alt="Vitadose Hair Care Line showcasing professional salon environment with advanced hair treatment products, healthy hair transformations, and expert care"
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
            Vitadose
          </h1>
          <p className="text-xl md:text-2xl mb-6 font-light">
            Professional Hair Care Line
          </p>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed">
            Advanced hair care solutions that strengthen, repair, and promote 
            healthy hair growth with clinically proven ingredients and professional results.
          </p>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-green-900 font-serif mb-6">
                Professional Hair Care at Home
              </h2>
              <div className="w-16 h-1 bg-green-700 mb-6"></div>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Vitadose brings salon-quality hair care to your daily routine. Our 
                professional-grade formulations are developed with trichologists and 
                hair care experts to address the most common hair concerns effectively.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Each product in the Vitadose line is formulated with clinically proven 
                ingredients that work synergistically to strengthen hair from the inside 
                out, promoting healthy growth and restoring natural vitality.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                Whether you're dealing with hair loss, damage, or simply want to maintain 
                healthy hair, Vitadose provides comprehensive solutions for all hair types and concerns.
              </p>
              <Link 
                href="/shop?category=hair-care"
                className="inline-block bg-green-700 hover:bg-green-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Shop Vitadose Products
              </Link>
            </div>
            <div>
              <img 
                src="https://placehold.co/600x500?text=Vitadose+hair+care+research+laboratory+with+scientists+testing+formulations+and+hair+analysis"
                alt="Vitadose hair care research laboratory showcasing scientists testing formulations, hair analysis equipment, and product development process"
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

      {/* Hair Concerns Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-900 font-serif mb-6">
              Targeted Solutions for Every Hair Concern
            </h2>
            <div className="w-24 h-1 bg-green-700 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover personalized hair care solutions designed to address your specific 
              concerns and help you achieve your healthiest hair yet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hairConcerns.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-green-100">
                <h3 className="text-xl font-bold text-green-900 mb-3">
                  {item.concern}
                </h3>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                  {item.solution}
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="space-y-2">
                  {item.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Ingredients Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-900 font-serif mb-6">
              Clinically Proven Ingredients
            </h2>
            <div className="w-24 h-1 bg-green-700 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our formulations feature scientifically backed ingredients that deliver 
              measurable results for stronger, healthier hair.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ingredients.map((ingredient, index) => (
              <div key={index} className="bg-green-50 p-6 rounded-lg border border-green-100">
                <h3 className="text-lg font-bold text-green-900 mb-3">
                  {ingredient.name}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {ingredient.benefit}
                </p>
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
              Complete Vitadose Collection
            </h2>
            <div className="w-24 h-1 bg-green-700 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your hair care routine with our comprehensive range of 
              professional-grade treatments and daily care products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vitadoseProducts.map((product) => (
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

      {/* Hair Care Routine Section */}
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-serif mb-6">
              Your Complete Hair Care Routine
            </h2>
            <div className="w-24 h-1 bg-green-300 mx-auto mb-8"></div>
            <p className="text-xl leading-relaxed max-w-3xl mx-auto">
              Follow our expert-recommended routine for optimal hair health and visible results in just 4-6 weeks.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-700 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-3">Cleanse</h3>
              <p className="text-green-100 text-sm leading-relaxed">
                Use Strengthening Shampoo 2-3 times per week to gently cleanse and fortify
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-700 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-3">Condition</h3>
              <p className="text-green-100 text-sm leading-relaxed">
                Apply Repair Conditioner from mid-length to ends after every shampoo
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-700 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-3">Treat</h3>
              <p className="text-green-100 text-sm leading-relaxed">
                Use Hair Mask weekly and apply Growth Lotion to scalp daily
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-700 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-3">Protect</h3>
              <p className="text-green-100 text-sm leading-relaxed">
                Finish with Leave-In Treatment for daily protection and nourishment
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-green-200 text-lg mb-6">
              Consistency is key! Use products as directed for 4-6 weeks to see optimal results.
            </p>
            <Link 
              href="/shop?category=hair-care"
              className="inline-block bg-white text-green-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Start Your Hair Journey
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default VitadosePage
