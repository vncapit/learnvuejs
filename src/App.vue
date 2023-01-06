<template>
  <div id="app">
    <ToDo/>
    <SideBar/>
    <TabMenu/>
    <WeatherApiVue/>
  </div>
</template>

<script>
import ToDo from './components/ToDo.vue'
import SideBar from './components/SideBar.vue'
import TabMenu from './components/TabMenu.vue'
import WeatherApiVue from './components/WeatherApi.vue'
export default {
  name: 'App',
  components: {
    ToDo,
    SideBar,
    TabMenu,
    WeatherApiVue,

  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
