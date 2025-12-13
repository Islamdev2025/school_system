import React from 'react';
import { Globe, BookOpen } from 'lucide-react';

const Header = ({ lang, setLang, activeSection, setActiveSection, t }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b-2 border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-3 rounded-2xl shadow-lg transform hover:rotate-12 transition-transform">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                {t.title}
              </h1>
              <p className="text-xs md:text-sm text-gray-600">{t.subtitle}</p>
            </div>
          </div>

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

        <nav className="flex space-x-2 pb-4 overflow-x-auto">
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
    </header>
  );
};

export default Header;