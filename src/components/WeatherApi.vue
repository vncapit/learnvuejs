<template>
    <div class="container">
        <div class="header">
            <h1 class="app-name">

            </h1>
            <p class="app-desc">

            </p>
        </div>
        <div class="weathers">
            <div v-for="city in cities" :key="city">
                <div class="city">
                    {{ city }}
                </div>
                <div class="condition-text">
                    {}
                </div>
            </div>
        </div>
    </div>
</template>

<script>

const API_KEY = '4c4c38dfff5b482790c92832230601'

import axios from 'axios';
export default {
    name: 'WeatherApi',
    data() {
        return {
            cities: ['Ha Noi', 'Ha Tinh', 'Can Loc', 'Ky Anh', 'Vinh', 'Manila', 'Pasay'],
        }
    },
    mounted () {
        this.getWeatherData(this.cities[1]);
    },
    methods: {
        getWeatherData(city) {
            let api = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
            axios.get(api).then( response => {
                console.log(response.data)
                return response.data
            }).catch( error => {
                console.log(error)
            })
        }
    },
}
</script>

<style lang="scss" scoped>

</style>