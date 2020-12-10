<template>
  <div class="about">
    <section>
        <h2>Events in action</h2>
        <!-- Adding click listener with v-on: click -->
        <button @click="addCounter(2)">Add 2</button>
        <button @click="reduceCounter(2)">Remove 2</button>

        <p>Result: {{ counter }}</p>
        <!-- v-once, if we want to lock the value of counter -->
        <!-- <p v-once>Result: {{ counter }}</p> -->

        <!-- input name section part -->
        <input 
          type="text"
          placeholder="Enter your name!"
          v-model="name"
        >
        <input 
          type="text"
          placeholder="Enter your lastname!"
          v-model="lastName"
        >
        <button @click="resetInput">Reset input</button>

        <!-- Showing the name  -->
        <!-- fullName computed function, fullname data property-->
        <p>Your name from computed: {{ fullName }}</p>
        <p>Your name from watch: {{ fullname }}</p>
      </section>
  </div>
</template>
<script>
export default {
  data(){
        return{
            //datas for events section
            counter: 0,
            name: '',
            lastName: '',
            fullname: '',
        }
    },
    computed: {
        fullName(){
            if(this.name === '' || this.lastName === ''){
                return '';
            }else{
                return this.name + ' ' + this.lastName;
            }
        }
    },
    watch: {
        counter(value){
            if(value > 50){
                this.counter = 0;
            }
        },

        name(value){
            if(value === '' || this.lastName === ''){
                this.fullname = '';
            }else{
                this.fullname = value + ' ' + this.lastName; 
            }
            
        },
        lastName(value){
            if(value === ''){
                this.fullname = '';
            }else{
                this.fullname = this.name + ' '+ value;
            }
        }
    },

    methods: {
        //A function for increase counter function for Events Section
        addCounter(num){
            this.counter += num;
        },
        //A function reduce counter function for Events Section
        reduceCounter(num){
            // reducing counter if counter is bigger than 0 
            if(this.counter > 0){
                this.counter -= num;
            }
        },
        //A function for set name for Events section
        setName(event){
            this.name = event.target.value;
        },
        
        
        //Reset the input of the input from Events in action section
        resetInput(){
            this.name = '';
            this.lastName = ''
        }
    }
}
</script>
<style scoped>
    section h2 {
        font-size: 2rem;
        border-bottom: 4px solid #ccc;
        color: #4fc08d;
        margin: 0 0 1rem 0;
    }
    section p {
        font-size: 1.25rem;
        font-weight: bold;
        border: 1px solid #4fc08d;
        background-color: #4fc08d;
        color: white;
        padding: 0.5rem;
        border-radius: 25px;
    }

</style>