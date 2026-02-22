import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import SiteHeader from '../components/SiteHeader'

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      <SiteHeader showQuoteButton={false} />

      <section className="pt-28 sm:pt-32 pb-12 sm:pb-16 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Условия обслуживания
          </h1>
          <p className="text-gray-600">Последнее обновление: 17 февраля 2026 года</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 space-y-8 text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>1. Общие положения</h2>
            <p>
              Настоящие Условия регулируют порядок использования сайта «МедЭквип». Используя сайт, вы подтверждаете согласие с данными правилами,
              включая условия взаимодействия через формы обратной связи и коммуникации с администрацией сайта.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>2. Статус сайта и объем информации</h2>
            <p>
              Сайт является демонстрационным pet-проектом для портфолио. Контент, примеры цен, описания услуг и сценарии взаимодействия
              размещены в демонстрационных целях и не должны рассматриваться как исчерпывающая коммерческая информация.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>3. Допустимое использование</h2>
            <p className="mb-3">Пользователю запрещается:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>использовать сайт для незаконной деятельности;</li>
              <li>пытаться нарушить работу сайта, обходить защитные механизмы и получать несанкционированный доступ;</li>
              <li>размещать через формы заведомо недостоверную или вредоносную информацию;</li>
              <li>использовать материалы сайта с нарушением прав правообладателей.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>4. Коммерческие условия и оферта</h2>
            <p>
              Любые сведения о стоимости, наличии, сроках поставки и сервисных условиях, опубликованные на сайте или отправленные в ответ на обращение,
              носят информационный характер. Материалы сайта представлены для портфолио в демонстрационных целях и не являются публичной офертой.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>5. Интеллектуальная собственность</h2>
            <p>
              Дизайн, тексты, графика, структура страниц и иные материалы сайта охраняются законодательством об интеллектуальной собственности.
              Копирование, распространение и иное использование материалов допускается только при наличии законных оснований.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>6. Ограничение ответственности</h2>
            <p>
              Администрация сайта предпринимает разумные меры для поддержания актуальности и работоспособности сайта, однако не гарантирует
              абсолютную безошибочность, непрерывность или полноту информации. Пользователь принимает риски, связанные с использованием сайта
              и принимает решения на основании собственных оценок.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>7. Персональные данные и конфиденциальность</h2>
            <p>
              Порядок обработки персональных данных определяется отдельной
              {' '}
              <Link to="/privacy" className="text-blue-600 hover:text-blue-700">политикой конфиденциальности</Link>
              . Используя формы на сайте, пользователь подтверждает согласие на обработку переданных данных в объеме, необходимом для ответа на запрос.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>8. Внешние ссылки</h2>
            <p>
              Сайт может содержать ссылки на сторонние ресурсы. Мы не контролируем содержание и политику обработки данных таких ресурсов
              и не несем ответственность за их работу, безопасность и актуальность.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>9. Применимое право и разрешение споров</h2>
            <p>
              К настоящим Условиям применяется законодательство Российской Федерации. Споры, возникающие в связи с использованием сайта,
              разрешаются путем переговоров, а при недостижении соглашения - в судебном порядке по правилам применимого права.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>10. Изменение условий</h2>
            <p>
              Мы вправе обновлять настоящие Условия при изменении функциональности сайта, правовых требований или процессов взаимодействия.
              Актуальная редакция всегда размещается на данной странице.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>11. Контакты</h2>
            <p>
              Для уточнения условий сотрудничества перейдите в раздел
              {' '}
              <Link to="/contact" className="text-blue-600 hover:text-blue-700">контактов</Link>
              {' '}
              или позвоните по номеру
              {' '}
              <a className="text-blue-600 hover:text-blue-700" href="tel:+74951234567">+7 (495) 123-45-67</a>
              .
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Terms
