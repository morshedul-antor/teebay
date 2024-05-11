import { useContext } from 'react'
import { useQuery } from '@apollo/client'
import { queries } from '../../../graphql'
import { Product } from '../../Molecules'
import { User } from '../../../contexts/context'

export default function Tab({ type }) {
    const { stateUser } = useContext(User)
    const user = stateUser.info

    const { loading, data } = useQuery(queries.orderQueries.GET_ALL_ORDERS_BY_USER, {
        variables: {
            userId: user.id,
            type: type,
        },
    })

    return (
        <div>
            {loading ? (
                <div>Loading</div>
            ) : (
                <div>
                    {data?.ordersByUser &&
                        data?.ordersByUser?.map((item, i) => (
                            <div key={i}>
                                <Product product={item?.product} />
                            </div>
                        ))}
                </div>
            )}
        </div>
    )
}
