import React from 'react';
import ReactDOM from 'react-dom/client';
import { BaseApp } from './BaseApp';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BaseApp />
  </React.StrictMode>
);
