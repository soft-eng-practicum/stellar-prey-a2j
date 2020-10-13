<template>
  <div id="header">
    <header>
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
        <li>Sign</li>
      </list2>
    </header>
  </div>
  <div id="row">
    <div id="column">
      <p>
        Grangerhub's Stellar Prey Game is a first-person strategy shooter that
        chronicles the conflict between human technology vs extraterrestrial nature, a conflict
        waged by construction, team coordination, and epic combat. Help shape the course
        of your species together towards the top of the Stellar food chain, or be the Prey
        together on the road towards extinction. Which path will you and your species 
        choose to take? It's a universal tale of survival vs death, and of orer vs chaos, as old
        as life itself.
      </p>
    </div>
    <div id="img">
      <!--placeholder for image-->
      <img src="../assets/logo.png">
    </div>
    <br><br><br><br><br><br><br><br><br><br><br><br>
    <div id="img">
      <!--placeholder for image-->
      <img src="../assets/logo.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

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
p {
  text-align: left;
  font-size: 0.3in;
  margin-top: 0.5in;
  margin-left: 5%;
  width: 700px;
  background-color: #42b983;
}
#column {
  float: left;
  width: 33.33%;
}
#img {
  float: right;
  margin-right: 300px;
}
#row::after {
  content: "";
  clear: both;
  display: table;
}

</style>
