import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  Clock, 
  FileText, 
  Download, 
  MessageSquare, 
  Package,
  BarChart2
} from 'lucide-react';

export default function ClientDashboard() {
  return (
    <div>
      {/* Statistiques rapides */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600">Commandes actives</span>
            <ShoppingCart className="w-5 h-5 text-primary" />
          </div>
          <p className="text-2xl font-bold text-gray-900">12</p>
        </div>
        
        <div className="bg-white rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600">Licences actives</span>
            <FileText className="w-5 h-5 text-primary" />
          </div>
          <p className="text-2xl font-bold text-gray-900">8</p>
        </div>

        <div className="bg-white rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600">Tickets support</span>
            <MessageSquare className="w-5 h-5 text-primary" />
          </div>
          <p className="text-2xl font-bold text-gray-900">3</p>
        </div>

        <div className="bg-white rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600">Factures en attente</span>
            <Download className="w-5 h-5 text-primary" />
          </div>
          <p className="text-2xl font-bold text-gray-900">2</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Dernières commandes */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Dernières commandes</h2>
              <Link to="/orders" className="text-primary hover:text-primary/80 text-sm">
                Voir tout
              </Link>
            </div>
            
            <div className="space-y-4">
              {[1, 2, 3].map((order) => (
                <div key={order} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <Package className="w-10 h-10 text-primary p-2 bg-primary/10 rounded-lg" />
                    <div>
                      <p className="font-medium text-gray-900">Commande #{order}23456</p>
                      <p className="text-sm text-gray-600">2 produits • En cours de traitement</p>
                    </div>
                  </div>
                  <Link to={`/orders/${order}`} className="text-primary hover:text-primary/80">
                    Détails
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Activité récente */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Activité récente</h2>
            
            <div className="space-y-6">
              {[1, 2, 3, 4, 5].map((activity) => (
                <div key={activity} className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-900">Nouvelle licence activée</p>
                    <p className="text-xs text-gray-600">Il y a 2 heures</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Graphique d'utilisation */}
      <div className="mt-8">
        <div className="bg-white rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Utilisation des services</h2>
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
    </div>
  );
}