import { useState } from 'react'
import { CheckCircle, ArrowRight, Phone, Mail, Clock, Shield, Award, Users } from 'lucide-react'
import Footer from '../components/Footer'
import QuoteModal from '../components/QuoteModal'
import SiteHeader from '../components/SiteHeader'

const Solutions = () => {
  const [activeTab, setActiveTab] = useState('hospitals')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const solutions = {
    hospitals: {
      title: 'Больницы и клиники',
      description: 'Комплексные решения для многопрофильных медицинских учреждений любого масштаба',
      features: [
        'Полная модернизация операционных',
        'Отделения интенсивной терапии',
        'Диагностические центры',
        'Скорая медицинская помощь',
        'Централизованная система мониторинга',
        'Интеграция с МИС/ЛИС'
      ],
      stats: { clients: '500+', satisfaction: '98%', support: 'Круглосуточно' }
    },
    laboratories: {
      title: 'Лаборатории',
      description: 'Автоматизация и оснащение клинико-диагностических лабораторий',
      features: [
        'Автоматизированные линии анализаторов',
        'Системы управления пробами',
        'Интеграция с ЛИС',
        'Контроль качества',
        'Валидация по ГОСТ ISO 15189',
        'Обучение персонала'
      ],
      stats: { clients: '300+', satisfaction: '99%', support: 'Круглосуточно' }
    },
    private: {
      title: 'Частные клиники',
      description: 'Оптимальные решения для небольших медицинских центров и частных практик',
      features: [
        'Компактное диагностическое оборудование',
        'Мобильные решения',
        'Гибкие условия финансирования',
        'Быстрая установка',
        'Обучение персонала',
        'Гарантийное обслуживание'
      ],
      stats: { clients: '800+', satisfaction: '97%', support: 'Круглосуточно' }
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      <SiteHeader onQuoteRequest={() => setIsModalOpen(true)} />

      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-14 sm:pb-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4">Решения</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Комплексные решения<br />для вашего учреждения
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
              Мы предлагаем полный цикл услуг — от аудита и проектирования до внедрения и обслуживания
            </p>
            <div className="mt-8 inline-flex max-w-2xl rounded-sm border border-blue-200/50 bg-blue-50/10 px-5 py-3 text-left">
              <p className="text-sm text-blue-100 leading-relaxed">
                Это демонстрационный pet-проект для портфолио. Контент, цены и сценарии использования представлены в демонстрационных целях.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="sticky top-20 bg-white border-b border-gray-200 z-40 mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex gap-4 sm:gap-8 overflow-x-auto scrollbar-hide">
            {Object.entries(solutions).map(([key, data]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === key 
                    ? 'border-blue-600 text-blue-600' 
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {data.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-light mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {solutions[activeTab as keyof typeof solutions].title}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {solutions[activeTab as keyof typeof solutions].description}
              </p>
              
              <div className="space-y-4 mb-8">
                {solutions[activeTab as keyof typeof solutions].features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => setIsModalOpen(true)}
                className="group flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-medium rounded-sm hover:bg-blue-700 transition-all"
              >
                Получить предложение
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-sm">
                <Users className="w-8 h-8 text-blue-600 mb-4" />
                <div className="text-3xl font-semibold text-gray-900 mb-1">
                  {solutions[activeTab as keyof typeof solutions].stats.clients}
                </div>
                <div className="text-sm text-gray-500">Клиентов</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-sm">
                <Award className="w-8 h-8 text-blue-600 mb-4" />
                <div className="text-3xl font-semibold text-blue-600 mb-1">
                  {solutions[activeTab as keyof typeof solutions].stats.satisfaction}
                </div>
                <div className="text-sm text-blue-600/70">Удовлетворенность</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-sm">
                <Clock className="w-8 h-8 text-blue-600 mb-4" />
                <div className="text-3xl font-semibold text-gray-900 mb-1">
                  {solutions[activeTab as keyof typeof solutions].stats.support}
                </div>
                <div className="text-sm text-gray-500">Поддержка</div>
              </div>
              <div className="bg-blue-600 p-6 rounded-sm text-white">
                <Shield className="w-8 h-8 mb-4" />
                <div className="text-3xl font-semibold mb-1">5 лет</div>
                <div className="text-sm text-blue-200">Гарантия</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Как мы работаем
            </h2>
            <p className="text-gray-600">Простой и прозрачный процесс сотрудничества</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { step: '01', title: 'Консультация', desc: 'Анализ ваших потребностей и целей' },
              { step: '02', title: 'Проектирование', desc: 'Разработка оптимального решения' },
              { step: '03', title: 'Внедрение', desc: 'Поставка, установка и обучение' },
              { step: '04', title: 'Поддержка', desc: 'Гарантийное и постгарантийное обслуживание' },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-4xl sm:text-5xl font-light text-blue-200 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {item.step}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-8 right-0 w-full h-px bg-gray-300 -z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-light text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Готовы начать проект?
          </h2>
          <p className="text-blue-100 mb-8">
            Свяжитесь с нами для бесплатной консультации и расчета стоимости
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+74951234567" className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-sm hover:bg-gray-100 transition-colors">
              <Phone className="w-5 h-5" />
              Позвонить
            </a>
            <a href="mailto:info@medequip.ru" className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-sm hover:bg-white/10 transition-colors">
              <Mail className="w-5 h-5" />
              Написать
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Quote Modal */}
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

export default Solutions
