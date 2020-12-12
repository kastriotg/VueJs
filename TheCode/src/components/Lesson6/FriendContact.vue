<template>
  <li>
    <h2>{{ name }} {{ isFavourite ? "(Favourite)" : "" }}</h2>
    <button @click="toggleFavourite">Favourite</button>
    <button @click="toggleDetails">
      {{ detailsVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAdress }}</li>
      <li><strong>Id:</strong> {{ id }}</li>
    </ul>
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>

<script>
export default {
  name: "FriendContact",

  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAdress: {
      type: String,
      required: true,
    },
    isFavourite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ["toggle-friend", "delete"],
  // emits: {
  //     'toggle-favourite': function(id){
  //         if(id){
  //             return true;
  //         }else{
  //             console.warn('Id is missing!');
  //             return false;
  //         }
  //     }
  // },
  data() {
    return {
      detailsVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
    toggleFavourite() {
      this.$emit("toggle-favourite", this.id);
    },
  },
};
</script>

<style scoped>
li {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 20px;
  margin: 1rem;
}

h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #1b995e;
  margin: 0 0 1rem 0;
}
li ul {
  padding: 0;
}
li ul li {
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
}
</style>
