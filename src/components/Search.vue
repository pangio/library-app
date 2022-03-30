<template>
  <div id="search-container">
    <div id="search">
      <span>Search Author:</span> 
      <input type="text" placeholder="Search Author"
        v-model.lazy="searchTerm"
        id="input-search"
        @focus="clear()"
        @keyup.enter="searchAuthor()">
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'Search',
  methods: {
    clear() {
      this.searchTerm = ''
      this.$store.commit('updateAuthor', {})
      this.$store.commit('updateWork', {})
      this.$store.commit('updateAuthorList', [])
      this.$store.commit('updateWorkList', [])
    },
    async searchAuthor() {
      if (!this.searchTerm) return
      await axios.get(`https://openlibrary.org/search/authors.json?q=${this.searchTerm}`)
        .then(response => {
          if(response.data && response.data.numFound > 0) {
            this.$store.commit('updateAuthorList', response.data.docs)
          }
        })
        .catch((error) => {
          console.error(error)
        })
    }
  },
  data() {
    return {
      searchTerm: '',
    }
  }
}
</script>

<style lang="scss" scoped>
#search-container {
  text-align: start;
}
#search {
  display: inline-block;
}
#input-search {
  padding: 5px;
  margin-left: 10px;
}
</style>
