import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductBreadcrumbProps {
  product: any;
}

export default function ProductBreadcrumb({ product }: ProductBreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm">
      <Link to="/catalog" className="text-gray-600 hover:text-primary">
        Catalogue
      </Link>
      <ChevronRight className="w-4 h-4 text-gray-400" />
      <Link to="/catalog" className="text-gray-600 hover:text-primary">
        {product.type === 'license' && 'Licences'}
        {product.type === 'training' && 'Formations'}
        {product.type === 'hardware' && 'Hardware'}
        {product.type === 'expert' && 'Experts'}
      </Link>
      <ChevronRight className="w-4 h-4 text-gray-400" />
      <span className="text-gray-900">Nom du produit</span>
    </nav>
  );
}