import React, { useState } from 'react';
import { ChevronDown, Menu, X, ShoppingCart, UserPlus, LogIn, ArrowRight, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLanguageStore } from '../store/languageStore';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import CartBadge from './shared/CartBadge';
import GlobalSearch from './GlobalSearch';
import { useAuth } from '../hooks/useAuth';

export default function Navbar() {
  const { t } = useTranslation();
  const { setLanguage } = useLanguageStore();
  const { user } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const [showResources, setShowResources] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: 'https://flagcdn.com/48x36/us.png' },
    { code: 'fr', name: 'Français', flag: 'https://flagcdn.com/48x36/fr.png' }
  ];

  const [selectedLang, setSelectedLang] = useState(languages[0]);

  return (
    <nav className="bg-primary border-b border-secondary/20 sticky top-0 z-30">
      <div className="max-w-[1600px] mx-auto px-8 sm:px-10 md:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <Logo className="h-6 sm:h-7 md:h-8 w-auto" />
            </Link>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden sm:block flex-1 max-w-xl lg:max-w-3xl mx-4 lg:mx-8">
            <GlobalSearch />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Catalog Link */}
            <Link 
              to="/catalog"
              className="text-white hover:text-secondary"
            >
              Catalogue
            </Link>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                className="text-white hover:text-secondary flex items-center space-x-1"
                onClick={() => setShowResources(!showResources)}
              >
                <span>Ressources</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {showResources && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-2 z-50">
                  <Link 
                    to="/elearning" 
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                    onClick={() => setShowResources(false)}
                  >
                    E-learning
                  </Link>
                  <Link 
                    to="/client/dashboard" 
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                    onClick={() => setShowResources(false)}
                  >
                    Espace Client
                  </Link>
                  <Link 
                    to="/partner/dashboard" 
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                    onClick={() => setShowResources(false)}
                  >
                    Espace Partenaire
                  </Link>
                  <Link 
                    to="/admin/dashboard" 
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50"
                    onClick={() => setShowResources(false)}
                  >
                    Administration
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              to="/become-partner"
              className="bg-white text-primary px-4 py-2 rounded-md hover:bg-white/90 transition-colors flex items-center space-x-2"
            >
              <UserPlus className="w-4 h-4" />
              <span>{t('nav.partner')}</span>
            </Link>
            
            {/* Language Selector */}
            <div className="relative">
              <button
                className="flex items-center text-white hover:text-secondary cursor-pointer rounded-md px-2 py-1"
                onClick={() => setShowLanguages(!showLanguages)}
              >
                <img 
                  src={selectedLang.flag} 
                  alt={selectedLang.code.toUpperCase()} 
                  className="w-5 h-5 lg:w-6 lg:h-6 rounded-full object-cover mr-1" 
                />
                <span>{selectedLang.code.toUpperCase()}</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>

              {showLanguages && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="py-1">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        onClick={() => {
                          setLanguage(lang.code);
                          setSelectedLang(lang);
                          setShowLanguages(false);
                        }}
                      >
                        <img 
                          src={lang.flag} 
                          alt={lang.code.toUpperCase()} 
                          className="w-5 h-5 lg:w-6 lg:h-6 rounded-full object-cover mr-2" 
                        />
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {user ? (
              <Link 
                to="/dashboard"
                className="text-white hover:text-secondary flex items-center space-x-2"
              >
                <User className="w-4 h-4" />
                <span>Mon compte</span>
              </Link>
            ) : (
              <>
                <Link 
                  to="/login"
                  className="text-white hover:text-secondary flex items-center space-x-2"
                >
                  <LogIn className="w-4 h-4" />
                  <span>{t('nav.signIn')}</span>
                </Link>

                <Link 
                  to="/signup"
                  className="bg-secondary text-primary px-4 py-2 rounded-md hover:bg-secondary/90 transition-colors flex items-center space-x-2"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>{t('nav.signUp')}</span>
                </Link>
              </>
            )}

            <Link to="/cart" className="text-white hover:text-secondary p-2 relative">
              <ShoppingCart className="w-5 h-5" />
              <CartBadge />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-secondary hover:text-white p-2 rounded-md"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search - Visible only on mobile */}
        <div className="sm:hidden py-4">
          <GlobalSearch />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-primary overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-secondary/20">
              <Logo className="h-6 w-auto" />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-secondary hover:text-white p-2 rounded-md"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="px-4 py-6 space-y-6">
              {/* Become Partner Button */}
              <Link
                to="/become-partner"
                className="block bg-white text-primary px-4 py-3 rounded-xl hover:bg-white/90 transition-colors flex items-center justify-between group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="flex items-center">
                  <UserPlus className="w-5 h-5 mr-3" />
                  <span className="font-medium">{t('nav.partner')}</span>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Resources Section */}
              <div className="space-y-2">
                <p className="text-sm text-secondary px-3">Ressources</p>
                <Link
                  to="/catalog"
                  className="block text-lg font-medium text-white hover:text-secondary rounded-md px-3 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Catalogue
                </Link>
                <Link
                  to="/elearning"
                  className="block text-lg font-medium text-white hover:text-secondary rounded-md px-3 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  E-learning
                </Link>
                <Link
                  to="/client/dashboard"
                  className="block text-lg font-medium text-white hover:text-secondary rounded-md px-3 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Espace Client
                </Link>
                <Link
                  to="/partner/dashboard"
                  className="block text-lg font-medium text-white hover:text-secondary rounded-md px-3 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Espace Partenaire
                </Link>
                <Link
                  to="/admin/dashboard"
                  className="block text-lg font-medium text-white hover:text-secondary rounded-md px-3 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Administration
                </Link>
              </div>

              <div className="border-t border-secondary/20 pt-4">
                <div className="space-y-4">
                  {user ? (
                    <Link 
                      to="/dashboard"
                      className="flex items-center w-full text-white hover:text-secondary px-3 py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <User className="w-5 h-5 mr-2" />
                      Mon compte
                    </Link>
                  ) : (
                    <>
                      <Link 
                        to="/login"
                        className="flex items-center w-full text-white hover:text-secondary px-3 py-2"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <LogIn className="w-5 h-5 mr-2" />
                        {t('nav.signIn')}
                      </Link>
                      <Link
                        to="/signup"
                        className="flex items-center justify-center w-full bg-secondary text-primary px-4 py-2 rounded-md hover:bg-secondary/90"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <UserPlus className="w-5 h-5 mr-2" />
                        {t('nav.signUp')}
                      </Link>
                    </>
                  )}
                  <Link 
                    to="/cart"
                    className="flex items-center justify-center w-full text-white hover:text-secondary py-2 relative"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <CartBadge />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}