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
        <div class="select">
            <span class="arrow" :class="collapsed ? 'arrow-down' : 'arrow-right'" @click="menuClickHandle" ></span>
            <select v-model="weathers" multiple="true" class="city-list" :size="showSize">
                <option v-for="city in cities" v-bind:key="city">
                    {{ city }}
                </option>
            </select>
        </div>

        <div class="weathers">
            <div class="weather" v-for="cityInfo in weatherInfos" :key="cityInfo.city">
                <div class="city">
                    {{ cityInfo.city }}
                </div>
                <div class="condition-text">
                    {{ cityInfo.info?.current?.condition?.text }}
                </div>
                <img class="condition-icon" :src="cityInfo.info?.current?.condition?.icon" alt="">
                <div class="temperature">
                    {{ cityInfo.info?.current?.temp_c }}&ordm;C
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
            weatherInfos: [],
            collapsed: false
        }
    },
    mounted() {

    },
    computed: {
        showSize() {
            return this.collapsed ? this.cities.length : 1
        }
    },
    watch: {
        weathers(newValue) {
            this.weatherInfos = []
            newValue.forEach(city => {
                this.weatherInfos.push({
                    city: city,
                    info: {}
                })
                this.getWeatherData(city)
            });
        }
    },
    methods: {
        async getWeatherData(city) {
            let api = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
            let data = await axios.get(api).then(response => {
                console.log(response.data)
                this.setCityInfo(city, response.data)
                return response.data
            }).catch(error => {
                console.log(error)
                return false
            })
            return data
        },

        setCityInfo(city, data) {
            let index = this.weathers.indexOf(city)
            this.weatherInfos[index].info = data
        },
        menuClickHandle(){
            this.collapsed = !this.collapsed
        }
    },
}
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    color: #fff;
}
.header {
    padding: 20px;
    .app-name {
        padding: 5px;
        padding-bottom: 10px;
    }
}

.container {
    display: flex;
    flex-direction: column;
    justify-items: center;
    background-color: rgb(92, 64, 132);
    color: #fff;
    min-height: 300px;
    position: relative;
    flex: 1;
}

.select {
    position: relative;
    display: block;
    height: 30px;

    .arrow {
        position: absolute;
        top: 4%;
        right: calc(50% + 150px/2);
        margin-right: 6px;
    }
    .arrow-right {
        border-top: 13px solid transparent;
        border-bottom: 13px solid transparent;
        border-left: 20px solid rgb(3, 63, 63);
    }
    .arrow-down {
        border-top: 20px solid rgb(3, 63, 63);
        border-right: 13px solid transparent;
        border-left: 13px solid transparent;
        margin-top: 3px;
    }
}

.city-list {
    width: 150px;
    text-align: left;
    overflow: hidden;
    border: 1px solid;
    position: relative;


    option {
        display: block;
        padding: 5px;
    }

    option:nth-child(2n - 1) {
        background-color: rgba(4, 65, 70);
    }

    option:nth-child(2n) {
        background-color: rgb(52, 124, 129);
    }


}

.weathers {
    display: flex;
    flex-direction: row;
    top: 100px;
    flex-wrap: wrap;
    height: 100%;
}

.weather {
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0);
    width: 280px;
    height: 210px;
    border: 2px solid;
    border-color: rgba(255, 255, 255, 0.4);
    margin: 15px 10px;

    .city {
        font-size: 24px;
        font-weight: 500;
        margin-top: 20px;
    }

    .condition-text {
        font-size: 12px;
        font-weight: 200;
        color: rgba(255, 255, 255, 0.6);
        padding: 2px;
    }

    .condition-icon {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 80px;
        height: auto;
    }

    .temperature {
        font-size: 22px;
    }
}
</style>