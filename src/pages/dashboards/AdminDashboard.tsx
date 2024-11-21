import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  DollarSign, 
  TrendingUp, 
  ShieldCheck,
  AlertTriangle,
  Activity,
  UserPlus,
  Package,
  MessageSquare,
  BarChart2
} from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div>
      {/* Alertes système */}
      <div className="mb-8">
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <div>
              <p className="text-red-800 font-medium">2 alertes système requièrent votre attention</p>
              <p className="text-red-600 text-sm">Maintenance serveur requise</p>
            </div>
          </div>
          <button className="text-red-600 hover:text-red-700 text-sm font-medium">
            Voir les détails
          </button>
        </div>
      </div>

      {/* Statistiques principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600">Utilisateurs actifs</span>
            <Users className="w-5 h-5 text-primary" />
          </div>
          <p className="text-2xl font-bold text-gray-900">2,456</p>
          <p className="text-sm text-green-600 flex items-center mt-2">
            <TrendingUp className="w-4 h-4 mr-1" />
            +18% ce mois
          </p>
        </div>
        
        <div className="bg-white rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600">Revenu total</span>
            <DollarSign className="w-5 h-5 text-primary" />
          </div>
          <p className="text-2xl font-bold text-gray-900">845,000€</p>
          <p className="text-sm text-green-600 flex items-center mt-2">
            <TrendingUp className="w-4 h-4 mr-1" />
            +25% ce mois
          </p>
        </div>

        <div className="bg-white rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600">Partenaires</span>
            <ShieldCheck className="w-5 h-5 text-primary" />
          </div>
          <p className="text-2xl font-bold text-gray-900">126</p>
          <p className="text-sm text-green-600 flex items-center mt-2">
            <TrendingUp className="w-4 h-4 mr-1" />
            +5% ce mois
          </p>
        </div>

        <div className="bg-white rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600">Taux de conversion</span>
            <Activity className="w-5 h-5 text-primary" />
          </div>
          <p className="text-2xl font-bold text-gray-900">8.5%</p>
          <p className="text-sm text-green-600 flex items-center mt-2">
            <TrendingUp className="w-4 h-4 mr-1" />
            +2% ce mois
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Graphique principal */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Analyse des revenus</h2>
              <select className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm">
                <option>Cette année</option>
                <option>Année précédente</option>
              </select>
            </div>
            
            <div className="h-80 flex items-center justify-center">
              <BarChart2 className="w-16 h-16 text-gray-300" />
            </div>
          </div>
        </div>

        {/* Activités récentes */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Activités système</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <UserPlus className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-900">Nouveau partenaire inscrit</p>
                  <p className="text-xs text-gray-600">Il y a 5 minutes</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Package className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-900">Nouvelle solution publiée</p>
                  <p className="text-xs text-gray-600">Il y a 12 minutes</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-4 h-4 text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-900">Nouveau ticket support</p>
                  <p className="text-xs text-gray-600">Il y a 25 minutes</p>
                </div>
              </div>
            </div>

            <Link 
              to="/admin/activity" 
              className="block text-center text-primary hover:text-primary/80 text-sm mt-6"
            >
              Voir toutes les activités
            </Link>
          </div>
        </div>
      </div>

      {/* Tableau des utilisateurs */}
      <div className="mt-8">
        <div className="bg-white rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Derniers utilisateurs</h2>
            <Link to="/admin/users" className="text-primary hover:text-primary/80 text-sm">
              Voir tout
            </Link>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-600">
                  <th className="pb-4">Utilisateur</th>
                  <th className="pb-4">Type</th>
                  <th className="pb-4">Date d'inscription</th>
                  <th className="pb-4">Statut</th>
                  <th className="pb-4">Action</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[1, 2, 3, 4, 5].map((user) => (
                  <tr key={user} className="border-t border-gray-100">
                    <td className="py-4">Utilisateur {user}</td>
                    <td className="py-4">Client B2B</td>
                    <td className="py-4">01/01/2024</td>
                    <td className="py-4">
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        Actif
                      </span>
                    </td>
                    <td className="py-4">
                      <button className="text-primary hover:text-primary/80">
                        Gérer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}