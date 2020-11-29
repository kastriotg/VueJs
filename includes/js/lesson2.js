const app = Vue.createApp({
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
});
app.mount('#user-goal');