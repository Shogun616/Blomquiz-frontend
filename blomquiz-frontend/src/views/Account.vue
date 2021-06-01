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

<!-- The core Firebase JS SDK is always required and must be listed first -->
<!--<script src="https://www.gstatic.com/firebasejs/8.6.1/firebase-app.js"></script>-->
<!--<script src="https://www.gstatic.com/firebasejs/8.6.1/firebase-auth.js"></script>-->


<!--<script>-->
<!--// Your web app's Firebase configuration-->
<!--import firebase from "firebase";-->

<!--const firebaseConfig = {-->
<!--  apiKey: "AIzaSyAS2ZgyT42b9Ff0DUXVbKlyOGhJFe9dYNs",-->
<!--  authDomain: "blomauth.firebaseapp.com",-->
<!--  projectId: "blomauth",-->
<!--  storageBucket: "blomauth.appspot.com",-->
<!--  messagingSenderId: "42113241521",-->
<!--  appId: "1:42113241521:web:ecda05d5dc7be808b2ad90"-->
<!--};-->
<!--// Initialize Firebase-->
<!--firebase.initializeApp(firebaseConfig);-->


<!--</script>-->

<!--<script type="text/javascript">-->
<!--function signUp() {-->
<!--  alert("signUp");-->
<!--  var email = document.getElementById('email').value;-->
<!--  var password = document.getElementById('password').value;-->
<!--  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {-->
<!--    // Handle Errors here.-->
<!--    var errorCode = error.code;-->
<!--    var errorMessage = error.message;-->
<!--    if (errorCode === 'auth/weak-password') {-->
<!--      alert('The password is too weak.');-->
<!--    } else {-->
<!--      alert(errorMessage);-->
<!--    }-->
<!--    console.log(error);-->
<!--  });-->
<!--  -->
<!--  callUrl(email);-->
<!--}-->

<!--function callUrl(email) {-->
<!--  window.location = 'http://localhost:3000/api/users/' + email;-->
<!--}-->

<!--function testinlog() {-->
<!--  firebase.auth().onAuthStateChanged(function (user) {-->
<!--    if (user) {-->
<!--      loginUser = (user.email);-->
<!--    } else {-->
<!--      alert("fel")-->
<!--    }-->
<!--  });-->
<!--}-->
<!--</script>-->


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
        alert('Successfully logged in');
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
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
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
