import React from 'react';
import { FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = ({ t }) => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* О проекте */}
          <div>
            <h3 className="text-2xl font-black mb-4">{t.title}</h3>
            <p className="opacity-90 text-lg">{t.subtitle}</p>
          </div>

          {/* Соцсети */}
          <div>
            <h3 className="text-2xl font-black mb-4">{t.footer.follow}</h3>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/82_school_official/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity font-semibold"
              >
                <FaInstagram className="w-5 h-5" />
                <span>82_school_official</span>
              </a>
              <a
                href="https://www.tiktok.com/@82schoolbish"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity font-semibold"
              >
                <FaTiktok className="w-5 h-5" />
                <span>82schoolbish</span>
              </a>
            </div>
          </div>

          {/* Разработчик */}
          <div>
            <h3 className="text-2xl font-black mb-4">{t.footer.developer}</h3>
            <p className="opacity-90 text-lg">
              Өмүрбеков Нурел<br />
              9-з класс<br />
              2025-2026
            </p>
            <div className="flex flex-col space-y-2 mt-2">
              <a
                href="https://www.instagram.com/209_nurel/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity font-semibold"
              >
                <FaInstagram className="w-5 h-5" />
                <span>@209_nurel</span>
              </a>
              <a
                href="https://www.instagram.com/nurel.omurbekov.dev/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity font-semibold"
              >
                <FaInstagram className="w-5 h-5" />
                <span>@nurel.omurbekov.dev</span>
              </a>
              <a
                href="https://www.tiktok.com/@_omurbek0v_0"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity font-semibold"
              >
                <FaTiktok className="w-5 h-5" />
                <span>@_omurbek0v_0</span>
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-white/30 pt-8 text-center">
          <p className="opacity-90 text-lg font-semibold">
            © 2025 {t.title}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
