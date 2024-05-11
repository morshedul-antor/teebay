import { gql } from '@apollo/client'

export const PRODUCT_CREATE = gql`
    mutation ProductCreate($data: ProductIn!) {
        productCreate(data: $data) {
            title
            description
            price
            rentPrice
            categoryName
            id
            createdAt
        }
    }
`

export const PRODUCT_DELETE = gql`
    mutation ProductDelete($productDeleteId: Int!) {
        productDelete(id: $productDeleteId)
    }
`

export const PRODUCT_UPDATE = gql`
    mutation ProductUpdate($productUpdateId: Int!, $data: ProductUpdate) {
        productUpdate(id: $productUpdateId, data: $data) {
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
