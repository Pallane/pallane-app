import React from 'react';

export default function ExpertDetail({ product }: { product: any }) {
  return (
    <>
      {/* Section principale */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        {/* En-tête du produit */}
        <div className="flex items-start justify-between mb-6">
          {/* ... Logo et titre ... */}
        </div>
        
        {/* Profil de l'expert */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Profil</h2>
          {/* ... */}
        </div>

        {/* Compétences */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Compétences</h2>
          {/* ... */}
        </div>

        {/* Expérience */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Expérience</h2>
          {/* ... */}
        </div>
      </div>

      {/* Disponibilité */}
      <div className="bg-white rounded-xl shadow-sm p-8">
        <h2 className="text-lg font-semibold mb-4">Disponibilité</h2>
        {/* ... */}
      </div>
    </>
  );
}