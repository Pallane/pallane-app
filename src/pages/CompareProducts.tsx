import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus, X, Check, Search, ArrowDown, ArrowLeft } from 'lucide-react';
import { mockProducts } from '../features/product/data/mockData';
import { useCartStore } from '../store/cartStore';
import Footer from '../components/Footer';

interface SelectedTag {
  id: string;
  type: string;
}

type ProductType = 'hardware' | 'license' | 'training' | 'expert';

export default function CompareProducts() {
  const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
  const [showProductList, setShowProductList] = useState(false);
  const [selectedType, setSelectedType] = useState<ProductType>('hardware');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [selectedTags, setSelectedTags] = useState<SelectedTag[]>([]);
  const addToCart = useCartStore((state) => state.addItem);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const productsByType = {
    hardware: Object.values(mockProducts.hardware),
    license: Object.values(mockProducts.license),
    training: Object.values(mockProducts.training),
    expert: Object.values(mockProducts.expert),
  };

  const filteredProducts = productsByType[selectedType].filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
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

  const getFeaturesByType = (type: ProductType) => {
    const commonFeatures = [
      { id: 'type', name: 'Type', type: 'text' },
      { id: 'description', name: 'Description', type: 'text' },
      { id: 'support', name: 'Support 24/7', type: 'boolean' },
    ];

    const specificFeatures = {
      hardware: [
        { id: 'warranty', name: 'Garantie', type: 'boolean' },
        { id: 'onsite-support', name: 'Support sur site', type: 'boolean' },
        { id: 'installation', name: 'Installation incluse', type: 'boolean' },
        { id: 'maintenance', name: 'Maintenance préventive', type: 'boolean' },
      ],
      license: [
        { id: 'updates', name: 'Mises à jour automatiques', type: 'boolean' },
        { id: 'api', name: 'API disponible', type: 'boolean' },
        { id: 'customization', name: 'Personnalisation', type: 'boolean' },
        { id: 'integration', name: 'Intégrations tierces', type: 'boolean' },
      ],
      training: [
        { id: 'certification', name: 'Certification incluse', type: 'boolean' },
        { id: 'materials', name: 'Supports de cours', type: 'boolean' },
        { id: 'practice', name: 'Exercices pratiques', type: 'boolean' },
        { id: 'mentoring', name: 'Mentorat', type: 'boolean' },
      ],
      expert: [
        { id: 'availability', name: 'Disponibilité 24/7', type: 'boolean' },
        { id: 'remote', name: 'Travail à distance', type: 'boolean' },
        { id: 'reporting', name: 'Reporting hebdomadaire', type: 'boolean' },
        { id: 'sla', name: 'SLA garanti', type: 'boolean' },
      ],
    };

    return [...commonFeatures, ...specificFeatures[type]];
  };

  return (
    <div className="min-h-screen bg-[#EDEDED]">
      <div className="max-w-[1600px] mx-auto px-8 py-12">
        <h1 className="text-3xl font-bold text-[#0B3251] mb-8">Comparer les solutions</h1>

        {/* Filtres de catégories */}
        <div className="flex gap-4 mb-8">
          {(['hardware', 'license', 'training', 'expert'] as ProductType[]).map((type) => (
            <button
              key={type}
              onClick={() => {
                setSelectedType(type);
                setSelectedProducts([]);
              }}
              className={`px-6 py-3 rounded-md font-medium ${
                selectedType === type
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {type === 'hardware' && 'Hardwares'}
              {type === 'license' && 'Licences'}
              {type === 'training' && 'Formations'}
              {type === 'expert' && 'Experts as a Service'}
            </button>
          ))}
        </div>
        
        <div className="bg-white rounded-xl shadow-sm overflow-x-auto">
          <table className="w-full" id="comparison-table">
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
                        className="mt-4 w-full bg-primary text-white px-4 py-2 rounded-md text-sm hover:bg-primary/90"
                      >
                        Ajouter au panier
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
                        <span className="font-medium">Ajouter un produit</span>
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
              {getFeaturesByType(selectedType).map((feature) => (
                <tr key={feature.id}>
                  <td className="p-4 border-b border-gray-200 bg-gray-50 sticky left-0">
                    <span className="text-sm font-medium text-gray-700">{feature.name}</span>
                  </td>
                  {selectedProducts.map((product) => (
                    <td key={`${product.uniqueId}-${feature.id}`} className="p-4 border-b border-gray-200 text-center">
                      {feature.type === 'text' ? (
                        <span className="text-sm text-gray-600">
                          {feature.id === 'type' ? product.type : product.description}
                        </span>
                      ) : (
                        Math.random() > 0.5 ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-red-500 mx-auto" />
                        )
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