import { Link } from "react-router-dom";
import SearchForm from "./SearchForm"


export default function Header() {
    const handleSearch = (query: string) => {
    console.log("Searching for:", query);
    
  };
    return (
        <nav className='bg-[#393E46] text-white p-4 fixed w-full max-w-screen max-h-20 h-full z-50 flex flex-row'>
            
            <SearchForm onSearch={handleSearch} placeholder="Search here..." />
            <Link to="/" className="flex mt-2 ml-6 hover:text-cyan-400">Home</Link>
            <Link to="/about" className="flex mt-2 ml-6 hover:text-cyan-400">About</Link>
            <Link to="/settings" className="flex mt-2 ml-6 hover:text-cyan-400">Settings</Link>
            
        </nav>
    )
}