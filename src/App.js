import React from 'react';
import Players from './Players.js'
import { Route } from 'react-router-dom'
import PlayerDetails from './PlayerDetails.js'

function App() {
  return (
    <>
      <header>
        <h1>
          <a href="/">Chicago Blackhawks</a>
        </h1>
      </header>
      <main>
        <Route path ="/" exact component = {Players}/>
      <Route path ="/details/:id" component={PlayerDetails}/>
      </main>
    </>
  );
}

export default App;
