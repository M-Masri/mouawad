import { createContext, useContext, useState, type ReactNode } from 'react'

type UiStore = {
  isMenuOpen: boolean
  setMenuOpen: (open: boolean) => void
  toggleMenu: () => void
}

const UiStoreContext = createContext<UiStore | null>(null)

export function UiStoreProvider({ children }: { children: ReactNode }) {
  const [isMenuOpen, setMenuOpen] = useState(false)

  return (
    <UiStoreContext.Provider
      value={{
        isMenuOpen,
        setMenuOpen,
        toggleMenu: () => setMenuOpen((prev) => !prev),
      }}
    >
      {children}
    </UiStoreContext.Provider>
  )
}

export function useUiStore() {
  const ctx = useContext(UiStoreContext)
  if (!ctx) {
    throw new Error('useUiStore must be used within UiStoreProvider')
  }
  return ctx
}
