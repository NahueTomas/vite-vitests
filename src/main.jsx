import ReactDOM from 'react-dom/client'
import './index.css'

// Components
import { Home } from './pages/Home'
import { Layout } from './components/Layout'

// Contexts
import { AccountsContextProvider, SelectedContextProvider } from './contexts'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SelectedContextProvider>
    <Layout>
      <AccountsContextProvider>
        <Home />
      </AccountsContextProvider>
    </Layout>
  </SelectedContextProvider>
)
