<template><!--template where webpage component layout is defined-->
  <div class="players"><!--defines players div to display player info-->
    <div id="input"><!--defines input div to display an input box for searching for users-->
      <input v-model="text" placeholder="search player"><!--input box to search for users-->
      <button @click="search">Searcher</button><!--the button for search functionality-->
    </div>
    <br><br><br><br><!-- breaks for spacing-->
    <br><br><br><br>
    <br><br><br><br>
    <br><br><br><br>
    <br><br>
    <div><!--div to hold users list-->
      <ul><!--displays box around users in list functionality-->
        <li id="lookup" v-for='users in users' :key='users.id'><!--for loop to display as many users as possible-->
          <ul2><!--defines list of user info in each box.-->
            <li2>{{users.id}}</li2><!--defines user id number-->
            <li3>{{users.name}}</li3><!--defines user name-->
            <li4>{{users.email}}</li4><!--defines user email-->
          </ul2>
        </li>
      </ul>
    </div>
  </div>
</template>

<!--script for functions and data to be displayed-->
<script>
export default {
  /*data to be displayed*/
  data(){
    return{
      searcher: '',/*search data to be displayed*/

      /*user data array to be displayed*/
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
  /*functions and methods to be used/displayed*/
  methods: {
    /*search method to be used*/
    search(){
      alert("search for a name");
    },
    /*method intended to pull data from mySql server*/
    list(){
      /*creates connection to mysql*/
      var mysql = require('mysql'); 
      var con = mysql.createConnection({  
        host: "localhost",
        user: "root",
        password: "",
        database: "Stellar"
      });        

      /*queries data from database*/ 
      var users = con.query('SELECT * FROM user', (err,rows) => {
        if(err) throw err;
        var array = [];
        rows.forEach( (row) => {
          array.push(row);
        });
        console.log(array);
      });
      
      /*returns data*/
      return users;
    }
  }
}
</script>

<!--style settings for webpage component-->
<style scoped>
/*formatting style code for input, line 4*/
#input{
  /*positioning an display style*/
	float:left;
  display: block;
  margin-top: 30vh;
  right: 40vh;
  position:relative;  
}

/*formatting style code for lookup, line 14*/
#lookup{
  /*display size and style*/
  display: block;
  padding: 50px;
  width:88vw;
  /*text and background color*/
  background-color:#26bcff;
  color:white;
  /*text and box positioning*/
  text-align: center;
  margin-bottom: 3vh;
}
   
/*formatting style code for ul2, line 15*/
ul2{
  /*overall font size*/
  font-size:5vh;
}

/*formatting style code for li2, line 16*/
li2{
  /*positioning*/
  float:left;
}

/*formatting style code for li3, line 17*/
li3{
  /*positioning*/
  float:center;
}

/*formatting style code for li4, line 18*/
li4{
  /*positioning*/
  float:right;
}
</style>