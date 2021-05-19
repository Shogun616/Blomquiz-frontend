<template>
  <div id="app" section class="grid-container">
<header>
  <img src="./assets/quiz-header.jpg" class="image_header">
<h1>blomquiz.</h1>
<h2>🌻 bli bäst på växt!</h2>

</header>
    <nav>
      <router-link to="/">  Hem </router-link> 
      <router-link to="/quiz">  Spela </router-link> 
      <router-link to="/account">  Konto </router-link>
      <router-link to="/about">  Spelregler </router-link>
    </nav>
    <main>
 <router-view/>
    </main>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&family=Oswald&family=Raleway:wght@700;900&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@700&display=swap');

/*Mobile*/

#app {
  font-family: 'Montserrat', sans-serif;
  /*font-family: 'Open sans', sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #242614;
  background-color:#F2F2F2;


  
  /*#242B20;*/
}/*
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}*/

section {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;
    grid-template-areas:
    "header"
    "nav"
    "main"
    "footer";
    grid-gap: 20px;
    background-color: white;
}

header {
grid-area: header;
/*display: center;*/
text-align: center;
margin-top: 25px;
margin-bottom: 25px;
padding: 10px;
font-size: 25px;
font-family: 'Montserrat', sans-serif;
  /* background-color: #BFB26F;*/
}

p {
 font-size: 16px;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
}

h1 {
    font-family: 'Raleway', serif;
    font-size: 50px;
    color: #242614;
}

h2 {
 font-family: 'Raleway', serif;
    font-size: 28px;
    color: #242614;
}

.image_header {
  display: grid;
  width:700px;
  height: auto;
  margin: 0 auto 5px;
}

nav {
  grid-area: nav;
  display: flex;
  flex-direction: column;
  text-align: center;
  /*font-size: 16px;*/
  padding: 30px;
   /*font-weight: bold;*/
  /* font-family: 'Raleway', serif;*/
  font-family: 'Poppins', sans-serif;
   font-size: 16px;
   margin-bottom: 25px;
}

a { 
  text-decoration: none; 
  }

nav a:hover {
  text-decoration: underline;
}

nav a {
  flex-direction: column;
    color: #242614;
    padding: 5px;
    margin: 5px;
    font-size: 15px;
  /*
    border-radius: 10px 15px;
    background:  #242B20; 
    width: 150px;
    height: auto;
    text-align: center;*/
}

main {
  grid-area: main;
  margin-bottom: 25px;
}

footer {
  grid-area: footer;
}

.style_btn {
background-color: #242B20;
color:#F2F2F2; 
   border-radius: 5px 5px;
 padding: 5px;
    width: 100px;
    height: auto;
    margin: 5px;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
}

/*Tablet*/
@media screen and (min-width: 768px) and (max-width: 1024px) {

section.grid-container {
width: 1000px;
margin: 20px auto;
}

nav {
  grid-area: nav;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  text-align: center;
  font-size: 16px;
  padding: 5px;
  margin: 5px;
  grid-gap: 5px;
}

}

/*Desktop*/
@media screen and (min-width: 1025px){

nav {
  grid-area: nav;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  text-align: center;
  font-size: 16px;
  padding: 5px;
  margin: 5px;
  grid-gap: 5px;
}

}

</style>
