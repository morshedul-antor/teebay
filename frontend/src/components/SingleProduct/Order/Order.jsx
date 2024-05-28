import { useContext } from 'react'
import { Button } from '../../Atoms'
import { Popup } from '../../Molecules'
import { User } from '../../../contexts/context'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { mutatations, queries } from '../../../graphql'

export default function Order({ setIsOpen, data }) {
    const navigate = useNavigate()
    const { stateUser } = useContext(User)
    const user = stateUser.info

    // order create
    const [orderData] = useMutation(mutatations.orderMutations.ORDER_CREATE, {
        onCompleted: () => {
            navigate('/dashboard')
        },
        refetchQueries: [
            {
                query: queries.orderQueries.GET_ALL_ORDERS_BY_USER,
                variables: { userId: user.id, type: 'bought' },
            },
        ],
    })

    const handleOder = () => {
        if (data?.product?.user?.id === user.id) {
            alert('You can`t buy your own product!')
        } else {
            orderData({
                variables: {
                    data: {
                        orderType: 'trade',
                        totalAmount: data?.product?.price,
                        providerId: data?.product?.user?.id,
                        recipientId: user.id,
                        productId: data?.product?.id,
                    },
                },
            })
        }
    }

    return (
        <div>
            <Popup setClose={setIsOpen} text="buy">
                <Button title="No" bgColor="cancel" onClick={() => setIsOpen(false)} />
                <Button title="Yes" onClick={handleOder} />
            </Popup>
        </div>
    )
}
