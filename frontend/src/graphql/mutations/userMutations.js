import { gql } from '@apollo/client'

export const USER_LOGIN = gql`
    mutation UserLogin($data: Login!) {
        userLogin(data: $data) {
            type
            token
        }
    }
`
