import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Newsfeed from './pages/Newsfeed';
import Events from './pages/Events';
import Health from './pages/Health';
import Login from './pages/Login';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends Component {


  render(){
  return (

       <Router>
       <nav>
             <div >


       <div className="sidenav">
             <dt>
       <dd className="menu-txt">
       <Link to={"/Newsfeed"}>
       <img className="menu-icons" src="https://image.flaticon.com/icons/svg/25/25694.svg" />Newsfeed
       </Link>

       </dd>


       <dd className="menu-txt">
          <Link to={"/Events"}>


        <img className="menu-icons" src="http://chittagongit.com/download/217542" />
        events

     </Link>
       </dd>

       <dd className="menu-txt">
          <Link to={"/Health"}>
       <img className="menu-icons" src="https://cdn3.iconfinder.com/data/icons/medical-conditions/256/Medical_Conditions_and_Diseases-14-512.png" /> Helse
       </Link>
       </dd>

        </dt>

      
       </div>

             </div>


</nav>


<Switch>
  <Route exact path='/' component={Newsfeed} />
  <Route exact path='/Newsfeed' component={Newsfeed} />
  <Route exact path='/Events' component={Events} />
  <Route exact path='/Health' component={Health} />
  <Route exact path='/Login' component={Login} />

</Switch>

</Router>


  );
}}

export default App;
