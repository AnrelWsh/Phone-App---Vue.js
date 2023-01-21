<template>
  <nav class="flex flex-col justify-center h-[100vh]">
    <router-link to="/journal">Journal</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-link to="/clavier">Clavier</router-link>
  </nav>
  <router-view/>
</template>

<style scoped>
#app {
  color: #2c3e50;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
