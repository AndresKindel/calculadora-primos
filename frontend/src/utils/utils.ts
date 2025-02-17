import { format } from 'date-fns'

export function isNumber(value: string) {
  return /^\d+$/.test(value)
}

export const formatDateAndHoursMinutes = (
  value: number,
  separadorDataHora = 'às'
): string => {
  const dateValue = new Date(value)

  return dateValue && !isNaN(dateValue.getTime())
    ? format(dateValue, `dd/MM/yyyy '${separadorDataHora}' HH:mm`)
    : '-'
}
