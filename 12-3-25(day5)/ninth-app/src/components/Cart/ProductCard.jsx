import React from "react";
import { addToCart } from "../../redux/slices/index";
/**
 * ProductCard Component - Displays individual product details.
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.product - The product details.
 * @param {number} props.product.id - The product ID.
 * @param {string} props.product.name - The product name.
 * @param {number} props.product.price - The product price.
 * @param {Function} props.dispatch - Redux dispatch function.
 * @returns {JSX.Element} The ProductCard component.
 */
const ProductCard = ({ product, dispatch }) => {
  return (
    <div className="product-card">
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">${product.price}</p>
      <button className="add-btn" onClick={() => dispatch(addToCart(product))}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
