import { courses } from "../data/courses";

export default function Footer() {
  return (
    <footer className="bg-apple-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="font-semibold text-2xl mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Школа Hashslash
            </h3>
            <p className="text-apple-gray text-lg mb-6 max-w-md">
            Усиливаем человека с помощью нейросетей. Присоединяйся.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Программы</h4>
            <ul className="space-y-2">
              {courses.map(({ href, title }) => (
                <li key={href}>
                  <a href={href} className="text-apple-gray hover:text-white transition-colors">
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Контакты</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://t.me/hashslash" className="text-apple-gray hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                Наш телеграм
                </a>
              </li>
              <li>
                <a href="mailto:hello@hsl.sh" className="text-apple-gray hover:text-white transition-colors">
                Написать на почту
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-apple-gray text-sm">
            © 2025 Школа Hashslash. Все права защищены.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-apple-gray hover:text-white text-sm transition-colors">
              Политика конфиденциальности
            </a>
            <a href="/terms" className="text-apple-gray hover:text-white text-sm transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}