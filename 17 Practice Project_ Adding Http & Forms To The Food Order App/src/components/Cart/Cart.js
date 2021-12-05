import React, { useContext, useState } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import Checkout from './Checkout';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [showCheckout, setShowCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const showCheckoutHandler = () =>
  {
    setShowCheckout(true);
  }

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  
  const ModalActions=
    (<div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>
        Close
      </button>
      {hasItems && <button className={classes.button} onClick={showCheckoutHandler}>Order</button>}
    </div>)

  const submitOrderHandler=(userDate) =>
  {
    setIsSubmitting(true);

    fetch("https://react-section-14-e9dc8-default-rtdb.firebaseio.com//orders.json",{
      method: "POST",
      body: JSON.stringify(
        {user: userDate,
        orderedItems: cartCtx.items}
      )
    });

    // we are supposing that the post request always doesn't fail
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  }

  const cartModalContent = 
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {showCheckout && <Checkout onConfirm={submitOrderHandler} onClose={props.onClose}/>}
      {!showCheckout && ModalActions}
    </React.Fragment>

  const isSubmittingModalText = <p>Sending order data....</p>;
  const didSubmitModalText =
  <React.Fragment>
    <p>Successfully sent the order...</p>
    <div className={classes.actions}>
      <button className={classes.actions} onClick={props.onClose}>
        Close
      </button>
    </div>
  </React.Fragment> 

  return (
    <Modal onClose={props.onClose}>
        {!isSubmitting && !didSubmit && cartModalContent}
        {isSubmitting && isSubmittingModalText}
        {!isSubmitting && didSubmit && didSubmitModalText}
    </Modal>
  );
};

export default Cart;
