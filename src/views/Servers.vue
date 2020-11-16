<template><!--template where webpage component layout is defined-->
  <div class="servers"><!--defines clans div to display server info-->
    <div id="input"><!--defines input div to display an input box for searching for servers-->
      <input type="text" placeholder="Search servers" name="search"><!--input box to search for servers-->
      <button @click="search">Searcher</button><!--the button for search functionality-->
    </div>
    <br><br><br><br><!-- breaks for spacing-->
    <br><br><br><br>
    <br><br><br><br>
    <br><br><br><br>
    <br><br>
    <div><!--div to hold servers list-->
      <ul><!--displays box around servers in list functionality-->
        <li id="lookup" v-for='servers in servers' :key='servers.id'><!--for loop to display as many servers as possible-->
          <ul2><!--defines list of clans info in each box.-->
            <li2>{{servers.id}}</li2><!--defines server id number-->
            <li3>{{servers.name}}</li3><!--defines server name-->
            <li4>{{servers.admin}}</li4><!--defines server's admin's name-->
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

      /*server data array to be displayed*/
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
  /*functions and methods to be used/displayed*/
  methods: {
    /*functions and methods to be used/displayed*/
    search(){
      alert("search for a name");
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
  right:40vh;
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