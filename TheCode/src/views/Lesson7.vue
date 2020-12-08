<template>
  <div>
    <ActiveElement
      :topic-title="activeTopic && activeTopic.title"
      :text="activeTopic && activeTopic.fullText"
    />
    <KnowledgeBase/>
  </div>
</template>

<script>

import ActiveElement from '../components/Lesson7/ActiveElement';
import KnowledgeBase from '../components/Lesson7/KnowledgeBase';

export default {
  name: 'Lesson7',
  components: {
      ActiveElement,
      KnowledgeBase
  },

  data() {
    return {
      topics: [
        {
          id: 'basics',
          title: 'The Basics',
          description: 'Core Vue basics you have to know',
          fullText:
            'Vue is a great framework and it has a couple of key concepts: Data binding, events, components and reactivity - that should tell you something!',
        },
        {
          id: 'components',
          title: 'Components',
          description:
            'Components are a core concept for building Vue UIs and apps',
          fullText:
            'With components, you can split logic (and markup) into separate building blocks and then combine those building blocks (and re-use them) to build powerful user interfaces.',
        },
      ],
      activeTopic: null,
    };
  },
  provide(){
    return {
      topics: this.topics,
      selectTopic: this.activateTopic
    };
  },
  methods: {
    activateTopic(topicId) {
      this.activeTopic = this.topics.find((topic) => topic.id === topicId);
    },
  },
}
</script>

<style>
ul {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 1rem;
}
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
  background-color: #fff!important;
  color: #2c3e50!important;
  border: none!important;
}

</style>