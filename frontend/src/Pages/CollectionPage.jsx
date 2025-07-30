import { useState,useEffect } from "react";
import {FaFilter} from "react-icons/fa";
import FilterSidebar from "../Components/Products/FilterSidebar";
import { useRef } from "react";
import ProductGrid from "../Components/Products/ProductGrid";
import SortOptions from "../Components/Products/SortOptions"
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByFilters } from "../redux/slice/productslice";
import { useLocation } from "react-router-dom";
const CollectionPage = () => {


const {collection} = useParams();
const [searchParams] = useSearchParams();
const dispatch = useDispatch();
const {products,loading,error} = useSelector((state) => state.products);
const queryParams = Object.fromEntries([ ...searchParams]);
const location = useLocation();


    
    const sidebarRef  = useRef(null);
     const [isSidebarOpen, setisSidebarOpen] = useState(false);


     useEffect(() => {
      dispatch(fetchProductsByFilters({collection, ...queryParams }));
     } , [dispatch,collection,location.search]);
  //  useEffect(() => {
  //   const search = searchParams.get("search") || "";

  //   // You can fetch other filters like category, brand, etc.
  //   dispatch(fetchProductsByFilters({ search }));
  // }, [searchParams, dispatch]);


const toggleSidebar = () =>{
    setisSidebarOpen(!isSidebarOpen);
}

const handleClickOutside = (e) => {
    // closer sidebar if clicked outside 
    if(sidebarRef.current && !sidebarRef.current.contains(e
      .target))
      setisSidebarOpen(false);
};






useEffect(() => {
    // add event listener for clicks
    document.addEventListener("mousedown",handleClickOutside);
    // client event listner 
    return () => {
      document.removeEventListener("mousedown",handleClickOutside);

    }
    
},[])

    return (
        <div className="flex  flex-col lg:flex-row">
            {/* mobile filter button  */}
            <button
            onClick = {toggleSidebar}
            className="lg:hidden border p-2 flex justify-center items-center">
                <FaFilter className="mr-2"/> Filters
            </button>
            {/* filter sidebar  */}
            <div  
            ref={sidebarRef} 
            className={` ${isSidebarOpen ? "translate-x-0" :"-translate-x-full"}
            fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 
            lg:static lg:translate-x-0`}
            >
                <FilterSidebar/>
            </div>
            <div className="flex-grow p-4">

              <h2 className="text-2xl uppercase mb-4"> All Collection</h2>

              {/* sort options */}
              <SortOptions/>

               {/* product grid  */}
               <ProductGrid products={products} loading={loading} error ={error}/>
            </div>
        </div>
    )
}
export default CollectionPage