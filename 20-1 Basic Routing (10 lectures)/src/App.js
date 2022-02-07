import React from "react";

import { Redirect, Route, Switch } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Products from './pages/Products';
import MainHeader from './components/MainHeader';
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
      <React.Fragment>
          <MainHeader/>
          <main>
            <Switch>
              {/* if you visited "/", change the url (redirect) to "/welcome" */}
              <Route exact path="/">
                <Redirect to="welcome"/>
              </Route>
              <Route exact path="/welcome">
                <Welcome/>
              </Route>

              <Route exact path="/products">
                <Products/>
              </Route>

              <Route exact path="/products/:productId/:anotherId">
                <ProductDetails/>
              </Route>
            </Switch>
          </main>
      </React.Fragment>
  );
}

export default App;
