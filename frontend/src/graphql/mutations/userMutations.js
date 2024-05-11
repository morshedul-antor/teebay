import { gql } from '@apollo/client'

export const USER_LOGIN = gql`
    mutation UserLogin($data: Login!) {
        userLogin(data: $data) {
            type
            token
        }
    }
`

export const USER_SIGNUP = gql`
    mutation UserCreate($data: UserIn!) {
        userCreate(data: $data) {
            firstName
            lastName
            email
            phone
            address
            id
            createdAt
        }
    }
`
