import React from "react";

import QuoteList from '../components/quotes/QuoteList';

const DUMMY_DATA = 
[
    {id: "1", author: "Max", text: "Learning React is Fun!"},
    {id: "2", author: "Abdallah", text: "Hello from the other side"}
]

const AllQuotes = (props) =>
{
    return(
        <div>
            <QuoteList quotes={DUMMY_DATA}/>
        </div>
    )
};

export default AllQuotes;