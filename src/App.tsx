import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout } from '@/components/layout/MainLayout'
import { HomePage } from '@/pages/HomePage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { UiStoreProvider } from '@/store/ui-store'
import { LocaleProvider } from '@/i18n/LocaleProvider'

export default function App() {
  return (
    <LocaleProvider>
      <UiStoreProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UiStoreProvider>
    </LocaleProvider>
  )
}
