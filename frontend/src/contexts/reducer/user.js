import { DefaultCookie, GetCookie, SetCookie } from '../storage/cookie'

export const userState = DefaultCookie('user', { info: {} })

export const userReducer = (state, action) => {
    switch (action.type) {
        case 'get':
            SetCookie('user', { info: state.info })
            return GetCookie('user')
        case 'set':
            SetCookie('user', { info: action.payload })
            return GetCookie('user')
        case 'remove':
            SetCookie('user', { info: {} })
            return GetCookie('user')
        default:
            return state
    }
}
