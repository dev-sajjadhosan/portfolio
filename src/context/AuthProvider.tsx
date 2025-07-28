import {
  createContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from 'react'

type ProviderProps = {
  children: ReactNode
}

interface ContextProps {
  period: string
  setPeriod: Dispatch<SetStateAction<string>> | undefined
  filter: string
  setFilter: Dispatch<SetStateAction<string>> | undefined
}

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<ContextProps | null>(null)

const AuthProvider = ({ children }: ProviderProps) => {
  const [period, setPeriod] = useState('am')
  const [filter, setFilter] = useState('all')

  const contextValues = { period, setPeriod, filter, setFilter }

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
