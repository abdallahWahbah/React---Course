import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const CartButton = (props) => {

  const dispatch = useDispatch();
  const itemsQuantity = useSelector(value => value.cart.totalQuantity);

  const cartToggleHandler=()=>
  {
    dispatch(uiActions.toggle())
  }

  return (
    <button className={classes.button} onClick={cartToggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemsQuantity}</span>
    </button>
  );
};

export default CartButton;
