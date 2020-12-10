<template>
  <div>
    <section>
        <h2>My Course Goal</h2>
        <!-- Calling outputGoal function -->
        <p>{{ outputGoal() }}</p> 
        <!-- Binding   v-bind -->
        <p>Learn more <a v-bind:href="vueLink">about Vue</a> </p>
      </section>
      <!-- The Events in action Section -->
      <section>
        <h2>Events in action</h2>
        <!-- Adding click listener with v-on: click -->
        <button v-on:click="addCounter(2)">Add 2</button>
        <button @click="reduceCounter(2)">Remove 2</button>

        <p>Result: {{ counter }}</p>
        <!-- v-once, if we want to lock the value of counter -->
        <!-- <p v-once>Result: {{ counter }}</p> -->

        <!-- input name section part -->
       
        <input 
          type="text"
          placeholder="Enter your name!"
          @input="setName($event,'Mbreti')"
          @keyup.enter="showName"
        >
        <h4>Plase press Enter key after typing the name!</h4>
        <!-- Showing the name  -->
        <p>Your name: {{ confirmedName }}</p>

        <!-- Form with prevent modifier to not refresh datas -->
        <form @submit.prevent="submitForm">
          <input type="text">
          <button>Submit</button>
        </form>
      </section>
  </div>
</template>

<script>


export default {
data(){
        return{

            //Two options, Option A and B with text!
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: 'Master Vue and build amazing apps!',
            // The anchor link for goals section
            vueLink: 'https://vuejs.org/',

            //datas for events section
            counter: 0,
            name: '',
            confirmedName: '',

        }
    },
    methods: {
        // an output goal function for coruse goals section
        outputGoal(){
            // Saving an random number 
                // const randomNumber = Math.random();
                // if(randomNumber < 0.5){
                //     return this.courseGoalA;
                // }else{
                //     return this.courseGoalB;
                // }
            return this.courseGoalA;
        },

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
        setName(event, lastname){
            this.name = event.target.value + ' ' + lastname;
        },
        //function submit form .. testing
        submitForm(){
            alert('Submitted');
        },
        showName(){
            this.confirmedName = this.name;
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
