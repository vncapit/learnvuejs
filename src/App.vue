<template>
  <div id="app">
    <ElMenu/>
    <router-view/>
  </div>
</template>

<script>
import ElMenu from '@/components/Menu/Menu.vue';

export default {
  name: 'App',
  components: {
    ElMenu
}
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 0px;
}
</style>
