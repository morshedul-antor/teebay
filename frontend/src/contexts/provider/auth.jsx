import { authState, authReducer } from '../reducer/auth'
import { useReducer } from 'react'
import { Auth } from '../context'

export const AuthProvider = ({ children }) => {
    const [stateAuth, dispatchAuth] = useReducer(authReducer, authState)

    return <Auth.Provider value={{ stateAuth, dispatchAuth }}>{children}</Auth.Provider>
}
