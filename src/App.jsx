import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './components';

const App = () => (
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);

export default hot(module)(App);
