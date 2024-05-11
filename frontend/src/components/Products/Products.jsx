import { Product } from '../Molecules'
import classes from './Products.module.css'
import { useQuery } from '@apollo/client'
import { queries } from '../../graphql'

export default function Products() {
    const { loading, data } = useQuery(queries.productQueries.GET_ALL_PRODUCTS)

    return (
        <div className={classes.product} id="products">
            <p>PRODUCTS</p>

            {loading ? (
                <div>Loading</div>
            ) : (
                <div>
                    {data.products &&
                        data.products?.map((product, i) => (
                            <div key={i}>
                                <Product product={product} />
                            </div>
                        ))}
                </div>
            )}
        </div>
    )
}
