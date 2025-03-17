import React from "react";
/**
 * CartSummary Component - Displays the total price of items in the cart.
 * @component
 * @param {Object} props - The component props.
 * @param {Array} props.reduxCart - The list of cart items.
 * @returns {JSX.Element} The CartSummary component.
 */
const CartSummary = ({ reduxCart }) => {
  const totalPrice = reduxCart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return <h2 className="total-price">Total Price: ${totalPrice}</h2>;
};

export default CartSummary;