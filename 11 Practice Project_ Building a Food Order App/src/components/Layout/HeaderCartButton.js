import React, {useContext, useState, useEffect} from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton =(props)=>
{
    const ctx = useContext(CartContext);
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    const numOfCartItems = ctx.items.reduce((acc, item)=>
    {
        return acc + item.amount;
    }, 0)
    
    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump:""}`;

    useEffect(()=>
    {
        if(ctx.items.length === 0){return}
        setBtnIsHighlighted(true);

        const timer = setTimeout(()=>
        {
            setBtnIsHighlighted(false)
        }, 300)

        return ()=>
        {
            clearTimeout(timer);
        }
    }, [ctx.items])

    return(
        // will be redevaluated whenever the context changes (when we update it in the provider component)
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}><CartIcon></CartIcon></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numOfCartItems}</span>
        </button>
    )
}
export default HeaderCartButton;