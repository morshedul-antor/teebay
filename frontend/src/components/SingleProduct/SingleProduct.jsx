import { useParams } from 'react-router-dom'
import classes from './SingleProduct.module.css'
import Image from '../../assets/img/product/product.jpg'
import { useContext, useState } from 'react'
import { useQuery } from '@apollo/client'
import { queries } from '../../graphql'
import { Button } from '../Atoms'
import Edit from './Edit/Edit'
import Order from './Order/Order'
import Rent from './Rent/Rent'
import { Auth } from '../../contexts/context'
import { formatDate } from '../../utils/date'

export default function SingleProduct() {
    const [isRent, setIsRent] = useState(false)
    const [isBuy, setIsBuy] = useState(false)

    const { stateAuth } = useContext(Auth)

    const { name, id } = useParams()
    const productId = parseInt(id)

    // single product get
    const { data } = useQuery(queries.productQueries.GET_SINGLE_PRODUCT, {
        variables: {
            productId: productId,
        },
    })

    return (
        <div className={classes.singleProduct}>
            {name === 'edit' ? (
                <Edit classes={classes} data={data} productId={productId} />
            ) : (
                <div className={classes.left}>
                    <h2>{data?.product?.title}</h2>
                    <p>Categories: {data?.product?.categoryName}</p>
                    <p>Price: ${data?.product?.price}</p>
                    <p>Rent: {data?.product?.rentPrice && `$${data?.product?.rentPrice} per day`} </p>

                    <p>{data?.product?.description}</p>

                    <div className={classes.btn}>
                        <Button
                            title="Rent"
                            onClick={() => {
                                stateAuth.auth ? setIsRent(true) : alert('Please sign in!')
                            }}
                        />
                        <Button
                            title="Buy"
                            onClick={() => {
                                stateAuth.auth ? setIsBuy(true) : alert('Please sign in!')
                            }}
                        />
                    </div>

                    {isRent && <Rent data={data} setIsOpen={setIsRent} />}
                    {isBuy && <Order data={data} setIsOpen={setIsBuy} />}
                </div>
            )}

            <div>
                <img src={Image} alt="" />
                <p>Date posted: {formatDate(data?.product?.createdAt)}</p>
                <p>By: {data?.product?.user?.firstName}</p>
            </div>
        </div>
    )
}
