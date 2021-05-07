<template>
  <div class="home">
    <img class="image" alt="" src="../assets/ProductBox.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
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

<<<<<<< HEAD
</style>
=======
.image {
max-width:100%;
height: auto;
}
</style>
>>>>>>> feature
