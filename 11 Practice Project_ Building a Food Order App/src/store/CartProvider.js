import React, {useReducer} from "react";
import CartContext from "./cart-context";

const defaultCartState =
{
    items: [],
    totalAmount: 0
}
const cartReducer=(lastState, action)=>
{
    if(action.type === "ADD")
    {
        const updatedTotalAmount = lastState.totalAmount + action.item.price * action.item.amount;

        const existingItemIndex = lastState.items.findIndex(item => item.id === action.item.id);
        const existingItem = lastState.items[existingItemIndex];
        let updatedItems;

        if(existingItem)
        {
            const updatedItem =
            {
                ...existingItem,
                amount: existingItem.amount + action.item.amount
            }
            updatedItems = [...lastState.items];
            updatedItems[existingItemIndex] = updatedItem;
        }
        else
        {
            updatedItems = lastState.items.concat(action.item); // concat doesn't change the original array
        }

        return{
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    if(action.type === "REMOVE")
    {
        const existingItemIndex = lastState.items.findIndex(item => item.id === action.id);
        const existingItem = lastState.items[existingItemIndex];
        const updatedTotalAmount = lastState.totalAmount + existingItem.price;
        let updatedItems;

        if(existingItem.amount === 1)
        {
            updatedItems = lastState.items.filter(item => item.id !== action.id);
        }
        else
        {
            const updatedItem = 
            {
                ...existingItem,
                amount: existingItem.amount -1
            }
            updatedItems = [...lastState.items];
            updatedItems[existingItemIndex] = updatedItem;
        }
        return{
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    return defaultCartState;
}


const CartProvider = (props) => // this provider is used in the App component
{

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item)=>
    {
        dispatchCartAction({type: "ADD", item: item})
    }
    const removeItemToCartHandler =(id)=>
    {
        dispatchCartAction({type:"REMOVE", id: id})
    }
    const cartContext = 
    {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler
    }


    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider;