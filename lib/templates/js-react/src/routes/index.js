import React from 'react';
import Home from 'pages/Home';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default Root;
