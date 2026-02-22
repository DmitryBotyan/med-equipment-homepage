import { useEffect, useMemo, useState } from 'react'
import { Activity, Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

interface SiteHeaderProps {
  transparentOnTop?: boolean
  showQuoteButton?: boolean
  onQuoteRequest?: () => void
}

const NAV_LINKS = [
  { to: '/products', label: 'Продукты' },
  { to: '/solutions', label: 'Решения' },
  { to: '/testimonials', label: 'Отзывы' },
  { to: '/contact', label: 'Контакты' },
]

const SiteHeader = ({ transparentOnTop = false, showQuoteButton = true, onQuoteRequest }: SiteHeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(!transparentOnTop)
  const { pathname } = useLocation()

  const isProductPage = pathname === '/products' || pathname.startsWith('/products/')

  const headerBgClass = useMemo(() => {
    if (transparentOnTop && !isScrolled) {
      return 'bg-transparent'
    }

    return 'bg-white/95 backdrop-blur-md border-b border-gray-100'
  }, [isScrolled, transparentOnTop])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!transparentOnTop) {
      setIsScrolled(true)
      return
    }

    const handleScroll = () => setIsScrolled(window.scrollY > 32)
    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [transparentOnTop])

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = ''
      return
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isMenuOpen])

  const renderQuoteButton = (mobile = false) => {
    if (!showQuoteButton) {
      return null
    }

    if (onQuoteRequest) {
      return (
        <button
          onClick={onQuoteRequest}
          className={`${mobile ? 'w-full py-3.5' : 'px-5 py-2.5'} bg-blue-600 text-white text-sm font-medium rounded-sm hover:bg-blue-700 transition-colors`}
        >
          Запросить цену
        </button>
      )
    }

    return (
      <Link
        to="/contact"
        className={`${mobile ? 'w-full py-3.5' : 'px-5 py-2.5'} inline-flex items-center justify-center bg-blue-600 text-white text-sm font-medium rounded-sm hover:bg-blue-700 transition-colors`}
      >
        Связаться с нами
      </Link>
    )
  }

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${headerBgClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-between items-center h-20 gap-4">
            <Link to="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="w-10 h-10 bg-blue-600 rounded-sm flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-semibold tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                МедЭквип
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-7">
              {NAV_LINKS.map((item) => {
                const isActive = item.to === '/products' ? isProductPage : pathname === item.to

                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`text-sm font-medium transition-colors ${isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>

            <div className="hidden md:flex items-center gap-4">
              {renderQuoteButton()}
            </div>

            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-sm border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Открыть меню"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      <div className={`md:hidden fixed inset-0 z-[95] ${isMenuOpen ? '' : 'pointer-events-none'}`}>
        <button
          type="button"
          aria-label="Закрыть меню"
          onClick={() => setIsMenuOpen(false)}
          className={`absolute inset-0 bg-black/45 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
        />

        <aside className={`absolute top-0 right-0 h-dvh w-[min(90vw,360px)] bg-white shadow-2xl border-l border-gray-200 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="h-20 px-4 border-b border-gray-200 flex items-center justify-between">
            <span className="text-sm uppercase tracking-wide text-gray-500">Меню</span>
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="w-10 h-10 inline-flex items-center justify-center rounded-sm border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
              aria-label="Закрыть меню"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="h-[calc(100dvh-5rem)] flex flex-col px-5 py-6">
            <div className="space-y-2">
              {NAV_LINKS.map((item) => {
                const isActive = item.to === '/products' ? isProductPage : pathname === item.to

                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`block px-4 py-3 rounded-sm text-base font-medium transition-colors ${isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'}`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>

            {showQuoteButton && (
              <div className="mt-auto border-t border-gray-200 pt-5">
                {renderQuoteButton(true)}
              </div>
            )}
          </div>
        </aside>
      </div>
    </>
  )
}

export default SiteHeader
