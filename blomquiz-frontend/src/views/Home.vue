<template>
  <div class="home">
    <div>
             <!--   
    <img class="image" alt="" src="../assets/quiz_logga.jpg">
  -->
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style scoped>
.image {
width:400px;
}

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
/*Tablet*/
@media screen and (min-width: 768px) and (max-width: 1024px) {
.image {
width:625px;
}
}

/*Desktop*/
@media screen and (min-width: 1025px){
.image {
width:625px;
}

}
</style>