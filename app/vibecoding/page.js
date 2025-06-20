// app/vibecoding/page.js
import ProgramSection from '../components/vibecoding/ProgramSection';
import Instructor from '../components/Instructor';

export const metadata = {
  title: "Вайб-кодинг с AI: Создавай сайты и Telegram-ботов в чате с ИИ | Сережа Рис",
  description: "Научись создавать сайты и Telegram-ботов через чат с AI. Практический интенсив от Сережи Риса для начинающих. Получи бесплатный гайд и начни кодить уже сегодня!",
  keywords: ["AI", "вайб-кодинг", "создание сайтов", "telegram бот", "ChatGPT", "Claude", "веб-разработка", "без кода", "Сережа Рис", "интенсив", "обучение ИИ"],
  author: [{ name: "Сережа Рис" }],
  robots: "index, follow",
  themeColor: "#0071e3",
  openGraph: {
    type: "website",
    title: "Вайб-кодинг с AI: Создавай сайты и Telegram-ботов в чате с ИИ",
    description: "Научись создавать сайты и Telegram-ботов через чат с AI. Практический интенсив от Сережи Риса для начинающих.",
  },
};

export default function VibeCodingPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center bg-gradient-to-b from-white to-apple-light-gray">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-7xl font-semibold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight">Вайб-кодинг с AI</h1>
          <p className="text-2xl md:text-3xl text-apple-gray mb-10 leading-relaxed max-w-3xl mx-auto">Создавай сайты и Telegram-ботов в чате с нейросетью. Даже если никогда не писал код!</p>
        </div>
      </section>

      {/* VibeCoding Intro */}
      <section id="intro" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-semibold mb-6">Что такое вайб-кодинг?</h2>
          <p className="text-xl text-apple-gray mb-8 max-w-3xl mx-auto leading-relaxed">
            Это революционный подход к разработке, где вы управляете искусственным интеллектом как дирижер оркестром. Вместо написания каждой строчки кода, вы формулируете идеи и задачи, а AI воплощает их в жизнь. Это не замена разработчика, а его усиление, позволяющее создавать сложные проекты быстрее и с большим удовольствием.
          </p>
          <div className="bg-apple-light-gray rounded-2xl p-6 text-left max-w-2xl mx-auto">
              <p className="font-semibold text-apple-black mb-2">Пример успеха из индустрии:</p>
              <p className="text-apple-gray mb-3">Стартап Vibe Coder Base44, основанный одним человеком, был продан Wix за $80 млн всего через 6 месяцев после запуска. Это доказывает невероятный потенциал подхода.</p>
              <a 
                href="https://techcrunch.com/2025/06/18/6-month-old-solo-owned-vibe-coder-base44-sells-to-wix-for-80m-cash/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-apple-blue font-medium hover:underline"
              >
                Читать историю на TechCrunch →
              </a>
          </div>
        </div>
      </section>

      {/* Instructor */}
      <Instructor />

      {/* Lead Magnet */}
      <section id="lead-magnet" className="py-20 bg-gradient-to-b from-apple-light-gray to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-semibold mb-6">Начни вайб-кодить за 15 минут!</h2>
          <p className="text-xl text-apple-gray mb-8 max-w-2xl mx-auto">
            Скачай бесплатный гайд и создай свой первый сайт с помощью AI уже сегодня. 
            Никаких сложных настроек — только практика и результат.
          </p>
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 max-w-md mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Бесплатный гайд</h3>
            <p className="text-apple-gray mb-6">
              «15 минут до первого сайта: пошаговое руководство по вайб-кодингу с AI»
            </p>
            <a 
              href="#pricing" 
              className="block w-full py-4 bg-apple-blue text-white rounded-xl text-lg font-medium hover:bg-blue-600 transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Получить бесплатно
            </a>
          </div>
        </div>
      </section>

      {/* Course Projects */}
      <section className="py-20 bg-apple-light-gray">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-5xl font-semibold mb-16">Проекты, которые вы создадите на курсе</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-6 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-lg">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl h-48 mb-6 flex items-center justify-center">
                <span className="text-4xl">🏪</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Интернет-магазин одежды</h3>
              <p className="text-apple-gray mb-4">Полноценный e-commerce с корзиной, каталогом товаров и интеграцией с платежами.</p>
              <div className="flex items-center gap-2">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">ChatGPT</span>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-lg">
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl h-48 mb-6 flex items-center justify-center">
                <span className="text-4xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Telegram-бот для записи</h3>
              <p className="text-apple-gray mb-4">Автоматизированная система записи клиентов с календарем и напоминаниями.</p>
              <div className="flex items-center gap-2">
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">Python</span>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Claude</span>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-lg">
              <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl h-48 mb-6 flex items-center justify-center">
                <span className="text-4xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Портфолио-сайт</h3>
              <p className="text-apple-gray mb-4">Современный адаптивный сайт-портфолио с анимациями и контактной формой.</p>
              <div className="flex items-center gap-2">
                <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm">Next.js</span>
                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">AI Studio</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-5xl font-semibold mb-16">Что говорят вайб-кодеры</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-apple-light-gray rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300">
              <div className="mb-6">
                <p className="text-apple-gray leading-relaxed mb-4">
                  "За неделю создал свой первый лендинг и Telegram-бота! Раньше думал, что программирование — это слишком сложно."
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
                <p className="text-apple-gray leading-relaxed mb-4">
                  "Сережа объясняет так просто! Теперь я могу создавать прототипы для своих дизайнов без помощи разработчиков."
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
                <p className="text-apple-gray leading-relaxed mb-4">
                  "Интенсив полностью изменил мое представление о разработке. Вайб-кодинг — это будущее!"
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

      {/* Program Section - Interactive */}
      <ProgramSection />

      {/* Student Projects
      <section className="py-20 bg-apple-light-gray">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-5xl font-semibold mb-16">Реальные проекты наших учеников</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-6 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-lg">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl h-48 mb-6 flex items-center justify-center">
                <span className="text-4xl">🏪</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Интернет-магазин одежды</h3>
              <p className="text-apple-gray mb-4">Полноценный e-commerce с корзиной, каталогом товаров и интеграцией с платежами.</p>
              <div className="flex items-center gap-2">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">ChatGPT</span>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-lg">
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl h-48 mb-6 flex items-center justify-center">
                <span className="text-4xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Telegram-бот для записи</h3>
              <p className="text-apple-gray mb-4">Автоматизированная система записи клиентов с календарем и напоминаниями.</p>
              <div className="flex items-center gap-2">
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">Python</span>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Claude</span>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-lg">
              <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl h-48 mb-6 flex items-center justify-center">
                <span className="text-4xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Портфолио-сайт</h3>
              <p className="text-apple-gray mb-4">Современный адаптивный сайт-портфолио с анимациями и контактной формой.</p>
              <div className="flex items-center gap-2">
                <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm">Next.js</span>
                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">AI Studio</span>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-xl text-apple-gray mb-6">Все эти проекты созданы за время интенсива!</p>
            <a href="#program" className="inline-block bg-apple-blue text-white px-8 py-4 rounded-full text-lg hover:bg-blue-600 transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl">
              Посмотреть программу
            </a>
          </div>
        </div>
      </section> */}

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-apple-gray text-xl mb-2">Тарифы</p>
          <h2 className="text-center text-5xl font-semibold mb-16">Выберите подходящий пакет</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
            {/* Самостоятельный */}
            <div className="bg-apple-light-gray/60 rounded-3xl p-8 text-center hover:scale-105 transition-transform duration-300 border border-gray-100">
              <h3 className="text-2xl font-semibold mb-3 text-apple-black">Самостоятельный</h3>
              <p className="text-apple-gray mb-8 h-12">Доступ к лекциям и общему чату</p>
              <div className="text-5xl font-bold mb-8 text-apple-black">2 990₽</div>
              <ul className="text-left my-8 space-y-3">
                <li className="flex items-center text-apple-black"><span className="text-green-500 mr-3">✓</span>Записи всех лекций</li>
                <li className="flex items-center text-apple-black"><span className="text-green-500 mr-3">✓</span>Закрытый чат участников</li>
                <li className="flex items-center text-apple-black"><span className="text-green-500 mr-3">✓</span>Материалы и шаблоны</li>
              </ul>
              <a href="https://t.me/hashslash_bot" target="_blank" className="w-full block py-3 bg-white border border-apple-blue text-apple-blue rounded-xl text-lg font-medium hover:bg-apple-blue hover:text-white transition-all duration-200">Выбрать</a>
            </div>
            
            {/* Стандартный (Popular) */}
            <div className="bg-apple-black rounded-3xl p-8 text-center text-white relative shadow-2xl scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium">Популярный</div>
              <h3 className="text-2xl font-semibold mb-3">Стандартный</h3>
              <p className="text-white/70 mb-8 h-12">С моей поддержкой и разбором проектов в мини-группе</p>
              <div className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">12 000₽</div>
              <ul className="text-left my-8 space-y-3">
                <li className="flex items-center"><span className="text-green-400 mr-3">✓</span><strong>Всё из тарифа "Самостоятельный"</strong></li>
                <li className="flex items-center"><span className="text-green-400 mr-3">✓</span>Моя личная поддержка в чате</li>
                <li className="flex items-center"><span className="text-green-400 mr-3">✓</span>Разбор ваших проектов в группе</li>
                <li className="flex items-center"><span className="text-green-400 mr-3">✓</span>Дополнительные мастер-классы</li>
              </ul>
              <a href="https://t.me/hashslash_bot" target="_blank" className="w-full block py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-lg font-medium hover:scale-105 transition-transform duration-200">Выбрать стандартный</a>
            </div>
            
            {/* VIP */}
            <div className="bg-apple-light-gray/60 rounded-3xl p-8 text-center hover:scale-105 transition-transform duration-300 border border-gray-100">
              <h3 className="text-2xl font-semibold mb-3 text-apple-black">VIP</h3>
              <p className="text-apple-gray mb-8 h-12">Личные созвоны и консультации</p>
              <div className="text-5xl font-bold mb-8 text-apple-black">24 000₽</div>
              <ul className="text-left my-8 space-y-3">
                <li className="flex items-center text-apple-black"><span className="text-green-500 mr-3">✓</span><strong>Всё из тарифа "Стандартный"</strong></li>
                <li className="flex items-center text-apple-black"><span className="text-green-500 mr-3">✓</span>Личные созвоны со мной (2 шт)</li>
                <li className="flex items-center text-apple-black"><span className="text-green-500 mr-3">✓</span>Индивидуальные консультации</li>
                <li className="flex items-center text-apple-black"><span className="text-green-500 mr-3">✓</span>Помощь в реализации вашего проекта</li>
              </ul>
               <a href="https://t.me/hashslash_bot" target="_blank" className="w-full block py-3 bg-white border border-apple-blue text-apple-blue rounded-xl text-lg font-medium hover:bg-apple-blue hover:text-white transition-all duration-200">Выбрать</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="apply" className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-6xl font-semibold mb-6">Начни создавать с AI уже сегодня</h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed">
            Тысячи людей уже изменили свою жизнь с помощью вайб-кодинга. 
            Присоединяйся к революции в разработке и создавай проекты мечты с помощью искусственного интеллекта.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <a 
              href="https://t.me/hashslash_bot" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white text-apple-blue px-8 py-4 rounded-2xl text-lg font-semibold hover:-translate-y-1 transition-all hover:shadow-2xl hover:shadow-white/25"
            >
              Записаться на интенсив
            </a>
            <a 
              href="#lead-magnet" 
              className="border-2 border-white/50 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white/10 transition-all"
            >
              Получить бесплатный гайд
            </a>
          </div>
          
          <div className="text-center">
            <p className="text-lg opacity-75 mb-4">Есть вопросы?</p>
            <a 
              href="https://t.me/r1iiis" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xl font-semibold hover:underline transition-all"
            >
              Напиши мне в Telegram @r1iiis
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}