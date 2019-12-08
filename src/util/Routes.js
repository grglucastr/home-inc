import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../views/Home';
import Pay from '../views/Pay';
import Paid from '../views/Paid';
import Report from '../views/Report';
import Expense from '../views/Expense';
import NotFound from '../views/NotFound';

export default function Routes(){
  return(
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/pay" component={Pay} />
      <Route exact path="/paid" component={Paid} />
      <Route exact path="/expense" component={Expense} />
      <Route exact path="/report" component={Report} />
      <Route path="*" component={NotFound} />
    </Switch>
  )
}