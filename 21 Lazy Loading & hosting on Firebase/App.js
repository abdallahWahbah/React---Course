import React, {Suspense} from "react";
import { Route, Switch, Redirect } from 'react-router-dom';

// import NewQuote from "./pages/NewQuote";
import Comments from "./components/comments/Comments";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

// now the (NewQuote) components will be downloaded (executed) onlt when needed 
const NewQuote = React.lazy(()=>import('./pages/NewQuote'));
const QuoteDetails = React.lazy(()=>import('./pages/QuoteDetails'));
const NotFound = React.lazy(()=>import('./pages/NotFound'));
const AllQuotes = React.lazy(()=>import('./pages/AllQuotes'));

function App() {
  return (
     <Layout>
       {/* <Suspense fallback={<p>Loading...</p>}> */}
       <Suspense fallback={<div className="centered"><LoadingSpinner/></div>}>
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

       </Suspense>
     </Layout>
  );
}

export default App;
