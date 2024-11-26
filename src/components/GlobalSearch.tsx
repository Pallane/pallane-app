import React, { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useOnClickOutside } from '../hooks/useOnClickOutside';
import { mockProducts } from '../features/product/data/mockData';

interface SearchResult {
  id: string;
  type: string;
  name: string;
  description: string;
  logo: string;
  isCategory?: boolean;
}

export default function GlobalSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useOnClickOutside(searchRef, () => setIsOpen(false));

  const categories = [
    { type: 'hardware', name: 'Hardware', logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4OAgf' },
    { type: 'license', name: 'Licences', logo: 'https://www.salesforce.com/content/dam/sfdc-docs/www/logos/logo-salesforce.svg' },
    { type: 'training', name: 'Formations', logo: 'https://azure.microsoft.com/content/dam/microsoft/final/en-us/microsoft-azure-marketplace/azure-logo.svg' },
    { type: 'expert', name: 'Experts', logo: 'https://azure.microsoft.com/content/dam/microsoft/final/en-us/microsoft-azure-marketplace/azure-logo.svg' }
  ];

  // Fonction de recherche locale
  const searchProducts = (searchQuery: string): SearchResult[] => {
    if (!searchQuery || searchQuery.length < 2) return [];

    const normalizedQuery = searchQuery.toLowerCase();

    // Recherche dans les catégories
    const matchingCategories = categories
      .filter(category => 
        category.name.toLowerCase().includes(normalizedQuery) ||
        category.type.toLowerCase().includes(normalizedQuery)
      )
      .map(category => ({
        id: category.type,
        type: category.type,
        name: category.name,
        description: `Voir tous les ${category.name.toLowerCase()}`,
        logo: category.logo,
        isCategory: true
      }));

    // Recherche dans les produits
    const allProducts = [
      ...Object.values(mockProducts.hardware),
      ...Object.values(mockProducts.license),
      ...Object.values(mockProducts.training),
      ...Object.values(mockProducts.expert)
    ];

    const matchingProducts = allProducts
      .filter(product => {
        const nameMatch = product.name.toLowerCase().includes(normalizedQuery);
        const descriptionMatch = product.description.toLowerCase().includes(normalizedQuery);
        const typeMatch = product.type.toLowerCase().includes(normalizedQuery);
        return nameMatch || descriptionMatch || typeMatch;
      })
      .map(product => ({
        id: product.id,
        type: product.type,
        name: product.name,
        description: product.description,
        logo: product.logo,
        isCategory: false
      }));

    // Combine et limite les résultats
    return [...matchingCategories, ...matchingProducts].slice(0, 8);
  };

  useEffect(() => {
    if (query.length >= 2) {
      const searchResults = searchProducts(query);
      setResults(searchResults);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => prev < results.length - 1 ? prev + 1 : prev);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => prev > 0 ? prev - 1 : 0);
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      handleSelect(results[selectedIndex]);
    }
  };

  const handleSelect = (result: SearchResult) => {
    if (result.isCategory) {
      navigate(`/catalog?type=${result.type}`);
    } else {
      navigate(`/product/${result.type}-${result.id}`);
    }
    setQuery('');
    setIsOpen(false);
  };

  return (
    <div ref={searchRef} className="relative flex-1 max-w-xl">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Rechercher des produits, catégories..."
          className="w-full bg-white/10 text-white px-4 py-2 pl-10 rounded-md focus:outline-none focus:ring-1 focus:ring-secondary text-sm"
          autoComplete="off"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary w-4 h-4" />
      </div>

      {isOpen && results.length > 0 && (
        <div className="absolute w-full mt-2 bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden z-50">
          {results.map((result, index) => (
            <button
              key={result.id}
              onClick={() => handleSelect(result)}
              onMouseEnter={() => setSelectedIndex(index)}
              className={`w-full px-4 py-3 flex items-center space-x-3 text-left hover:bg-gray-50 ${
                selectedIndex === index ? 'bg-gray-50' : ''
              }`}
            >
              <div className="flex-shrink-0 w-8 h-8 bg-gray-50 rounded-lg p-1">
                <img
                  src={result.logo}
                  alt={result.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {result.name}
                </p>
                <p className="text-xs text-gray-500 truncate">
                  {result.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}