<template>
  <div class="quiz">

    <p>
      Fråga: {{questions+1}} /10
      {{question}}
    </p>

<!--    <img class="image" alt="" :src="'public/img/tussilago.png'">-->
    <div>
      {{counter}} /Antal Rätt

      <form v-on:submit.prevent="checkAnswer">

        <!--    v-on:change="checkIsTrue($event)"-->

<!--        <img class="image" alt ="" :src ="'../assets/img/'+ image">-->
<!--        <img class="image" alt ="" src =../assets/img/>-->
        <img :src="'img/' + image" alt="" style="">
        <br>

        <!--    <div>-->
        <!--      <ul>-->
        <!--        <li v-for="flower in flowers" :key="flower.id">{{flower.name}}</li>-->
        <!--      </ul>-->
        <!--    </div>-->

        <label>{{alt[0]}}</label>
        <input type="radio" :value="alt[0]" name="answer" v-model="select">
        <br>
        <label>{{alt[1]}}</label>
        <input type="radio" :value="alt[1]" name="alt1" v-model="select">
        <br>
        <label>{{alt[2]}}</label>
        <input type="radio" :value="alt[2]" name="alt2" v-model="select">
        <br>
        <div>

          <div class="popup" v-if="seen">
            <h4>info om Blomman</h4>
            <h1 v-if="svar === 'Rätt'" style="color: green">{{ svar }}</h1>
            <h1 v-else-if="svar ==='Fel'" style="color: red">{{svar}}</h1>
            <p>Loren</p>
          </div>

          <br>
          <br>
<!--          <button v-on:click="getAlternatives">Start</button>-->
          <input type="submit" value="Skicka">
          <button type="button" v-on:click="next">Nästa</button>
          <input type="button" value="Avbryt" >

        </div>
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
      question:"Vilken blomma är det här?",
      flowers: [],
      image: "",
      answer: "",
      alt1: "",
      alt2: "",
      alt: [],
      level: 1,
      questions: 0,
      counter: 0,
    }
  },
    mounted(){
      fetch('http://127.0.0.1:3000/api/flower/')
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            this.flowers = data.flower;
          })
    },
    methods: {
      checkAnswer: function() {
        this.selected.push(this.select)
          if (this.selected[0] === this.answer) {
            this.svar = "Rätt"
            this.isTrue = true
            this.counter++
          } else {
            this.svar = "Fel"
            this.isTrue = false
          }
          this.seen = true
          },

        next () {
          this.seen = false
          this.selected = []
          this.getAlternatives()
        },
      getAlternatives(){

        if(this.flowers[this.questions].level === this.level){
          this.answer = this.flowers[this.questions].name
          this.image = this.flowers[this.questions].url;
          this.alt1 = this.flowers[Math.floor(Math.random() * 10 * this.level)+1].name
          this.alt2 = this.flowers[Math.floor(Math.random() * 10 * this.level)+1].name
          if(this.alt1===this.alt2 || this.alt1 === this.answer || this.alt2 === this.answer){

            this.getAlternatives()
          }else{
            this.alt[0]=this.alt1;
            this.alt[1]=this.alt2;
            this.alt[2]=this.answer;
            this.questions++
          }
        }else {
          this.questions++
          this.getAlternatives()
        }

        this.alt.sort()
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