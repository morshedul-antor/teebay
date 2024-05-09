import { gql } from '@apollo/client'

export const GET_ALL_USERS = gql`
    query Users {
        users {
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
