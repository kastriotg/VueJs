<template>
  <span class="badge" :class="classes">{{ caption }}</span>
</template>

<script>
export default {
  //Getting properties
  props: ["type", "caption"],
  computed: {
    //Giving a class name (styling) depending on role,
    classes() {
      return {
        //checking what is the role of User and giving the class
        "badge-admin": this.type === "admin",
        "badge-author": this.type === "author",
      };
    },
  },
};
</script>

<style>
.badge {
  display: inline-block;
  padding: 1.5rem 2rem;
  border-radius: 20px;
  background-color: #ccc;
  color: #2e2e2e;
  width: 10rem;
}

.badge-admin {
  background-color: #810036;
  color: white;
}

.badge-author {
  background-color: #002c8a;
  color: white;
}
@media (max-width: 400px) {
  .badge{
    padding: .5rem;
    height: 2.5rem;
  }
}

</style>
