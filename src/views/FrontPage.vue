<template>
  <div class="frontpage">

    <br><br><br>

    <br><br><br>
  
  
      <img alt="Game image" src="../assets/frontimage.jpg">

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
  width: 1000px;
  height: 400px;
  margin-top: 20px;
  margin-bottom: 30px;
  margin-left: 250px;
  
}
li2 {
  display: inline-block;
  margin: 0 100px;
  background-size: 2in;
  background-color:#26bcff;
  

}
a {
  color: #26bcff;
}

header2 {
  text-align: center;
  font-size: 0.5in;
}
</style>