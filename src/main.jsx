// import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Components
import { Home } from './pages/Home'
import { Layout } from './components/Layout'

// Contexts
import { AccountsContextProvider } from './contexts'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Layout>
    <AccountsContextProvider>
      <Home />
    </AccountsContextProvider>
  </Layout>
  // </React.StrictMode>
)
