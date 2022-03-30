<template>
  <div class="authors">
    <h4>Search Results:</h4>
    <ul>
      <li v-for="author in $store.state.authorsList" 
        :key="author.key"
        @click="selectAuthor(author.key)"
        class="author-item">
          <p v-if="author.name"><strong> Name:</strong> {{ author.name}}</p>
          <p v-if="author.bio"><strong> BIO:</strong> {{ author.bio}}</p>
          <p v-if="author.top_work"><strong> Top Work:</strong> {{ author.top_work}}</p>
          <p v-if="author.top_subjects"><strong> Subjects: </strong>
            <span :key="subject" v-for="subject in author.top_subjects">{{ subject }} </span>
          </p>
          <p v-if="author.birth_date"><strong> Born:</strong> {{ author.birth_date}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AuthorsResults',
  methods: {
    selectAuthor(authorKey) {
      this.$store.commit('updateAuthorKey', authorKey)
      this.fetchWorkList()
    },
    async fetchWorkList() {
      const { authorKey } = this.$store.state
      console.log(authorKey)
      if (!authorKey) return

      const responses = await Promise.all([
        await axios.get(`https://openlibrary.org/authors/${authorKey}.json`),
        await axios.get(`https://openlibrary.org/authors/${authorKey}/works.json`)
      ])
      .then((response) => {
        return {
          author: response[0].data,
          workList: response[1].data
        }
      })
      this.$store.commit('updateAuthor', responses.author)
      this.$store.commit('updateWorkList', responses.workList?.entries)
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  text-align: start;
  padding: 0;
  margin-top: 0;
}
.author-item {
  cursor: pointer;
  list-style: none;
  padding: 5px 20px;
  margin: 2px;
  border: 1px solid lightgray;
  border-radius: 5px;
}
.author-item:hover {
  background-color: #a3d8c0;
  border-radius: 3px;
}
</style>