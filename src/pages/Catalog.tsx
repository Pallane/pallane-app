import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { mockProducts } from '../features/product/data/mockData';
import ProductCard from '../components/shared/ProductCard';

type ProductType = 'hardware' | 'license' | 'training' | 'expert';

export default function Catalog() {
  const [selectedType, setSelectedType] = useState<ProductType | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Convertir les produits mockés en tableau
  const allProducts = [
    ...Object.values(mockProducts.hardware),
    ...Object.values(mockProducts.license),
    ...Object.values(mockProducts.training),
    ...Object.values(mockProducts.expert)
  ];

  // Filtrer les produits selon le type sélectionné et la recherche
  const filteredProducts = allProducts.filter(product => {
    const matchesType = selectedType === 'all' || product.type === selectedType;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#EDEDED]">
      <div className="max-w-[1600px] mx-auto px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#0B3251] mb-4">Catalogue</h1>
          
          {/* Filtres de type */}
          <div className="flex flex-wrap gap-4 mb-6">
            <button
              onClick={() => setSelectedType('all')}
              className={`px-4 py-2 rounded-lg ${
                selectedType === 'all' ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Tout
            </button>
            {(['hardware', 'license', 'training', 'expert'] as ProductType[]).map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-lg ${
                  selectedType === type ? 'bg-primary text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {type === 'hardware' && 'Hardware'}
                {type === 'license' && 'Licences'}
                {type === 'training' && 'Formations'}
                {type === 'expert' && 'Experts'}
              </button>
            ))}
          </div>

          {/* Barre de recherche */}
          <input
            type="text"
            placeholder="Rechercher..."
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
              badge={product.type === 'expert' ? 'Disponible' : 'Essai gratuit'}
            />
          ))}
        </div>

        {/* Message si aucun résultat */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">Aucun produit ne correspond à votre recherche.</p>
          </div>
        )}
      </div>
    </div>
  );
}