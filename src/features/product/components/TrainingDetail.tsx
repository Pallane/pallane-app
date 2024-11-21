import React from 'react';

export default function TrainingDetail({ product }: { product: any }) {
  return (
    <>
      {/* Section principale */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        {/* En-tête du produit */}
        <div className="flex items-start justify-between mb-6">
          {/* ... Logo et titre ... */}
        </div>
        
        {/* Programme */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Programme de formation</h2>
          {/* ... */}
        </div>

        {/* Prérequis */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Prérequis</h2>
          {/* ... */}
        </div>

        {/* Formateurs */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Nos formateurs</h2>
          {/* ... */}
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h2 className="text-lg font-semibold mb-4">Certifications</h2>
        {/* ... */}
      </div>
    </>
  );
}