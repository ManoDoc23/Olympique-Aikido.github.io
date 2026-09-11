import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'  // ✅ Chemin vers App/App.tsx

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)