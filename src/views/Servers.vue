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

   <div>
      <ul>
        <li id="lookup" v-for='servers in servers' :key='servers.id'>
          <ul2>
            <li2>{{servers.id}}</li2>
            <li3>{{servers.name}}</li3>
            <li4>{{servers.admin}}</li4>
          </ul2>
        </li>
      </ul>
    </div>
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
      searcher: '',

      servers:[
        {
          id: '1',
          name: 'server',
          admin: 'user4',
        },
        {
          id: '2',
          name: 'server2',
          admin: 'user3'
        },
        {
          id: '3',
          name: 'server3',
          admin: 'user2',
        },
        {
          id: '4',
          name: 'server4',
          admin: 'user'
        }
      ]
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
  margin-top: 30vh;
right: 40vh;
position:relative;
}

#lookup{
  
   display: block;
  padding: 50px;
  background-color:#26bcff;
  width:88vw;
  text-align: center;
  color:white;
  margin-bottom: 3vh;

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
   
ul2{
  font-size:5vh;
}   
li2{
  float:left;
}
li3{
  float:center;
}
li4{
  float:right;
}
  

</style>