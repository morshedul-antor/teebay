import { gql } from '@apollo/client'

export const GET_ALL_ORDERS_BY_USER = gql`
    query OrdersByUser($userId: Int!, $type: OrderFilterType!) {
        ordersByUser(userId: $userId, type: $type) {
            orderType
            totalAmount
            periodStart
            periodEnd
            remarks
            id
            createdAt
            product {
                title
                description
                price
                rentPrice
                rentDay
                categoryName
                id
                createdAt
            }
            providerId
            recipientId
        }
    }
`
