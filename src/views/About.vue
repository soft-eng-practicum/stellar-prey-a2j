<template><!--template where webpage component layout is defined-->
  <div><!--div where info is supposed to go about the game-->
    <p><!--game description and synopsis, provided by developer-->
        STELLAR PREY™️ is a first person strategy shooter game that chronicles the 
        conflict between human technology vs extraterrestrial nature, a conflict waged 
        by construction, team coordination, and epic combat. Help shape the course of 
        your species together towards the top of the stellar food chain, or be the 
        prey together on the road towards extinction. Which path will you and your 
        species choose to take? It’s a universal tale of survival vs death, and of 
        order vs chaos, as old as life itself.
    </p>
    <h2>News</h2><!--Text to define what is the scrollable box is for-->
    <div style="border:3px solid black;width:40vw;height:50vh;overflow:scroll;" id="box"> <!--defines scrollable box for news-->
      <!--each news div defines a section of news with each li being the news-->
      <div id="news"> 
        <li>Example News</li>
        <li>Example News</li>
        <li>Example News</li>
        <li>Example News</li>
      </div>
      <div id="news">
        <li>Example News</li>
        <li>Example News</li>
        <li>Example News</li>
        <li>Example News</li>
        <li>Example News</li>
        <li>Example News</li>
      </div>
      <div id="news">
        <li>Example News</li>
        <li>Example News</li>
        <li>Example News</li>
        <li>Example News</li>
        <li>Example News</li>
      </div>
      <div id="news">
        <li>Example News</li>
        <li>Example News</li>
        <li>Example News</li>
        <li>Example News</li>
        <li>Example News</li>
      </div>
      <div id="news">
        <li>Example News</li>
        <li>Example News</li>
      </div>
    </div>
  </div>
</template>

<!--style settings for webpage component-->
<style scoped>
/*formatting style code for p, line 3*/
p {
  /*text color*/
  color:white;
  /*text positioning*/
  text-align: left;
  margin-top: 30vh;
  margin-left: 5vh;
  /*text size*/
  font-size: 0.3in;
  width: 700px;
}

/*formatting style code for box div, line 13*/
#box{
  /*positioning of box*/
  float:right;
  margin-right:5vw;
  margin-top:-42vh;
}

/*formatting style code for h2, line 12*/
h2{
  /*text size*/
  font-size: 0.5in;
  /*text position to above news box*/
  margin-top:-49vh;
  float:right;
  margin-right: 38vw;
}

/*formatting style code for news divs, lines 15-43*/
#news{
  /*outline for each div to set them apart*/
  border: 1px solid black;
}

/*formatting style code for li, lines 16-45*/
li{
  /*max size of li to remove overflow*/
  max-width: 40vw;
}
</style>
