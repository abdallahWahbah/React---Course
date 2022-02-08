import React from "react";
import { useParams } from "react-router-dom";

import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_DATA = 
[
    {id: "1", author: "Max", text: "Learning React is Fun!"},
    {id: "2", author: "Abdallah", text: "Hello from the other side"}
]

const QuoteDetails = (props) =>
{
    const params = useParams();

    const quote = DUMMY_DATA.find(item => item.id === params.quoteId);
    if(!quote) return <p>No Quote found!</p>

    return(
        <React.Fragment>
            <HighlightedQuote text={quote.text} author={quote.author}/>
            {/* <h1>QuoteDetails</h1>
            <p>{params.quoteId}</p> */}
        </React.Fragment>
    )
};

export default QuoteDetails;