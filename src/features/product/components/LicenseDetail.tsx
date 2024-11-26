import React from 'react';

export default function LicenseDetail({ product }: { product: any }) {
  return (
    <>
      {/* Section principale */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        {/* En-tête du produit */}
        <div className="flex items-start justify-between mb-6">
          {/* ... Logo et titre ... */}
        </div>
        
        {/* Description */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Description</h2>
          {/* ... */}
        </div>

        {/* Fonctionnalités */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Fonctionnalités</h2>
          {/* ... */}
        </div>

        {/* Intégrations */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Intégrations disponibles</h2>
          {/* ... */}
        </div>
      </div>

      {/* Section API */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h2 className="text-lg font-semibold mb-4">Documentation API</h2>
        {/* ... */}
      </div>
    </>
  );
}