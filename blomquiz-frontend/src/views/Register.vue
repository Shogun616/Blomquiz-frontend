<template>
  <div>
    <form @submit.prevent="register">
      <h2>Registrera:</h2>
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
      <br><br>
      <button class="style_btn" type="submit">Registrera</button>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
import axios from "axios";
export default {
  name: "Register.vue",
  data: function () {
    return {
      email: "",
      password:"",
      responseData: "",
    }
  },
  methods: {
    register() {
      firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password).
      then(() => {
        alert('Registreringen lyckades! Var vänlig logga in.');

       axios.post('http://localhost:3000/api/users/'+this.email).then(response => this.responseData = response.data);

        this.$router.push('/account');
      })
          .catch(error => {
            alert(error.message);
          });
    },
  },
}
</script>

<style scoped>

</style>