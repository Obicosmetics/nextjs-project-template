import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold font-serif mb-4">OBI Consumer Products Ltd.</h3>
            <p className="text-green-100 mb-4 leading-relaxed">
              Where Nature Meets Science – Luxury Personal Care & Oils. 
              Over 40 years of experience in creating premium natural products 
              for your wellness and beauty needs.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-green-200 hover:text-white transition-colors">
                Facebook
              </Link>
              <Link href="#" className="text-green-200 hover:text-white transition-colors">
                Instagram
              </Link>
              <Link href="#" className="text-green-200 hover:text-white transition-colors">
                Twitter
              </Link>
              <Link href="#" className="text-green-200 hover:text-white transition-colors">
                LinkedIn
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-green-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-green-200 hover:text-white transition-colors">
                  Shop All Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-green-200 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-green-200 hover:text-white transition-colors">
                  Blog & Tips
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Brands</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/brand/deroice" className="text-green-200 hover:text-white transition-colors">
                  Deroice Skincare
                </Link>
              </li>
              <li>
                <Link href="/brand/herbal-mood" className="text-green-200 hover:text-white transition-colors">
                  Herbal Mood Wellness
                </Link>
              </li>
              <li>
                <Link href="/brand/vitadose" className="text-green-200 hover:text-white transition-colors">
                  Vitadose Hair Care
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-green-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-green-200 text-sm mb-4 md:mb-0">
            © 2024 OBI Consumer Products Ltd. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-green-200 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-green-200 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/shipping" className="text-green-200 hover:text-white transition-colors">
              Shipping Info
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
