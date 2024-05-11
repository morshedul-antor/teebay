import { DefaultStorage, GetStorage, SetStorage } from '../storage/local'

export const userState = DefaultStorage('user', { info: {} })

export const userReducer = (state, action) => {
    switch (action.type) {
        case 'get':
            SetStorage('user', { info: state.info })
            return GetStorage('user')
        case 'set':
            SetStorage('user', { info: action.payload })
            return GetStorage('user')
        case 'remove':
            SetStorage('user', { info: {} })
            return GetStorage('user')
        default:
            return state
    }
}
