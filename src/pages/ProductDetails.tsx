import { useMemo, useState } from 'react'
import { ArrowLeft, ArrowRight, CheckCircle, Phone, Shield, Star, Truck } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import QuoteModal from '../components/QuoteModal'
import SiteHeader from '../components/SiteHeader'
import { CATEGORY_LABELS, getProductImageUrl, PRODUCTS, PRODUCT_IMAGE_PLACEHOLDER } from '../data/products'

const ProductDetails = () => {
  const { slug } = useParams()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const product = useMemo(() => PRODUCTS.find((item) => item.slug === slug), [slug])

  const relatedProducts = useMemo(() => {
    if (!product) {
      return []
    }

    return PRODUCTS.filter((item) => item.category === product.category && item.slug !== product.slug).slice(0, 3)
  }, [product])

  if (!product) {
    return <Navigate to="/products" replace />
  }

  return (
    <div className="min-h-screen bg-white">
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      <SiteHeader onQuoteRequest={() => setIsModalOpen(true)} />

      <section className="pt-28 sm:pt-32 pb-10 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-6">
            <Link to="/products" className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Каталог
            </Link>
            <span>/</span>
            <span>{CATEGORY_LABELS[product.category]}</span>
            <span>/</span>
            <span className="text-gray-700">{product.name}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            <div className="bg-white border border-gray-200 rounded-sm overflow-hidden">
              <img
                src={getProductImageUrl(product.image, 1200, 800)}
                alt={product.name}
                onError={(event) => {
                  event.currentTarget.onerror = null
                  event.currentTarget.src = PRODUCT_IMAGE_PLACEHOLDER
                }}
                className="w-full aspect-[4/3] object-cover"
              />
            </div>

            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-4">
                {CATEGORY_LABELS[product.category]}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {product.name}
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">{product.summary}</p>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="text-2xl sm:text-3xl font-semibold text-blue-600 whitespace-nowrap">{product.price}</span>
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-white border border-gray-200 rounded-sm">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-semibold">{product.rating}</span>
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {product.specs.map((spec) => (
                  <span key={spec} className="text-sm px-3 py-1.5 rounded-sm bg-gray-100 text-gray-700">
                    {spec}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-7 py-3 bg-blue-600 text-white font-semibold rounded-sm hover:bg-blue-700 transition-colors"
                >
                  Запросить цену
                </button>
                <a
                  href="tel:+74951234567"
                  className="px-7 py-3 border border-gray-300 text-gray-700 font-semibold rounded-sm hover:border-blue-600 hover:text-blue-600 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Консультация
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-light text-gray-900 mb-5" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Описание
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Ключевые преимущества
            </h3>
            <div className="space-y-3">
              {product.benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Области применения
            </h3>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {product.applications.map((application) => (
                <div key={application} className="p-4 bg-gray-50 rounded-sm text-sm font-medium text-gray-700">
                  {application}
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="p-5 border border-gray-200 rounded-sm flex items-center gap-3">
                <Truck className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="font-semibold text-gray-900">Поставка и ввод в эксплуатацию</div>
                  <div className="text-sm text-gray-600">Поставка, монтаж и первичное обучение персонала.</div>
                </div>
              </div>
              <div className="p-5 border border-gray-200 rounded-sm flex items-center gap-3">
                <Shield className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="font-semibold text-gray-900">Гарантийное сопровождение</div>
                  <div className="text-sm text-gray-600">Расширенная гарантия и техническая поддержка 24 часа.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="py-16 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-8" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Похожие товары
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((item) => (
                <Link
                  key={item.slug}
                  to={`/products/${item.slug}`}
                  className="p-5 bg-white border border-gray-200 rounded-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-sm text-blue-600 mb-2">{CATEGORY_LABELS[item.category]}</div>
                  <div className="font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{item.name}</div>
                  <div className="text-sm text-gray-600 mb-3">{item.summary}</div>
                  <div className="inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                    Открыть
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />

      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialProductInterest={product.category}
      />
    </div>
  )
}

export default ProductDetails
