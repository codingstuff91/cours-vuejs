<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'Home' }">Accueil</router-link> |
      <router-link to="/movies">Les films</router-link> | 
      <router-link to="/computed">Les computed properties</router-link> | 
      <router-link to="/watcher">Les watchers</router-link> | 
      <router-link to="/styles">Styles dynamiques</router-link> | 
      <router-link to="/slots">Les slots</router-link> |
      <router-link to="/events">Les events</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
