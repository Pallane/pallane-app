# Mettre à jour main.tsx pour ajouter AuthProvider
import { AuthProvider } from './contexts/AuthContext';

// Wrapper l'App avec AuthProvider
<React.StrictMode>
  <AuthProvider>
    <App />
  </AuthProvider>
</React.StrictMode>
