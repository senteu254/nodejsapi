import React, { Component }from 'react';
import Narvbar from './Component/Layout/Narvbar';
import './App.css';
import Users from './Component/Users/Users';


class App extends Component{
  
  render() {
    
  return (
    <div className='App'>
   <Narvbar/>
   <div class="container"> 
   <Users/>
   </div>
    </div>
  );
}
}

export default App;
