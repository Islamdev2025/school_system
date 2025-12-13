import React from 'react';
import { Users, BookOpen, Award } from 'lucide-react';

const HeroSection = ({ t, setActiveSection }) => {
  const stats = [
    { icon: Users, value: '5000+', label: t.stats.students, color: 'from-blue-500 to-cyan-500' },
    { icon: BookOpen, value: '80+', label: t.stats.teachers, color: 'from-purple-500 to-pink-500' },
    { icon: Award, value: '27', label: t.stats.years, color: 'from-orange-500 to-red-500' },
    { icon: Award, value: '150+', label: t.stats.awards, color: 'from-green-500 to-emerald-500' }
  ];

  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-600/10 animate-pulse" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
              {t.hero.title}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto font-medium">
            {t.hero.description}
          </p>
          <button
            onClick={() => setActiveSection('feedback')}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-110 transition-all"
          >
            {t.hero.cta}
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, idx) => (
            <div key={idx} className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity`} />
              <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <stat.icon className={`w-12 h-12 mb-4 mx-auto bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`} />
                <div className={`text-4xl font-black bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm mt-2 font-semibold">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;