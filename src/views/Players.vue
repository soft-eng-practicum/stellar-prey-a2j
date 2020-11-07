<template>
  <div class="players">


<div id="input">
   <!-- <input type="text" placeholder="Search player" name="search">
   -->
<input v-model="text" placeholder="search palyer">
<!--<p>Message is: {{ message }}</p> -->
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



  </div>
</template>

<script>
export default {
  name: 'players',
  props: {
    message: String
  },
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
  background-color:#8B9F9B;
  margin: 0 10px;
  text-align: center;
}
   


  

</style>