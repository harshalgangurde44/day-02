const ProductCard = ({ product }) => {
    return (
      <div className="product-card">
        <img
          src={product.image}
          alt={product.name}
        />
  
        <div className="product-info">
          <h3>{product.name}</h3>
  
          <p className="category">
            {product.category}
          </p>
  
          <p className="price">
            ₹{product.price.toLocaleString()}
          </p>
  
          <p>
            ⭐ {product.rating}
          </p>
        </div>
      </div>
    );
  };
  
  export default ProductCard;