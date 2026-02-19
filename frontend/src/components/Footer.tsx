import { Activity, Phone, Mail, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-sm flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold tracking-tight">
                МедЭквип
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Поставщик премиального медицинского оборудования, преданный улучшению медицинской помощи по всему миру.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Продукты</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/products?category=imaging" className="hover:text-white transition-colors">Диагностическая визуализация</Link></li>
              <li><Link to="/products?category=surgical" className="hover:text-white transition-colors">Хирургическое оборудование</Link></li>
              <li><Link to="/products?category=patient" className="hover:text-white transition-colors">Мониторинг пациентов</Link></li>
              <li><Link to="/products?category=lab" className="hover:text-white transition-colors">Лабораторные системы</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/solutions" className="hover:text-white transition-colors">О нас</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Карьера</Link></li>
              <li><Link to="/testimonials" className="hover:text-white transition-colors">Новости и события</Link></li>
              <li><Link to="/solutions" className="hover:text-white transition-colors">Сертификаты</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+74951234567" className="hover:text-white transition-colors">+7 (495) 123-45-67</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@medequip.ru" className="hover:text-white transition-colors">info@medequip.ru</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <a href="https://maps.google.com/?q=Москва, ул. Медицинская, 1" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  Москва, ул. Медицинская, 1
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-500">© {currentYear} МедЭквип. Все права защищены.</p>
            <p className="text-xs text-gray-500 mt-1">Демонстрационный pet-проект для портфолио.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 sm:gap-6 text-sm text-gray-500">
            <Link to="/privacy" className="hover:text-white transition-colors">Политика конфиденциальности</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Условия обслуживания</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
