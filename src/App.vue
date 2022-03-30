<template>
  <div id="app">
    <Search/>
    <AuthorsResults v-if="$store.state.authorsList.length && !$store.state.workList.length"/>
    <WorksResults v-if="$store.state.workList.length"/>
    <BookDetails v-if="$store.state.work"/>
  </div>
</template>

<script>
import AuthorsResults from './components/AuthorsResults.vue'
import WorksResults from './components/WorksResults.vue'
import BookDetails from './components/BookDetails.vue'
import Search from './components/Search.vue'

export default {
  name: 'App',
  components: {
    AuthorsResults,
    WorksResults,
    BookDetails,
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
