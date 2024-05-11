import { Link } from 'react-router-dom'
import { Card } from '../Molecules'
import { Button, InputField, ErrorMessage } from '../Atoms'
import { useForm } from 'react-hook-form'
import { useMutation } from '@apollo/client'
import { mutatations } from '../../graphql'
import classes from './Register.module.css'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { useState } from 'react'

export default function Register() {
    const [isOpen, setIsOpen] = useState(false)

    const { register, handleSubmit } = useForm()
    const [userRegister, { error }] = useMutation(mutatations.userMutations.USER_SIGNUP)

    const handleOnSubmit = (formData) => {
        const { password, confirmPassword, ...data } = formData

        if (password !== confirmPassword) {
            alert('Password not match!')
        } else {
            userRegister({
                variables: {
                    data: { ...data, password },
                },
            })
        }
    }

    return (
        <div className={classes.register}>
            <Link to="/">Teebay</Link>

            <Card width="36%">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit(handleOnSubmit)}>
                    <div className={classes.grid}>
                        <input type="text" {...register('firstName')} required placeholder="Enter first name" />
                        <input type="text" {...register('lastName')} required placeholder="Enter last name" />
                    </div>
                    <input type="text" {...register('address')} required placeholder="Enter address" />

                    <input type="email" {...register('email')} required placeholder="Enter email" />
                    <input type="number" {...register('phone')} required placeholder="Enter phone" />

                    <InputField>
                        <input
                            type={isOpen ? 'text' : 'password'}
                            {...register('password')}
                            placeholder="Enter password"
                            required
                        />
                        {isOpen ? (
                            <FaEye onClick={() => setIsOpen(false)} />
                        ) : (
                            <FaEyeSlash onClick={() => setIsOpen(true)} />
                        )}
                    </InputField>

                    <InputField>
                        <input
                            type={isOpen ? 'text' : 'password'}
                            {...register('confirmPassword')}
                            placeholder="Enter confirm password"
                            required
                        />
                        {isOpen ? (
                            <FaEye onClick={() => setIsOpen(false)} />
                        ) : (
                            <FaEyeSlash onClick={() => setIsOpen(true)} />
                        )}
                    </InputField>

                    <Button title="REGISTER" />
                </form>
                <p>
                    Already have an account? <Link to="/login">Sign in</Link>
                </p>

                {error && <ErrorMessage message={error.message} />}
            </Card>
        </div>
    )
}
