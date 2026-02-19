import { useState } from 'react'
import { Star, Quote, ArrowRight, ChevronLeft, ChevronRight, User } from 'lucide-react'
import Footer from '../components/Footer'
import QuoteModal from '../components/QuoteModal'
import SiteHeader from '../components/SiteHeader'

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const testimonials = [
    {
      id: 1,
      quote: "МедЭквип преобразил нашу хирургическую квартиру с передовым оборудованием. Их экспертиза и поддержка были бесценны. Качество продукции превзошло все наши ожидания.",
      author: "Д-р Александра Волкова",
      role: "Заведующая хирургическим отделением",
      hospital: "Городская клиническая больница №15",
      initials: "АВ",
      color: "bg-blue-500",
      rating: 5
    },
    {
      id: 2,
      quote: "Системы диагностической визуализации повысили нашу точность на 40%. Исключительное качество и бесшовная установка. Техническая поддержка работает безупречно.",
      author: "Игорь Николаев",
      role: "Главный рентгенолог",
      hospital: "Медицинский центр Диагностика Про",
      initials: "ИН",
      color: "bg-green-500",
      rating: 5
    },
    {
      id: 3,
      quote: "Надежное оборудование, конкурентоспособные цены и выдающееся обслуживание клиентов. Наш поставщик №1 уже 8 лет. Рекомендую всем коллегам.",
      author: "Д-р Марина Семенова",
      role: "Исполнительный директор",
      hospital: "Сеть медицинских клиник Альфа",
      initials: "МС",
      color: "bg-purple-500",
      rating: 5
    },
    {
      id: 4,
      quote: "Сотрудничество с МедЭквип позволило нам модернизировать всю лабораторию за рекордно короткие сроки. Профессиональный подход на всех этапах.",
      author: "Анна Петрова",
      role: "Заведующая лабораторией",
      hospital: "Клиника МедиАрт",
      initials: "АП",
      color: "bg-orange-500",
      rating: 5
    },
    {
      id: 5,
      quote: "Отличное соотношение цены и качества. Оборудование работает безотказно уже более 5 лет. Быстрая доставка и квалифицированный монтаж.",
      author: "Михаил Соколов",
      role: "Главный врач",
      hospital: "Центральная районная больница",
      initials: "МС",
      color: "bg-red-500",
      rating: 5
    },
    {
      id: 6,
      quote: "Благодаря МедЭквип мы смогли оснастить новый филиал современным оборудованием в сжатые сроки. Отдельное спасибо за обучение персонала.",
      author: "Елена Васильева",
      role: "Коммерческий директор",
      hospital: "Сеть клиник Здоровье",
      initials: "ЕВ",
      color: "bg-pink-500",
      rating: 5
    },
    {
      id: 7,
      quote: "Впечатлены уровнем сервиса и качеством медицинского оборудования. Особенно ценим оперативную доставку запчастей и круглосуточную поддержку.",
      author: "Сергей Козлов",
      role: "Технический директор",
      hospital: "Многопрофильный госпиталь Вита",
      initials: "СК",
      color: "bg-indigo-500",
      rating: 5
    },
    {
      id: 8,
      quote: "Переоснащение реанимационного отделения прошло безупречно. Оборудование отвечает всем современным стандартам, персонал прошел отличное обучение.",
      author: "Наталья Морозова",
      role: "Заведующая реанимацией",
      hospital: "Областная больница скорой помощи",
      initials: "НМ",
      color: "bg-teal-500",
      rating: 5
    },
    {
      id: 9,
      quote: "Отличный выбор для частной клиники. Гибкие условия финансирования, быстрая поставка и индивидуальный подход к каждому клиенту.",
      author: "Дмитрий Лебедев",
      role: "Управляющий партнер",
      hospital: "Семейная клиника ПрофиМед",
      initials: "ДЛ",
      color: "bg-cyan-500",
      rating: 5
    }
  ]

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="min-h-screen bg-white">
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      <SiteHeader onQuoteRequest={() => setIsModalOpen(true)} />

      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-14 sm:pb-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-sm font-semibold text-blue-200 uppercase tracking-wider mb-4">Отзывы</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Что говорят наши<br />клиенты
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 leading-relaxed">
              Более 2 000 медицинских учреждений по всему миру доверяют нам свое оборудование
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 -mt-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="bg-white rounded-sm shadow-xl p-5 sm:p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="lg:w-1/3">
                <div className={`w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full mx-auto flex items-center justify-center text-white text-3xl sm:text-4xl font-bold ${testimonials[activeIndex]?.color || 'bg-blue-500'}`}>
                  {testimonials[activeIndex]?.initials || <User className="w-16 h-16" />}
                </div>
              </div>
              <div className="lg:w-2/3 text-center lg:text-left">
                <Quote className="w-12 h-12 text-blue-200 mb-6 mx-auto lg:mx-0" />
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonials[activeIndex]?.quote}"
                </p>
                <div className="flex justify-center lg:justify-start gap-1 mb-4">
                  {[...Array(testimonials[activeIndex]?.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <div>
                  <div className="text-xl font-semibold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {testimonials[activeIndex]?.author}
                  </div>
                  <div className="text-blue-600">{testimonials[activeIndex]?.role}</div>
                  <div className="text-gray-500">{testimonials[activeIndex]?.hospital}</div>
                </div>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8 pt-8 border-t border-gray-100">
              <button 
                onClick={prevTestimonial}
                className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      idx === activeIndex ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <button 
                onClick={nextTestimonial}
                className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div>
              <div className="text-4xl font-semibold text-blue-600 mb-2">2 000+</div>
              <div className="text-gray-600">Клиентов</div>
            </div>
            <div>
              <div className="text-4xl font-semibold text-blue-600 mb-2">4.9</div>
              <div className="text-gray-600">Средний рейтинг</div>
            </div>
            <div>
              <div className="text-4xl font-semibold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Рекомендуют</div>
            </div>
            <div>
              <div className="text-4xl font-semibold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Лет на рынке</div>
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-3xl sm:text-4xl font-light text-center mb-12" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Все отзывы
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, idx) => (
              <div 
                key={testimonial.id}
                className="bg-gray-50 p-6 rounded-sm hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setActiveIndex(idx)}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 line-clamp-4">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-sm ${testimonial.color}`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{testimonial.author}</div>
                    <div className="text-xs text-gray-500">{testimonial.hospital}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-light text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Присоединяйтесь к нашим довольным клиентам
          </h2>
          <p className="text-blue-100 mb-8">
            Получите персонализированное предложение для вашего учреждения
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-sm hover:bg-gray-100 transition-colors mx-auto"
          >
            Запросить предложение
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Quote Modal */}
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

export default Testimonials
