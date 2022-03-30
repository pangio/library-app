<template>
  <div>
    <p v-if="book.title"><strong>Title: </strong> {{ book.title }}</p>
    <p v-if="book.subtitle"><strong>Subtitle: </strong>{{ book.subtitle }}</p>
    <p v-if="book.description"><strong>Description: </strong>{{ book.description.value }}</p>
    <p v-if="book.publish_date">{{ book.publish_date }}</p>
    <p v-if="book.first_publish_date"><strong> First Publish Date:</strong> {{ book.first_publish_date}}</p>
    <p v-if="book.subjects"><strong> Subjects: </strong>
      <span :key="subject" v-for="subject in book.subjects">{{ subject }}, </span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'BookDetails',
  computed: {
    book() {
      return this.$store.state.work
    }
  }
}
</script>