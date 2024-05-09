import { useContext, useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { Auth, User } from '../contexts/context'
import { queries } from '../graphql/'
import { useQuery } from '@apollo/client'

export default function ProtectedRoute() {
    const { stateAuth } = useContext(Auth)
    const { dispatchUser } = useContext(User)

    const { data } = useQuery(queries.userQueries.USER_AUTH, {
        variables: {
            token: stateAuth.token,
        },
    })

    useEffect(() => {
        if (data) {
            dispatchUser({ type: 'set', payload: data.userAuth })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    return stateAuth.auth === true ? <Outlet /> : <Navigate to="/login" />
}
