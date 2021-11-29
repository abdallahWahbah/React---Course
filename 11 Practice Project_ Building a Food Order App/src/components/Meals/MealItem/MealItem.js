import {useContext} from 'react';
import CartContext from '../../../store/cart-context';

import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

const MealItem =(props) =>
{
    const ctx = useContext(CartContext);

    const addToCartHandler =(amount)=>
    {
        ctx.addItem(
        {
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }

    return(
        <li className={classes.meal} >
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{props.price}</div>
            </div>
            <div>
                <MealItemForm onAddAmount={addToCartHandler}></MealItemForm>
            </div>
        </li>
    )
}
export default MealItem;

// spread the whole properties in the props to the input .. this equals to type={props.type} id={props.id} min={props.min} ..... and the rest of the props
