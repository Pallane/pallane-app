import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, Share2 } from 'lucide-react';
import ProductBreadcrumb from '../components/ProductBreadcrumb';
import ProductSidebar from '../components/ProductSidebar';

interface BaseProductLayoutProps {
  product: any;
  children: React.ReactNode;
}

export default function BaseProductLayout({ product, children }: BaseProductLayoutProps) {
  return (
    <div className="min-h-screen bg-[#EDEDED]">
      {/* Header avec navigation et actions */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1600px] mx-auto px-8 py-4">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <Link to="/catalog" className="flex items-center text-gray-600 hover:text-primary">
                <ArrowLeft className="w-5 h-5 mr-2" />
                <span>Retour au catalogue</span>
              </Link>
              <div className="flex items-center space-x-4">
                <button className="p-2 text-gray-600 hover:text-primary rounded-full hover:bg-gray-100">
                  <Share2 className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-600 hover:text-red-500 rounded-full hover:bg-gray-100">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
            </div>
            <ProductBreadcrumb product={product} />
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-[1600px] mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {children}
          </div>
          <div className="lg:col-span-1">
            <ProductSidebar product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}