import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from './footer/Footer'


const jsx = [<App key='1' />, <Footer key='2' />]

ReactDOM.render(
  jsx,
  document.getElementById('root')
);


