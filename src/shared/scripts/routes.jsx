import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../screens/Home';
import Work from '../../screens/Work';
import Blog from '../../screens/Blog';
import NotFound from '../../screens/404';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/work' component={Work} />
    <Route path='/blog' component={Blog} />
    <Route path='*' component={NotFound} />
  </Switch>
);

export default Routes;
