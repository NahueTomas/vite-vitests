import ReactDOM from 'react-dom/client'
import './index.css'

// Components
import { Layout } from './components/Layout'

// Contexts
import { AccountsContextProvider, SelectedContextProvider } from './contexts'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SelectedContextProvider>
    <AccountsContextProvider>
      <Layout />
    </AccountsContextProvider>
  </SelectedContextProvider>
)
