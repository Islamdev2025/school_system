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
              {lang === 'kgz' && 'Мектептин жаңы имараты 2015-жылы ачылган. Курулуш жана жабдуу иштери бир нече жыл бою Казакстан тараптын колдоосу менен жүргүзүлгөн. Расмий ачылыш аземине президент катышкан.2022-жылы мектепке кошумча имарат пайдаланууга берилген. Ал музыкалык, көркөм чыгармачылык жана башка ийримдер үчүн атайын орундар менен камсыздалган.'}
              {lang === 'eng' && 'The new school building was opened in 2015. Construction and equipment were carried out over several years with the support of the Kazakh side. The official opening ceremony was attended by the president.In 2022, an additional building was put into operation, providing facilities for music, art, and other creative clubs.'}
              {lang === 'ru' && 'Новое здание школы было открыто в 2015 году. Строительство и оснащение осуществлялись в течение нескольких лет при поддержке казахстанской стороны. В официальной церемонии открытия принял участие президент.В 2022 году было введено в эксплуатацию дополнительное здание школы, предназначенное для музыкальных, художественных и других творческих кружков.'}
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