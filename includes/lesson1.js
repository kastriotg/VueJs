const app = Vue.createApp({
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
});
app.mount('#user-goal');