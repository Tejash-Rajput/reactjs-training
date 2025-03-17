import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../../redux/slices/index";
import ProductCard from "./ProductCard";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import "../../scss/index.scss";


/**
 * Cart Component - Displays available products and cart items.
 * @component
 * @returns {JSX.Element} The Cart component.
 */


const Cart = () => {
  const dispatch = useDispatch();
  const reduxCart = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(reduxCart));
  }, [reduxCart]);

  const products = [
    { id: 1, name: "product 1", price: 100 },
    { id: 2, name: "prod 2", price: 20 },
  ];

  return (
    <div className="cart-container">
      <h2 className="cart-heading">Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} dispatch={dispatch} />
        ))}
      </div>

      <h2 className="cart-heading">Cart</h2>
      {reduxCart.length === 0 ? (
        <p className="empty-cart">Cart is empty</p>
      ) : (
        reduxCart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            dispatch={dispatch}
            increment={incrementQuantity}
            decrement={decrementQuantity}
            remove={removeFromCart}
          />
        ))
      )}

      <CartSummary reduxCart={reduxCart} />
    </div>
  );
};

export default Cart;
