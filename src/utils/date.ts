import dayjs from 'dayjs'
import moment from 'moment-jalaali'

// configure Persian locale for moment-jalaali
moment.loadPersian({ usePersianDigits: true, dialect: 'persian-modern' })

export const getYear = (d: string) => new Date(d).getFullYear()
export const isFuture = (d?: string) => d && new Date(d) > new Date()
export function isSameYear(a?: string, b?: string) {
  return a && b && getYear(a) === getYear(b)
}

export function formatDate(
  d: string | Date,
  lang: string = 'en',
  onlyDate = false,
) {
  const dateObj = new Date(d)

  if (Number.isNaN(dateObj.getTime())) {
    console.error('Invalid date:', d)
    return String(d)
  }

  if (lang === 'fa') {
    return moment(dateObj).format('jD jMMMM jYYYY')
  }

  const date = dayjs(dateObj)
  if (onlyDate || date.year() === dayjs().year())
    return date.format('MMM D')
  return date.format('MMM D, YYYY')
}
