<template>
  <div class="quiz">
<div v-if="visible">

  <button v-on:click="getAlternatives" class="style_btn">Start</button>
<article>
  
  <p>Tryck på starta-knappen för att börja spelet.</p>
</article>
<h1>🌻</h1> 
</div>
<!--    <img class="image" alt="" :src="'public/img/tussilago.png'">-->
    <div v-if="startGame">
      <div>
        <p>
          Fråga: {{questionNumber}} / 10 (Nivå: {{level}}).
        </p>
           <h2>Vilken blomma är det här?</h2>
  
     
      </div>

      <form v-on:submit.prevent="checkAnswer">

        <!--    v-on:change="checkIsTrue($event)"-->

<!--        <img class="image" alt ="" :src ="'../assets/img/'+ image">-->
<!--        <img class="image" alt ="" src =../assets/img/>-->
        <img class="image" :src="'img/' + image" alt="" style="">
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
           
            <h1 v-if="svar === 'Rätt'" style="color: #6D8227">{{ svar }}</h1>
            <h1 v-else-if="svar ==='Fel'" style="color: #BA5D23">{{ svar }}</h1>
           
            <p>{{info}}</p>
          </div>

          <br>
          <br>
          <input type="submit" value="Skicka" class="style_btn">
          <button type="button" v-on:click="next" class="style_btn">Nästa</button>
          <button type="button" v-on:click="exitGame" class="style_btn">Avbryt</button>
        </div> 
        <div><article><p>
          Antal rätt: {{counter}} / 10 rätt
        </p>
        <p></p>
        </article>
        </div>
      </form>
    </div>
    <!--    <PopUp v-if="svar === 'Rätt'" v-bind:msg="svar" style="color: green"></PopUp>-->
    <!--    <PopUp v-else-if="svar ==='Fel'" v-bind:msg="svar" style="color: red"></PopUp>-->
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
      info: "",
      answer: "",
      alt1: "",
      alt2: "",
      alt: [],
      level: 1,
      questions: 0,
      counter: 0,
      startGame: false,
      visible: true,
      questionNumber: 0,
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
          if(this.questions===10||this.questions===20){
            this.checkLevel()
          }
          this.getAlternatives()
        },
      exitGame(){
        this.seen = false
        this.questions = 0
        this.counter = 0
        this.startGame = false
        this.visible = true
      },
      checkLevel(){
        if(this.counter===10){
          alert("green");
          this.level=2;
        }else{
          alert("red");
          this.questions=this.questions-10;
        }
        this.counter=0;
      },
      getAlternatives(){
        this.startGame = true
        this.visible = false
        if(this.flowers[this.questions].level === this.level){
          this.answer = this.flowers[this.questions].name
          this.alt1 = this.flowers[Math.floor(Math.random() * 10 * this.level)+1].name
          this.alt2 = this.flowers[Math.floor(Math.random() * 10 * this.level)+1].name
          if(this.alt1===this.alt2 || this.alt1 === this.answer || this.alt2 === this.answer){

            this.getAlternatives()
          }else{
            this.questionNumber = this.flowers[this.questions].questionNumber;
            this.image = this.flowers[this.questions].url;
            this.info = this.flowers[this.questions].info;
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
  height: 400px;
}
.popup {
  width: 400px;
  padding: 20px;
  margin:10px auto 10px auto;
  background: lightgrey;
  border-radius: 10px;
}

.random {
  font-size: 100px;
}
</style>