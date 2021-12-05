import {useRef, useState} from 'react';
import classes from './Checkout.module.css';

const Checkout = (props)=>
{
    const nameRef = useRef();
    const streetRef = useRef();
    const postalRef = useRef();
    const cityRef = useRef();
    const [formInputsValidity, setFormInputsValidity] = useState(
    {
        name: true,
        street: true,
        postal: true,
        city: true
    })

    const isEmpty =value => value.trim() === ""
    const isFiveDigits = value => value.trim().length >= 5;

    const submitHandler=(event)=>
    {
        event.preventDefault();
        const enteredName = nameRef.current.value;
        const enteredStreet = streetRef.current.value;
        const enteredPostal = postalRef.current.value;
        const enteredCity = cityRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredPostalIsValid = isFiveDigits(enteredPostal);
        const enteredCityIsValid = !isEmpty(enteredCity);

        setFormInputsValidity(
        {
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            postal: enteredPostalIsValid,
            city: enteredCityIsValid
        });

        const formIsValid =enteredNameIsValid && enteredStreetIsValid && enteredPostalIsValid && enteredCityIsValid;

        if(!formIsValid)
        {
            return;
        }
        // send data to the server
        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            postal: enteredPostal,
            city:enteredCity
        })
    }

    const nameClasses = `${classes.control} ${formInputsValidity.name? "" : classes.invalid}`;
    const streetClasses = `${classes.control} ${formInputsValidity.street? "" : classes.invalid}`;
    const postalClasses = `${classes.control} ${formInputsValidity.postal? "" : classes.invalid}`;
    const cityClasses = `${classes.control} ${formInputsValidity.city? "" : classes.invalid}`;

    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={nameClasses}>
                <label htmlFor="name">Your Name </label>
                <input type="text" id="name" ref={nameRef}></input>
                {!formInputsValidity.name && <p>Please, enter a valid name</p>}
            </div>
            <div className={streetClasses}>
                <label htmlFor="street">Street </label>
                <input type="text" id="street" ref={streetRef}></input>
                {!formInputsValidity.street && <p>Please, enter a valid street</p>}
            </div>
            <div className={postalClasses}>
                <label htmlFor="postal">Postal code </label>
                <input type="text" id="postal" ref={postalRef}></input>
                {!formInputsValidity.postal && <p>Please, enter a valid postal</p>}
            </div>
            <div className={cityClasses}>
                <label htmlFor="city">City </label>
                <input type="text" id="city" ref={cityRef}></input>
                {!formInputsValidity.city && <p>Please, enter a valid city</p>}
            </div>
            <div className={classes.actions}>
                <button type="button" onClick={props.onClose}>Cancel</button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    )
}
export default Checkout;