<template>
  <section>
    <header><h1>My friends</h1></header>
    <NewFriend @add-friend="addFriend"/>
    <ul>
        <FriendContact
          v-for="friend in friends"
          :key="friend.id"
          :id ="friend.id"
          :name ="friend.name"
          :phone-number ="friend.phone"
          :email-adress ="friend.email"
          :is-favourite ="friend.isFavourite"
          @toggle-favourite ="toggleFavouriteStatus"
          @delete="deleteFriend"
        />
    </ul>
  </section>
</template>

<script>
// @ is an alias to /src
import NewFriend from '../components/Lesson6/NewFriend';
import FriendContact from '../components/Lesson6/FriendContact';
export default {
  name: 'Lesson6',
  components: {
    NewFriend,
    FriendContact
  },
  data() {
      return {
        friends: [
          {
            id: new Date().toISOString(),
            name: 'John Doe',
            phone: '044 123 321',
            email: 'John@doe.com',
            isFavourite: false
          },
        ]
      }
    },
    methods: {
      toggleFavouriteStatus(ID){
        const foundFriend = this.friends.find(friend => friend.id === ID);
        foundFriend.isFavourite = !foundFriend.isFavourite;
      },
      addFriend(name, phone, email){
        let id = new Date().toISOString();
        this.friends.push({
          id: id,
          name: name,
          phone: phone,
          email: email,
          isFavourite: false
        });
      },
      deleteFriend(id){
        this.friends = this.friends.filter((friend) => friend.id !== id);
      },

    }
}
</script>

<style>
  ul{
    list-style: none;
    
  }
  ul button{
    width: 9rem;
    margin: 0 1rem;
  }
  ul li{
    margin: 4rem 0;
  }
</style>