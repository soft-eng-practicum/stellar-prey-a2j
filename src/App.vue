<template>
  <FrontPage msg="Stellar Prey"/>
</template>

<script>
import FrontPage from './components/FrontPage.vue'

export default {
  name: 'App',
  components: {
    FrontPage
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
}
</style>
