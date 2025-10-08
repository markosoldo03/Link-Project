import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

export default function Header() {
  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 
                 bg-white text-black dark:bg-[#393E46] dark:text-white
                 flex flex-wrap items-center justify-between 
                 h-20 px-4 shadow-md"
    >
      {/* Search bar */}
      <SearchForm onSearch={handleSearch} placeholder="Search here..." />

      {/* Links */}
      <div className="flex flex-wrap justify-center sm:justify-start gap-6">
        <Link to="/" className="hover:text-cyan-400 transition-colors">
          Home
        </Link>
        <Link to="/about" className="hover:text-cyan-400 transition-colors">
          About
        </Link>
        <Link to="/contact" className="hover:text-cyan-400 transition-colors">
          Contact
        </Link>
        <Link to="/settings" className="hover:text-cyan-400 transition-colors">
          Settings
        </Link>
      </div>
    </nav>
  );
}
