import React from "react";
import "./Cart.css";
const Cart = ({ cart, handleRemoveFromCart }) => {
  // Conditional Rendering
  // 1) Element Variable
  // 2) ternary operator
  // 3) && operator (shorthand)
  // 4) || operator

  let command;
  if (cart.length === 0) {
    command = <p>Please Add Atleast One Item</p>;
  } else {
    command = (
      <p>
        <small>Thanks for Adding Items</small>
      </p>
    );
  }
  return (
    <div>
      <h2>Selected Items {cart.length}</h2>
      {cart.map((tShirt) => (
        <p key={tShirt._id}>
          {tShirt.name}

          <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
        </p>
      ))}
      {command}
      {cart.length !== 4 ? <p>Keep Adding</p> : <button>Remove All</button>}
      {cart.length === 3 && <p>3 items in Cart Now</p>}
      {cart.length === 0 || <p>Yayy ,, You are buying</p>}
    </div>
  );
};

export default Cart;
