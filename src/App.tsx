import { Route, Routes } from 'react-router-dom'
import { SiteLayout } from './layouts/SiteLayout'
import { EtniasPage } from './pages/EtniasPage'
import { HomePage } from './pages/HomePage'
import { CulturalFiguresPage } from './pages/CulturalFiguresPage'
import { NotFoundPage } from './pages/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="etnias" element={<EtniasPage />} />
        <Route path="personalidades" element={<CulturalFiguresPage />} />
     </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App