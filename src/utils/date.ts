interface IDateOptions {
  [key: string]: string
}

const defaultOptions = {
  weekday: 'short',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}

export default (
  date: Date = new Date(),
  locale: string = 'en-EN',
  options: IDateOptions = defaultOptions
): string => date.toLocaleString(locale, options)
