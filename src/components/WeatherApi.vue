<template>
    <div class="container">
        <div class="header">
            <h1 class="app-name">
                Vue Weather App
            </h1>
            <p class="app-desc">
                Build atop Vue & OpenWeatherMap
            </p>
        </div>
        <select v-model="weathers" multiple="true" class="city-list">
            <option class="city-list-item" v-for="city in cities" v-bind:key="city">
                {{ city }}
            </option>
        </select>
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
            weathers: [],
        }
    },
    mounted() {

    },
    methods: {
        getWeatherData(city) {
            let api = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
            let data = axios.get(api).then(response => {
                console.log(response.data)
                return response.data
            }).catch(error => {
                console.log(error)
                return false
            })
            return data
        }
    },
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-items: center;
}

.city-list {
    display: block;
    width: 150px;
    height: 25px;
    text-align: left;

    .city-list-item {
        display: block;
        padding: 5px ;
    }
}
</style>