import { useEffect, useState } from 'react'
import { X, Send, CheckCircle } from 'lucide-react'
import { submitQuoteRequest, type QuoteRequest } from '../lib/api'
import CustomSelect from './CustomSelect'

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
  initialProductInterest?: string
}

const productOptions = [
  { value: 'imaging', label: 'Диагностическая визуализация' },
  { value: 'surgical', label: 'Хирургическое оборудование' },
  { value: 'patient', label: 'Мониторинг пациентов' },
  { value: 'lab', label: 'Лабораторное оборудование' },
  { value: 'emergency', label: 'Экстренная помощь' },
  { value: 'rehab', label: 'Реабилитация' },
  { value: 'other', label: 'Другое' },
]

const QuoteModal = ({ isOpen, onClose, initialProductInterest }: QuoteModalProps) => {
  const [formData, setFormData] = useState<QuoteRequest>({
    name: '',
    company: '',
    email: '',
    phone: '',
    productInterest: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  useEffect(() => {
    if (!isOpen) {
      return
    }

    setFormData((prev) => ({
      ...prev,
      productInterest: initialProductInterest ?? '',
    }))
  }, [isOpen, initialProductInterest])

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError('')
    setIsSubmitting(true)

    try {
      await submitQuoteRequest(formData)
      setIsSubmitted(true)

      setTimeout(() => {
        setIsSubmitted(false)
        onClose()
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          productInterest: '',
          message: ''
        })
      }, 2000)
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Не удалось отправить запрос.')
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
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-t-lg sm:rounded-lg shadow-2xl w-full max-w-lg mx-0 sm:mx-4 max-h-[100dvh] sm:max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        <div className="p-5 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Спасибо!</h3>
              <p className="text-gray-600">Ваш запрос отправлен. Мы свяжемся с вами в ближайшее время.</p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Запросить цену</h2>
              <p className="text-gray-600 mb-6">Заполните форму ниже, и мы подготовим персонализированное предложение</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ваше имя *</label>
                  <input 
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    placeholder="Иван Иванов"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Компания *</label>
                  <input 
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    placeholder="Название медицинского учреждения"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Эл. почта *</label>
                    <input 
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                      placeholder="zakupki@klinika.ru"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                    <input 
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="productInterest" className="block text-sm font-medium text-gray-700 mb-1">Интересующая продукция</label>
                  <CustomSelect
                    id="productInterest"
                    value={formData.productInterest ?? ''}
                    placeholder="Выберите категорию"
                    options={productOptions}
                    onChange={(value) =>
                      setFormData((prev) => ({
                        ...prev,
                        productInterest: value,
                      }))
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Сообщение</label>
                  <textarea 
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    placeholder="Опишите ваши потребности..."
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {isSubmitting ? 'Отправка...' : 'Отправить запрос'}
                  <Send className="w-4 h-4" />
                </button>
                {submitError && (
                  <p className="text-sm text-red-600 text-center">{submitError}</p>
                )}
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default QuoteModal
