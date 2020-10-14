import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import Subscribe from '../pages/Subscribe';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/Inscreva-se" exact component={Subscribe} />
    <Route path="/Dashboard" exact component={Dashboard} />
  </Switch>
);

export default Routes;
