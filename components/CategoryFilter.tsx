'use client'

import { Category } from '@/types'
import { useState } from 'react'

interface CategoryFilterProps {
  categories: Category[]
}

export default function CategoryFilter({ categories }: CategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  if (!categories || categories.length === 0) {
    return null
  }

  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      <button
        onClick={() => setSelectedCategory('all')}
        className={`inline-flex items-center px-6 py-3 rounded-full font-medium transition-all ${
          selectedCategory === 'all'
            ? 'bg-primary text-white shadow-lg'
            : 'bg-white text-gray-700 border border-gray-200 hover:border-primary hover:text-primary'
        }`}
      >
        All Categories
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setSelectedCategory(category.id)}
          className={`inline-flex items-center px-6 py-3 rounded-full font-medium transition-all ${
            selectedCategory === category.id
              ? 'bg-primary text-white shadow-lg'
              : 'bg-white text-gray-700 border border-gray-200 hover:border-primary hover:text-primary'
          }`}
        >
          {category.metadata.icon && (
            <span className="mr-2 text-lg">{category.metadata.icon}</span>
          )}
          {category.title}
        </button>
      ))}
    </div>
  )
}