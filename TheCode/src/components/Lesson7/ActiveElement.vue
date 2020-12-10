<template>
  <section>
    <h2>{{ topicTitle }}</h2>
    <p>{{ text }}</p>
  </section>
</template>

<script>
export default {
    name: 'ActiveElement',
    //Get properties from Lesson7 for topic title and text
    props: ['topicTitle', 'text'],
}
</script>

<style scoped>
  h2{
    font-size: 2rem;
    border-bottom: 4px solid #ccc;
    color: #4fc08d;
    margin: 0 0 1rem 0;
  }

</style>