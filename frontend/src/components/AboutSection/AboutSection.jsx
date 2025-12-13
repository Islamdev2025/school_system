import React from 'react';
import { Award } from 'lucide-react';

const AboutSection = ({ t, lang }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl p-8 md:p-16 border-2 border-blue-100">
        <h2 className="text-5xl font-black mb-8 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          {t.nav.about}
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
              {lang === 'kgz' && 'Биздин мектеп 1998-жылы негизделип, 27 жылдан ашык убакыттан бери сапаттуу билим берүү менен алектенип келет. Биз заманбап билим берүү ыкмаларын колдонуу менен окуучуларга ар тараптуу өнүгүү мүмкүнчүлүгүн түзөбүз.'}
              {lang === 'eng' && 'Our school was founded in 1998 and has been providing quality education for over 27 years. We use modern teaching methods to create comprehensive development opportunities for our students.'}
              {lang === 'ru' && 'Наша школа основана в 1998 году и более 27 лет занимается качественным образованием. Мы используем современные методы обучения, создавая возможности для всестороннего развития учащихся.'}
            </p>
            <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl shadow-lg">
              <Award className="w-16 h-16 text-blue-600" />
              <div>
                <div className="font-bold text-xl text-gray-800">
                  {lang === 'kgz' && 'Сапаттуу билим берүү'}
                  {lang === 'eng' && 'Quality Education'}
                  {lang === 'ru' && 'Качественное образование'}
                </div>
                <div className="text-gray-600">
                  {lang === 'kgz' && 'Мамлекеттик стандарттарга ылайык'}
                  {lang === 'eng' && 'According to state standards'}
                  {lang === 'ru' && 'Согласно государственным стандартам'}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { emoji: '📚', label: lang === 'kgz' ? 'Китепкана' : lang === 'eng' ? 'Library' : 'Библиотека' },
              { emoji: '🎓', label: lang === 'kgz' ? 'Билим' : lang === 'eng' ? 'Education' : 'Образование' },
              { emoji: '🏆', label: lang === 'kgz' ? 'Жетишкендиктер' : lang === 'eng' ? 'Achievements' : 'Достижения' },
              { emoji: '🌟', label: lang === 'kgz' ? 'Инновация' : lang === 'eng' ? 'Innovation' : 'Инновации' }
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 text-center hover:scale-105 transition-transform shadow-lg border-2 border-blue-100">
                <div className="text-6xl mb-2">{item.emoji}</div>
                <div className="font-semibold text-gray-700 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;