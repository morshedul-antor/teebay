import { mutatations, queries } from '../../../graphql'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useMutation } from '@apollo/client'
import { InputField, Button } from '../../Atoms'

export default function Edit({ data, productId, classes }) {
    const navigate = useNavigate()

    // product update
    const { register, handleSubmit } = useForm()
    const [updateData] = useMutation(mutatations.productMutations.PRODUCT_UPDATE, {
        onCompleted: () => {
            navigate('/my-products')
        },
        refetchQueries: [
            {
                query: queries.productQueries.GET_SINGLE_PRODUCT,
                variables: { productId: productId },
            },
            {
                query: queries.productQueries.GET_ALL_PRODUCTS_BY_USER,
                variables: { userId: data?.product?.user?.id },
            },
        ],
    })

    const handleUpdate = (formData) => {
        for (const key in formData) {
            if (formData[key] === '' || (typeof formData[key] === 'number' && isNaN(formData[key]))) {
                delete formData[key]
            }
        }

        if (Object.keys(formData).length === 0) {
            alert('No changes made!')
        } else {
            updateData({
                variables: {
                    productUpdateId: productId,
                    data: formData,
                },
            })
        }
    }

    return (
        <div className={classes.left}>
            <form onSubmit={handleSubmit(handleUpdate)}>
                <InputField label="Title">
                    <input type="text" {...register('title')} defaultValue={data?.product?.title} placeholder="Title" />
                </InputField>

                <div className={classes.grid}>
                    <InputField label="Categories">
                        <input
                            type="text"
                            {...register('categoryName')}
                            defaultValue={data?.product?.categoryName}
                            placeholder="Categories"
                        />
                    </InputField>
                </div>

                <InputField label="Description">
                    <textarea
                        rows="10"
                        {...register('description')}
                        defaultValue={data?.product?.description}
                        placeholder="Description"
                    />
                </InputField>

                <div className={classes.grid}>
                    <InputField label="Price($)">
                        <input
                            type="text"
                            {...register('price', {
                                setValueAs: (value) => parseFloat(value),
                            })}
                            defaultValue={data?.product?.price}
                            placeholder="Categories"
                        />
                    </InputField>

                    <div className={classes.grid}>
                        <InputField label="Rent($)">
                            <input
                                type="text"
                                {...register('rentPrice', {
                                    setValueAs: (value) => parseFloat(value),
                                })}
                                defaultValue={data?.product?.rentPrice}
                                placeholder="Rent"
                            />
                        </InputField>

                        <InputField label="Per">
                            <select>
                                <option value="">1 day</option>
                            </select>
                        </InputField>
                    </div>
                </div>

                <div>
                    <Button title="Update" />
                </div>
            </form>
        </div>
    )
}
