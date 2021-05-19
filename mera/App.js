import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Home from './home';
import Navbar from './navbar';
import Profile from './profile';
import Course from './course';
import Error from './Error';
import Footer from './footer';
import Videop from './video';



class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <Navbar/>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/profile" component={Profile} />
          <Route path="/course" component={Course} />
          <Route path="/videop" component={Videop} />
          <Route component={Error} />
        </Switch>
        <Footer/>
      </div>
     );
  }
}
 
export default App;