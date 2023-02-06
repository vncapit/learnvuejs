<template>
  <div id="app">
    <nav>
      <ul>
        <li>
          <router-link to="/">Todo</router-link>
        </li>
        <li>
          <router-link to="/gallery">Gallery</router-link>
        </li>
        <li>
          <router-link></router-link>
        </li>
        <li>
          <router-link></router-link>
        </li>
        <li>
          <router-link></router-link>
        </li>
        <li>
          <router-link></router-link>
        </li>
        <li>
          <router-link></router-link>
        </li>
        <li>
          <router-link></router-link>
        </li>
        <li>
          <router-link></router-link>
        </li>
        <li>
          <router-link></router-link>
        </li>
      </ul>


    </nav>
    <router-view/>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

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
