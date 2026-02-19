import { useState } from 'react'
import { Activity, Microscope, Stethoscope, ArrowRight, Shield, Users, Award, Quote } from 'lucide-react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import QuoteModal from '../components/QuoteModal'
import SiteHeader from '../components/SiteHeader'
import { PRODUCTS, type ProductCategory } from '../data/products'

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const categoryCounts = PRODUCTS.reduce<Record<ProductCategory, number>>(
    (accumulator, product) => {
      accumulator[product.category] += 1
      return accumulator
    },
    {
      imaging: 0,
      surgical: 0,
      patient: 0,
      lab: 0,
      emergency: 0,
      rehab: 0,
    },
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Load Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      <SiteHeader transparentOnTop onQuoteRequest={() => setIsModalOpen(true)} />

      {/* Hero Section */}
      <section className="pt-28 pb-14 sm:pt-32 sm:pb-20 lg:pt-44 lg:pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-50 rounded-full">
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                <span className="text-xs sm:text-sm font-medium text-blue-700">Нам доверяют более 2 000 медицинских учреждений</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light leading-[1.1] tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Прецизионное<br />
                <span className="font-semibold text-blue-600">Медицинское</span><br />
                Оборудование
              </h1>
              
              <p className="text-base sm:text-lg text-gray-600 max-w-lg leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Поставляем передовые диагностические инструменты, хирургические инструменты и оборудование для ухода за пациентами медицинским работникам по всему миру с 1995 года.
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                <Link to="/products" className="group w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-blue-600 text-white font-medium rounded-sm hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
                  Каталог продукции
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/contact" className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 border border-gray-300 text-gray-700 font-medium rounded-sm hover:border-blue-600 hover:text-blue-600 transition-all text-center">
                  Записаться на демо
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-4 max-w-2xl">
                <div className="text-center">
                  <div className="text-3xl font-semibold text-gray-900">25+</div>
                  <div className="text-sm text-gray-500">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-semibold text-gray-900">50 тыс.+</div>
                  <div className="text-sm text-gray-500">Поставлено продукции</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-semibold text-gray-900">99%</div>
                  <div className="text-sm text-gray-500">Удовлетворенность</div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden">
              <div className="absolute -top-14 -right-10 sm:-top-20 sm:-right-20 w-72 sm:w-96 h-72 sm:h-96 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-sm p-5 sm:p-8 aspect-square flex items-center justify-center">
                <div className="grid grid-cols-2 gap-3 sm:gap-6 w-full max-w-md">
                  <div className="bg-white p-4 sm:p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                    <Microscope className="w-8 h-8 text-blue-600 mb-4" />
                    <div className="text-sm font-semibold text-gray-900">Диагностическая визуализация</div>
                    <div className="text-xs text-gray-500 mt-1">МРТ, КТ, рентген</div>
                  </div>
                  <div className="bg-white p-4 sm:p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow mt-5 sm:mt-8">
                    <Stethoscope className="w-8 h-8 text-blue-600 mb-4" />
                    <div className="text-sm font-semibold text-gray-900">Мониторинг пациентов</div>
                    <div className="text-xs text-gray-500 mt-1">Жизненные показатели и ОРИТ</div>
                  </div>
                  <div className="bg-white p-4 sm:p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                    <Activity className="w-8 h-8 text-blue-600 mb-4" />
                    <div className="text-sm font-semibold text-gray-900">Хирургическое оборудование</div>
                    <div className="text-xs text-gray-500 mt-1">Операционные и процедурные</div>
                  </div>
                  <div className="bg-white p-4 sm:p-6 rounded-sm shadow-sm hover:shadow-md transition-shadow mt-5 sm:mt-8">
                    <Shield className="w-8 h-8 text-blue-600 mb-4" />
                    <div className="text-sm font-semibold text-gray-900">Контроль инфекций</div>
                    <div className="text-xs text-gray-500 mt-1">Решения для стерилизации</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-8">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Нам доверяют ведущие учреждения</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 opacity-50">
            {['НМИЦ им. Алмазова', 'НМИЦ онкологии им. Блохина', 'НИИ Склифосовского', 'Федеральный центр ФМБА', 'Центральная клиническая больница'].map((name) => (
              <div key={name} className="text-base sm:text-xl font-semibold text-gray-400 text-center" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Teaser */}
      <section id="products" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div>
              <div className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">Категории продуктов</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Полный портфель<br />оборудования
              </h2>
            </div>
            <Link to="/products" className="group flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
              Смотреть полный каталог
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {([
              { title: 'Диагностическая визуализация', category: 'imaging', desc: 'МРТ, КТ сканеры, ультразвук и цифровые рентген-системы' },
              { title: 'Хирургические системы', category: 'surgical', desc: 'Операционные столы, свет, электрохирургические аппараты и инструменты' },
              { title: 'Уход за пациентами', category: 'patient', desc: 'Кровати, мониторы, вентиляторы и инфузионные помпы' },
              { title: 'Лабораторное оборудование', category: 'lab', desc: 'Анализаторы, центрифуги и диагностические инструменты' },
              { title: 'Экстренная медицина', category: 'emergency', desc: 'Дефибрилляторы, носилки и скорая помощь' },
              { title: 'Реабилитация', category: 'rehab', desc: 'Физиотерапия и устройства для мобильности' },
            ] as const).map((item, idx) => (
              <Link to={`/products?category=${item.category}`} key={idx} className="group p-8 bg-gray-50 rounded-sm hover:bg-blue-50 transition-all block">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 bg-white rounded-sm flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <Activity className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">{categoryCounts[item.category]} товаров</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="solutions" className="py-16 sm:py-20 lg:py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4">Почему «МедЭквип»</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-8" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Превосходство в<br />каждом партнерстве
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Мы сочетаем отраслевую экспертизу с персонализированным сервисом для поставки медицинских решений, которые улучшают уход за пациентами и операционную эффективность.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Award, title: 'Международная сертификация оборудования', desc: 'Все изделия соответствуют требованиям качества и безопасности' },
                  { icon: Users, title: 'Выделенное управление аккаунтом', desc: 'Персональная поддержка при закупках и обслуживании' },
                  { icon: Shield, title: 'Комплексная гарантия', desc: 'До 5 лет покрытия с круглосуточной технической поддержкой' },
                ].map((feature, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-sm flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{feature.title}</h4>
                      <p className="text-sm text-gray-400">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-gray-800 p-6 rounded-sm">
                  <div className="text-4xl font-light text-blue-400 mb-2">24 часа</div>
                  <div className="text-sm text-gray-400">Техническая поддержка</div>
                </div>
                <div className="bg-blue-600 p-6 rounded-sm">
                  <div className="text-4xl font-light text-white mb-2">48ч</div>
                  <div className="text-sm text-blue-200">Средняя доставка</div>
                </div>
              </div>
              <div className="space-y-6 sm:mt-12">
                <div className="bg-gray-800 p-6 rounded-sm">
                  <div className="text-4xl font-light text-blue-400 mb-2">2 млн ₽+</div>
                  <div className="text-sm text-gray-400">Стоимость запасов</div>
                </div>
                <div className="bg-gray-800 p-6 rounded-sm">
                  <div className="text-4xl font-light text-blue-400 mb-2">150+</div>
                  <div className="text-sm text-gray-400">Партнеров-брендов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <div className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">Отзывы</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Доверие лидеров здравоохранения
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                quote: "Наша команда преобразила хирургический блок с передовым оборудованием. Экспертиза и поддержка были бесценны.",
                author: "Д-р Светлана Ермакова",
                role: "Начальник хирургии",
                hospital: "Городская клиническая больница №52"
              },
              { 
                quote: "Системы диагностической визуализации повысили нашу точность на 40%. Исключительное качество и бесшовная установка.",
                author: "Игорь Романов",
                role: "Директор радиологии",
                hospital: "Областной диагностический центр"
              },
              { 
                quote: "Надежное оборудование, конкурентоспособные цены и выдающееся обслуживание клиентов. Наш поставщик №1 уже 8 лет.",
                author: "Д-р Марина Ковалева",
                role: "Медицинский директор",
                hospital: "Сеть клиник «Здоровье Плюс»"
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-sm">
                <Quote className="w-10 h-10 text-blue-200 mb-6" />
                <p className="text-gray-700 leading-relaxed mb-6">{testimonial.quote}</p>
                <div>
                  <div className="font-semibold text-gray-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{testimonial.author}</div>
                  <div className="text-sm text-blue-600">{testimonial.role}</div>
                  <div className="text-sm text-gray-500">{testimonial.hospital}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Готовы модернизировать ваше учреждение?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-10 leading-relaxed">
            Получите персонализированное предложение для ваших потребностей в медицинском оборудовании. Наши специалисты готовы помочь вам найти идеальные решения.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setIsModalOpen(true)} className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-sm hover:bg-gray-100 transition-colors">
              Запросить бесплатное предложение
            </button>
            <Link to="/contact" className="px-8 py-4 border-2 border-white text-white font-semibold rounded-sm hover:bg-white/10 transition-colors">
              Назначить консультацию
            </Link>
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

export default Home
