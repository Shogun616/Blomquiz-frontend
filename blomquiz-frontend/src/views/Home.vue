<template>
  <div class="home">
    <div>
    <img class="image" alt="" src="../assets/ProductBox.png">
    <HelloWorld msg="välkomen to Blom Quiz challenge"/>
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
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>

.image {
max-width:1000px;
height: 500px;
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
</style>