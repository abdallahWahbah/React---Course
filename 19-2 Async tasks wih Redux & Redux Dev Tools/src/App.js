import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import {sendCartData, fetchCartData} from './store/cart-actions';

let isInitial = true; // initialized it outside the component to make sure that it doesn't get updated with rendering 
// this variable is created to avoid dispatching the notification in the first render

function App() {

  const showCart = useSelector(value => value.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);
  const dispatch = useDispatch();

  useEffect(()=>
  {
    dispatch(fetchCartData());
  }, [dispatch])

  // PUT overrdide the existing data with the incoming data, POST add the incoming data to the existing data
  useEffect(()=>
  {
      if(isInitial)
      {
        isInitial = false;
        return;
      }
      if(cart.changed) dispatch(sendCartData(cart))
  }, [cart, dispatch])

  return (
    <React.Fragment>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;
