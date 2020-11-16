<template><!--template where webpage component layout is defined-->
  <div class="clans"><!--defines clans div to display clan info-->
    <div id="input"><!--defines input div to display an input box for searching for clans-->
      <input type="text" placeholder="Search clans" name="search"><!--input box to search for clans-->
      <button @click="search">Searcher</button><!--the button for search functionality-->
    </div>
    <br><br><br><br><!-- breaks for spacing-->
    <br><br><br><br>
    <br><br><br><br>
    <br><br><br><br>
    <br><br>
    <div><!--div to hold clans list-->
      <ul><!--displays box around clans in list functionality-->
        <li id="lookup" v-for='clans in clans' :key='clans.id'><!--for loop to display as many clans as possible-->
          <ul2><!--defines list of clans info in each box.-->
            <li2>{{clans.id}}</li2><!--defines clan id number-->
            <li3>{{clans.name}}</li3><!--defines clan name-->
            <li4>{{clans.admin}}</li4><!--defines clan's admin's name-->
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

      /*clan data array to be displayed*/
      clans:[
        {
          id: '1',
          name: 'clan',
          admin: 'user4',
        },
        {
          id: '2',
          name: 'clan2',
          admin: 'user3'
        },
        {
          id: '3',
          name: 'clan3',
          admin: 'user2',
        },
        {
          id: '4',
          name: 'clan4',
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