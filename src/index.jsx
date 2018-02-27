import React from 'react';
import { render } from 'react-dom';
import '@babel/polyfill';
import App from './App';
import './shared/styles/index.scss';

render(<App />, document.getElementById('root'));

window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('loader');
    loader.classList.add('fade');
  }, 200);
});
