<template>
  <div id="search-container">
    <div id="search">
      <span>Search Authors:</span> 
      <input type="text" placeholder="Search Authors" 
        v-model.lazy="inputSearch"
        id="input-search"
        @keyup.enter="searchAuthors()">
    </div>
    
    <div v-if="$store.state.authorsList.length">
      <ul>
        <li v-for="author in $store.state.authorsList" 
          :key="author.key"
          @click="selectAuthor(author.key)"
          class="author-item">
            {{ author.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'Search',
  methods: {
    selectAuthor(authorKey) {
      this.$store.commit('updateAuthorKey', authorKey)
      this.fetchAuthor()
    },
    // TODO implement
    // https://openlibrary.org/books/OL7353617M.json
    fetchBook() {
    },
    fetchAuthor() {
      const { authorKey } = this.$store.state
      console.log(authorKey)
      if (!authorKey) return
      axios.get(`https://openlibrary.org/authors/${authorKey}.json`)
        .then(response => {
          if(response.data) {
            this.$store.commit('updateAuthor', response.data)
            console.log(this.$store.state.author)
          }
        })
        .catch((error) => {
          console.error(error)
        })
    },
    searchAuthors() {
      if (!this.inputSearch) return
      axios.get(`https://openlibrary.org/search/authors.json?q=${this.inputSearch}`)
        .then(response => {
          if(response.data && response.data.numFound > 0) {
            this.$store.commit('updateAuthorsList', response.data.docs)
          }
        })
        .catch((error) => {
          console.error(error)
        })
    }
  },
  data() {
    return {
      // model for input search
      inputSearch: '',
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
}
ul {
  list-style-type: none;
  text-align: start;
  padding: 0;
}
li {
  max-width: 300px;
}
.author-item {
  cursor: pointer;
  list-style: none;
  padding: 4px;
}
.author-item:hover {
  background-color: #a3d8c0;
  border-radius: 3px;
}
</style>
