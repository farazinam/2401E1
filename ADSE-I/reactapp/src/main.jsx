import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import { BrowserRouter } from 'react-router-dom'
import UserProvider from './Context/UserProvider.jsx'

const t = createTheme({
  palette: {
    primary: {
      main: "#556677"
    }
  }
})

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <UserProvider>
    <BrowserRouter>
      <ThemeProvider theme={t}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </UserProvider>
  // </StrictMode>,
)
