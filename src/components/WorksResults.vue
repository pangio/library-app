<template>
  <div class="work">
    <h4 vi>{{ $store.state.author.name}}</h4>
    <ul>
      <li v-for="work in $store.state.workList" 
        :key="work.key"
        @click="fetchBookDetails(work.key)"
        class="work-item">
          {{ work.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'WorksResults',
  methods: {
    async fetchBookDetails(key) {
      const bookKey = key.split('/')[2]
      if (!bookKey) return
      await axios.get(`https://openlibrary.org/works/${bookKey}.json`)
        .then(response => {
          if(response.data) {
            this.$store.commit('updateAuthorList', [])
            this.$store.commit('updateWorkList', [])
            this.$store.commit('updateWork', response.data)
          }
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  text-align: start;
  padding: 0;
}
.work-item {
  cursor: pointer;
  list-style: none;
  padding: 4px;
}
.work-item:hover {
  background-color: #a3d8c0;
  border-radius: 3px;
}
</style>