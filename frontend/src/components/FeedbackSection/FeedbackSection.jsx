import React from 'react';
import { MessageSquare, Send } from 'lucide-react';

const FeedbackSection = ({ t, formData, setFormData, showSuccess, handleSubmit }) => {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-blue-100">
        <div className="flex items-center justify-center mb-10">
          <MessageSquare className="w-14 h-14 text-blue-600 mr-4" />
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            {t.feedback.title}
          </h2>
        </div>

        {showSuccess && (
          <div className="mb-6 p-5 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-xl shadow-lg">
            <p className="text-green-700 font-bold text-lg flex items-center">
              <span className="mr-2">✓</span> {t.feedback.success}
            </p>
          </div>
        )}

        <div className="space-y-5">
          <div className="grid md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder={t.feedback.name}
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all shadow-sm font-medium"
            />
            <input
              type="tel"
              placeholder={t.feedback.phone}
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all shadow-sm font-medium"
            />
            <input
              type="text"
              placeholder={t.feedback.class}
              value={formData.class}
              onChange={(e) => setFormData({...formData, class: e.target.value})}
              className="px-5 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all shadow-sm font-medium"
            />
          </div>

          {[
            { field: 'proposal', color: 'border-blue-300' },
            { field: 'information', color: 'border-purple-300' },
            { field: 'complaint', color: 'border-orange-300' },
            { field: 'idea', color: 'border-green-300' }
          ].map(({ field, color }) => (
            <textarea
              key={field}
              placeholder={t.feedback[field]}
              value={formData[field]}
              onChange={(e) => setFormData({...formData, [field]: e.target.value})}
              rows="3"
              className={`w-full px-5 py-4 rounded-xl border-2 ${color} focus:border-blue-500 focus:outline-none transition-all resize-none shadow-sm font-medium`}
            />
          ))}

          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-5 rounded-xl font-bold text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all flex items-center justify-center space-x-3"
          >
            <span>{t.feedback.submit}</span>
            <Send className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;