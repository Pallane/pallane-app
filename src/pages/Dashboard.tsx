import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';
import { FileText, Settings, User, LogOut } from 'lucide-react';

export default function Dashboard() {
  const { user, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-[#EDEDED] pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="bg-white rounded-xl p-6 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
              <p className="text-gray-600 mt-1">Bienvenue, {user?.email}</p>
            </div>
            <button
              onClick={signOut}
              className="flex items-center text-gray-600 hover:text-primary"
            >
              <LogOut className="w-5 h-5 mr-2" />
              Déconnexion
            </button>
          </div>
        </div>

        {/* Grille des fonctionnalités */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Demandes de devis */}
          <Link
            to="/admin/quote-requests"
            className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Demandes de devis</h2>
            <p className="text-gray-600">Consultez et gérez les demandes de devis</p>
          </Link>

          {/* Paramètres du compte */}
          <Link
            to="/settings"
            className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <Settings className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Paramètres</h2>
            <p className="text-gray-600">Gérez vos paramètres de compte</p>
          </Link>

          {/* Profil */}
          <Link
            to="/profile"
            className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <User className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Profil</h2>
            <p className="text-gray-600">Modifiez vos informations personnelles</p>
          </Link>
        </div>
      </div>
    </div>
  );
}