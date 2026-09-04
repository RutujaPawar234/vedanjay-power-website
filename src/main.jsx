import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Bootstrap 5 + icons (primary responsive framework)
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// Bootstrap JS (offcanvas, collapse) — bundle handles Popper internally
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Global identity + section styles
import './index.css';
import './styles/animations.css';
import './styles/home.css';
import './styles/chatbot.css';

import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
