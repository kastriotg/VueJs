<template>
  <section>
    <h2>Select a Topic</h2>
    <KnowledgeGrid/>
  </section>
</template>

<script>
//import Knowledge grid component
import KnowledgeGrid from './KnowledgeGrid';

export default {
    name: 'KnowledgeBase',
    //Export KnowledgeGrid to use on template
    components: {
      KnowledgeGrid
    },
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