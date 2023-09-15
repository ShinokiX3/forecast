export default (seconds: number, locale: string = 'en-EN') =>
  new Date(seconds * 1000).toLocaleTimeString(locale, { timeZone: 'Atlantic/Reykjavik' })
