import { userState, userReducer } from '../reducer/user'
import { useReducer } from 'react'
import { User } from '../context'

export const UserProvider = ({ children }) => {
    const [stateUser, dispatchUser] = useReducer(userReducer, userState)

    return <User.Provider value={{ stateUser, dispatchUser }}>{children}</User.Provider>
}
