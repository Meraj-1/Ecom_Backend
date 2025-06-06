import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/Productitem.jsx";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext); // Access products from context
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  // Update `filterProducts` when `products` changes
  useEffect(() => {
    if (products && Array.isArray(products)) {
      setFilterProducts(products); // Set filtered products
    }
  }, [products]);

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    // let productsCopy = products.slice();
    let fpCopy = filterProducts.slice();
    switch (sortType) {
      case "low-high":
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 flex text-xl font-medium mb-5  items-center cursor-pointer gap-2 text-gray-800"
        >
          FILTERS
          <img
            className={`h-3 transition-transform duration-300 ${
              showFilter ? "rotate-90" : ""
            }`}
            src={assets.dropdown_icon}
            alt="Dropdown icon"
          />
        </p>

        <div className={`pl-5 mt-6 ${showFilter ? "" : "hidden"} sm:block`}>
          {/* <p className="mb-3 text-sm font-medium text-gray-800">CATEGORIES</p> */}
          <Title text1="CATEGO" text2="RIES" />
          <div className="flex flex-col gap-2 text-sm font-light pb-4 text-gray-700">
            <label className="flex cursor-pointer border-t p-2  font-bold items-center gap-2">
              <input
                onChange={toggleCategory}
                className="w-4 h-4"
                type="checkbox"
                value="Men"
              />
              Men
            </label>
            <label className="flex cursor-pointer border-t p-2 font-bold items-center gap-2">
              <input
                onChange={toggleCategory}
                className="w-4 h-4"
                type="checkbox"
                value="Women"
              />
              Women
            </label>
            <label className="flex cursor-pointer border-t p-2 font-bold items-center gap-2">
              <input
                onChange={toggleCategory}
                className="w-4 h-4"
                type="checkbox"
                value="Kids"
              />
              Kids
            </label>
          </div>
        </div>

        {/* Type Filter Section */}
        <div className={`pl-5 mt-5 ${showFilter ? "" : "hidden"} sm:block`}>
          {/* <p className="mb-3 text-sm font-medium text-gray-800 ">TYPE</p> */}
          <Title text1="TY" text2="PE" />
          <div className="flex flex-col gap-2 text-sm pb-4 font-light text-gray-700">
            <label className="flex cursor-pointer border-t p-2 font-bold  items-center gap-2">
              <input
                onChange={toggleSubCategory}
                className="w-4 h-4"
                type="checkbox"
                value="Topwear"
              />
              Topwear
            </label>
            <label className="flex cursor-pointer border-t-1 p-2  font-bold items-center gap-2">
              <input
                onChange={toggleSubCategory}
                className="w-4 h-4"
                type="checkbox"
                value="Bottomwear"
              />
              Bottomwear
            </label>
            <label className="flex cursor-pointer border-t p-2 font-bold items-center gap-2">
              <input
                onChange={toggleSubCategory}
                className="w-4 h-4 "
                type="checkbox"
                value="Winterwear"
              />
              Winterwear
            </label>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="flex-1">
        <div className="flex justify-between text-base  sm:text-2xl mb-4">
          <Title text1="ALL " text2="COLLECTIONS" />
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-b-2  text-sm  font-bold px-2"
          >
            <option value="relavent">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-1 gap-y-6">
          {/* Render Product Items */}
          {filterProducts.length > 0 ? (
            filterProducts.map((item, index) => (
              <ProductItem
                key={index}
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image}
              />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No products available.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
