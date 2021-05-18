<template>
  <div id="app" section class="grid-container">
<header>
  <h1><img src="./assets/ProductBox.png" class="image_header"></h1>
  </header>

    <nav>
  
        <img src="./assets/logo.jpg" class="image_header">
      <router-link to="/"> Hem </router-link> 
      <router-link to="/quiz"> Starta spelet </router-link> 
            <router-link to="/about"> Konto </router-link>
      <router-link to="/about"> Spelregler </router-link>
    
      
      
    </nav>
    <main>
 <router-view/>

    </main>
   
  </div>
</template>

<style>

/*Mobile*/
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

section {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;
    grid-template-areas:
    "header",
    "nav",
    "main",
    "footer";
    grid-gap: 20px;
    background-color: white;
}

header {
grid-area: header;
display: center;
text-align: center;
padding: 10px;
font-size: 25px;
}

.image_header {
display: grid;
    width: 50px;
    height: auto;
	margin: 0 auto;
    opacity: 0.8;
    margin-bottom: 5px;
}


nav {
  grid-area: nav;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 14px;
  padding: 30px;
}


main {
  grid-area: main;

}

footer {
  grid-area: footer;
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
  margin: 5px;
  grid-gap: 5px;
}

}


/*Desktop*/
@media screen and (min-width: 1025px){

nav {
  grid-area: nav;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  text-align: center;
  font-size: 16px;
  padding: 5px;
  margin: 5px;
  grid-gap: 5px;
}

}

</style>
