
  <template>
  <div class="Login">
      <!-- when searching for players
    <h1>This is a Players Page</h1> <br>
    <br>
    
     <input type="text" placeholder="Search player" name="search"> 
     -->

  <!-- when searching for players 
    <button @click="search">Searcher</button> -->

   

<div class="container">


   <form class="contact-form" @submit.prevent="sendEmail">
    <label>Email</label>
    <!--<input type="text" name="user_name"> -->
    <input type="email" name="user_email">

    <label>Password</label>
    <input type="password" name="password">
    <button type="submit">Login</button>
    
  </form>
    <!--
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>
        
    <button type="submit">Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember"> Remember me
    </label>
    -->
      <!--
    <input type="text" placeholder="Search player" name="search">
<button @click="search">Searcher</button>




-->
  </div>
<div id="input">


     <div class="container" style="background-color:#f1f1f1">
    <button type="button" class="cancelbtn">Cancel</button>
    <span class="psw">Forgot <a href="#">password?</a></span>
  </div>

  
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
    }, 
    user_email(){
      alert('enter correct email');
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