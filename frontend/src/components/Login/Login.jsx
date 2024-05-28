import { useMutation } from '@apollo/client'
import { mutatations } from '../../graphql'
import { useForm } from 'react-hook-form'
import { useContext, useEffect, useState } from 'react'
import { Auth } from '../../contexts/context'
import { Link, useNavigate } from 'react-router-dom'
import { Card } from '../Molecules'
import { Button, InputField, ErrorMessage } from '../Atoms'
import classes from './Login.module.css'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

export default function Login() {
    const [isOpen, setIsOpen] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const [userLogin, { data, error }] = useMutation(mutatations.userMutations.USER_LOGIN)

    const handleOnSubmit = (formData) => {
        userLogin({
            variables: {
                data: formData,
            },
        })
    }

    const { stateAuth, dispatchAuth } = useContext(Auth)
    useEffect(() => {
        if (data) {
            dispatchAuth({ type: 'token', payload: data.userLogin?.token })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

    const navigate = useNavigate()
    useEffect(() => {
        if (stateAuth.auth) {
            navigate('/dashboard')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [stateAuth])

    return (
        <div className={classes.login}>
            <Link to="/">Teebay</Link>

            <Card width="26%">
                <h2>Sign In </h2>
                <form onSubmit={handleSubmit(handleOnSubmit)}>
                    <InputField>
                        <input
                            type="text"
                            {...register('identifier', {
                                required: true,
                            })}
                            placeholder="Enter email or phone"
                        />
                        {errors.identifier && <ErrorMessage marginTop="-8px" />}
                    </InputField>

                    <InputField>
                        <input
                            type={isOpen ? 'text' : 'password'}
                            {...register('password', {
                                required: true,
                            })}
                            placeholder="Enter password"
                        />
                        {isOpen ? (
                            <FaEye onClick={() => setIsOpen(false)} />
                        ) : (
                            <FaEyeSlash onClick={() => setIsOpen(true)} />
                        )}

                        {errors.password && <ErrorMessage marginTop="-8px" />}
                    </InputField>

                    <Button title="LOGIN" />
                </form>

                <p>
                    Don`t have an account? <Link to="/register">Signup</Link>
                </p>
                {error && <ErrorMessage message={error.message} />}
            </Card>
        </div>
    )
}
