import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'

dayjs.locale('pt-br')

export function formatDateString(
  date: Date | string | number,
  formatString: string,
) {
  return dayjs(date).format(formatString)
}

export function getRelativeDateString(
  date: Date | string | number,
  relativeTo?: Date | string | number,
) {
  const dateDayJs = dayjs(date)
  const relativeDayJs = dayjs(relativeTo)

  const diffInDays = relativeDayJs.diff(dateDayJs, 'day')

  if (diffInDays === 0) return 'Hoje'
  if (diffInDays === 1) return 'Ontem'
  if (diffInDays < 7) {
    // Day of the week
    const weekDay = dateDayJs.format('dddd')

    const capitalizedWeekDay =
      weekDay.charAt(0).toUpperCase() + weekDay.slice(1)

    return capitalizedWeekDay
  }

  return dateDayJs.format('DD [de] MMMM')
}

export function displayDate(
  date: Date | string | number,
  useRelative?: boolean,
) {
  const dateDayJs = dayjs(date)

  if (!useRelative) {
    return dateDayJs.format('DD/MM/YYYY [·] HH:mm')
  }

  return `${getRelativeDateString(date)} · ${dateDayJs.format('HH:mm')}`
}
