import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { getData } from "./constants/db";
import Home from "./components/Home/Home";
import CartPage from "./components/cart/CartPage";
import { useCallback } from "react";

const courses = getData();

const telegram = window.Telegram.WebApp

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    telegram.ready()
  })

  // ADD ITEM
  const onAddItem = (item) => {
    const exisItem = cartItems.find((c) => c.id === item.id);

    if (exisItem) {
      setCartItems(
        cartItems.map((c) =>
          c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  // REMOVE ITEM
  const onRemoveItem = (item) => {
    const exisItem = cartItems.find((c) => c.id === item.id);

    if (!exisItem) return;

    if (exisItem.quantity === 1) {
      setCartItems(cartItems.filter((c) => c.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((c) =>
          c.id === item.id ? { ...c, quantity: c.quantity - 1 } : c
        )
      );
    }
  };

  const onCheskout = () => {
    telegram.MainButton.text = "Sotib olish :)";
    telegram.MainButton.show();
  }

const onSenddata = useCallback(() => {
  telegram.sendData(JSON.stringify(cartItems));
}, [cartItems]);


  useEffect(() => {
    telegram.onEvent("mainButtonClicked", onSenddata)

    return () => telegram.offEvent("mainButtonClicked", onSenddata)
  }, [onSenddata])

  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav className="nav">
        <Link to="/">Kurslar</Link>
        <Link to="/cart">Savatcha ({cartItems.length})</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <Home
              courses={courses}
              onAddItem={onAddItem}
              onRemoveItem={onRemoveItem}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <CartPage
              cartItems={cartItems}
              onAddItem={onAddItem}
              onRemoveItem={onRemoveItem}
              onCheskout={onCheskout}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
