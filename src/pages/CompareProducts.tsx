import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, X, Check, Search, ArrowLeft } from 'lucide-react';
import { mockProducts } from '../features/product/data/mockData';
import { useCartStore } from '../store/cartStore';
import Footer from '../components/Footer';

export default function CompareProducts() {
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const [showProductList, setShowProductList] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const addToCart = useCartStore((state) => state.addItem);

  // Récupérer uniquement les formations
  const trainings = Object.values(mockProducts.training);

  // Filtrer les formations selon la recherche
  const filteredProducts = trainings.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddProduct = (product: any) => {
    if (selectedProducts.length < 10 && !selectedProducts.some(p => p.id === product.id)) {
      setSelectedProducts(prev => [...prev, { ...product, uniqueId: `${product.id}-${Date.now()}` }]);
      setShowProductList(false);
      setSearchQuery('');
    }
  };

  const handleRemoveProduct = (uniqueId: string) => {
    setSelectedProducts(prev => prev.filter(p => p.uniqueId !== uniqueId));
  };

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      type: product.type,
      price: product.price,
      logo: product.logo,
    });
  };

  const getFeaturesToCompare = () => {
    return [
      { id: 'duration', name: 'Durée', type: 'text' },
      { id: 'level', name: 'Niveau', type: 'text' },
      { id: 'language', name: 'Langue', type: 'text' },
      { id: 'certificate', name: 'Certification incluse', type: 'boolean' },
      { id: 'prerequisites', name: 'Prérequis', type: 'text' },
      { id: 'objectives', name: 'Objectifs', type: 'text' },
      { id: 'practicalWork', name: 'Travaux pratiques', type: 'boolean' },
      { id: 'support', name: 'Support de cours', type: 'boolean' },
      { id: 'mentoring', name: 'Mentorat', type: 'boolean' },
      { id: 'interCompany', name: 'Inter-entreprises', type: 'boolean' },
      { id: 'intraCompany', name: 'Intra-entreprise', type: 'boolean' },
      { id: 'remote', name: 'Formation à distance', type: 'boolean' },
      { id: 'onsite', name: 'Formation sur site', type: 'boolean' }
    ];
  };

  return (
    <div className="min-h-screen bg-[#EDEDED]">
      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="flex items-center justify-between mb-6">
            <Link to="/catalog" className="flex items-center text-gray-300 hover:text-white">
              <ArrowLeft className="w-5 h-5 mr-2" />
              <span>Retour au catalogue</span>
            </Link>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">
              Comparez nos formations en IA générative
            </h1>
            <p className="text-gray-300 text-lg">
              Analysez en détail nos différentes formations pour trouver celle qui correspond le mieux à vos objectifs d'apprentissage et votre niveau.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-8 py-12">
        <div className="bg-white rounded-xl shadow-sm overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="p-6 min-w-[200px] text-left bg-gray-50 border-b border-gray-200 sticky left-0 z-10">
                  <span className="text-sm font-medium text-gray-700">Caractéristiques</span>
                </th>
                {selectedProducts.map((product) => (
                  <th key={product.uniqueId} className="p-6 min-w-[250px] border-b border-gray-200">
                    <div className="relative">
                      <button
                        onClick={() => handleRemoveProduct(product.uniqueId)}
                        className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                      <div className="flex items-center justify-center mb-4">
                        <img
                          src={product.logo}
                          alt={product.name}
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <h3 className="text-sm font-medium text-gray-900 mb-1">{product.name}</h3>
                      <p className="text-sm text-gray-500">{product.price}</p>
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="mt-4 w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90"
                      >
                        Réserver
                      </button>
                    </div>
                  </th>
                ))}
                {selectedProducts.length < 10 && (
                  <th className="p-6 min-w-[250px] border-b border-gray-200">
                    <div className="relative">
                      <button
                        onClick={() => setShowProductList(!showProductList)}
                        className="w-full h-40 border-2 border-primary border-dashed rounded-lg flex flex-col items-center justify-center text-primary hover:bg-primary/5 transition-colors group"
                      >
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                          <Plus className="w-6 h-6" strokeWidth={2.5} />
                        </div>
                        <span className="font-medium">Ajouter une formation</span>
                        <span className="text-sm text-primary/70 mt-1">
                          {10 - selectedProducts.length} emplacements disponibles
                        </span>
                      </button>
                      {showProductList && (
                        <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 z-20">
                          <div className="p-4 border-b border-gray-200">
                            <div className="relative">
                              <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Rechercher..."
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                              />
                              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            </div>
                          </div>
                          <div className="max-h-80 overflow-y-auto">
                            {filteredProducts
                              .filter(product => !selectedProducts.some(p => p.id === product.id))
                              .map((product) => (
                                <button
                                  key={product.id}
                                  onClick={() => handleAddProduct(product)}
                                  className="w-full p-4 text-left hover:bg-gray-50 flex items-center space-x-4"
                                >
                                  <img
                                    src={product.logo}
                                    alt={product.name}
                                    className="w-8 h-8 object-contain"
                                  />
                                  <span>{product.name}</span>
                                </button>
                              ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              {getFeaturesToCompare().map((feature) => (
                <tr key={feature.id}>
                  <td className="p-4 border-b border-gray-200 bg-gray-50 sticky left-0">
                    <span className="text-sm font-medium text-gray-700">{feature.name}</span>
                  </td>
                  {selectedProducts.map((product) => (
                    <td key={`${product.uniqueId}-${feature.id}`} className="p-4 border-b border-gray-200 text-center">
                      {feature.type === 'boolean' ? (
                        Math.random() > 0.5 ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-red-500 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm text-gray-600">
                          {product[feature.id] || '-'}
                        </span>
                      )}
                    </td>
                  ))}
                  {selectedProducts.length < 10 && <td className="p-4 border-b border-gray-200" />}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}