import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  FileText, 
  Users, 
  Settings, 
  HelpCircle,
  LogOut,
  Bell
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
  userType: 'client' | 'partner' | 'admin';
}

export default function DashboardLayout({ children, userType }: DashboardLayoutProps) {
  const location = useLocation();

  const getNavItems = () => {
    const commonItems = [
      { 
        icon: LayoutDashboard, 
        label: 'Tableau de bord', 
        path: `/${userType}/dashboard` 
      },
      { 
        icon: Settings, 
        label: 'Paramètres', 
        path: `/${userType}/settings` 
      },
      { 
        icon: HelpCircle, 
        label: 'Support', 
        path: `/${userType}/support` 
      }
    ];

    switch (userType) {
      case 'client':
        return [
          ...commonItems,
          { icon: ShoppingBag, label: 'Commandes', path: '/client/orders' },
          { icon: FileText, label: 'Factures', path: '/client/invoices' },
        ];
      case 'partner':
        return [
          ...commonItems,
          { icon: Users, label: 'Clients', path: '/partner/clients' },
          { icon: FileText, label: 'Contrats', path: '/partner/contracts' },
        ];
      case 'admin':
        return [
          ...commonItems,
          { icon: Users, label: 'Utilisateurs', path: '/admin/users' },
          { icon: ShoppingBag, label: 'Produits', path: '/admin/products' },
        ];
      default:
        return commonItems;
    }
  };

  const navItems = getNavItems();

  return (
    <div className="min-h-screen bg-[#EDEDED] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 fixed top-[112px] left-0 bottom-0 flex flex-col">
        <nav className="flex-1 px-4 pt-20">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive 
                        ? 'bg-primary text-white' 
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 mt-auto">
          <button className="flex items-center space-x-3 text-gray-600 hover:text-primary w-full px-4 py-3">
            <LogOut className="w-5 h-5" />
            <span>Déconnexion</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 ml-64">
        {/* Header */}
        <div className="sticky top-[112px] z-10">
          <div className="bg-white border-b border-gray-200">
            <div className="max-w-[1600px] mx-auto px-8 py-6">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-[#0B3251]">
                  {userType === 'client' && 'Tableau de bord'}
                  {userType === 'partner' && 'Espace Partenaire'}
                  {userType === 'admin' && 'Administration'}
                </h1>
                <div className="flex items-center space-x-4">
                  <button className="p-2 text-gray-600 hover:text-primary rounded-full hover:bg-gray-100 relative">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                  </button>
                  <button className="p-2 text-gray-600 hover:text-primary rounded-full hover:bg-gray-100">
                    <Settings className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <div className="max-w-[1600px] mx-auto px-8 py-12">
          {children}
        </div>
      </div>
    </div>
  );
}