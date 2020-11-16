<template><!--template where webpage component layout is defined-->
  <div class="Login"><!--defines login div for login page-->
    <meta name="viewport" content="width=device-width, initial-scale=2"><!--sets view size to depend on the size of screen-->

    <form action="/action_page.php" method="post"><!--creates a form to denfine the page as an action page-->
      <div class="imgcontainer"><!--container for ghost image on login screen-->
        <img src="../assets/avatar.png" alt="Avatar" class="avatar">
      </div>
      <br><br><br><br><!--breaks for spacing-->
      <br><br><br><br>
      <br><br>
      <div class="container"><!--container class for text-->

        <!--field for entering username/email-->
        <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required>
        
        <!--field for entering password--> 
        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required>
        
        <!--login button-->
        <button type="submit">Login</button>

        <!--check for "remember me" box-->
        <label>
          <input type="checkbox" checked="checked" name="remember"> Remember me
        </label>
      </div>

      <div class="container"><!-- container for cancle button and forgot password button-->
        <button type="button" class="cancelbtn" v-on:click="buttonclear()">Cancel</button>
        <span class="psw"><a href="#">Forgot password?</a></span>
      </div>
    </form>
  </div>
</template>

<!--script for functions and data to be displayed-->
<script>
export default {
  /*data to be displayed*/
  data(){
    return{
    
    };
  },
  /*functions and methods to be used/displayed*/
  methods: {
    /*method meant to clear all input boxes once cancel button is clicked*/
    buttonclear(){
      let btnClear = document.querySelector('button');
      let inputs = document.querySelectorAll('input');
 
      btnClear.addEventListener('click', () => {
        inputs.forEach(input =>  input.value = '');
      }); 
    }
  }

}
</script>

<!--style settings for webpage component-->
<style scoped>
/*setting font types*/
body {font-family: Arial, Helvetica, sans-serif;}
/*input fields formatting, line 13*/
input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/*login button formatting, lines 23,32*/
button {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

/*button becomes more translucent when hovering over with mouse*/
button:hover {
  opacity: 0.8;
}

/*cancel button color, size, an positioning, line 32*/
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

/*format for container that holds ghost image, line 6*/
.imgcontainer {
  float: center;
  margin: 85px 0 3px 0;
}

/*format for ghost image, line 7*/
img.avatar {
  /*positioning*/
  float:center;
  width: 10%;
  height: 10%;
  border-radius: 50%;
  margin-left: 18vw;
}

/*format for div container, line 12*/
.container {
  /*positioning*/
  padding: 5px;
  margin-left:25vw;
  width:50%;
  /*color*/
  color:white;
}

/*format for forgot password button, line 33*/
span.psw {
  float: right;
  padding-top: 16px;
  margin-right: 125px;
}

/*color of text*/
label{
  color:white;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
     display: block;
     float: none;
  }
  .cancelbtn {
     width: 100%;
     margin-right: 100px;

  }
}
</style>