import React from "react";
/**
 * CartItem Component - Displays an item in the cart.
 * @component
 * @param {Object} props - The component props.
 * @param {Object} props.item - The cart item details.
 * @param {number} props.item.id - The item ID.
 * @param {string} props.item.name - The item name.
 * @param {number} props.item.price - The item price.
 * @param {number} props.item.quantity - The item quantity.
 * @param {Function} props.dispatch - Redux dispatch function.
 * @param {Function} props.increment - Function to increase quantity.
 * @param {Function} props.decrement - Function to decrease quantity.
 * @param {Function} props.remove - Function to remove item from cart.
 * @returns {JSX.Element} The CartItem component.
 */
const CartItem = ({ item, dispatch, increment, decrement, remove }) => {
  return (
    <div className="cart-item">
      <h3 className="cart-item-name">{item.name}</h3>
      <p className="cart-item-price">Price: ${item.price}</p>
      <p className="cart-item-quantity">Quantity: {item.quantity}</p>
      <button
        className="increment-btn"
        onClick={() => dispatch(increment(item.id))}
      >
        +
      </button>
      <button
        className="decrement-btn"
        onClick={() => dispatch(decrement(item.id))}
      >
        -
      </button>
      <button className="remove-btn" onClick={() => dispatch(remove(item.id))}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;
