import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  DollarSign, 
  TrendingUp, 
  Package,
  BarChart2,
  MessageSquare,
  FileText
} from 'lucide-react';

export default function PartnerDashboard() {
  return (
    <div>
      {/* Statistiques principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600">Clients actifs</span>
            <Users className="w-5 h-5 text-primary" />
          </div>
          <p className="text-2xl font-bold text-gray-900">156</p>
          <p className="text-sm text-green-600 flex items-center mt-2">
            <TrendingUp className="w-4 h-4 mr-1" />
            +12% ce mois
          </p>
        </div>
        
        <div className="bg-white rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600">Revenu mensuel</span>
            <DollarSign className="w-5 h-5 text-primary" />
          </div>
          <p className="text-2xl font-bold text-gray-900">24,500€</p>
          <p className="text-sm text-green-600 flex items-center mt-2">
            <TrendingUp className="w-4 h-4 mr-1" />
            +8% ce mois
          </p>
        </div>

        <div className="bg-white rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600">Produits vendus</span>
            <Package className="w-5 h-5 text-primary" />
          </div>
          <p className="text-2xl font-bold text-gray-900">89</p>
          <p className="text-sm text-green-600 flex items-center mt-2">
            <TrendingUp className="w-4 h-4 mr-1" />
            +15% ce mois
          </p>
        </div>

        <div className="bg-white rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600">Taux de satisfaction</span>
            <MessageSquare className="w-5 h-5 text-primary" />
          </div>
          <p className="text-2xl font-bold text-gray-900">98%</p>
          <p className="text-sm text-green-600 flex items-center mt-2">
            <TrendingUp className="w-4 h-4 mr-1" />
            +2% ce mois
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Graphique des ventes */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Performance des ventes</h2>
              <select className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm">
                <option>7 derniers jours</option>
                <option>30 derniers jours</option>
                <option>3 derniers mois</option>
              </select>
            </div>
            
            <div className="h-80 flex items-center justify-center">
              <BarChart2 className="w-16 h-16 text-gray-300" />
            </div>
          </div>
        </div>

        {/* Dernières certifications */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Certifications</h2>
            
            <div className="space-y-4">
              {['Azure Solutions', 'AWS Cloud', 'Google Cloud'].map((cert) => (
                <div key={cert} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">{cert}</span>
                  </div>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    Actif
                  </span>
                </div>
              ))}

              <Link 
                to="/partner/certifications" 
                className="block text-center text-primary hover:text-primary/80 text-sm mt-6"
              >
                Voir toutes les certifications
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Dernières opportunités */}
      <div className="mt-8">
        <div className="bg-white rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Opportunités commerciales</h2>
            <Link to="/partner/opportunities" className="text-primary hover:text-primary/80 text-sm">
              Voir tout
            </Link>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-gray-600">
                  <th className="pb-4">Client</th>
                  <th className="pb-4">Produit</th>
                  <th className="pb-4">Valeur</th>
                  <th className="pb-4">Statut</th>
                  <th className="pb-4">Action</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[1, 2, 3].map((opp) => (
                  <tr key={opp} className="border-t border-gray-100">
                    <td className="py-4">Entreprise {opp}</td>
                    <td className="py-4">Solution Cloud</td>
                    <td className="py-4">15,000€</td>
                    <td className="py-4">
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                        En cours
                      </span>
                    </td>
                    <td className="py-4">
                      <button className="text-primary hover:text-primary/80">
                        Détails
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