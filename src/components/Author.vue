<template>
  <div class="author">
    <h4>{{ author }}</h4>
  </div>
</template>

<script>
export default {
  name: 'Author',
  props: {
    author: Object
  }
}
</script>
