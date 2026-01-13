import React, { useState } from 'react';
import { translations } from './translations/translations';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import FeedbackSection from './components/FeedbackSection/FeedbackSection';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';
import axios from 'axios';

function App() {
  const [lang, setLang] = useState('kgz');
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '', phone: '', class: '', proposal: '', information: '', complaint: '', idea: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const t = translations[lang];

  const handleSubmit = async () => {
    if (!formData.name || !formData.phone || !formData.class) {
      alert(lang === 'kgz' ? 'Толтуруңуз!' : lang === 'eng' ? 'Please fill in!' : 'Заполните!');
      return;
    }

    try {
      const my_id = `7228221648`;
      const token = `8432212243:AAFGvxAVNUbL2hqdTLBAqapPTgBXNaQArWs`;
      const api_key = `https://api.telegram.org/bot${token}/sendMessage`;

      const userData = {
        chat_id: my_id,
        parse_mode: "HTML",
        text: `📝 Жаңы билдирүү / New Message:

👤 ФИО: ${formData.name}
📱 Телефон: ${formData.phone}
🎓 Класс: ${formData.class}

💡 Сунуш / Proposal: ${formData.proposal}
ℹ️ Маалымат / Info: ${formData.information}
⚠️ Даттануу / Complaint: ${formData.complaint}
🌟 Идея / Idea: ${formData.idea}`
      };

      await axios.post(api_key, userData);

      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
      setFormData({ name: '', phone: '', class: '', proposal: '', information: '', complaint: '', idea: '' });
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending message');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <Header
        lang={lang}
        setLang={setLang}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        t={t}
      />

      {activeSection === 'home' && <HeroSection t={t} setActiveSection={setActiveSection} />}
      {activeSection === 'about' && <AboutSection t={t} lang={lang} />}
      {activeSection === 'feedback' && (
        <FeedbackSection
          t={t}
          formData={formData}
          setFormData={setFormData}
          showSuccess={showSuccess}
          handleSubmit={handleSubmit}
        />
      )}
      {activeSection === 'contact' && <ContactSection t={t} lang={lang} />}

      <Footer t={t} />
    </div>
  );
}

export default App;
