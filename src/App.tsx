import { Route, Routes } from 'react-router-dom'
import { SiteLayout } from './layouts/SiteLayout'
import { EtniasPage } from './pages/EtniasPage'
import { HomePage } from './pages/HomePage'
import { CulturalFiguresPage } from './pages/CulturalFiguresPage'
import { ArchivePage } from './pages/ArchivePage'
import { ArchiveDetailPage } from './pages/ArchiveDetailPage'
import { NotFoundPage } from './pages/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="etnias" element={<EtniasPage />} />
        <Route path="personalidades" element={<CulturalFiguresPage />} />
        
        <Route path="acervo">
          <Route index element={<ArchivePage />} />
          <Route path=":slug" element={<ArchiveDetailPage />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App
