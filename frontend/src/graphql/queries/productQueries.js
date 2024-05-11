import { gql } from '@apollo/client'

export const GET_ALL_PRODUCTS = gql`
    query Products {
        products {
            title
            description
            price
            rentPrice
            rentDay
            categoryName
            id
            createdAt
            user {
                firstName
                lastName
                id
            }
            categories {
                name
                id
            }
        }
    }
`

export const GET_SINGLE_PRODUCT = gql`
    query Product($productId: Int!) {
        product(id: $productId) {
            title
            description
            price
            rentPrice
            rentDay
            categoryName
            id
            createdAt
            user {
                firstName
                lastName
                id
            }
        }
    }
`

export const GET_ALL_PRODUCTS_BY_USER = gql`
    query ProductsByUser($userId: Int!) {
        productsByUser(userId: $userId) {
            title
            description
            price
            rentPrice
            rentDay
            categoryName
            id
            createdAt
        }
    }
`
