import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import React, { useState } from 'react'

interface SearchFormProps {
  onSearch: (query: string) => void; // callback to parent
  placeholder?: string; // optional placeholder text
}

export default function SearchForm({onSearch, placeholder}: SearchFormProps) {

    const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query.trim());
  };

    return (
    <form
      onSubmit={handleSubmit}
      className="absolute right-0 flex mr-2 mt-1 w-full max-w-3xs bg-linear-to-l from-[#222831] to-[#393E46] rounded-3xl shadow-md border border-gray-600  ">
        
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder || "Search..."}
        className="w-full px-2  text-white rounded-l-3xl focus:outline-none"
      />
      <button
        type="submit"
        className="px-2 py-2 text-white rounded-r-3xl transition cursor-pointer"
      >
        <MagnifyingGlassIcon className="w-6 h-6" /> 
      </button>
    </form>
    )
}