import React, { Component } from 'react';
import Heading from './heading';
import Navbar from './navbar'


class App extends Component{

    render(){
        return(<div>
          <Navbar/>
          <Heading/>
        </div>
            
        );
    }
}

export default App