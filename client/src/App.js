import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Events from './components/Events';
import 'materialize-css/dist/css/materialize.min.css';
import AboutUs from './components/AboutUs';
import Wishlist from './components/Wishlist';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="">
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/events" component={Events}/>
      <Route path="/wishlist" component={Wishlist}/>
      </div>
      <AboutUs />
    </Router>
  );
}

export default App;
