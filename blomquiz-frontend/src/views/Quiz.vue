<template>
  <div class="quiz">
  
 

    <p>
    Vilken blomma är det här?
  </p>

  <img class="image" alt ="" src ="../assets/Tussilago.png">

  <form v-on:submit.prevent="checkIsTrue">

  <input v-on:change="checkIsTrue($event)"  type="radio" id="svar1" name="svar1" value="Tussilago">
  <label for="svar1">Tussilago</label>

  <input v-on:change="checkIsTrue($event)" type="radio" id="svar2" name="svar1" value="Maskros">
  <label for="svar2">Maskros</label>

  <input v-on:change="checkIsTrue($event)" type="radio" id="svar3" name="svar1" value="Smörblomma">
  <label for="svar3">Smörblomma</label>

<br>
<br>
 <input type="submit" value="Skicka">
  <input type="submit" value="Avbryt">

</form>

<PopUp v-if="isFalse"  v-bind:msg="svar" style="color: green"></PopUp>
<PopUp v-else style="color: red"> Fel</PopUp>



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
  checkedValue:"",
  svar :" "

}
},

methods: {
/*checkIsTrue: function () {
this.isShowing = "test";
console.log("funkar?");
},*/
checkIsTrue(event) {
    this.checkedValue=event.target.value;
  if(this.checkedValue === "Tussilago"){
    this.isFalse=true
    this.svar="Rätt"
  }
  else {
    this.isFalse = false;
    this.svar="Fel"
  }
    console.log(this.checkedValue)

  }

 /* if(this.value==="Tussilago"){
    this.isFalse=true
    this.svar="Rätt"
  }
  else{
   this.isFalse = false;
    this.svar="Fel"
  }*/
}
};





</script>

<style scoped>

.image {
max-width: 100%;
height: auto;
}


</style>