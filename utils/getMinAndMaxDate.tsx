const convertDate = (date: Date) => {
  const day = date.getDate() > 10 ? date.getDate() : `0${date.getDate()}`
  const month =
    date.getMonth() > 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`
  const year = date.getFullYear()
  return `${year}-${month}-${day}`
}

export const getMinAndMaxDate = (offset: number) => {
  const dateNow = new Date()
  const minValue = convertDate(dateNow)
  dateNow.setDate(dateNow.getDate() + offset)
  const maxValue = convertDate(dateNow)
  return { minValue, maxValue }
}
