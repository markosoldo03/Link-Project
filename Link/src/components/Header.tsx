import SearchForm from "./SearchForm"
export default function Header() {
    const handleSearch = (query: string) => {
    console.log("Searching for:", query);
    
  };
    return (
        <nav className='bg-[#393E46] text-white p-4 fixed w-full m-0 '>
            <SearchForm onSearch={handleSearch} placeholder="Search here..." />
        </nav>
    )
}