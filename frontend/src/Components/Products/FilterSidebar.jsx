import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchProductsByFilters } from "../../redux/slice/productslice";

const FilterSidebar = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const [filters, setFilters] = useState({
    collection: "",
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 1000,
  });

  const [priceRange, setPriceRange] = useState([0, 1000]);

  const colors = ["Red", "Blue", "Black", "Green", "Yellow", "Gray", "White", "Pink", "Beige", "Navy"];
  const sizes = ["5", "6", "7", "8", "9", "10", "11", "12"];
  const materials = ["Cotton", "Wool", "Denim", "Polyster", "Silk", "Linen", "Viscose", "Fleece"];
  const brands = ["Urban","Threads","Modern Fit","Street Style","Beach","Breeze","Fashioista","ChicStyle"];
  const categories = ["Mens Wear", "Womens wear"];
  const genders = ["Male", "Female", "Unisex"];
  const collections = ["Men", "Women", "Kids"];

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    console.log("URL Params:", params);

    const updatedFilters = {
      collection: params.collection || "",
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",").filter(Boolean) : [], // 🔧 FIX: filter out empty strings
      material: params.material ? params.material.split(",").filter(Boolean) : [], // 🔧
      brand: params.brand ? params.brand.split(",").filter(Boolean) : [], // 🔧
      minPrice: parseInt(params.minPrice) || 0,
      maxPrice: parseInt(params.maxPrice) || 1000,
    };

    setFilters(updatedFilters);
    setPriceRange([0, updatedFilters.maxPrice]);

    console.log("Dispatched filters:", updatedFilters);
    dispatch(fetchProductsByFilters(updatedFilters));
  }, [searchParams]);

  const updatedURLParams = (newFilters) => {
    const params = new URLSearchParams();

    Object.entries(newFilters).forEach(([key, val]) => {
      if (Array.isArray(val) && val.length > 0) {
        // params.set(key, val.join(","));
        params.set(key, val.filter(Boolean).join(","));

      } else if (typeof val === "string" && val.trim() !== "") {
        params.set(key, val);
      } else if (typeof val === "number" && !isNaN(val)) {
        params.set(key, val.toString());
      }
    });

    setSearchParams(params); // 🔧 FIX: navigate removed
  };

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;
    let newFilters = { ...filters };

    if (type === "checkbox") {
      if (checked) {
        newFilters[name] = [...(newFilters[name] || []), value];
      } else {
        newFilters[name] = newFilters[name].filter((item) => item !== value);
      }
    } else {
      newFilters[name] = value;
    }

    setFilters(newFilters);
    updatedURLParams(newFilters);
    dispatch(fetchProductsByFilters(newFilters)); // 🔧 FIX: dispatch immediately
  };

  const handleColorClick = (color) => {
    const newFilters = {
      ...filters,
      color: filters.color === color ? "" : color, // 🔧 FIX: toggle same color off
    };
    setFilters(newFilters);
    updatedURLParams(newFilters);
    dispatch(fetchProductsByFilters(newFilters)); // 🔧
  };

  const handlePriceChange = (e) => {
    const newMax = parseInt(e.target.value);
    setPriceRange([0, newMax]);
    const newFilters = { ...filters, minPrice: 0, maxPrice: newMax };
    setFilters(newFilters);
    updatedURLParams(newFilters);
    dispatch(fetchProductsByFilters(newFilters)); // 🔧
  };

  return (
    <div className="p-4">
      <h3 className="text-xl font-medium text-gray-800">Filters</h3>

      {/* Collection */}
      <div className="mb-4">
        <label className="block text-gray-600 font-medium mb-2">Collection</label>
        {collections.map((col) => (
          <div key={col} className="flex items-center mb-1">
            <input
              type="radio"
              name="collection"
              value={col}
              onChange={handleFilterChange}
              checked={filters.collection === col}
              className="mr-2 h-4 w-4 text-blue-500"
            />
            <span className="text-gray-700">{col}</span>
          </div>
        ))}
      </div>

      {/* Category */}
      <div className="mb-4">
        <label className="block text-gray-600 font-medium mb-2">Category</label>
        {categories.map((category) => (
          <div key={category} className="flex items-center mb-1">
            <input
              type="radio"
              name="category"
              value={category}
              onChange={handleFilterChange}
              checked={filters.category === category}
              className="mr-2 h-4 w-4 text-blue-500"
            />
            <span className="text-gray-700">{category}</span>
          </div>
        ))}
      </div>

      {/* Gender */}
      <div className="mb-4">
        <label className="block text-gray-600 font-medium mb-2">Gender</label>
        {genders.map((gender) => (
          <div key={gender} className="flex items-center mb-1">
            <input
              type="radio"
              name="gender"
              value={gender}
              onChange={handleFilterChange}
              checked={filters.gender === gender}
              className="mr-2 h-4 w-4 text-blue-500"
            />
            <span className="text-gray-700">{gender}</span>
          </div>
        ))}
      </div>

      {/* Colors */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Colors</label>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              type="button"
              onClick={() => handleColorClick(color)}
              className={`w-8 h-8 rounded-full border-2 ${
                filters.color === color ? "border-black" : "border-gray-300"
              }`}
              style={{ backgroundColor: color.toLowerCase() }}
            />
          ))}
        </div>
      </div>

      {/* Size */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Size</label>
        {sizes.map((size) => (
          <div key={size} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="size"
              value={size}
              checked={filters.size.includes(size)}
              onChange={handleFilterChange}
              className="mr-2 h-4"
            />
            <span className="text-gray-700">{size}</span>
          </div>
        ))}
      </div>

      {/* Materials */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Materials</label>
        {materials.map((material) => (
          <div key={material} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="material"
              value={material}
              checked={filters.material.includes(material)}
              onChange={handleFilterChange}
              className="mr-2 h-4"
            />
            <span className="text-gray-700">{material}</span>
          </div>
        ))}
      </div>

      {/* Brands */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Brand</label>
        {brands.map((brand) => (
          <div key={brand} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="brand"
              value={brand}
              checked={filters.brand.includes(brand)}
              onChange={handleFilterChange}
              className="mr-2 h-4"
            />
            <span className="text-gray-700">{brand}</span>
          </div>
        ))}
      </div>

      {/* Price Range */}
      <div className="mb-8">
        <label className="block text-gray-600 font-medium mb-2">Price Range</label>
        <input
          type="range"
          name="priceRange"
          min={0}
          max={2000}
          value={priceRange[1]}
          onChange={handlePriceChange}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-gray-600 mt-2">
          <span>₹0</span>
          <span>₹{priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
