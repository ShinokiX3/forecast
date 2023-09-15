export interface IRain {
  '1h': number
}

export interface ICoord {
  lon: number
  lat: number
}

export interface ISys {
  country: string
  id: number
  sunrise: number
  sunset: number
  type: number
}

export interface IMain {
  feels_like: number
  humidity: number
  pressure: number
  temp: number
  temp_max: number
  temp_min: number
}

export interface IWeather {
  description: string
  icon: string
  id: number
  main: string
}

export interface IWind {
  deg: number
  gust: number
  speed: number
}

export interface IClouds {
  all: number
}

export interface IWeatherObject {
  base: string
  clouds: IClouds
  cod: number
  coord: ICoord
  dt: number
  id: number
  main: IMain
  name: string
  rain: IRain
  sys: ISys
  timezone: number
  visibility: number
  weather: IWeather[]
  wind: IWind
  message?: string
}
