import { Link, useLocation } from "react-router-dom";
import SearchForm from "./SearchForm";

export default function Header() {
  const location = useLocation();

  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
  };

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 
                 bg-white/90 dark:bg-[#0f1115]/80 backdrop-blur-lg
                 text-black dark:text-gray-100 
                 border-b border-gray-200 dark:border-white/10
                 shadow-sm transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between h-20 px-6">
        {/* Logo / Brand */}
        <Link
          to="/"
          className="font-extrabold text-2xl tracking-wide 
                     bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                     bg-clip-text text-transparent hover:opacity-90 transition-opacity duration-300"
        >
          Header
        </Link>

        {/* Center search */}
        <div className="flex-1 mx-6 hidden md:flex justify-center">
          <SearchForm onSearch={handleSearch} placeholder="Search..." />
        </div>

        {/* Nav links */}
        <nav className="flex items-center gap-6 text-sm sm:text-base">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/contact", label: "Contact" },
            { to: "/members", label: "Members" },
            { to: "/settings", label: "Settings" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`relative font-medium transition-colors duration-300 
                hover:text-cyan-400 ${
                  location.pathname === item.to
                    ? "text-cyan-500 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-cyan-500 after:rounded-full"
                    : ""
                }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
