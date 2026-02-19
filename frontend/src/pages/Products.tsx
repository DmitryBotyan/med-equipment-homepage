import { useEffect, useMemo, useState } from 'react'
import { ArrowRight, Search, Filter, Star, Phone } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import Footer from '../components/Footer'
import QuoteModal from '../components/QuoteModal'
import SiteHeader from '../components/SiteHeader'

import { CATEGORIES, getProductImageUrl, PRODUCT_IMAGE_PLACEHOLDER, PRODUCTS, type ProductCategory } from '../data/products'

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | ProductCategory>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalProductInterest, setModalProductInterest] = useState<string | undefined>(undefined)
  const [searchParams, setSearchParams] = useSearchParams()

  const categoryCounts = useMemo(() => {
    const counts: Record<ProductCategory, number> = {
      imaging: 0,
      surgical: 0,
      patient: 0,
      lab: 0,
      emergency: 0,
      rehab: 0,
    }

    PRODUCTS.forEach((product) => {
      counts[product.category] += 1
    })

    return counts
  }, [])

  useEffect(() => {
    const categoryFromUrl = searchParams.get('category')
    const nextCategory =
      CATEGORIES.some((category) => category.id === categoryFromUrl)
        ? (categoryFromUrl as 'all' | ProductCategory)
        : 'all'

    const nextSearch = searchParams.get('q') ?? ''

    setActiveCategory(nextCategory)
    setSearchQuery(nextSearch)
  }, [searchParams])

  const updateSearchParams = (nextCategory: 'all' | ProductCategory, nextSearch: string) => {
    const nextParams = new URLSearchParams(searchParams)

    if (nextCategory === 'all') {
      nextParams.delete('category')
    } else {
      nextParams.set('category', nextCategory)
    }

    const trimmedSearch = nextSearch.trim()
    if (trimmedSearch) {
      nextParams.set('q', trimmedSearch)
    } else {
      nextParams.delete('q')
    }

    setSearchParams(nextParams, { replace: true })
  }

  const handleCategoryChange = (categoryId: 'all' | ProductCategory) => {
    setActiveCategory(categoryId)
    updateSearchParams(categoryId, searchQuery)
  }

  const handleSearchChange = (value: string) => {
    setSearchQuery(value)
    updateSearchParams(activeCategory, value)
  }

  const clearFilters = () => {
    setActiveCategory('all')
    setSearchQuery('')
    setSearchParams({}, { replace: true })
  }

  const openQuoteModal = (productInterest?: ProductCategory) => {
    setModalProductInterest(productInterest)
    setIsModalOpen(true)
  }

  const normalizedSearch = searchQuery.trim().toLowerCase()

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory
    const matchesSearch =
      normalizedSearch.length === 0 ||
      product.name.toLowerCase().includes(normalizedSearch) ||
      product.specs.some((spec) => spec.toLowerCase().includes(normalizedSearch))

    return matchesCategory && matchesSearch
  })

  const hasActiveFilters = activeCategory !== 'all' || normalizedSearch.length > 0

  return (
    <div className="min-h-screen bg-white">
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      <SiteHeader onQuoteRequest={() => openQuoteModal()} />

      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-10 sm:pb-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center">
            <div className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">Каталог</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Наша продукция
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              {PRODUCTS.length} наименований медицинского оборудования от ведущих мировых производителей
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="relative w-full sm:w-72 md:w-96 lg:w-[28rem]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Поиск по названию и характеристикам..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-600"
              />
            </div>
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-600" />
                <span className="text-sm font-medium text-gray-600">
                  {filteredProducts.length} из {PRODUCTS.length} товаров
                </span>
              </div>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Сбросить фильтры
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-64 flex-shrink-0">
              <h3 className="font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Категории</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
                {CATEGORIES.map((category) => {
                  const count = category.id === 'all' ? PRODUCTS.length : categoryCounts[category.id]

                  return (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-sm text-left transition-colors ${
                        activeCategory === category.id
                          ? 'bg-blue-50 text-blue-600'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <span className="text-sm font-medium">{category.name}</span>
                      <span className="text-xs text-gray-400">{count}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group bg-white border border-gray-200 rounded-sm overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                    <Link to={`/products/${product.slug}`} className="relative aspect-video overflow-hidden bg-gray-100 block">
                      <img
                        src={getProductImageUrl(product.image, 600, 400)}
                        alt={product.name}
                        onError={(event) => {
                          event.currentTarget.onerror = null
                          event.currentTarget.src = PRODUCT_IMAGE_PLACEHOLDER
                        }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 flex items-center gap-1 bg-white px-2 py-1 rounded-sm">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm font-semibold">{product.rating}</span>
                      </div>
                    </Link>
                    <div className="p-5 sm:p-6 flex flex-col flex-1">
                      <Link
                        to={`/products/${product.slug}`}
                        className="text-lg font-semibold text-gray-900 mb-2 min-h-[3.75rem] hover:text-blue-700 transition-colors"
                        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                      >
                        {product.name}
                      </Link>
                      <div className="flex flex-wrap items-start content-start gap-2 mb-4 min-h-[4.5rem]">
                        {product.specs.map((spec, idx) => (
                          <span key={idx} className="self-start text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
                            {spec}
                          </span>
                        ))}
                      </div>
                      <div className="mt-auto pt-2 flex items-end justify-between gap-3">
                        <span className="text-lg font-semibold text-blue-600 whitespace-nowrap leading-none tabular-nums">{product.price}</span>
                        <Link
                          to={`/products/${product.slug}`}
                          className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          Подробнее
                        </Link>
                      </div>
                      <button
                        onClick={() => openQuoteModal(product.category)}
                        className="mt-3 flex items-center justify-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors border border-gray-200 rounded-sm py-2"
                      >
                        Запросить цену
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 mb-4">Продукты не найдены по заданным фильтрам.</p>
                  <button onClick={clearFilters} className="text-sm text-blue-600 hover:text-blue-700 transition-colors">
                    Сбросить фильтры
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-light text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Нужна помощь с выбором?
          </h2>
          <p className="text-blue-100 mb-8">
            Наши специалисты помогут подобрать оптимальное оборудование для вашего учреждения
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+74951234567" className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-sm hover:bg-gray-100 transition-colors">
              <Phone className="w-5 h-5" />
              Позвонить
            </a>
            <button
              onClick={() => openQuoteModal(activeCategory === 'all' ? undefined : activeCategory)}
              className="px-6 py-3 border-2 border-white text-white font-semibold rounded-sm hover:bg-white/10 transition-colors"
            >
              Запросить консультацию
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Quote Modal */}
      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setModalProductInterest(undefined)
        }}
        initialProductInterest={modalProductInterest}
      />
    </div>
  )
}

export default Products
