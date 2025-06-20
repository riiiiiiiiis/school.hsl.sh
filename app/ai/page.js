// app/ai/page.js
import ProgramSection from '../components/ai/ProgramSection';
import Instructor from '../components/Instructor';

export const metadata = {
  title: "Практический воркшоп: Как использовать ChatGPT на 100% | Сергей",
  description: "Научитесь решать любые рабочие и личные задачи быстрее и качественнее с помощью искусственного интеллекта. 2-часовой онлайн-воркшоп с практическими знаниями.",
  keywords: ["ChatGPT", "AI", "искусственный интеллект", "воркшоп", "промпт-инжиниринг", "нейросети", "автоматизация"],
  author: [{ name: "Сергей" }],
  robots: "index, follow",
  themeColor: "#0071e3",
  openGraph: {
    type: "website",
    title: "Практический воркшоп: Как использовать ChatGPT на 100%",
    description: "Научитесь решать любые рабочие и личные задачи быстрее и качественнее с помощью искусственного интеллекта.",
  },
};

export default function AIPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center bg-gradient-to-b from-white to-apple-light-gray">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-7xl font-semibold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight">Практический воркшоп: Как использовать ChatGPT на 100%</h1>
          <p className="text-2xl md:text-3xl text-apple-gray mb-6 leading-relaxed max-w-3xl mx-auto">Научитесь решать любые рабочие и личные задачи быстрее и качественнее с помощью искусственного интеллекта.</p>
          <div className="text-lg text-apple-gray mb-10">
            <p>Воскресенье, [Дата] • 20:00 по МСК</p>
            <p>2-часовой онлайн-воркшоп</p>
          </div>
          <a href="#pricing" className="inline-block bg-apple-blue text-white px-8 py-4 rounded-full text-lg hover:bg-blue-600 transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-blue-200 mb-6">Участвовать за 3500 рублей</a>
          <p className="text-lg text-apple-gray">
            <a href="#contact" className="text-apple-blue hover:underline font-medium">Задать вопрос</a>
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-5xl font-semibold mb-16">Что говорят участники моих встреч</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-apple-light-gray rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300">
              <div className="mb-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-apple-gray leading-relaxed mb-4">
                  "Сергей объяснил сложные концепции AI так понятно! Теперь использую ChatGPT для работы каждый день."
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                  А
                </div>
                <div>
                  <p className="font-semibold">Алексей</p>
                  <p className="text-sm text-apple-gray">Предприниматель</p>
                </div>
              </div>
            </div>

            <div className="bg-apple-light-gray rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300">
              <div className="mb-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-apple-gray leading-relaxed mb-4">
                  "Структурированная подача материала и практические примеры — это то, что отличает воркшоп Сергея от других."
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                  М
                </div>
                <div>
                  <p className="font-semibold">Мария</p>
                  <p className="text-sm text-apple-gray">UX/UI дизайнер</p>
                </div>
              </div>
            </div>

            <div className="bg-apple-light-gray rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300">
              <div className="mb-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-apple-gray leading-relaxed mb-4">
                  "После встречи сразу применил знания на практике. Экономлю по 2-3 часа в день на рутинных задачах!"
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                  Д
                </div>
                <div>
                  <p className="font-semibold">Дмитрий</p>
                  <p className="text-sm text-apple-gray">Маркетолог</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Projects Stats */}
      <section className="py-20 bg-apple-light-gray">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-5xl font-semibold mb-16">Умение работать с ИИ — ключевой навык в 2025 году</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 text-center hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-lg">
              <div className="text-6xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-4">40%</div>
              <p className="text-xl font-semibold mb-2">рабочих мест</p>
              <p className="text-apple-gray">подвержено рискам, связанным с ИИ</p>
              <p className="text-sm text-apple-gray mt-2">(МВФ)</p>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-lg">
              <div className="text-6xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">93%</div>
              <p className="text-xl font-semibold mb-2">предпринимателей</p>
              <p className="text-apple-gray">повысили эффективность с помощью ИИ</p>
              <p className="text-sm text-apple-gray mt-2">(Forbes)</p>
            </div>

            <div className="bg-white rounded-3xl p-8 text-center hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-lg">
              <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">100%</div>
              <p className="text-xl font-semibold mb-2">сотрудников</p>
              <p className="text-apple-gray">крупных компаний обязывают использовать ИИ-инструменты</p>
              <p className="text-sm text-apple-gray mt-2">(Financial Times, 2025)</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-xl text-apple-gray mb-6">Не отставайте от рынка — научитесь использовать ИИ эффективно</p>
            <a href="#program" className="inline-block bg-apple-blue text-white px-8 py-4 rounded-full text-lg hover:bg-blue-600 transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl">
              Посмотреть программу воркшопа
            </a>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <ProgramSection />

      {/* Audience Section */}
      <section className="py-20 bg-apple-light-gray">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-5xl font-semibold mb-4">Кому будет полезен воркшоп</h2>
          <p className="text-center text-xl text-apple-gray mb-16 max-w-3xl mx-auto">
            Независимо от вашей сферы деятельности, вы найдете для себя ценные инсайты и практические навыки.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl text-white">🌱</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Новички</h3>
              <p className="text-apple-gray leading-relaxed">
                Если вы только начинаете свой путь в мире AI или еще не пользовались ChatGPT.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="text-apple-gray">Понятное введение в мир AI</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="text-apple-gray">Пошаговые инструкции</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="text-apple-gray">Практика с первого дня</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl text-white">💼</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Специалисты</h3>
              <p className="text-apple-gray leading-relaxed">
                Маркетологи, менеджеры, аналитики, которые хотят ускорить свою работу.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="text-apple-gray">Автоматизация рутины</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="text-apple-gray">Улучшение качества работы</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="text-apple-gray">Экономия времени</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl text-white">🚀</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Предприниматели и Креаторы</h3>
              <p className="text-apple-gray leading-relaxed">
                Все, кто хочет автоматизировать рутину, создавать контент и находить новые идеи для бизнеса.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="text-apple-gray">Генерация идей</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="text-apple-gray">Создание контента</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✓</span>
                  <span className="text-apple-gray">Масштабирование бизнеса</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Instructor */}
      <Instructor />

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-center text-5xl font-semibold mb-16">Стоимость участия</h2>
          
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 text-center shadow-xl">
            <div className="mb-8">
              <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
                2-часовой онлайн-воркшоп
              </span>
              
              <h3 className="text-3xl font-semibold mb-4">AI Воркшоп: ChatGPT на 100%</h3>
              
              <div className="text-6xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                3 500₽
              </div>
              
              <p className="text-apple-gray text-lg mb-8">
                Воскресенье, [Дата] • 20:00 по МСК
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 mb-8 text-left">
              <h4 className="text-xl font-semibold mb-4">Что входит в программу:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>2 часа практических знаний по работе с ChatGPT</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>Готовые шаблоны промптов для разных задач</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>Разбор реальных кейсов применения AI</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>Обзор дополнительных AI-инструментов</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span>Запись воркшопа для повторного просмотра</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span className="font-semibold">Бонус: бесплатный доступ к VPN для работы с нейросетями</span>
                </li>
              </ul>
            </div>
            
            <a href="#" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-full text-lg font-medium hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl mb-4">
              Записаться на воркшоп
            </a>
            
            <p className="text-sm text-apple-gray">
              Осталось мест: <span className="font-semibold text-apple-black">12 из 30</span>
            </p>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-apple-gray mb-4">Есть вопросы?</p>
            <a href="#contact" className="text-apple-blue hover:underline font-medium">
              Напишите мне в Telegram
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-6xl font-semibold mb-6">Запишитесь на воркшоп прямо сейчас</h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
            2-часовой онлайн-воркшоп. Воскресенье, [Дата], 20:00 МСК
          </p>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8">
            <div className="text-4xl font-bold mb-2">3,500 рублей</div>
            <p className="text-lg opacity-90">Количество мест ограничено</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <a 
              href="#" 
              className="bg-white text-apple-blue px-12 py-4 rounded-2xl text-lg font-semibold hover:-translate-y-1 transition-all hover:shadow-2xl hover:shadow-white/25"
            >
              Записаться и оплатить
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-lg opacity-75 mb-4">Есть вопросы? Напишите мне</p>
            <a 
              href="#" 
              className="text-xl font-semibold hover:underline transition-all"
            >
              Telegram: @your_telegram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}