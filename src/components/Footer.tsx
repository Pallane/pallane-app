import React from 'react';
import { useTranslation } from 'react-i18next';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const { t } = useTranslation();

  const columns = [
    {
      title: "Solutions",
      links: ["Hardware", "Licenses", "Training", "Experts", "Support", "Pricing"]
    },
    {
      title: "Company",
      links: ["About", "Careers", "Press", "News", "Contact", "Partners"]
    },
    {
      title: "Resources",
      links: ["Blog", "Newsletter", "Events", "Help center", "Tutorials", "Documentation"]
    },
    {
      title: "Legal",
      links: ["Terms", "Privacy", "Cookies", "Licenses", "Contact", "Settings"]
    }
  ];

  return (
    <footer className="bg-[#0B3251] text-white">
      <div className="max-w-[1600px] mx-auto px-8 sm:px-10 md:px-12">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Logo and Description Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <div className="mb-6">
              <Logo className="h-8 w-auto" />
            </div>
            <p className="text-gray-300 text-sm mb-8 max-w-md">
              Transformez votre entreprise avec nos solutions innovantes et notre expertise pointue en intelligence artificielle générative.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {columns.map((column, index) => (
            <div key={index} className="col-span-1">
              <h3 className="font-semibold text-[#87BBBA] mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-[#87BBBA] text-sm flex items-center group"
                    >
                      <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      <span>{link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              © 2024 Pallane. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="text-gray-300 hover:text-[#87BBBA] text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-[#87BBBA] text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-[#87BBBA] text-sm">
                Cookie Settings
              </a>
              <a href="#" className="text-gray-300 hover:text-[#87BBBA] text-sm">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}