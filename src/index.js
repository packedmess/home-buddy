import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainPage } from './pages/Main';
import './styles/base.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>
);
