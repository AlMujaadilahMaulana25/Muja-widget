<template>
  <nav>
    <router-link to="/">Cuaca</router-link> |
    <router-link to="/lokasi">Lokasi</router-link> |
    <router-link to="/stopwatch">Stopwatch</router-link> |
    <router-link to="/foto">Foto</router-link> |
    <router-link to="/gamekotak">Game</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
