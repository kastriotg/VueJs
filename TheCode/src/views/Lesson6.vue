<template>
  <section>
    <header><h1>My friends</h1></header>
    <NewFriend @add-friend="addFriend" />
    <ul>
      <FriendContact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-adress="friend.email"
        :is-favourite="friend.isFavourite"
        @toggle-favourite="toggleFavouriteStatus"
        @delete="deleteFriend"
      />
    </ul>
  </section>
</template>

<script>
import NewFriend from "../components/Lesson6/NewFriend";
import FriendContact from "../components/Lesson6/FriendContact";

export default {
  name: "Lesson6",
  components: {
    NewFriend,
    FriendContact,
  },
  data() {
    return {
      friends: [
        {
          id: new Date().toISOString(),
          name: "John Doe",
          phone: "044 123 321",
          email: "John@doe.com",
          isFavourite: false,
        },
      ],
    };
  },
  methods: {
    toggleFavouriteStatus(ID) {
      const foundFriend = this.friends.find((friend) => friend.id === ID);
      foundFriend.isFavourite = !foundFriend.isFavourite;
    },
    addFriend(name, phone, email) {
      let id = new Date().toISOString();
      this.friends.push({
        id: id,
        name: name,
        phone: phone,
        email: email,
        isFavourite: false,
      });
    },
    deleteFriend(id) {
      this.friends = this.friends.filter((friend) => friend.id !== id);
    },
  },
};
</script>

<style scoped>
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #4fc08d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
ul {
  list-style: none;
  padding: 0;
}
</style>
