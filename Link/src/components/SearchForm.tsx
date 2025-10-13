import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import React, { useState } from 'react';

interface SearchFormProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export default function SearchForm({ onSearch, placeholder }: SearchFormProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query.trim());
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex items-center w-full max-w-sm 
                 rounded-full bg-gradient-to-r from-white to-gray-50 dark:from-[#1f1f1f] dark:to-[#2b2b2b] 
                 border border-gray-200 dark:border-gray-700 
                 shadow-sm hover:shadow-md transition-all duration-300"
    >
      {/* Input */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder || 'Search...'}
        className="flex-1 px-4 py-2 rounded-l-full text-sm 
                   bg-transparent text-gray-900 dark:text-gray-100 
                   placeholder-gray-500 dark:placeholder-gray-400 
                   focus:outline-none"
      />

      {/* Button */}
      <button
        type="submit"
        className="flex items-center justify-center px-4 py-2 rounded-r-full 
                   text-gray-600 dark:text-gray-300 hover:text-cyan-500 
                   transition-colors duration-300"
      >
        <MagnifyingGlassIcon className="w-5 h-5" />
      </button>
    </form>
  );
}
