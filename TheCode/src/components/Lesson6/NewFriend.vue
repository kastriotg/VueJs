<template>
    <button v-if="addNewFriend" @click="addFriend">Add Friend</button>
    <form v-else @submit.prevent="submitData">
        <label for="name">Name:</label>
        <input type="text" name="name" v-model="enteredName" required>

        <label for="phone">Phone:</label>
        <input type="text" name="phone" v-model="enteredPhone" required>

        <label for="email">Email:</label>
        <input type="email" name="email" v-model="enteredEmail" required>

        <button>Add Contact</button>
        <button @click="addFriend">Close form</button>
    </form>
</template>

<script>
export default {
  name: 'NewFriend',  

  emits: ['add-friend'],
  data() {
    return {
      enteredName: '',
      enteredPhone: '',
      enteredEmail: '',
      addNewFriend: true
    };
  },
  methods: {
    submitData() {
      this.$emit(
          'add-friend',
          this.enteredName,
          this.enteredPhone,
          this.enteredEmail
      );
    },
    addFriend(){
      this.addNewFriend = !this.addNewFriend;
    }
  }
}
</script>

<style scoped>
#app form{
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app form button, input{
  margin-bottom: 1rem;
  width: 10rem;
}
button{
  margin-left: 0;
}
</style>