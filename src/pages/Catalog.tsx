import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { mockProducts } from '../features/product/data/mockData';
import ProductCard from '../components/shared/ProductCard';

export default function Catalog() {
  const [searchQuery, setSearchQuery] = useState('');

  // Convertir les produits mockés en tableau (uniquement les formations)
  const allProducts = Object.values(mockProducts.training);

  // Filtrer les produits selon la recherche
  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#EDEDED]">
      <div className="max-w-[1600px] mx-auto px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#0B3251] mb-4">Catalogue des formations</h1>
          
          {/* Barre de recherche */}
          <input
            type="text"
            placeholder="Rechercher une formation..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        
        {/* Grille de produits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              logo={product.logo}
              tag={product.type}
              title={product.name}
              description={product.description}
              price={product.price}
              badge="Essai gratuit"
            />
          ))}
        </div>

        {/* Message si aucun résultat */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">Aucune formation ne correspond à votre recherche.</p>
          </div>
        )}
      </div>
    </div>
  );
}