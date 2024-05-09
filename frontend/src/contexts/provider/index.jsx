import { AuthProvider } from './auth'
import { UserProvider } from './user'

export const ContextProvider = ({ children }) => {
    return (
        <AuthProvider>
            <UserProvider>{children}</UserProvider>
        </AuthProvider>
    )
}
