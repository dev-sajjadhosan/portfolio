import {
  createContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from 'react'

type isLayoutProps = 'auto' | 'row' | 'column'
type isViewProps = 1 | 2 | 'default'
type isCardProps = 'both' | 'only picture' | 'only context'

type ProviderProps = {
  children: ReactNode
}

interface ContextProps {
  period: string
  setPeriod: Dispatch<SetStateAction<string>> | undefined
  filter: string
  setFilter: Dispatch<SetStateAction<string>> | undefined
  isLayout: isLayoutProps | string
  setIsLayout: Dispatch<SetStateAction<isLayoutProps | string>> | undefined
  isView: isViewProps | string | number
  setIsView: Dispatch<SetStateAction<isViewProps | string | number>> | undefined
  isCard: isCardProps | string
  setIsCard: Dispatch<SetStateAction<isCardProps | string>> | undefined
  isToolDefault: boolean
  setIsToolsDefault: Dispatch<SetStateAction<boolean>>
}

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<ContextProps | null>(null)

const AuthProvider = ({ children }: ProviderProps) => {
  const [period, setPeriod] = useState('am')
  const [filter, setFilter] = useState('all')
  const [isLayout, setIsLayout] = useState<isLayoutProps | string>('column')
  const [isView, setIsView] = useState<isViewProps | string | number>(1)
  const [isCard, setIsCard] = useState<isCardProps | string>('both')
  const [isToolDefault, setIsToolsDefault] = useState(false)

  const contextValues = {
    period,
    setPeriod,
    filter,
    setFilter,
    isLayout,
    setIsLayout,
    isView,
    setIsView,
    isCard,
    setIsCard,
    isToolDefault,
    setIsToolsDefault,
  }

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
