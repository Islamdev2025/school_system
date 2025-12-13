import React, { useState } from 'react';
import { Globe, BookOpen, X, Menu } from 'lucide-react';

const Header = ({ lang, setLang, activeSection, setActiveSection, t }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false); // Закрываем меню после выбора
  };

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b-2 border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Логотип */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-3 rounded-2xl shadow-lg transform hover:rotate-12 transition-transform">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                {t.title}
              </h1>
              <p className="text-xs md:text-sm text-gray-600">{t.subtitle}</p>
            </div>
          </div>

          {/* Десктоп версия - языки и навигация */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Переключатель языков */}
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5 text-gray-500" />
              {['kgz', 'eng', 'ru'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1.5 rounded-xl font-bold text-sm transition-all transform hover:scale-105 ${
                    lang === l
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Кнопка бургер-меню для мобильных */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg transition-all"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Десктоп навигация */}
        <nav className="hidden lg:flex space-x-2 pb-4">
          {Object.entries(t.nav).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className={`px-5 py-2.5 rounded-xl font-semibold whitespace-nowrap transition-all transform hover:scale-105 ${
                activeSection === key
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-white'
              }`}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>

      {/* Мобильное меню */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-3 bg-gradient-to-br from-blue-50 to-cyan-50">
          {/* Навигация */}
          <div className="space-y-2">
            {Object.entries(t.nav).map(([key, label]) => (
              <button
                key={key}
                onClick={() => handleSectionChange(key)}
                className={`w-full text-left px-5 py-3 rounded-xl font-semibold transition-all ${
                  activeSection === key
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Разделитель */}
          <div className="border-t border-gray-200 pt-3 mt-3">
            {/* Переключатель языков */}
            <div className="flex items-center justify-center space-x-2">
              <Globe className="w-5 h-5 text-gray-500" />
              {['kgz', 'eng', 'ru'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`flex-1 px-3 py-2.5 rounded-xl font-bold text-sm transition-all ${
                    lang === l
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;