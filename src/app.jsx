import React from 'react';
import { HashRouter, Switch } from 'react-router-dom';
import BaseLayout from './layout/BaseLayout';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <HashRouter>
        <Switch>
          <BaseLayout />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
