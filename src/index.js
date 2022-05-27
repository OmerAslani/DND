import React from 'react';
import ReactDOM from 'react-dom/client';
import './styleCSS/index.css';
import DND from './DND'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DND />
  </React.StrictMode>
);