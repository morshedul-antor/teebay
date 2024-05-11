import { Product } from '../Molecules'
import classes from './MyProducts.module.css'
import { useQuery } from '@apollo/client'
import { queries } from '../../graphql'
import { useContext } from 'react'
import { User } from '../../contexts/context'
import { Button } from '../Atoms'
import { useNavigate } from 'react-router-dom'

export default function MyProducts() {
    const { stateUser } = useContext(User)
    const user = stateUser.info

    const { loading, data } = useQuery(queries.productQueries.GET_ALL_PRODUCTS_BY_USER, {
        variables: {
            userId: user.id,
        },
    })

    const navigate = useNavigate()

    return (
        <div className={classes.myprod}>
            <p>My Products</p>

            {loading ? (
                <div>Loading</div>
            ) : (
                <div>
                    {data.productsByUser &&
                        data.productsByUser?.map((product, i) => (
                            <div key={i}>
                                <Product product={product} icon={true} />
                            </div>
                        ))}
                </div>
            )}
            <div className={classes.btn}>
                <Button title="Add Products" onClick={() => navigate('/create-product')} />
            </div>
        </div>
    )
}
