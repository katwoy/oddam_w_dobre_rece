import React from 'react';
import './scss/App.scss';
import Header from './components/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import {
  HashRouter,
  Route,
  Switch,
  } from 'react-router-dom';

const App = () => {
  return (
    <div className="app__container">
      <HashRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/logowanie' component={Login} />
          <Route path='/rejestracja' component={Register} />
          <Route path='/wylogowano' component={Logout} />
        </Switch>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
