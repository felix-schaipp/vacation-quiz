import { Routes, Route } from 'react-router-dom'
import { Welcome, Reisefinder, Ergebnis } from '@/pages'

export const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Welcome />} />
      <Route path={'/reisefinder'} element={<Reisefinder />} />
      <Route path={'/ergbnis'} element={<Ergebnis />} />
    </Routes>
  )
}
