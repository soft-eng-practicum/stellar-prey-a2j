<template>
  <div class="community">
      <!-- when searching for players
    <h1>This is a Players Page</h1> <br>
    <br>
    
     <input type="text" placeholder="Search player" name="search"> 
     -->

  <!-- when searching for players 
    <button @click="search">Searcher</button> -->


<div id="input">
    <input type="text" placeholder="Search community" name="search">
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
        <li id="lookup" v-for='communities in communities' :key='communities.id'>
          <ul2>
            <li2>{{communities.id}}</li2>
            <li3>{{communities.name}}</li3>
            <li4>{{communities.admin}}</li4>
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

      communities:[
        {
          id: '1',
          name: 'community',
          admin: 'user4',
        },
        {
          id: '2',
          name: 'community2',
          admin: 'user3'
        },
        {
          id: '3',
          name: 'community3',
          admin: 'user2',
        },
        {
          id: '4',
          name: 'community4',
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