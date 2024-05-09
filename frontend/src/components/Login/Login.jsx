import { useMutation } from '@apollo/client'
import { mutatations } from '../../graphql'
import { useForm } from 'react-hook-form'
import { useContext, useEffect } from 'react'
import { Auth } from '../../contexts/context'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const { register, handleSubmit } = useForm()
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
    if (stateAuth.auth) {
        navigate('/dashboard')
    }

    return (
        <div>
            <h1>Login</h1>

            <form onSubmit={handleSubmit(handleOnSubmit)}>
                <label>Username</label>
                <input type="text" {...register('identifier')} />
                <br />

                <label>Password</label>
                <input type="text" {...register('password')} />
                <br />

                <button>Login</button>
            </form>

            {error && <div>{error.message}</div>}
        </div>
    )
}
