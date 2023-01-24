<template>
  <div id="app">
    <ToDo/>
    <SideBar/>
    <TabMenu/>
    <WeatherApiVue/>
    <PopupForm/>
    <DigitalClock/>
    <ContactForm/>
    <FlipClock/>
    <SearchFilter/>

  </div>
</template>

<script>
import ToDo from './components/ToDo.vue'
import SideBar from './components/SideBar.vue'
import TabMenu from './components/TabMenu.vue'
import WeatherApiVue from './components/WeatherApi.vue'
import PopupForm from './components/PopupForm.vue'
import DigitalClock from './components/DigitalClock.vue'
import ContactForm from './components/ContactForm.vue'
import FlipClock from './components/FlipClock.vue'
import SearchFilter from './components/SearchFilter.vue'


export default {
  name: 'App',
  components: {
    ToDo,
    SideBar,
    TabMenu,
    WeatherApiVue,
    PopupForm,
    DigitalClock,
    ContactForm,
    FlipClock,
    SearchFilter
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
