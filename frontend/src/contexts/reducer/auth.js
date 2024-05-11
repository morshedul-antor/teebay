import { DefaultStorage, GetStorage, SetStorage } from '../storage/local'

export const authState = DefaultStorage('auth', { auth: false, token: '' })

export const authReducer = (state, action) => {
    switch (action.type) {
        case 'auth':
            SetStorage('auth', { auth: true, token: state.token })
            return GetStorage('auth')
        case 'token':
            SetStorage('auth', { auth: true, token: action.payload })
            return GetStorage('auth')
        case 'remove':
            SetStorage('auth', { auth: false, token: '' })
            return GetStorage('auth')
        default:
            return state
    }
}
