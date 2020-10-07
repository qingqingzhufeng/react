import * as React from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/Home';

const router = [
  {
    path: '/',
    component: Home,
    name: '首页',
  },
];

export default router.map((item) => {
  return <Route key={item.path} path={item.path} component={item.component} />;
});
