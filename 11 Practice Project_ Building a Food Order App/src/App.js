import React, {useState} from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler=()=>
  {
    setCartIsShown(true);
  }
  const hideCartHandler=()=>
  {
    setCartIsShown(false)
  }

  return (
    <CartProvider> 
      {/* now, every child inside this provider has access to the provider file properties (items, amount, addItem, removeItem) */}
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
