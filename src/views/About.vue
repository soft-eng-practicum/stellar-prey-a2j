<template>
  <div id="row">
    <div id="column">
      <br><br><br><br><br><br><br><br><br><br><br>
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
      <img src="../assets/Founder.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style scoped>
a {
  color: #42b983;
}
p {
  text-align: left;
  font-size: 0.3in;
  margin-top: 0.3in;
  width: 700px;
  background-color: #8B9F9B;
}
#column {
  float:left;
right:25%;
position:relative;  
width: 33.33%;
  
}
#img {
  margin-top: 2in;
  float:right;
  margin-right: 300px;
}
#row::after {
  content: "";
  clear: both;
  display: table;
}

</style>
