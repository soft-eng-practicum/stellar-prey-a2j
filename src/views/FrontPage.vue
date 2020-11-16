<template><!--template where webpage component layout is defined-->
  <div class="frontpage"><!-- defines the homepage component-->

    <br><br><br><!--breaks for spacing-->
    <br><br><br> 
  
    <!--picture of the game-->
    <img alt="Game image" src="../assets/frontimage.jpg">

    
    <header2><!--displays a short list of things to do on the webpage-->
      <li2>Join a Community</li2>
      <li2>Join a Server</li2>
      <li2>Install</li2>
    </header2>
  </div>
</template>

<!--style settings for webpage component-->
<style scoped>

/*formatting style code for img, line 8*/
img {
  /*size of the image*/
  width: 1000px;
  height: 400px;
  /*positioning of the image on the page*/
  margin-top: 20px;
  margin-bottom: 30px;
  margin-left: 250px;
}

/*formatting style code for li2, line 12-14*/
li2 {
  /*how info is displayed and positioning*/
  display: inline-block;
  margin: 0 100px;
  /*size and color of background to text*/
  background-size: 2in;
  background-color:#26bcff;
}

/*formatting style code for header2, line 11*/
header2 {
  /*text formatting, including size and alignment*/
  text-align: center;
  font-size: 0.5in;
}
</style>