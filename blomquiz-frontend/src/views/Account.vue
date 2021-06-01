<template>
  <div class="account">
    <div>
      <form action="" @submit.prevent="signIn()" id="signup-form">
         <h2>Logga in:</h2>
     <label>Email:</label> <input
          type="email"
          placeholder="Email address..."
          v-model="email"
      />
      <br><br>
     <label>Lösenord:</label> <input
          type="password"
          placeholder="password..."
          v-model="password"
      />
      <br>
      <br>
        <input type="submit" class="style_btn" value="Logga in">
        <br>
      </form>
    </div>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

<script>

import firebase from "firebase";

export default {
  name: 'Account',
  data: function () {
    return {
      email:'',
      password:'',
      users:[],
    }
  },
  mounted(){
    fetch('http://127.0.0.1:3000/api/users/')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.users = data.user;
        })
  },
  methods:{
   signIn() {
  firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        alert('Du är inloggad!');
        localStorage.setItem('email', this.email)
        localStorage.setItem('level', '1')
        localStorage.setItem('result', '0')
        for (let i = 0; i < this.users.length; i++) {
          if(this.users[i].email === this.email){
            localStorage.setItem('level', this.users[i].level)
            localStorage.setItem('result', this.users[i].result)
          }
        }
        this.$router.push('/quiz')
      })
      .catch(function (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Fel lösenord');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        document.getElementById('quickstart-sign-in').disabled = false;
      });
     },
  }
}

</script>

<style scoped>

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

fieldset {
  padding: 1em;
  border-radius: 10px;
  margin-bottom: 10px;
}

p{
  font-size: 16px;
  line-height:130%;
  padding: 0;
  margin: 0 0 7px;
}

form p {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
</style>
