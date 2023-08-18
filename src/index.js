import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from 'axios';
axios.defaults.withCredentials = true;
axios.defaults.headers.common['Authorization'] = 'test';
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Authorization';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);