<template>
  <div class="account">
    <div>
      <form action="" method="post" id="signup">
        <label for="user">Användarnamn: </label>
        <input type="text" id="user" required v-model="userName"><br><br>
        <label for="password"> Lösenord: </label>
        <input type="password" id="password" v-model="password"><br><br>

        <input type="submit" class="style_btn" value="Logga in">
        <br><br>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home'
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