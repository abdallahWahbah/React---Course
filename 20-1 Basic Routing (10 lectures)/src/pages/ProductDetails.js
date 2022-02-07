import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () =>
{
    const params = useParams();
    console.log(params);

    return(
        <section>
            <h1>Product Details</h1>
            <p>{params.productId}</p>
            <p>{params.anotherId}</p>
        </section>
    )
}

export default ProductDetails