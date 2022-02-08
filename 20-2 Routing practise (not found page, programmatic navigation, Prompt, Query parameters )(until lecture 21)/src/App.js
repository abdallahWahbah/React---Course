import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';

import AllQuotes from "./pages/AllQuotes";
import QuoteDetails from "./pages/QuoteDetails";
import NewQuote from "./pages/NewQuote";
import Comments from "./components/comments/Comments";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
     <Layout>
        <Switch>

          <Route exact path="/">
            <Redirect to="/quotes" />
          </Route>
          <Route exact path="/quotes">
            <AllQuotes/>
          </Route>
          <Route exact path="/quotes/:quoteId">
            <QuoteDetails/>
          </Route>
          <Route exact path="/new-quote">
            <NewQuote />
          </Route>
          <Route path={`/quotes/:quoteId/comments`}>
            <Comments />
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>

        </Switch>
     </Layout>
  );
}

export default App;
