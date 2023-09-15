import { API_KEY, BASE_URL } from '@/constants'
import type { IWeatherObject } from './weather.types'

class WeatherApi {
  async getWeatherByCity(city: string = 'Kiev', units: string = 'metric') {
    try {
      const response: IWeatherObject = await fetch(
        `${BASE_URL}?q=${city}&appid=${API_KEY}&units=${units}`
      ).then((data) => data.json())
      return response || null
    } catch (error) {
      console.log(error)
    }
  }
}

export default new WeatherApi()
