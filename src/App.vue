<template><!--template where webpage component layout is defined-->
  <div id="background" style=background-repeat:repeat-y><!-- div that makes that defines the background with a style setting-->
    <div id="app"><!--(unused) app div-->
    </div>
    <div id="imgbox"><!--box within the image is defined-->
      <img alt="logo" src="./assets/stellarprey_logo_01a.png">
    </div>
    
    <br><br><br><!-- breaks for spacing-->
    
    <div id="nav"><!--div for all text-type links-->
      <!--creates router links to each page of website-->
      <router-link to="/">Home</router-link> &nbsp;        
      <router-link to="//About">About</router-link>&nbsp;
      <router-link to="//Players">Players</router-link>&nbsp;
      <router-link to="//Clans">Clans</router-link>&nbsp;
      <router-link to="//Community">Community</router-link>&nbsp;
      <router-link to="//Servers">Servers</router-link>&nbsp;
      <router-link to="//Login">Log in</router-link>&nbsp;
      <router-link to="//Signup">Sign up</router-link>&nbsp;   

      <!--creates external link to forum-->
      <a href="https://forum.grangerhub.com/" target="_blank" rel="noopener" id="forum">Forum</a>
    </div>
    <!--displays router links-->
    <router-view />
  </div>
</template>

<!--style settings for webpage-->
<style>
/*forces background to expand to outer edges*/
*{
  
  margin: 0;
}

/*formatting style code for app div, line 3 (unused)*/
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
 -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  
}

/*formatting style code for background div, line 2*/
#background{
  /*sets image to background*/
  background-image:url('./assets/orange-purple.jpg');  
  /*sets minimum dimensions for background*/
  min-height: 100vh;
  min-width: 100vw;
  /*sets background position and size*/
  background-position:center;
  Background-size: cover;
}

/*formatting style code for nav div, line 11*/
#nav {
  /*changes font size*/
  font-size: 0.3in;
  /*margin and positioning of nav on page*/
  margin-left: 20px;
  position:absolute;
  top:10%;
  left:24%;
  left:26%;
  /*how to display the info/list*/
  display:inline;
}

/*formatting style code for link-type text in nav div, lines 13-23*/
#nav a {
  /*default font and color settings for text*/
  font-weight: bold;
  color:white;
}

/*formatting style code for any clicked link-type text in nav div, lines 13-23*/
#nav a.router-link-exact-active {
  /*if text link clicked on, will turn this color*/
  color: #26bcff;
}

/*formatting style code for link-type text on line 23*/
#forum{
  /*positions text farther right from other nav text*/
  margin-left: 3vw;
}

/*formatting style code for the image on line 6*/
img {
  /*size of image*/
  height:150px;
  width: 400px;
  /*positioning and distancing of image*/
  float: left;
  padding:10px;
}

/*formatting style code for the imgbox div on line 5*/
#imgbox {
  /*size of box around image*/
  height:150px;
  width: 400px;
  /*positionig of box*/
  float:left;
  margin-left: 2px;
  margin-top: 0px;
  /*background of box and image clipping settings*/
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: center !important;
  background-size: contain;
}

</style>
