<template>
  <div class="home">
    <div>
    <img class="image" alt="" src="../assets/ProductBox.png">
    
    </div>
   <div>
    <form action="" method="post" id="signup">
      <label for="user">User Name:</label>
      <input type="text" id="user" required v-model="userName"><br><br>
      <label for="password"> password:</label>
      <input type="password" id="password" v-model="password"><br><br>

      <input type="submit" value="signUp">
    </form>
   </div>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>


<style scoped>
.image {
max-width:500px;
height: 250px;
}
#signup{
  display: block;
  border: lightgray;
  margin-bottom: 10px;
  margin-top: 0;
}
input label{
  display:grid;
  grid-column: auto;

}
/*Tablet*/
@media screen and (min-width: 768px) and (max-width: 1024px) {
.image {
max-width:1000px;
height: 500px;
}
}

/*Desktop*/
@media screen and (min-width: 1025px){
.image {
max-width:1000px;
height: 500px;
}
}
</style>


