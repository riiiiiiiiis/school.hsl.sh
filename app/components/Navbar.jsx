export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="font-semibold text-2xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Hashslash
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#courses" className="text-apple-gray hover:text-apple-black transition-colors">
              Курсы
            </a>
            <a href="#about" className="text-apple-gray hover:text-apple-black transition-colors">
              О школе
            </a>
            <a href="#contact" className="text-apple-gray hover:text-apple-black transition-colors">
              Контакты
            </a>
            <a href="#courses" className="bg-apple-blue text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors">
              Выбрать курс
            </a>
          </div>
          
          <div className="md:hidden">
            <button className="text-apple-gray hover:text-apple-black">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}