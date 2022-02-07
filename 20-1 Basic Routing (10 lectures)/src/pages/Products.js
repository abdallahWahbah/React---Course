import React from "react";
import { Link } from "react-router-dom";

const Products = () =>
{
    return(
        <section>
            <h1>Products</h1>
            <ul>
                <li><Link to="products/p/1">Product 1</Link></li>
                <li><Link to="products/p/2">Product 2</Link></li>
                <li><Link to="products/p/3">Product 3</Link></li>
            </ul>
        </section>
    )
}

export default Products