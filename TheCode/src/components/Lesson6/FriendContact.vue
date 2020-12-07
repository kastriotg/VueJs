<template>
  <li>
    <h2>{{ name }} {{isFavourite? '(Favourite)' : ''}}</h2>
    <button @click="toggleFavourite">Favourite</button>
    <button @click="toggleDetails">{{ detailsVisible? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAdress }}</li>
      <li> <strong>Id:</strong> {{ id }}</li>
    </ul>
    <button @click="$emit('delete', id)">Delete</button>
  </li>
</template>

<script>
export default {
  name: 'FriendContact',  

  props: {
        id:{
            type: String,
            required: true
        },
        name: {
            type: String,
            required:true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        emailAdress: {
            type: String,
            required: true
        },
        isFavourite: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    emits: ['toggle-friend', 'delete'],  
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
    data(){
        return {
            detailsVisible: false,
        }
    },
    methods: {
        toggleDetails() {
            this.detailsVisible = !this.detailsVisible;
        },
        toggleFavourite(){
            this.$emit('toggle-favourite', this.id);
        }
    }
}
</script>

<style>

</style>