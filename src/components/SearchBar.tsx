import React, { useState } from 'react';
import { Search } from 'lucide-react';

const suggestions = [
  'AI Development Services',
  'Machine Learning Solutions',
  'Computer Vision Tools',
  'NLP Platforms',
  'AI Model Training',
];

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredSuggestions = suggestions.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative w-full max-w-2xl">
      <div className="relative">
        <input
          type="text"
          className="w-full px-4 py-3 pl-12 bg-white rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all outline-none"
          placeholder="Search AI solutions, services, and training..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      </div>
      
      {showSuggestions && query && (
        <div className="absolute w-full mt-2 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          {filteredSuggestions.map((suggestion, index) => (
            <button
              key={index}
              className="w-full px-4 py-2 text-left hover:bg-gray-50 focus:bg-purple-50 focus:text-purple-700"
              onClick={() => setQuery(suggestion)}
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}