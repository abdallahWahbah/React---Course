import React from "react";
import { NavLink } from "react-router-dom"; // NavLink instead of Link, to make it easy to customize the css (when clicking to highlight it)

import classes from './MainHeader.module.css'

const MainHeader = () =>
{
    return(
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName={classes.active} to="/welcome">Welcome</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to="/products">Products</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader