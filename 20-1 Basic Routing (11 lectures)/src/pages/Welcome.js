import React from "react";
import { Route } from "react-router-dom";

const Welcome = () =>
{
    return(
        // if the Welcome page is active, the route will be evaluated (not working) (lecture 10)
        // if the Welcome page is not active, the route will not be evaluated
        <section>
            <h1>Welcome</h1>
            <Route path="/welcome/new-user">
                <p>Welcome, new user</p>
            </Route>
        </section>
    )
}

export default Welcome