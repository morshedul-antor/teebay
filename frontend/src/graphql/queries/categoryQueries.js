import { gql } from '@apollo/client'

export const GET_ALL_CATEGORIES = gql`
    query Categories {
        categories {
            name
            id
            createdAt
        }
    }
`
