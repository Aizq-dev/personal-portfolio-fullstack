import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { AppDataProvider } from './context/AppDataProvider.tsx'
import { I18nProvider } from './context/i18nProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nProvider>
    <AppDataProvider>
      <App />
    </AppDataProvider>
    </I18nProvider>
  </StrictMode>,
)
