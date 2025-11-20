import React from "react";
import Button from "../button/button";
import "./cart.css";

const Cart = ({ cartItems, onAddItem, onRemoveItem, onCheskout }) => {
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="carts_cont">
      <div className="cart__container">
        
        {/* PRODUCT LIST */}
        <div className="cart_items_list">
          {cartItems.length === 0 ? (
            <p className="empty_text">Savatcha bo'sh</p>
          ) : (
            cartItems.map((item) => (
              <div className="cart_item" key={item.id}>
                <img src={item.image} alt={item.title} />

                <div className="item_info">
                  <h3>{item.title}</h3>

                  <div className="quantity_box">

                    {/* REMOVE BUTTON */}
                    <Button
                      title={"-"}
                      type={"remove"}
                      onClick={() => onRemoveItem(item)}
                    />

                    <span>{item.quantity}</span>

                    {/* ADD BUTTON */}
                    <Button
                      title={"+"}
                      type={"add"}
                      onClick={() => onAddItem(item)}
                    />

                  </div>
                </div>

                <div className="item_price">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))
          )}
        </div>

        {/* TOTAL PRICE */}
        <p className="total_price">Umumiy narx: ${totalPrice.toFixed(2)}</p>

        <Button title={"Buyurtma"} type={"checkout"} onClick={onCheskout}/>
      </div>
    </div>
  );
};

export default Cart;
