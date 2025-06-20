export default function ProductCards() {
  const courses = [
    {
      title: "AI Tools",
      subtitle: "Мастер-класс по инструментам AI",
      description: "Освойте современные инструменты искусственного интеллекта для эффективной разработки. ChatGPT, Claude, Midjourney и другие AI-сервисы.",
      href: "/ai",
      color: "from-purple-600 to-blue-600",
      features: [
        "Практические примеры использования AI",
        "Интеграция в рабочий процесс",
        "Промпт-инжиниринг"
      ],
      duration: "4 недели",
      price: "от 9,990₽"
    },
    {
      title: "Вайб-кодинг",
      subtitle: "Создавай без кода с AI",
      description: "Научись создавать сайты и Telegram-ботов в чате с нейросетью. Даже если никогда не писал код!",
      href: "/vibecoding",
      color: "from-blue-600 to-cyan-600",
      features: [
        "Создание сайтов через чат",
        "Разработка Telegram-ботов",
        "Деплой и публикация проектов"
      ],
      duration: "3 недели",
      price: "от 2,990₽"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-4">Наши курсы</h2>
        <p className="text-xl text-apple-gray text-center mb-12 max-w-2xl mx-auto">
          Выберите подходящий курс и начните свой путь в разработке с AI
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <div key={index} className="bg-apple-light-gray rounded-2xl p-8 h-full flex flex-col">
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${course.color} mb-6 self-start`}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              
              <h3 className="text-3xl font-semibold mb-2">{course.title}</h3>
              <p className="text-lg text-apple-blue font-medium mb-4">{course.subtitle}</p>
              <p className="text-apple-gray text-lg mb-6 flex-grow">{course.description}</p>
              
              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-lg">Что изучите:</h4>
                <ul className="space-y-2">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-apple-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center justify-between mb-6 text-sm">
                <div className="flex items-center text-apple-gray">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{course.duration}</span>
                </div>
                <div className="font-semibold text-lg">{course.price}</div>
              </div>
              
              <a
                href={course.href}
                className="block w-full text-center bg-apple-blue text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                Подробнее о курсе
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}