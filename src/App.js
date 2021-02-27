import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Homepage from 'screens/Homepage';
import ShopPage from 'screens/Shop';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
