import { DefaultCookie, GetCookie, SetCookie } from '../storage/cookie'

export const authState = DefaultCookie('auth', { auth: false, token: '' })

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'auth':
            SetCookie('auth', { auth: true, token: state.token })
            return GetCookie('auth')
        case 'token':
            SetCookie('auth', { auth: true, token: action.payload })
            return GetCookie('auth')
        case 'remove':
            SetCookie('auth', { auth: false, token: '' })
            return GetCookie('auth')
        default:
            return state
    }
}
