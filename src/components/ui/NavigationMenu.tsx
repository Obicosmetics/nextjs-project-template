"use client"

import React, { useState } from 'react'
import Link from 'next/link'

const NavigationMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isBrandsOpen, setIsBrandsOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleBrands = () => setIsBrandsOpen(!isBrandsOpen)

  return (
    <nav className="bg-white shadow-sm border-b border-green-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-green-800 font-serif">
              OBI Consumer Products
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-gray-700 hover:text-green-700 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </Link>
              <Link href="/shop" className="text-gray-700 hover:text-green-700 px-3 py-2 text-sm font-medium transition-colors">
                Shop
              </Link>
              
              {/* Brands Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleBrands}
                  className="text-gray-700 hover:text-green-700 px-3 py-2 text-sm font-medium transition-colors flex items-center"
                >
                  Brands
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isBrandsOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-100 z-10">
                    <div className="py-1">
                      <Link href="/brand/deroice" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700">
                        Deroice - Skincare
                      </Link>
                      <Link href="/brand/herbal-mood" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700">
                        Herbal Mood - Wellness
                      </Link>
                      <Link href="/brand/vitadose" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700">
                        Vitadose - Hair Care
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/about" className="text-gray-700 hover:text-green-700 px-3 py-2 text-sm font-medium transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-green-700 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-green-700 px-3 py-2 text-sm font-medium transition-colors">
                Blog
              </Link>
              <Link href="/cart" className="bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-800 transition-colors">
                Cart
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-green-700 p-2"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-green-100">
              <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-700 hover:bg-green-50">
                Home
              </Link>
              <Link href="/shop" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-700 hover:bg-green-50">
                Shop
              </Link>
              <div className="px-3 py-2">
                <div className="text-base font-medium text-gray-900 mb-2">Brands</div>
                <Link href="/brand/deroice" className="block px-3 py-1 text-sm text-gray-600 hover:text-green-700">
                  Deroice - Skincare
                </Link>
                <Link href="/brand/herbal-mood" className="block px-3 py-1 text-sm text-gray-600 hover:text-green-700">
                  Herbal Mood - Wellness
                </Link>
                <Link href="/brand/vitadose" className="block px-3 py-1 text-sm text-gray-600 hover:text-green-700">
                  Vitadose - Hair Care
                </Link>
              </div>
              <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-700 hover:bg-green-50">
                About Us
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-700 hover:bg-green-50">
                Contact
              </Link>
              <Link href="/blog" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-700 hover:bg-green-50">
                Blog
              </Link>
              <Link href="/cart" className="block mx-3 my-2 px-4 py-2 bg-green-700 text-white rounded-md text-base font-medium hover:bg-green-800">
                Cart
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavigationMenu
