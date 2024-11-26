<<<<<<< HEAD
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import './i18n/config';
import { AuthProvider } from './contexts/AuthContext';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
=======
# Mettre à jour main.tsx pour ajouter AuthProvider
import { AuthProvider } from './contexts/AuthContext';

// Wrapper l'App avec AuthProvider
<React.StrictMode>
  <AuthProvider>
    <App />
  </AuthProvider>
</React.StrictMode>
>>>>>>> a1dc676e227769169dc61701bae80052d62f2c0a
