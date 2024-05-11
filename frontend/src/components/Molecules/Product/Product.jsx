import { Link, useNavigate } from 'react-router-dom'
import classes from './Product.module.css'
import Image from '../../../assets/img/product/product.jpg'
import { FaTrash } from 'react-icons/fa'
import { MdEditDocument } from 'react-icons/md'
import Popup from '../Popup/Popup'
import { useContext, useState } from 'react'
import { Button } from '../../Atoms'
import { useMutation } from '@apollo/client'
import { mutatations, queries } from '../../../graphql'
import { User } from '../../../contexts/context'
import { formatDate } from '../../../utils/date'

export default function SingleProduct({ product, icon = false }) {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()

    const { stateUser } = useContext(User)
    const user = stateUser.info

    const [productData, { error }] = useMutation(mutatations.productMutations.PRODUCT_DELETE, {
        onCompleted: () => {
            setIsOpen(false)
        },
        refetchQueries: [
            {
                query: queries.productQueries.GET_ALL_PRODUCTS_BY_USER,
                variables: { userId: user.id },
            },
        ],
    })

    const handleDelete = () => {
        productData({
            variables: {
                productDeleteId: product.id,
            },
        })
    }

    return (
        <div className={classes.product}>
            <img src={Image} alt="" />
            <div>
                <div className={classes.left}>
                    <Link to={`/product/buy/${product.id}`}>{product.title}</Link>
                    <p>Categories: {product.categoryName}</p>
                    <p>Price: ${product.price}</p>

                    <p>{product.description}</p>

                    <p>Date posted: {formatDate(product?.createdAt)}</p>
                </div>
                <div className={classes.right}>
                    {icon && (
                        <>
                            <MdEditDocument onClick={() => navigate(`/product/edit/${product.id}`)} />
                            <FaTrash onClick={() => setIsOpen(product.id)} />
                        </>
                    )}
                </div>
                {isOpen === product.id && (
                    <>
                        {error ? (
                            <Popup setClose={setIsOpen}>Bad Request: You can not delete this product!</Popup>
                        ) : (
                            <Popup setClose={setIsOpen} text="delete">
                                <Button title="No" bgColor="cancel" onClick={() => setIsOpen(false)} />
                                <Button title="Yes" onClick={handleDelete} />
                            </Popup>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}
