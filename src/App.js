import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Header from 'components/Header';
import Homepage from 'screens/Homepage';
import ShopPage from 'screens/Shop';
import SignInAndSignUpPage from 'screens/SignInAndSignUp';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
