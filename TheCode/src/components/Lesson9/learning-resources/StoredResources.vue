<template>
  <ul>
    <LearningResource
      v-for="res in resources"
      :key="res.id"
      :id="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    />
  </ul>
</template>
<script>
import LearningResource from "./LearningResource";

export default {
  inject: ["resources"],
  components: {
    LearningResource,
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0 auto;
  padding: 0;
  max-width: 40rem;
}
</style>
