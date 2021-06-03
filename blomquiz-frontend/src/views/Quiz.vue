<template>

  <div class="quiz">
    <div class="quiz">
      <div class="userInfo">
        <p>Inloggad som: {{ this.email }}.</p>
        <p>Bästa resultat på denna nivå: {{ this.highScore }}</p>
      </div>
      <div v-if="visible">
        <button v-on:click="getAlternatives" class="style_btn">Start</button>

        <article>
          <p>Tryck på starta-knappen för att börja spelet.</p>
        </article>
        <h1>🌻</h1>
      </div>

      <div v-if="startGame">
        <div>
          <p>
            Fråga: {{ questionNumber }} / 10 (Nivå: {{ level }}).
          </p>
          <h2>{{ question }}</h2>
        </div>
        <div class="question">
          <form v-on:submit.prevent="checkAnswer">
            <div class="popup" v-if="seenPopup">

              <h1 v-if="answer === 'Rätt'" style="color: #6D8227">{{ answer }}</h1>
              <h1 v-else-if="answer ==='Fel'" style="color: #BA5D23">{{ answer }}</h1>
              <p>{{ info }}</p>
              <button type="button" v-on:click="next" class="style_btnX">X</button>
            </div>
            <img class="image" :src="'img/' + image" alt="" style="">
            <br>
            <label>{{ alt[0] }}</label>
            <input type="radio" :value="alt[0]" name="answer" v-model="select">
            <br>
            <label>{{ alt[1] }}</label>
            <input type="radio" :value="alt[1]" name="alt1" v-model="select">
            <br>
            <label>{{ alt[2] }}</label>
            <input type="radio" :value="alt[2]" name="alt2" v-model="select">
            <br>
            <div>

              <input type="submit" value="Skicka" class="style_btn">
              <button type="button" v-on:click="exitGame" class="style_btn">Avbryt</button>
              <button type="button" v-on:click="saveProgress" class="style_btn">Spara</button>
            </div>
            <div>
              <article><p>
                Antal rätt: {{ counter }} / 10 rätt
              </p>
              </article>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Quiz.vue",
  components: {

  },
  data: function () {
    return {
      answer: " ",
      select: '',
      selected: [],
      isTrue: false,
      seenPopup: false,
      question: "Vilken blomma är det här?",
      flowers: [],
      image: "",
      info: "",
      correctAnswer: "",
      alt1: "",
      alt2: "",
      alt: [],
      level: localStorage.getItem('level'),
      index: 0,
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
  mounted() {
    fetch('http://127.0.0.1:3000/api/flowers/')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.flowers = data.flower;
        })
  },
  methods: {
    checkAnswer: function () {
      this.selected.push(this.select)
      if (this.selected[0] === this.correctAnswer) {
        this.answer = "Rätt"
        this.isTrue = true
        this.counter++
      } else {
        this.answer = "Fel"
        this.isTrue = false
      }
      this.seenPopup = true
    },
    next() {
      this.seenPopup = false
      this.selected = []
      if (this.index === 10 || this.index === 20) {
        this.checkLevel()
      }
      this.getAlternatives()
    },
    exitGame() {
      this.seenPopup = false
      this.index = 0
      this.counter = 0
      this.startGame = false
      this.visible = true
    },
    checkLevel() {
      if (this.counter === 10 && this.level === '1') {
        alert("Grattis! Du svarade rätt på alla frågorna.");
        this.level = '2';
        this.counter = 0;
        this.saveProgress();
      } else if (this.counter === 10 && this.level === '2') {
        alert("Grattis! Du klarade level 2 yay!")
        this.level = '3';
        this.index = 0;
        this.counter = 0;
        this.saveProgress();
      } else if (this.counter === 10 && this.level === '3') {
        alert("Grattis! Du kan Allt!")
        this.question = "Vilken blomma är det här?"
        this.level = '1';
        this.index = 0;
        this.counter = 0;
        this.saveProgress();
      } else {
        alert("Tyvärr! Du svarade inte rätt på alla frågorna. Försök igen.");
        this.index = this.index - 10;
        this.saveProgress();
        this.counter = 0;
      }

    },

    saveProgress() {
      alert(this.email + 'saved');
      axios.patch('http://localhost:3000/api/users/' + this.email + '/' + this.level + '/' + this.counter).then(response => this.responseData = response.data);
      localStorage.setItem('result', this.counter)
      this.highScore = localStorage.getItem('result')
    },

    getAlternatives() {
      this.startGame = true
      this.visible = false
      if (this.flowers[this.index].level === parseInt(this.level)) {
        this.correctAnswer = this.flowers[this.index].name
        this.alt1 = this.flowers[Math.floor(Math.random() * 10 * parseInt(this.level))].name
        this.alt2 = this.flowers[Math.floor(Math.random() * 10 * parseInt(this.level))].name
        if (this.alt1 === this.alt2 || this.alt1 === this.correctAnswer || this.alt2 === this.correctAnswer) {

          this.getAlternatives()

        }else {
          this.questionNumber = this.flowers[this.index].questionNumber;
          this.image = this.flowers[this.index].url;
          this.info = this.flowers[this.index].info;
          this.alt[0] = this.alt1;
          this.alt[1] = this.alt2;
          this.alt[2] = this.correctAnswer;
          this.index++
        }
      } else if (this.level === '3') {
        this.level3()
      } else {
        this.index++
        this.getAlternatives()
      }
      this.alt.sort()
    },

    level3() {
      this.questionNumber = this.flowers[this.index].questionNumber;
      this.image = this.flowers[this.index].url;
      this.info = this.flowers[this.index].info;
      this.question = this.flowers[this.index].infoQuestion;
      this.alt1 = this.flowers[this.index].answerC;
      this.alt2 = this.flowers[this.index].answerB;
      this.correctAnswer = this.flowers[this.index].answerA;
      this.alt[0] = this.alt1;
      this.alt[1] = this.alt2;
      this.alt[2] = this.correctAnswer;
      this.index++

    }
  }
};
</script>

