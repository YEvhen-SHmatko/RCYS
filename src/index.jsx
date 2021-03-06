import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './styles/normalize.css';
import './fonts/Roboto/Roboto.css';
import './styles/MyNormalize.css';
// import './styles/scroll.css';

render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
