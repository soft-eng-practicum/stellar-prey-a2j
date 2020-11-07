<template>
<div class="Login">
<meta name="viewport" content="width=device-width, initial-scale=2">

  <form action="/action_page.php" method="post">
  <div class="imgcontainer">
    <img src="../assets/avatar.png" alt="Avatar" class="avatar">
  </div>
  <br><br><br><br><br><br><br><br><br>
  <div class="container">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>
        
    <button type="submit">Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember"> Remember me
    </label>
  </div>

  <div class="container">
    <button type="button" class="cancelbtn">Cancel</button>
    <span class="psw"><a href="#">Forgot password?</a></span>
  </div>
</form>
  </div>
</template>

<style scoped>
body {font-family: Arial, Helvetica, sans-serif;}

input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

.imgcontainer {
  float: center;
  margin: 85px 0 3px 0;
}

img.avatar {
  float:center;
  width: 18%;
  border-radius: 50%;
  margin-left: 13vw;
}

.container {
  padding: 5px;
  margin-left:40vh;
  width:60%;
  color:white;
}

span.psw {
  float: right;
  padding-top: 16px;
  margin-right: 1250px;
}

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
</style>*/