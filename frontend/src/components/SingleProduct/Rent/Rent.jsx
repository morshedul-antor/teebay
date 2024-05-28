import { useContext } from 'react'
import { Button, InputField, ErrorMessage } from '../../Atoms'
import { Popup } from '../../Molecules'
import { User } from '../../../contexts/context'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { mutatations, queries } from '../../../graphql'
import { useForm } from 'react-hook-form'
import { calculateDays } from '../../../utils/date'

export default function Rent({ setIsOpen, data }) {
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
                variables: { userId: user.id, type: 'borrowed' },
            },
        ],
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const handleRent = (formData) => {
        if (data?.product?.user?.id === user.id) {
            alert('You can`t rent your own product!')
        } else {
            const { periodStart, periodEnd } = formData
            const days = calculateDays(periodStart, periodEnd)

            orderData({
                variables: {
                    data: {
                        orderType: 'rent',
                        totalAmount: parseFloat(data?.product?.rentPrice * days),
                        providerId: data?.product?.user?.id,
                        recipientId: user.id,
                        productId: data?.product?.id,
                        periodStart: periodStart + 'T00:00:01Z',
                        periodEnd: periodEnd + 'T23:59:59Z',
                    },
                },
            })
        }
    }

    return (
        <div>
            <Popup setClose={setIsOpen} text="rent" width="30em">
                <form onSubmit={handleSubmit(handleRent)}>
                    <InputField label="Period Start">
                        <input type="date" {...register('periodStart', { required: true })} />
                        {errors.periodStart && <ErrorMessage marginTop={'-16px'} />}
                    </InputField>
                    <InputField label="Period End">
                        <input type="date" {...register('periodEnd', { required: true })} />
                        {errors.periodEnd && <ErrorMessage marginTop={'-16px'} />}
                    </InputField>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                        <Button title="No" bgColor="cancel" onClick={() => setIsOpen(false)} />
                        <Button title="Yes" />
                    </div>
                </form>
            </Popup>
        </div>
    )
}
