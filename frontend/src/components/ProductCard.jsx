import "../css/productCard.css";

const ProductCard = ({ img, productName, productPrice }) => {
  return (
    <>
      <div className="product-container">
        <div className="product-image">
          <img src={img} alt={productName} height={300} width={300} />
          <p className="product-name">{productName}</p>
          <span className="product-price">${productPrice}</span>
          <div className="add-to-cart-button">
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
