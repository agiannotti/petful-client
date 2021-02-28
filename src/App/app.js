import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Adopt from '../Adopt/Adopt';

function App() {
  return (
    <div>
      <h1>Petful</h1>
      <>
        <BrowserRouter>
          <Route exact path='/' component={Main} />
          <Route exact path='/adopt' component={Adopt} />
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
