import React from 'react';
import ReactDOM from 'react-dom/client';
import SebedimContextProvider from './context/Context';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/reset.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SebedimContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SebedimContextProvider>
  </React.StrictMode>
);
