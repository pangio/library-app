<template>
  <div class="book">
    <h4>{{ book }}</h4>
  </div>
</template>

<script>
export default {
  name: 'Book',
  props: {
    book: String
  }
}
</script>
