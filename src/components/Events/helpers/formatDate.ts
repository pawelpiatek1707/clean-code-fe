import dayjs from 'dayjs'

export const formatDate = (date: dayjs.Dayjs | null) => {
    const day = date?.day()
    const month = date?.month() && date.month() < 10 ? `0${date.month()}` : date?.month()
    const year = date?.year()
    const hour = date?.hour()
    const minute = date?.minute()
    const second = date?.second()
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}