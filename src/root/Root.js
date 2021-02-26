import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import Adopt from '../Adopt/Adopt';

function Root() {
  return (
    <div>
      <h1>Petful</h1>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/adopt' component={Adopt} />
      </Switch>
    </div>
  );
}

export default Root;
