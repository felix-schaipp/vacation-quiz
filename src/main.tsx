import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Welcome, Reisefinder, Ergebnis } from '@/pages'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div>Lade...</div>}>
        <Routes>
          <Route path={'/'} element={<Welcome />} />
          <Route path={'/reisefinder'} element={<Reisefinder />} />
          <Route path={'/ergbnis'} element={<Ergebnis />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
)
