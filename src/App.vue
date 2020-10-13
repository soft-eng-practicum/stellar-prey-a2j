<template>
  <About/>
</template>

<script>
import About from './components/About.vue'

export default {
  name: 'App',
  components: {
    About
  }
}
</script>

<style>
*{
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: match-parent;
  color:aliceblue;
  background-color: black;
  background-size:cover;
}
</style>
