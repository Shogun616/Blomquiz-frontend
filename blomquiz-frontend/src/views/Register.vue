<template>
  <div>
    <form @submit.prevent="register">
      <h2>Register</h2>
      <input
          type="email"
          placeholder="Email address..."
          v-model="email"
      />
      <input
          type="password"
          placeholder="password..."
          v-model="password"
      />
      <button type="submit">Register</button>
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
        alert('Successfully registered! Please login.');

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