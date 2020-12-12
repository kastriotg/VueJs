<template>
  <div>
    <ActiveElement
      :topic-title="activeTopic && activeTopic.title"
      :text="activeTopic && activeTopic.fullText"
    />
    <KnowledgeBase />
  </div>
</template>

<script>
//Importing components ActiveElement and KnowledgeBase
import ActiveElement from "../components/Lesson7/ActiveElement";
import KnowledgeBase from "../components/Lesson7/KnowledgeBase";

export default {
  name: "Lesson7",

  //Exporting components to use on Template
  components: {
    ActiveElement,
    KnowledgeBase,
  },

  data() {
    return {
      //An array of topics
      topics: [
        {
          id: "basics",
          title: "The Basics",
          description: "Core Vue basics you have to know",
          fullText:
            "Vue is a great framework and it has a couple of key concepts: Data binding, events, components and reactivity - that should tell you something!",
        },
        {
          id: "components",
          title: "Components",
          description:
            "Components are a core concept for building Vue UIs and apps",
          fullText:
            "With components, you can split logic (and markup) into separate building blocks and then combine those building blocks (and re-use them) to build powerful user interfaces.",
        },
      ],
      //Showing the topic active element if activeTopic is true
      activeTopic: null,
    };
  },
  provide() {
    return {
      //make topics available for all components, so we can skip a child, in this example skip KnowledgeBase
      //and make topic availabe for KnowledgeGrid, which is a child of KnowledgeBase,
      topics: this.topics,
      // Getting from knowledge element- child - from inject
      selectTopic: this.activateTopic,
    };
  },
  methods: {
    activateTopic(topicId) {
      //Finding the topic on array based on the id provided from child
      this.activeTopic = this.topics.find((topic) => topic.id === topicId);
    },
  },
};
</script>

<style scoped></style>
