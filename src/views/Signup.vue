<template><!--template where webpage component layout is defined-->
  <div class="Signup"><!--defines signup div for signup page-->

    <form action="/action_page.php" style="border:0px solid red"> <!--creates a form to denfine the page as an action page-->
 
      <div class="color"> <!--div class to hold all objects regarding login--> 

        <!--field for entering email-->
        <label for="email"><b>Email</b></label> 
        <input type="text" placeholder="Enter Email" name="email" required>

        <!--field for entering password-->
        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required>

        <!--field for entering password again-->
        <label for="psw-repeat"><b>Repeat Password</b></label>
        <input type="password" placeholder="Repeat Password" name="psw-repeat" required>

        <!--check to "remember me" defined here-->
        <label>
          <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
        </label>

        <!--terms and service agreement-->
        <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>

        <div class="clearfix"><!--contains signup and cancel buttons-->
          <button type="button" class="cancelbtn">Cancel</button>
          <button type="submit" class="signupbtn">Sign Up</button>
        </div>
      </div>
    </form>
  </div>
</template>

<!--style settings for webpage component-->
<style scoped>
/*setting font types*/
body {font-family: Arial, Helvetica, sans-serif;}
/*box around everything*/
* {box-sizing: border-box}
/* Full-width input fields, line 13*/
input[type=text], input[type=password] {
  /*size*/
  width: 100%;
  /*positioning*/
  padding: 15px;
  margin: 10px 0 22px 0;
  display: inline-block;
  /*color and outline*/
  border: none;
  background: #f1f1f1;
}
input[type=text]:focus, input[type=password]:focus {
  /*color and outline*/
  background-color: #ddd;
  outline: none;
}
hr {
  /*border*/
  border: 1px solid purple;
  /*position*/
  margin-bottom: 25px;
}
/* Set a style for all buttons, lines 29-30*/
button {
  /*color*/
  background-color: #4CAF50;
  color: white;
  /*positioning*/
  padding: 14px 20px;
  margin: 8px 0;
  /*stylization*/
  border: none;
  cursor: pointer;
  opacity: 0.9;
}
/*button becomes less translucent when hovering over with mouse*/
button:hover {
  opacity:1;
}
/* Extra styles for the cancel button */
.cancelbtn {
  /*color*/
  background-color: #f44336;
  /*position*/
  float: left;
  width: 15%;
  }
/* Float cancel and signup buttons and add an equal width */
.signupbtn {
  /*positioning*/
  float: center;
  width: 15%;
  margin-left: 5px;
}
/* Add padding to container elements */
.container {
  padding: 16px;
}
/* Clear floats */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
/*colorization of text*/
label{
  color:white;
}
p{
  color:white;  
}
/* Change styles for cancel button and signup button on extra small screens */
@media screen and (max-width: 300px) {
  .cancelbtn, .signupbtn {
     width: 100%;
  }
}
.color{
  width:50%;
  margin: 200px 0px 29px 25vw;
   
}
</style>