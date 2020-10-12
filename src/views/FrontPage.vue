<template>
  <div class="frontpage">

    <br><br><br>

    <br><br><br>
  
  
      <img alt="Game image" src="./frontimage.jpg">

       <header2>
      <li2>Join a Community</li2>
      <li2>Join a Server</li2>
      <li2>Install</li2>
    </header2>
  </div>
</template>

<script>
export default {
  name: 'FrontPage',
  props: {
    msg: String
  }
}
</script>



<style scoped>
img {
  width: 100%;
  height: 400px;
  margin-top: 50px;
  margin-bottom: 30px;
  
}
li2 {
  display: inline-block;
  margin: 0 40px;
  background-size: 2in;
  background-color:#8B9F9B;
}
a {
  color: #42b983;
}

header2 {
  text-align: center;
  font-size: 0.5in;
  margin-left: 5%;
}
</style>