import React from 'react';
import { Mail, Phone, Instagram, Music, BookOpen } from 'lucide-react';

const ContactSection = ({ t, lang }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-3xl shadow-2xl p-10 border-2 border-blue-100">
          <h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            {t.nav.contact}
          </h2>
          <div className="space-y-5">
            {[
              { icon: Phone, title: t.feedback.phone, value: '+996 706‒51‒65‒06', color: 'from-purple-500 to-pink-500' },
              { icon: Instagram, title: 'Instagram', value: '@82_school_official', color: 'from-pink-500 to-rose-500' },
              { icon: Music, title: 'TikTok', value: '@82schoolbish', color: 'from-gray-700 to-gray-900' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center space-x-4 p-5 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl hover:shadow-lg transition-shadow border border-gray-200">
                <div className={`bg-gradient-to-br ${item.color} p-3 rounded-xl`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-800">{item.title}</div>
                  <div className="text-gray-600">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl shadow-2xl p-10 text-white">
          <h3 className="text-3xl font-black mb-6">{t.footer.address}</h3>
          <p className="mb-8 text-lg opacity-95">
            {lang === 'kgz' && 'Келип көрүңүз жана биздин мектеп менен таанышыңыз!'}
            {lang === 'eng' && 'Come visit and get to know our school!'}
            {lang === 'ru' && 'Приходите и познакомьтесь с нашей школой!'}
          </p>
          <a
  href="https://go.2gis.com/sYTTW"
  target="_blank"
  rel="noopener noreferrer"
  className="block"
>
  <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/30 hover:bg-white/30 transition cursor-pointer">
    <div className="aspect-video bg-white/30 backdrop-blur rounded-2xl flex items-center justify-center">
      <div className="text-center">
        <BookOpen className="w-20 h-20 mx-auto mb-3 opacity-90" />
        <p className="font-semibold opacity-90">
          {lang === 'kgz'
            ? 'Карта 2GIS'
            : lang === 'eng'
            ? 'Open 2GIS map'
            : 'Открыть карту 2GIS'}
        </p>
      </div>
    </div>
  </div>
</a>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;