// localstorage
export const GetStorage = (key) => {
    let data = JSON.parse(localStorage.getItem(key))
    return data || null
}

export const SetStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const DefaultStorage = (key, def) => {
    const storedData = GetStorage(key)
    if (storedData === null) {
        SetStorage(key, def)
        return def
    }
    return storedData
}
