export default function Instructor() {
  return (
    <section id="instructor" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-semibold mb-12">Настоящая экспертиза, без воды</h2>
        <div className="bg-apple-light-gray rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 text-left">
          <div className="flex-shrink-0">
            <div className="w-48 h-48 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full flex items-center justify-center">
              <span className="text-6xl">👨‍💻</span>
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-semibold">Сережа Рис</h3>
            <p className="text-xl text-apple-blue font-medium mb-4">Автор и преподаватель</p>
            <p className="text-apple-gray mb-6">
              Привет! Я много лет был инженером и проектировщиком в ведущих технологических компаниях (Яндекс, Стрелка), а сейчас — сооснователь AI-агентства hsl.sh.
              <br/><br/>
              Я не бизнес-тренер, а практик, который ежедневно использует AI для решения реальных бизнес-задач. Этот воркшоп — мой способ поделиться работающими техниками и сделать технологии доступными каждому, чтобы вы могли эффективнее решать рабочие задачи, ускорять свои проекты и освобождать время для того, что действительно важно.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="https://t.me/r1iiis" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors">Telegram</a>
              <a href="https://www.youtube.com/@riiiiiiiiiiiiiis" target="_blank" rel="noopener noreferrer" className="bg-red-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-600 transition-colors">YouTube</a>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center border-t border-gray-300 pt-6">
              <div>
                <p className="text-3xl font-bold">10+</p>
                <p className="text-sm text-apple-gray">лет в разработке</p>
              </div>
              <div>
                <p className="text-3xl font-bold">8+</p>
                <p className="text-sm text-apple-gray">лет в образовании</p>
              </div>
              <div>
                <p className="text-3xl font-bold">500+</p>
                <p className="text-sm text-apple-gray">обученных друзей</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}