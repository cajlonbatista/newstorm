import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Edit from '../pages/Edit/Edit';
import Main from '../pages/Main/Main';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/edit/:id" exact component={Edit} />
    </Switch>
  );
};

export default Routes;