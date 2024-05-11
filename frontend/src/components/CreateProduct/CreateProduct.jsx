import { useContext, useState } from 'react'
import { Card } from '../Molecules'
import { Button, ErrorMessage } from '../Atoms'
import classes from './CreateProduct.module.css'
import FormField from './FormField/FormField'
import { useMutation } from '@apollo/client'
import { mutatations, queries } from '../../graphql'
import { useNavigate } from 'react-router-dom'
import { User } from '../../contexts/context'

export default function CreateProduct() {
    const [formData, setFormData] = useState({})
    const [stage, setStage] = useState(1)

    const handleNext = () => {
        setStage(stage + 1)
    }

    const handleBack = () => {
        setStage(stage - 1)
    }

    const onSubmitForm1 = (data) => {
        setFormData((prevData) => ({ ...prevData, ...data }))
        handleNext()
    }

    const onSubmitForm2 = (data) => {
        setFormData((prevData) => ({ ...prevData, ...data }))
        handleNext()
    }

    const onSubmitForm3 = (data) => {
        setFormData((prevData) => ({ ...prevData, ...data }))
        handleNext()
    }

    const onSubmitForm4 = (data) => {
        setFormData((prevData) => ({ ...prevData, ...data }))
        handleNext()
    }

    const navigate = useNavigate()
    const { stateUser } = useContext(User)
    const user = stateUser.info

    // product create
    const [productData, { error }] = useMutation(mutatations.productMutations.PRODUCT_CREATE, {
        onCompleted: () => {
            navigate('/my-products')
        },
        refetchQueries: [
            { query: queries.productQueries.GET_ALL_PRODUCTS },
            {
                query: queries.productQueries.GET_ALL_PRODUCTS_BY_USER,
                variables: {
                    userId: user.id,
                },
            },
        ],
    })

    const handleSubmitAll = () => {
        productData({
            variables: {
                data: {
                    title: formData.title,
                    description: formData.description,
                    price: parseFloat(formData.price),
                    rentPrice: parseFloat(formData.rentPrice),
                    categoryName: formData.categoryName,
                    categoryIds: [],
                    userId: user.id,
                },
            },
        })
    }

    return (
        <div className={classes.create}>
            <Card width="30%">
                <div className={classes.container}>
                    {stage === 1 && (
                        <FormField
                            onSubmit={onSubmitForm1}
                            handleBack={handleBack}
                            formData={formData}
                            field="title"
                            label="title"
                            stage={stage}
                        />
                    )}
                    {stage === 2 && (
                        <FormField
                            onSubmit={onSubmitForm2}
                            handleBack={handleBack}
                            formData={formData}
                            field="categoryName"
                            label="categories"
                            stage={stage}
                        />
                    )}
                    {stage === 3 && (
                        <FormField
                            onSubmit={onSubmitForm3}
                            handleBack={handleBack}
                            formData={formData}
                            field="description"
                            label="description"
                            stage={stage}
                        />
                    )}
                    {stage === 4 && (
                        <FormField
                            onSubmit={onSubmitForm4}
                            handleBack={handleBack}
                            formData={formData}
                            field="price"
                            label="price"
                            stage={stage}
                        />
                    )}

                    {stage === 5 && (
                        <>
                            <div className={classes.view}>
                                <h2>{formData.title}</h2>
                                <span>
                                    <b>Categories</b>: {formData.categoryName}
                                </span>
                                <span>
                                    <b>Description</b>: {formData.description}
                                </span>

                                <span>
                                    <b>Price</b>: ${formData.price}
                                </span>
                                <span>
                                    <b>To Rent</b>: ${formData.rentPrice} per day
                                </span>
                            </div>
                            <div className={classes.btn}>
                                <Button title="Back" bgColor="cancel" onClick={handleBack} />
                                <Button title="Submit" onClick={handleSubmitAll} />
                            </div>
                        </>
                    )}
                </div>
                {error && <ErrorMessage message={error.message} />}
            </Card>
        </div>
    )
}
