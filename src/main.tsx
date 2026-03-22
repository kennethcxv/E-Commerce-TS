import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import NavBar from './components/NavBar.tsx'
import { BrowserRouter } from 'react-router-dom'
import { store } from './redux/store/store.ts'
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
        <NavBar />
        <App />
    </BrowserRouter>
    </Provider>
  </StrictMode>
)
