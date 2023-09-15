export default (str: string, first: boolean = false) => {
  if (!str) return ''
  if (first) return `${str[0].toLocaleUpperCase()}${str.substring(1)}`
  if (!first) return str.toLocaleUpperCase()
}
