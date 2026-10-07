import "./styles.css";

import { useEffect, useMemo, useState } from "react";

import SearchBar from "./SearchBar";
import FilterPanel from "./FilterPanel";
import ProductList from "./ProductList";

import { products } from "./products";


function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000);

  const [sortBy, setSortBy] = useState("");

  const [loading, setLoading] = useState(true);

  // Simulate API call
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search
    if (search.trim()) {
      result = result.filter((product) =>
        product.name
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    // Category
    if (category !== "all") {
      result = result.filter(
        (product) => product.category === category
      );
    }

    // Price
    result = result.filter(
      (product) =>
        product.price >= Number(minPrice) &&
        product.price <= Number(maxPrice)
    );

    // Sorting
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;

      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;

      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;

      case "name":
        result.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        break;

      default:
        break;
    }

    return result;
  }, [
    search,
    category,
    minPrice,
    maxPrice,
    sortBy,
  ]);

  const handleReset = () => {
    setSearch("");
    setCategory("all");
    setMinPrice(0);
    setMaxPrice(100000);
    setSortBy("");
  };

  if (loading) {
    return (
      <div className="loading">
        Loading...
      </div>
    );
  }

  return (
    <div className="app">
      <h1>Product Listing</h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <FilterPanel
        category={category}
        setCategory={setCategory}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        sortBy={sortBy}
        setSortBy={setSortBy}
        onReset={handleReset}
      />

      <ProductList
        products={filteredProducts}
      />
    </div>
  );
}

export default App;