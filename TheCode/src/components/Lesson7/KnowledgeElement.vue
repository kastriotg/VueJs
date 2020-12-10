<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <button @click="selectTopic(id)">Learn More</button>
  </li>
</template>

<script>
export default {
  name: 'KnowledgeElement',
  //select topic event for Parent to know which topic got selected
  inject:['selectTopic'],
  //Get properties  
  props: ['id', 'topicName', 'description'],
};
</script>

<style scoped>
  li {
    border-radius: 12px;
    border: 1px solid #ccc;
    padding: 1rem;
    width: 15rem;
    margin: 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  h3{
    font-size: 1.6em;
  }
  p{
    background-color: #fff;
    color: #2c3e50;
    border: none;
  }
</style>