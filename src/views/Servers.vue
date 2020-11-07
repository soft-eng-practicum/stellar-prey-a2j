<template>
  <div class="servers">
      <!-- when searching for players
    <h1>This is a Players Page</h1> <br>
    <br>
    
     <input type="text" placeholder="Search player" name="search"> 
     -->

  <!-- when searching for players 
    <button @click="search">Searcher</button> -->


<div id="input">
    <input type="text" placeholder="Search servers" name="search">
<button @click="search">Searcher</button>
    </div><br><br>
    <br><br>
    <br><br>
    <br><br>
      <br><br>
      <br><br>
    <br><br>
    <br><br>
      <br><br>

   <div id="lookup"></div>
   <!--
  <div id="lookup"></div>
  <div id="lookup"></div>
  -->


  </div>
</template>

<script>
export default {
  //name: 'FrontPage',
  //props: {
    //msg: String
  //}
  data(){
    return{
      searcher: ''
    };
  },
  methods: {
    search(){
      alert("search for a name");
    }
  }

}
</script>

<style scoped>
#input{

	float:left;
  display: block;
  padding: 250px;
right:40%;
position:relative;  
width:20%;
}

#lookup{
  
   display: block;
  padding: 50px;
  background-color:#26bcff;
  margin: 0 10px;
  text-align: center;

  /*
  margin-left: 5%;
  


  text-align: center;
  font-size: 0.5in;
  margin-left: 5%;
   position:relative; 
    background-size: 2in;
    display: inline-block;
*/
}
   


  

</style>