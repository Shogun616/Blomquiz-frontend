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
<!--        <p>Lycka till {{this.email}}. Kan du slå ditt förra resultat på {{this.highScore}}</p>-->
        <p>
          Fråga: {{questionNumber}} / 10 (Nivå: {{level}}).
        </p>
        <h2>{{question}}</h2>
      </div>
<div class="question">
      <form v-on:submit.prevent="checkAnswer">
        <!--    v-on:change="checkIsTrue($event)"-->
<div class="popup" v-if="seen">

            <h1 v-if="svar === 'Rätt'" style="color: #6D8227">{{ svar }}</h1>
            <h1 v-else-if="svar ==='Fel'" style="color: #BA5D23">{{ svar }}</h1>
            <p>{{info}}</p>
  <button type="button" v-on:click="next" class="style_btnX">X</button>
          </div>
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
      
          <input type="submit" value="Skicka" class="style_btn">
          <button type="button" v-on:click="exitGame" class="style_btn">Avbryt</button>
          <button type="button" v-on:click="saveProgress"  class="style_btn">Spara</button>
        </div> 
        <div><article><p>
          Antal rätt: {{counter}} / 10 rätt
        </p>
        </article>
        </div>
      </form>
      </div>
      
    </div>
   
    <!--    <PopUp v-if="svar === 'Rätt'" v-bind:msg="svar" style="color: green"></PopUp>-->
    <!--    <PopUp v-else-if="svar ==='Fel'" v-bind:msg="svar" style="color: red"></PopUp>-->
  </div>

</template>

<script>
import axios from "axios";
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
      level: localStorage.getItem('level'),
      questions: 0,
      counter: 0,
      startGame: false,
      visible: true,
      questionNumber: 0,
      responseData: '',
      email: localStorage.getItem('email'),
      highScore: localStorage.getItem('result'),
      findLvl: false
    }
  },
    mounted(){
      fetch('http://127.0.0.1:3000/api/flowers/')
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
        if(this.counter===10 && this.level==='1') {
          alert("Grattis! Du svarade rätt på alla frågorna.");
          this.level = '2'
        }else if (this.counter === 10 && this.level === '2'){
          alert("Grattis! Du klarade level 2 yay!")
          this.level='3';
          this.questions=0;
        }else if (this.counter === 10 && this.level === '3'){
          alert("Grattis! Du kan Allt!")
          this.question="Vilken blomma är det här?"
          this.level='1';
          this.questions=0;
        }else{
          alert("Tyvärr! Du svarade inte rätt på alla frågorna. Försök igen.");
          this.questions=this.questions-10;
        }
        this.counter=0;
      },

      saveProgress(){

  alert(this.email + 'saved');
  axios.patch('http://localhost:3000/api/users/' + this.email + '/' + this.level + '/' + this.counter).then(response => this.responseData = response.data);
  localStorage.setItem('result', this.counter)
},

      getAlternatives(){
        this.startGame = true
        this.visible = false
        if(this.flowers[this.questions].level === parseInt(this.level)){
          this.answer = this.flowers[this.questions].name
          this.alt1 = this.flowers[Math.floor(Math.random() * 10 * parseInt(this.level))].name
          this.alt2 = this.flowers[Math.floor(Math.random() * 10 * parseInt(this.level))].name
          if(this.alt1===this.alt2 || this.alt1 === this.answer || this.alt2 === this.answer){

            this.getAlternatives()

          }/*else if(this.level === '3'){
            this.level3()}*/
          else{
            this.questionNumber = this.flowers[this.questions].questionNumber;
            this.image = this.flowers[this.questions].url;
            this.info = this.flowers[this.questions].info;
            this.alt[0]=this.alt1;
            this.alt[1]=this.alt2;
            this.alt[2]=this.answer;
            this.questions++
          }
        }else if(this.level === '3'){
          this.level3()
        }/*else {
          this.questions++
          this.getAlternatives()
        }*/

        this.alt.sort()
      },

        level3(){
          //this.questions = 0;
          this.questionNumber = this.flowers[this.questions].questionNumber;
          this.image = this.flowers[this.questions].url;
          this.info = this.flowers[this.questions].info;
          this.question=this.flowers[this.questions].infoQuestion;
          this.alt1=this.flowers[this.questions].answerC;
          this.alt2=this.flowers[this.questions].answerB;
          this.answer=this.flowers[this.questions].answerA;
          this.alt[0]=this.alt1;
          this.alt[1]=this.alt2;
          this.alt[2]=this.answer;
          this.questions++

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

/*
.question{
  position:relative;
  width: 300px;
  padding: 20px;
  margin:10px auto 10px auto;
  border-radius: 10px;
  z-index: 0;
  alignment: center;
}


.popup {
  position:absolute;
  width: 320px;
  padding: 20px;
  padding-bottom: 10px;
  margin:10px auto 10px auto;
  background: lightgrey;
  border-radius: 10px;
  z-index:1;
  opacity: 0.9;  
}
*/




/*.random {*/
/*  font-size: 100px;*/
/*}*/
</style>
