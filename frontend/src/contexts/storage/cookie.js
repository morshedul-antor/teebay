// cookies
export const GetCookie = (key) => {
    const name = key + '='
    const decodedCookie = decodeURIComponent(document.cookie)
    const cookieArray = decodedCookie.split(';')

    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i].trim()
        if (cookie.indexOf(name) === 0) {
            return JSON.parse(cookie.substring(name.length, cookie.length))
        }
    }
    return null
}

export const SetCookie = (key, value) => {
    const date = new Date()
    date.setTime(date.getTime() + 2 * 24 * 60 * 60 * 1000)
    const expires = 'expires=' + date.toUTCString()
    const serializedValue = JSON.stringify(value)
    document.cookie = key + '=' + serializedValue + '; ' + expires
}

export const DefaultCookie = (key, def) => {
    const existingCookie = GetCookie(key)

    if (existingCookie === null) {
        SetCookie(key, def, 2)
        return def
    } else {
        return existingCookie
    }
}
