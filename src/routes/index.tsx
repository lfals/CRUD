/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/extensions */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Update from '../pages/Update';
import Dashboard from '../pages/Dashboard';
import Contact from '../pages/Contact';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/update/:id"  component={Update} />
    <Route path="/contact/:id"  component={Contact} />
  </Switch>
);

export default Routes;
