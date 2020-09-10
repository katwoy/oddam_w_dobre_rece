import React from 'react';
import './scss/App.scss';
import Home from './components/Home/Home';
import Footer from './components/Footer';
import Form from './components/Form/Form';
import {
  HashRouter,
  Route,
  Switch,
  } from 'react-router-dom';

const App = () => {

  return (
    <div className="app__container">
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/oddaj-rzeczy' component={Form} />
        </Switch>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
