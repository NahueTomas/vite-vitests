import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Components
import { Home } from './components/Home'
import { Layout } from './components/Layout'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Layout>
      <Home />
    </Layout>
  </React.StrictMode>
)
