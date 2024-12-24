import { createContext, useContext } from 'react'

const AuthContext = createContext(null)
AuthContext.displayName = 'AuthContext'

export { AuthContext }
