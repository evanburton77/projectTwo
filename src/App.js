import React from 'react';
import Drinks from './Drinks.js'
import { Route } from 'react-router-dom'
import DrinkDetails from './DrinkDetails.js'

function App() {
  return (
    <>
      <header>
        <h1>
          <a href="/">Energy Drinks</a>
        </h1>
      </header>
      <main>
        <Route path ="/" exact component = {Drinks}/>
      <Route path ="/details/:id" component={DrinkDetails}/>
      </main>
    </>
  );
}

export default App;
