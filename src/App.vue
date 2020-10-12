<template>
  <div id="app">

    <div id="imgbox">
       <img alt="logo" src="../stellarprey.png">
      </div>

         <br><br><br>


      

    <div id="nav">
      <router-link to="/">FrontPage</router-link> &nbsp;|
        
 <router-link to="/About">About</router-link>| 
      <router-link to="//players">Players</router-link>|
      <router-link to="//clans">Clans</router-link>|
       <router-link to="//comminity">Community</router-link>|
         <router-link to="//server">Server</router-link>|

<list2>
       <router-link to="//server">Log in</router-link>|
       <router-link to="//server">Sign up</router-link>|
      
</list2>

      
    </div>
    <router-view />
  </div>
</template>

<style>
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
  color: white;
  background-color: black;

 width: 100%;
  height: 750px;

   

}

#nav {

 /*background-color: pink; */
float: right;
  font-size: 0.25in;
  margin-left: 30px;
  

}

#nav a {
  font-weight: bold;
  color: white;
  
}

#nav a.router-link-exact-active {
  color: #42b983;
  /*color:white;*/
}
mg {
padding:10px;

}
#imgbox {
  height:350pxpx;
  width: 500pxpx;
  float:left;
  overflow: hidden;
  /*border: solid 2px white;*/
  margin-left: 10px;
  margin-top: 0px;
  background-repeat: no-repeat;
  background-position: center !important;
  background-size: contain;
}
list2{
  background-color: black;
}
</style>
