<template>
  <div class="quiz">
  
 

    <p>
    Vilken blomma är det här?
  </p>

  <img class="image" alt ="" src ="../assets/Tussilago.png">

  <form v-on:submit.prevent="isCorrectAnswer">

  <input type="radio" id="svar1" name="svar1" value="Tussilago">
  <label for="svar1">Tussilago</label>

  <input type="radio" id="svar2" name="svar1" value="Maskros">
  <label for="svar2">Maskros</label>

  <input type="radio" id="svar3" name="svar1" value="Smörblomma">
  <label for="svar3">Smörblomma</label>

<br>
<br>
 <input type="submit" value="Skicka">
  <input type="submit" value="Avbryt">

</form>

<PopUp v-if="isFalse"></PopUp>




{{ isShowing }}

  </div>
</template>

<script>
import PopUp from '../components/PopUp.vue'

export default {
  name: "Quiz.vue",

  components: {
  PopUp


  },


data: function () {
return {
isShowing: " ",
isFalse: false,
}
},

methods: {
checkIsTrue: function () {
this.isShowing = "test";
console.log("funkar?");
},
isCorrectAnswer: function(){
this.isFalse = true;
}
}

};



</script>

<style scoped>

.image {
max-width: 100%;
height: auto;
}


</style>