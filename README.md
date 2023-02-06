# learnvue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


!!
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
    <HotSpot/>
    <SignupForm/>
    <CalculatorVue/>
    <PasswordStrengthMeter/>
    <EventsCard/>
    <VueGallery/>
    <PreLoader/>
    <ModalImage/>
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
import HotSpot from '@/components/HotSpot.vue';
import SignupForm from '@/components/SignupForm.vue';
import CalculatorVue from '@/components/CalculatorVue.vue';
import PasswordStrengthMeter from '@/components/PasswordStrengthMeter.vue';
import EventsCard from '@/components/EventsCard.vue';
import VueGallery from '@/components/VueGallery.vue';
import PreLoader from '@/components/PreLoader.vue';
import ModalImage from '@/components/ModalImage.vue';

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
    SearchFilter,
    HotSpot,
    SignupForm,
    CalculatorVue,
    PasswordStrengthMeter,
    EventsCard,
    VueGallery,
    PreLoader,
    ModalImage
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

!!