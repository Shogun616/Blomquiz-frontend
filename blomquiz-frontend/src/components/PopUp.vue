<template>
<div class="backdrop">
<div class="popup" :class="popup1">
<h1>{{msg}}</h1>
<p>Loren</p>
<<<<<<< HEAD
<button v-on:click="Next" class="button">Nästa</button>
=======
 <button v-on:click="Next" class="button">Nästa</button>
>>>>>>> 9d1b22e1edf21fbd993209e89861a59684d81b06

</div>
</div>

</template>

<script>
export default {
name: 'PopUp',
  props :{
  msg :String
  }
}

</script>

<style scoped>

.popup{
width: 400px;
padding: 20px;
margin: 100px auto;
background: darkgrey;
border-radius: 10px;
}

.backdrop {
top: 0;
position: fixed;
background: rgba(0,0,0,0.5);
width: 100%;
height: 100%;
}

.button {
float: right;
}

</style>