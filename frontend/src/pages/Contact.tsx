import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ArrowRight } from 'lucide-react'
import Footer from '../components/Footer'
import QuoteModal from '../components/QuoteModal'
import { submitContactRequest } from '../lib/api'
import CustomSelect from '../components/CustomSelect'
import SiteHeader from '../components/SiteHeader'

const interestOptions = [
  { value: 'general', label: 'Общий вопрос' },
  { value: 'products', label: 'Информация о продуктах' },
  { value: 'quote', label: 'Запрос цены' },
  { value: 'demo', label: 'Демонстрация' },
  { value: 'service', label: 'Сервис и поддержка' },
]

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    interest: 'general'
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError('')
    setIsSubmitting(true)

    try {
      await submitContactRequest(formData)
      setIsSubmitted(true)
      setTimeout(() => setIsSubmitted(false), 3000)
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
        interest: 'general'
      })
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Не удалось отправить сообщение.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      <SiteHeader onQuoteRequest={() => setIsModalOpen(true)} />

      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-14 sm:pb-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4">Контакты</div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Свяжитесь с нами
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed">
              Готовы помочь вам с выбором оборудования и ответить на любые вопросы
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 sm:p-8 rounded-sm shadow-lg text-center">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Телефон</h3>
              <a href="tel:+74951234567" className="text-gray-600 mb-2 block hover:text-blue-600 transition-colors">+7 (495) 123-45-67</a>
              <p className="text-sm text-gray-500">Бесплатно по России</p>
            </div>
            
            <div className="bg-white p-6 sm:p-8 rounded-sm shadow-lg text-center">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Эл. почта</h3>
              <a href="mailto:info@medequip.ru" className="text-gray-600 mb-2 block hover:text-blue-600 transition-colors">info@medequip.ru</a>
              <p className="text-sm text-gray-500">Ответим в течение 24 часов</p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-sm shadow-lg text-center sm:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Адрес</h3>
              <a
                href="https://maps.google.com/?q=Москва, ул. Медицинская, 1"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 mb-2 block hover:text-blue-600 transition-colors"
              >
                Москва, ул. Медицинская, 1
              </a>
              <p className="text-sm text-gray-500">Бизнес-центр "МедПлаза"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Working Hours */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-wrap items-center justify-center gap-2 text-gray-600 text-center">
            <Clock className="w-5 h-5" />
            <span className="font-medium">Часы работы:</span>
            <span>Пн-Пт: 9:00 - 18:00 | Сб: 10:00 - 14:00</span>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-light mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Отправить сообщение
            </h2>
            <p className="text-gray-600">Заполните форму ниже, и мы свяжемся с вами в ближайшее время</p>
          </div>

          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-sm p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-green-800 mb-2">Спасибо!</h3>
              <p className="text-green-700">Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ваше имя *</label>
                  <input 
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-600"
                    placeholder="Иван Иванов"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Эл. почта *</label>
                  <input 
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-600"
                    placeholder="ivanov@klinika.ru"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Компания</label>
                  <input 
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-600"
                    placeholder="Название учреждения"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                  <input 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-600"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">Что вас интересует?</label>
                <CustomSelect
                  id="interest"
                  value={formData.interest}
                  placeholder="Выберите тему"
                  options={interestOptions}
                  onChange={(value) =>
                    setFormData((prev) => ({
                      ...prev,
                      interest: value,
                    }))
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Сообщение *</label>
                <textarea 
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-600"
                  placeholder="Опишите ваш запрос..."
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="group w-full flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-sm hover:bg-blue-700 transition-colors"
              >
                {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              {submitError && (
                <p className="text-sm text-red-600 text-center">{submitError}</p>
              )}
            </form>
          )}
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <a
            href="https://maps.google.com/?q=Москва, ул. Медицинская, 1"
            target="_blank"
            rel="noreferrer"
            className="bg-gray-200 rounded-sm h-72 sm:h-96 flex items-center justify-center hover:bg-gray-300 transition-colors"
          >
            <div className="text-center">
              <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-700 font-medium">Открыть карту проезда</p>
              <p className="text-sm text-gray-500">г. Москва, ул. Медицинская, 1</p>
            </div>
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-light text-white mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Нужна срочная консультация?
          </h2>
          <p className="text-blue-100 mb-8">
            Позвоните нам прямо сейчас или запросите обратный звонок
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+74951234567" className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-sm hover:bg-gray-100 transition-colors">
              <Phone className="w-5 h-5" />
              +7 (495) 123-45-67
            </a>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-sm hover:bg-white/10 transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
              Заказать звонок
            </button>
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

export default Contact
