import React from 'react';

export default function HardwareDetail({ product }: { product: any }) {
  return (
    <>
      {/* Section principale */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        {/* En-tête du produit */}
        <div className="flex items-start justify-between mb-6">
          {/* ... Logo et titre ... */}
        </div>
        
        {/* Galerie photos */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Galerie</h2>
          {/* ... */}
        </div>

        {/* Caractéristiques techniques */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Caractéristiques techniques</h2>
          {/* ... */}
        </div>
      </div>

      {/* Garantie et support */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h2 className="text-lg font-semibold mb-4">Garantie et support</h2>
        {/* ... */}
      </div>
    </>
  );
}