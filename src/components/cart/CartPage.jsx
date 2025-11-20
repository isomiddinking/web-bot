import React from 'react';
import Cart from './cart';

const CartPage = ({ cartItems, onAddItem, onRemoveItem,onCheskout }) => {
  return (
    <div>
      <h1 className="kurslar">Savatcha</h1>

      <Cart 
        cartItems={cartItems}
        onAddItem={onAddItem}
        onRemoveItem={onRemoveItem}
        onCheskout={onCheskout}
      />
    </div>
  );
};

export default CartPage;
