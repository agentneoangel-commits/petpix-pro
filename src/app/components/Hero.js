'use client'

import { useState } from 'react'

export default function Hero() {
  const [email, setEmail] = useState('')

  return (
    <section className="bg-gradient-to-b from-pink-50 to-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Turn Your Pet Into
          <span className="text-primary"> Art</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Transform your pet photos into stunning AI-generated artwork.
          <br />
          10 unique styles. 30 seconds. Starting at $4.99.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#upload"
            className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-500 transition-colors"
          >
            Upload Your Pet Photo
          </a>
          <a
            href="#pricing"
            className="bg-white text-gray-900 border-2 border-gray-300 px-8 py-4 rounded-full text-lg font-semibold hover:border-gray-400 transition-colors"
          >
            View Pricing
          </a>
        </div>

        <div className="flex items-center justify-center gap-8 text-gray-500">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>1,000+ Happy Pet Parents</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>60 Second Delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>10 Unique Styles</span>
          </div>
        </div>
      </div>
    </section>
  )
}
