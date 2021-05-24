<template>
<body>
  <div id="app">
    <section class="grid-container">
<header>
 <h1> <img src="./assets/quiz_logga.jpg" class="image_header" alt=""> </h1>
</header>
    <nav>
    <router-link to="/">  Hem </router-link> 
      <router-link to="/quiz">  Spela </router-link>
      <router-link to="/account">  Logga in </router-link>
      <router-link to="/register">  Ny användare </router-link>
      <router-link to="/about">  Spelregler </router-link>
    </nav>
    <main>
 <router-view/>
    </main>
    </section>
  </div>
  </body>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&family=Oswald&family=Raleway:wght@700;900&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Poppins:wght@700&display=swap');

/*Mobile*/
body {
  background-color: #242614;
}

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
  background-color: #E09D31; /*#BFB26F;*/
}

p {
  font-size: 16px;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
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

nav a:hover {
  text-decoration: white;
}

nav a {
  flex-direction: column;
  color: #F2F2F2;
  background-color: #242614;
  padding: 5px;
  margin: 5px;
  font-size: 15px;
  text-decoration: underline;
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
  padding: 5px;
  width: 90px;
  height: auto;
  margin: 5px;
  font-family: 'Poppins', sans-serif;
}

.image_header {
  display: grid;
  width: 360px;
  height: auto;
  margin: 0 auto 5px;
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
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  text-align: center;
  font-size: 16px;
  padding: 5px;
  grid-gap: 5px;
  margin: 5px 5px 50px;
}

.image_header {
  width:750px;
}
}

/*Desktop*/
@media screen and (min-width: 1025px){

  .image_header {
    width:800px;
  }

  section.grid-container {
    width: 1000px;
    margin: 20px auto;
  }

  nav {
    grid-area: nav;
    display: grid;
    grid-template-columns:1fr 1fr 1fr 1fr 1fr;
    text-align: center;
    font-size: 16px;
    padding: 5px;
    grid-gap: 5px;
    margin: 5px 5px 50px;
  }
}
</style>
