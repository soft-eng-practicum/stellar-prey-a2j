<template>
  <div id="background" :style="{'background-image':'url('+require('./assets/orange-purple.jpg')+')'}">
  <div id="app">
    </div>
    <div id="imgbox">
       <img alt="logo" src="./assets/stellarprey_logo_01a.png">
    </div>

         <br><br><br>


      

    <div id="nav">
      <router-link to="/">Home</router-link> &nbsp;
        
      <router-link to="//About">About</router-link>&nbsp;
      <router-link to="//Players">Players</router-link>&nbsp;
      <router-link to="//Clans">Clans</router-link>&nbsp;
      <router-link to="//Community">Community</router-link>&nbsp;
      <router-link to="//Servers">Servers</router-link>&nbsp;

      <router-link to="//Login">Log in</router-link>&nbsp;
      <router-link to="//Signup">Sign up</router-link>&nbsp;

      <a href="https://forum.grangerhub.com/" target="_blank" rel="noopener" id="forum">Forum</a>
    </div>
    <router-view />
  </div>
</template>

<style>
*{
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
 /* -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;


  background-image:image('./assets/purple-orange.jpg');*/
/*
  min-height: 800px;

    /*height: 100%;
    padding:0px;
    margin:0px;
*/
 /* min-height: 80vh;
*/
  width:100%;
  height: 100%;
  
}

#background{
  min-height: 100vh;
  min-width: 100vh;
}

#nav {

  /*float: center;*/
  font-size: 0.3in;
  margin-left: 20px;
  position:absolute;
    top:10%;

    left:26%;

  display:inline;
}

#nav a {
  font-weight: bold;
  color:white;
  
}

#nav a.router-link-exact-active {
  color: #26bcff;
}

#forum{
  margin-left: 3vw;
}

img {
height:150px;
width: 400px;
float: left;

padding:10px;

}
#imgbox {
  height:150px;
  width: 400px;
  float:left;
  overflow: hidden;
  /*border: solid 2px white;*/
  margin-left: 2px;
  margin-top: 0px;
  background-repeat: no-repeat;
  background-position: center !important;



  background-size: contain;
  
  
}
</style>
