import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const COOKIE_CONSENT_KEY = 'medequip-cookie-consent-v1'

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = window.localStorage.getItem(COOKIE_CONSENT_KEY)
    setIsVisible(!consent)
  }, [])

  const saveConsent = (value: 'accepted' | 'necessary-only') => {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, value)
    setIsVisible(false)
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[90] p-3 sm:p-4">
      <div className="max-w-7xl mx-auto rounded-sm border border-gray-200 bg-white shadow-2xl">
        <div className="px-4 py-4 sm:px-6 sm:py-5 flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
          <p className="text-sm text-gray-700 leading-relaxed">
            Мы используем cookie для корректной работы сайта и анализа посещаемости.
            Продолжая использовать сайт, вы соглашаетесь с обработкой cookie согласно
            {' '}
            <Link to="/privacy" className="text-blue-600 hover:text-blue-700 underline underline-offset-2">
              политике конфиденциальности
            </Link>
            .
          </p>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:flex-shrink-0">
            <button
              type="button"
              onClick={() => saveConsent('necessary-only')}
              className="px-4 py-2.5 text-sm font-medium text-gray-700 border border-gray-300 rounded-sm hover:bg-gray-50 transition-colors"
            >
              Только необходимые
            </button>
            <button
              type="button"
              onClick={() => saveConsent('accepted')}
              className="px-4 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-sm hover:bg-blue-700 transition-colors"
            >
              Принять
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieBanner
