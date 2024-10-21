import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
    domain="dev-8gcfs41prjxyppop.us.auth0.com"
    clientId="2x4RJHyk7aFelgbcv3Q8bJE0ahJDT3bv"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>,
)
