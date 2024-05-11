import { gql } from '@apollo/client'

export const ORDER_CREATE = gql`
    mutation OrderCreate($data: OrderIn) {
        orderCreate(data: $data) {
            orderType
            totalAmount
            periodStart
            periodEnd
            id
            createdAt
            providerId
            recipientId
        }
    }
`
