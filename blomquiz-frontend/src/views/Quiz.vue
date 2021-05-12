<template>
  <div class="quiz">


    <p>
      {{question}}
    </p>

    <img class="image" alt="" src="../assets/Tussilago.png">
    <div>

      <form v-on:submit.prevent="checkAnswer">

        <!--    v-on:change="checkIsTrue($event)"-->

        <input type="radio" id="svar1" name="svar1" value="Tussilago" v-model="select">

        <label for="svar1">Tussilago</label><br><br>

        <input type="radio" id="svar2" name="svar1" value="Maskros" v-model="select">
        <label for="svar2">Maskros</label><br><br>

        <input type="radio" id="svar3" name="svar1" value="Smörblomma" v-model="select">
        <label for="svar3">Smörblomma</label><br>

        <div class="popup" v-if="seen">
          <h4>info om Bloma</h4>
          <h1 v-if="svar === 'Rätt'" style="color: green">{{ svar }}</h1>
          <h1 v-else-if="svar ==='Fel'" style="color: red">{{svar}}</h1>
          <p>Loren</p>
        </div>

        <br>
        <br>
        <input type="submit" value="Skicka">
        <button type="button" v-on:click="quit">Nästa</button>
        <input type="button" value="Avbryt" >


      </form>
    </div>


<!--    <PopUp v-if="svar === 'Rätt'" v-bind:msg="svar" style="color: green"></PopUp>-->
<!--    <PopUp v-else-if="svar ==='Fel'" v-bind:msg="svar" style="color: red"></PopUp>-->
    <br><br>



  </div>
</template>

<script>
/*import PopUp from '../components/PopUp.vue'*/

export default {
  name: "Quiz.vue",

  components: {
    // PopUp


  },


  data: function () {
    return {
      /*isShowing: " ",
      isFalse: false,
       checkedValue:"",*/
      svar: " ",
      select: '',
      selected: [],
      isTrue: false,
      first: "",
      seen:false,
      question:"Vilken blomma är det här?"
    }
  },

  methods: {

    checkAnswer: function () {
      this.selected.push(this.select)
      if (this.selected[0] === "Tussilago") {
        this.svar = "Rätt"
        this.isTrue = true

      } else {
        this.svar = "Fel"
        this.isTrue = false
      }
      this.seen=true
    },
    quit: function () {
      this.seen=false
      this.selected=[]
    }



    /*checkIsTrue: function () {
    this.isShowing = "test";
    console.log("funkar?");
    },*/
    /*checkIsTrue(event) {
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

      }*/

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

.popup {
  width: 400px;
  padding: 20px;
  margin:10px auto 10px auto;
  background: darkgrey;
  border-radius: 10px;
}

</style>