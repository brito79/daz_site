import  { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { resources } from '../../data/resources';
import { Resource } from '../../types/resource';

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Resource[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    if (searchQuery.trim() === '') {
      setResults([]);
      return;
    }

    const searchResults = resources.filter(resource =>
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setResults(searchResults);
  };

  const handleResultClick = (url: string) => {
    navigate(url);
    setIsOpen(false);
    setQuery('');
    setResults([]);
  };

  return (
    <div ref={searchRef} className="relative">
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-gray-600 hover:text-gray-900"
      >
        <Search className="h-5 w-5" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-lg z-50">
          <div className="p-4">
            <div className="flex items-center border rounded-md">
              <Search className="h-5 w-5 text-gray-400 ml-3" />
              <input
                type="text"
                placeholder="Search resources..."
                className="w-full p-2 outline-none"
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                autoFocus
              />
              {query && (
                <button
                  onClick={() => handleSearch('')}
                  className="p-2 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {results.length > 0 && (
              <div className="mt-4 max-h-96 overflow-y-auto">
                {results.map((result) => (
                  <button
                    key={result.id}
                    onClick={() => handleResultClick(result.url)}
                    className="w-full text-left p-3 hover:bg-gray-50 rounded-md"
                  >
                    <h4 className="font-semibold text-gray-900">{result.title}</h4>
                    <p className="text-sm text-gray-600">{result.description}</p>
                    <span className="text-xs text-gray-500 mt-1">
                      {result.category} • {result.type}
                    </span>
                  </button>
                ))}
              </div>
            )}

            {query && results.length === 0 && (
              <div className="text-center py-4 text-gray-500">
                No resources found for "{query}"
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;