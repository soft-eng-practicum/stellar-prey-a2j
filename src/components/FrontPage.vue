<template>
  <div class="header">
    <header>
      {{ msg }}
      <list>
        <li>Home</li>
        <li>About</li>
        <li>Players</li>
        <li>Clans</li>
        <li>Community</li>
        <li>Server</li>
      </list>
      <list2>
        <li>Log in</li>
        <li>Sign up</li>
      </list2>
    </header>
  </div>
  <img alt="Game image" src="../assets/frontimage.jpg">
  <div class="body">
    <header2>
      <li2>Join a Community</li2>
      <li2>Join a ServerSDFsDF</li2>
      <li2>Install</li2>
    </header2>
  </div>
</template>

<script>
export default {
  name: 'FrontPage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  text-align: start;
  font-size: 0.65in;
}
li {
  display: inline-block;
  margin: 0 10px;
}
li2 {
  display: inline-block;
  margin: 0 40px;
  background-size: 2in;
  background-color: #42b983;
}
a {
  color: #42b983;
}
list {
  font-size: 0.35in;
  margin-left: 50px;
}
list2 {
  font-size: 0.4in;
  margin-left: 50px;
}
img {
  width: 100%;
  height: 600px;
  margin-top: 30px;
  margin-bottom: 30px;
}
header2 {
  text-align: center;
  font-size: 0.7in;
  margin-left: 5%;
}
</style>
