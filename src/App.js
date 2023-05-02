import './App.css';
import React from 'react';
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Cake from './Cake';
import Chips from './Chips';
import NavBar from './NavBar';
import { BrowserRouter, Route } from "react-router-dom";



function App() {
  return (
    <div className='App'>   
      
      <BrowserRouter>
        <NavBar />
          <Route exact path="/">
            <VendingMachine />
          </Route>
          <Route exact path="/soda">
            <Soda />
          </Route>
          <Route exact path="/cake">
            <Cake />
          </Route>
          <Route exact path="/chips">
            <Chips />
          </Route>  
      </BrowserRouter>
    </div>
  );
}

export default App;

// A VendingMachine component -which shows a page with a list of snacks that you can get from the vending machine.
// At least three different snack components, each one corresponding to a vending machine snack.
// From each snack component, you should be able to go back to the main VendingMachine component.