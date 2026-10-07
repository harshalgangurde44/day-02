const FilterPanel = ({
    category,
    setCategory,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    sortBy,
    setSortBy,
    onReset,
  }) => {
    return (
      <div className="filter-panel">
        <div>
          <label>Category</label>
  
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Books">Books</option>
            <option value="Grocery">Grocery</option>
          </select>
        </div>
  
        <div>
          <label>Min Price</label>
  
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
        </div>
  
        <div>
          <label>Max Price</label>
  
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
  
        <div>
          <label>Sort By</label>
  
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Default</option>
            <option value="price-low">
              Price: Low → High
            </option>
            <option value="price-high">
              Price: High → Low
            </option>
            <option value="rating">
              Rating: High → Low
            </option>
            <option value="name">
              Name: A → Z
            </option>
          </select>
        </div>
  
        <button onClick={onReset}>
          Reset Filters
        </button>
      </div>
    );
  };
  
  export default FilterPanel;