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

<list2>
       <router-link to="//Login">Log in</router-link>&nbsp;
       <router-link to="//Signup">Sign up</router-link>&nbsp;
      
</list2>

      
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
  /* this is the color of the font on the page */

    /*height: 100%;
    padding:0px;
    margin:0px;
*/
  background-color: black;
  background-size: cover;
  min-height: 720px;
  width:100%;
  height: 100%;
  display: block;

}

#nav {

 /*background-color: pink; */
  float: center;
  font-size: 0.35in;
  margin-left: 20px;
  position:absolute;
    top:15%;
    left:28%;

}

#nav a {
  font-weight: bold;
  color:white;
  
}

#nav a.router-link-exact-active {
  color: #42b983;
  /*color:white;*/
}
mg {
padding:10px;

}
#imgbox {
  height:250px;
  width: 422px;
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
