<template>
  <span class="badge" :class="classes">{{ caption }}</span>
</template>

<script>
export default {
  //Getting properties
  props: ['type', 'caption'],
  computed: {
    //Giving a class name (styling) depending on role, 
    classes() {
      return {
        //checking what is the role of User and giving the class 
        'badge-admin': this.type === 'admin',
        'badge-author': this.type === 'author',
      };
    },
  },
};
</script>

<style>
.badge {
  display: inline-block;
  padding: 1.5rem 3rem;
  border-radius: 30px;
  background-color: #ccc;
  color: #2e2e2e;
}

.badge-admin {
  background-color: #810036;
  color: white;
}

.badge-author {
  background-color: #002c8a;
  color: white;
}
</style>