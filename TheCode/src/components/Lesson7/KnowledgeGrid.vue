<template>
  <ul>
    <KnowledgeElement
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
    />
  </ul>
</template>

<script>
//Import KnowledgeElement component
import KnowledgeElement from "./KnowledgeElement";

export default {
  name: "KnowledgeGrid",
  //export KnowledgeElement component to use on template
  components: {
    KnowledgeElement,
  },
  //Getting topics provided form provide() on Lesson7, which is parent of KnowledgeBase, therefore skippng
  // knowledgebase component pass through data
  inject: ["topics"],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-direction: row;
}
@media screen and (max-width: 600px) {
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
