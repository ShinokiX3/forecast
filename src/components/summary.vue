<script setup lang="ts">
import type { IWeatherObject } from '@/services/weather.types'
import type { PropType } from 'vue'
import { capitalize, date } from '../utils'

const props = defineProps({
  weather: {
    type: Object as PropType<IWeatherObject> | null,
    required: true
  }
})
</script>

<template>
  <div class="summary">
    <div
      :style="`background-image: url('/src/assets/img/weather-main/${weather.weather[0].description}.png')`"
      class="pic-main"
    ></div>
    <div class="weather">
      <div class="temp">{{ weather.main.temp }} °C</div>
      <div class="weather-desc text-block">
        {{ capitalize(weather.weather[0].description, true) }}
      </div>
    </div>
    <div class="city text-block">{{ weather.name }}, {{ weather.sys.country }}</div>
    <div class="date text-block">{{ date() }}</div>
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'
.pic-main
  width: 60px
  height: 60px
  margin: 20px 0 12px
  background-repeat: no-repeat
  background-position: 50% 50%
  background-size: contain

.city
  font-size: 24px

.weather
  margin: 0 0 20px
  padding: 20px 0
  border-bottom: 1px solid rgba(255, 255, 255, 0.4)

.temp
  padding-bottom: 8px
  font-size: 32px

.text-block
  position: relative
  padding-left: 24px
  padding-bottom: 8px
  font-size: 14px

  &::before
    content: ''
    position: absolute
    top: 0
    left: 0
    width: 20px
    height: 20px
    margin-right: 6px
    background-repeat: no-repeat
    background-position: 50% 50%
    background-size: contain

.weather-desc

  &::before
    background-image: url('/src/assets/img/weather.svg')

.city

  &::before
    background-image: url('/src/assets/img/location.svg')

.date

  &::before
    left: 2px
    width: 15px
    height: 15px
    background-image: url('/src/assets/img/calendar.svg')
</style>
