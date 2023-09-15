<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import WeatherAPI from '../services/weather'
import type { IWeatherObject } from '../services/weather.types'

import Summary from '../components/summary.vue'
import Highlights from '../components/highlights.vue'
import Humidity from '../components/humidity.vue'
import Coords from '../components/coords.vue'

const city = ref<string>('Kiev')
const show = ref<boolean>(false)
const loading = ref<boolean>(true)

const weather = ref<null | IWeatherObject>(null)
const failure = computed(() => weather.value?.cod !== 200 && weather.value === null)

const fetchWeather = async () => {
  loading.value = true
  show.value = false
  const weathered = await WeatherAPI.getWeatherByCity(city.value)
  if (weathered) {
    weather.value = weathered
    show.value = true
    loading.value = false
  }
}

onMounted(fetchWeather)
</script>

<template>
  <div class="page">
    <main class="main">
      <div class="container">
        <div class="laptop">
          <div v-if="!failure && weather?.cod === 200 && !loading" class="sections">
            <section
              v-show="show"
              v-motion-slide-visible-bottom
              :class="['section', 'section-left', { 'section-failure': failure }]"
            >
              <div class="info">
                <div class="city-inner">
                  <input v-model="city" @keyup.enter="fetchWeather" type="text" class="search" />
                </div>
                <Summary v-if="!failure" :weather="weather" />
                <div v-else class="error">
                  <div class="error-title">Ooops! Somethig went wrong</div>
                  <div v-if="weather?.message" class="error-message">
                    {{ weather.message }}
                  </div>
                </div>
              </div>
            </section>
            <section v-show="show" v-motion-slide-visible-bottom class="section section-right">
              <Highlights :weather="weather" />
            </section>
          </div>
          <div
            v-if="!failure && weather?.cod === 200"
            v-show="show"
            v-motion-slide-visible-bottom
            class="sections"
          >
            <Coords :coord="weather?.coord" />
            <Humidity :humidity="weather?.main?.humidity" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'
.page
  position: relative
  display: flex
  justify-content: center
  align-items: center
  min-height: 100vh
  padding: 20px 0
  background-color: #59585d

.laptop
  width: 100%
  padding: 20px
  background-color: #0e100f
  border-radius: 25px

.sections
  display: flex
  width: 100%

  @media (max-width: 767px)
    flex-direction: column

.section-left
  width: 30%
  padding-right: 10px

  @media (max-width: 767px)
    width: 100%
    padding-right: 0

  &.section-error
    min-width: 235px
    width: auto
    padding-right: 0px

.section-right
  width: 70%
  padding-left: 10px

  @media (max-width: 767px)
    width: 100%
    margin-top: 16px
    padding-left: 0

.city-inner
  position: relative
  display: inline-block
  width: 100%

  &::after
    content: ''
    position: absolute
    top: 0
    right: 10px
    width: 25px
    height: 25px
    background: url('./assets/img/search.svg') no-repeat 50% 50%
    background-size: contain
    transform: translateY(50%)
    cursor: pointer

.info
  height: 100%
  padding: 16px
  background: url('/src/assets/img/gradient-1.jpg') no-repeat 50% 50%
  background-size: cover
  border-radius: 25px

.search
  width: 100%
  padding: 16px
  font-family: 'Inter', Arial, sans-serif
  color: $white
  background-color: rgba(0, 0, 0, 0.75)
  border-radius: 16px
  border: none
  outline: none
  cursor: pointer

.section-bottom
  width: 50%
  margin-top: 16px

  @media (max-width: 767px)
    width: 100%
</style>
