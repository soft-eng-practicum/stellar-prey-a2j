<template><!--template where webpage component layout is defined-->
  <div class="community"><!--defines community div to display community info-->
    <div id="input"><!--defines input div to display an input box for searching for communities-->
      <input type="text" placeholder="Search community" name="search"><!--input box to search for communities-->
      <button @click="search">Searcher</button><!--the button for search functionality-->
    </div>
    <br><br><br><br><!-- breaks for spacing-->
    <br><br><br><br>
    <br><br><br><br>
    <br><br><br><br>
    <br><br>
    <div><!--div to hold communities list-->
      <ul><!--displays box around communities in list functionality-->
        <li id="lookup" v-for='communities in communities' :key='communities.id'><!--for loop to display as many communities as possible-->
          <ul2><!--defines list of community info in each box.-->
            <li2>{{communities.id}}</li2><!--defines community id number-->
            <li3>{{communities.name}}</li3><!--defines community name -->
            <li4>{{communities.admin}}</li4><!--defines community's admin's name-->
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

      /*community data array to be displayed*/
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
  /*functions and methods to be used/displayed*/
  methods: {
    /*search method to be used*/
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