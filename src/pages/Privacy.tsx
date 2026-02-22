import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import SiteHeader from '../components/SiteHeader'

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      <SiteHeader showQuoteButton={false} />

      <section className="pt-28 sm:pt-32 pb-12 sm:pb-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Политика конфиденциальности
          </h1>
          <p className="text-gray-600">Последнее обновление: 17 февраля 2026 года</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 space-y-8 text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>1. Общие положения</h2>
            <p>
              Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта «МедЭквип».
              Политика разработана в соответствии с Федеральным законом №152-ФЗ «О персональных данных» и иными применимыми нормами.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>2. Статус и назначение сайта</h2>
            <p>
              Сайт является демонстрационным pet-проектом для портфолио. Информация и формы обратной связи представлены в демонстрационных целях.
              В то же время мы придерживаемся стандартов добросовестной обработки переданных данных.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>3. Какие данные мы собираем</h2>
            <p className="mb-3">Мы можем обрабатывать следующие категории данных:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>контактные данные: имя, телефон, адрес электронной почты;</li>
              <li>данные об организации: название компании/медучреждения;</li>
              <li>сведения о запросе: интерес к продукции, комментарии и сообщение из форм;</li>
              <li>технические данные: IP-адрес, тип устройства, браузер, язык, источник перехода, файлы cookie.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>4. Цели и правовые основания обработки</h2>
            <p className="mb-3">Обработка данных осуществляется в следующих целях:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>обработка входящих заявок и обратной связи;</li>
              <li>подготовка ответов, консультаций и демонстрационных коммерческих сценариев;</li>
              <li>поддержание работоспособности сайта и аналитика его использования;</li>
              <li>соблюдение требований законодательства.</li>
            </ul>
            <p className="mt-3">
              Правовые основания: согласие субъекта персональных данных, исполнение запроса пользователя, а также законный интерес оператора по обеспечению функционирования сайта.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>5. Cookies и аналитика</h2>
            <p>
              Сайт может использовать cookie и аналогичные технологии для корректной работы интерфейса, сохранения пользовательских предпочтений и анализа посещаемости.
              Пользователь может ограничить использование cookie в настройках браузера, однако это может повлиять на доступность отдельных функций.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>6. Сроки хранения данных</h2>
            <p>
              Персональные данные хранятся не дольше, чем это необходимо для достижения целей обработки, либо в течение срока, установленного законодательством.
              По достижении целей обработки данные обезличиваются или удаляются.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>7. Передача данных третьим лицам</h2>
            <p>
              Мы не продаем персональные данные. Передача возможна только в пределах, необходимых для функционирования сайта и обработки обращений
              (например, хостинг-провайдеры, почтовые сервисы, подрядчики поддержки), а также в случаях, прямо предусмотренных законом.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>8. Трансграничная передача</h2>
            <p>
              При использовании сторонних сервисов данные могут обрабатываться на серверах за пределами Российской Федерации.
              В таких случаях мы обеспечиваем принятие мер защиты в объеме, требуемом применимым законодательством.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>9. Права субъекта персональных данных</h2>
            <p className="mb-3">Пользователь вправе:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>получить информацию о факте, целях и способах обработки данных;</li>
              <li>требовать уточнения, блокирования или удаления данных;</li>
              <li>отозвать согласие на обработку персональных данных;</li>
              <li>обжаловать действия оператора в уполномоченный орган или суд.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>10. Меры по защите данных</h2>
            <p>
              Мы применяем организационные и технические меры для защиты данных от несанкционированного доступа, изменения, раскрытия, блокирования
              и иных неправомерных действий, включая ограничение доступа, контроль систем и актуализацию средств защиты.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>11. Изменение политики</h2>
            <p>
              Актуальная версия Политики всегда доступна на этой странице. Мы можем обновлять документ при изменении функциональности сайта,
              процессов обработки данных или требований законодательства.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>12. Контакты по вопросам данных</h2>
            <p>
              По вопросам обработки персональных данных вы можете написать нам на
              {' '}
              <a className="text-blue-600 hover:text-blue-700" href="mailto:info@medequip.ru">info@medequip.ru</a>
              {' '}
              или через форму на странице
              {' '}
              <Link to="/contact" className="text-blue-600 hover:text-blue-700">контактов</Link>
              . Подробные условия использования сайта также размещены в разделе
              {' '}
              <Link to="/terms" className="text-blue-600 hover:text-blue-700">условий обслуживания</Link>
              .
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Privacy
