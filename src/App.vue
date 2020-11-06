<template>
  <div id="app">

    <div id="imgbox">
       <img alt="logo" src="./assets/stellarprey.png">
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
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;


  background-color: black;
/*
  min-height: 800px;

    /*height: 100%;
    padding:0px;
    margin:0px;
*/

  background-color: black;
  min-height: 720px;

  width:100%;
  height: 100%;
  background-position:center;

  Background-size: cover;
  */
}

#nav {

 /*background-color: pink; */
  float: center;
  font-size: 0.35in;
  margin-left: 20px;
  position:absolute;
    top:10%;

    left:24%;


}

#nav a {
  font-weight: bold;
  color:white;
  
}

#nav a.router-link-exact-active {
  color: #42b983;
  /*color:white;*/
}

img {
height:175px;
width: 275px;
float: left;

padding:10px;

}
#imgbox {
  height:250px;
  width: 275px;
  float:left;
  overflow: hidden;
  /*border: solid 2px white;*/
  margin-left: 2px;
  margin-top: 0px;
  background-repeat: no-repeat;
  background-position: center !important;



  background-size: contain;
  
  
}
list2{
  background-color: black;
}
</style>
