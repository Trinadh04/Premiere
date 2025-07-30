

import { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {  fetchProductsByFilters } from "../../redux/slice/productslice";

const SearchBar = ({setFilters}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    setFilters({search:searchTerm});
    dispatch(fetchProductsByFilters({search:searchTerm}));
    navigate(`/collections/all?search=${searchTerm}`);
    setIsOpen(false);
  };
  

  return (
    <div className={`flex items-center justify-center w-full transition-all duration-300 ${isOpen ? 
              "absolute top-0 left-0 bg-red h-24 z-50" : "w-auto"}`}>
    {isOpen ? (
        <form
        onSubmit={handleSearch}
        className="relative flex items-center w-full max-w-2xl">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-5 py-3 rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <button
            type="submit"
            className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-blue-600"
          >
            <HiMagnifyingGlass className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={handleSearchToggle}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-red-600"
          >
            <HiMiniXMark className="h-6 w-6" />
          </button>
        </form>
      ) : (
        <button
          onClick={handleSearchToggle}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 shadow"
        >
          <HiMagnifyingGlass className="h-6 w-6 text-gray-700" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;

