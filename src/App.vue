<template>
  <div id="app">
    <Search/>
    <!-- <Author author="Simon Sinek"/>
    <Book book="Leaders eat last"/> -->
    <!-- <div>{{store.state.fff}}</div> -->
  </div>
</template>

<script>
// import Author from './components/Author.vue'
// import Book from './components/Book.vue'
import Search from './components/Search.vue'

export default {
  name: 'App',
  components: {
    // Author,
    // Book,
    Search
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 40px;
}
</style>
