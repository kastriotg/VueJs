<template>
  <BaseCard>
    <BaseButton
      @click="setSelectedTab('stored-resources')"
      :mode="storeResButtonMode"
      >Stored Resources</BaseButton
    >
    <BaseButton @click="setSelectedTab('add-resource')" :mode="addResButtonMode"
      >Add Resource</BaseButton
    >
  </BaseCard>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import BaseCard from "../UI/BaseCard";
import BaseButton from "../UI/BaseButton";
import StoredResources from "../learning-resources/StoredResources";
import AddResource from "../learning-resources/AddResource";
export default {
  components: {
    StoredResources,
    AddResource,
    BaseCard,
    BaseButton,
  },
  data() {
    return {
      selectedTab: "stored-resources",
      storedResources: [
        {
          id: 0,
          title: "Official Guide",
          description: "The official Vue.js documentation",
          link: "https://www.vuejs.org",
        },
        {
          id: 1,
          title: "Google",
          description: "Learn to google...",
          link: "https://www.google.com",
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.deleteResource,
    };
  },
  computed: {
    storeResButtonMode() {
      return this.selectedTab === "stored-resources" ? null : "flat";
    },
    addResButtonMode() {
      return this.selectedTab === "add-resource" ? null : "flat";
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url,
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = "stored-resources";
    },
    deleteResource(id) {
      const index = this.storedResources.findIndex((res) => res.id === id);
      this.storedResources.splice(index, 1);
    },
  },
};
</script>
