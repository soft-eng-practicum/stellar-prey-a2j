<template>
  <div class="players">
      <!-- when searching for players
    <h1>This is a Players Page</h1> <br>
    <br>
    
     <input type="text" placeholder="Search player" name="search"> 
     -->

  <!-- when searching for players 
    <button @click="search">Searcher</button> -->


<div id="input">
    <input type="text" placeholder="Search player" name="search">
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
      
    </div>
    <div>
      <ul>
        <li id="lookup" v-for='users in users' :key='users.id'>
          <ul2>
            <li2>{{users.id}}</li2>
            <li3>{{users.name}}</li3>
            <li4>{{users.email}}</li4>
          </ul2>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  
  data(){
    return{
      searcher: '',

      users:[
        {
          id: '1',
          name: 'user',
          email: 'example@gmail.com',
        },
        {
          id: '2',
          name: 'user2',
          email: 'example@gmail.com'
        },
        {
          id: '3',
          name: 'user3',
          email: 'example@gmail.com',
        },
        {
          id: '4',
          name: 'user4',
          email: 'example@gmail.com'
        }
      ]
    };
  },
  methods: {
    search(){
      alert("search for a name");
    },
    list(){
      var mysql = require('mysql'); 
      var con = mysql.createConnection({  
        host: "localhost",
        user: "root",
        password: "",
        database: "Stellar"
      });        

      var users = con.query('SELECT * FROM user', (err,rows) => {
      if(err) throw err;
      var array = [];
      rows.forEach( (row) => {
        array.push(row);
      });
      console.log(array);
      });
      
      return users;
    }
  }
}
</script>

<style scoped>
form {border: 1px solid black;}
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