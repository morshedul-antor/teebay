export const calculateDays = (startDate, endDate) => {
    return Math.ceil(Math.abs(new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24))
}

export const formatDate = (value) => {
    const date = new Date(value)
    const day = date.getDate()
    const month = date.toLocaleString('en-US', { month: 'long' })
    const year = date.getFullYear()

    return `${day} ${month} ${year}`
}
