import React from 'react';
import ReactDOM from 'react-dom';
import AppRidux from './containers/AppRidux';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './style/style.css'

ReactDOM.render(
  <React.StrictMode>
   <AppRidux />
  </React.StrictMode>,
  document.getElementById('root')
);

