const app = Vue.createApp({
    data(){
        return{
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
        }
    },
    computed: {
        // if boxBSelected is true, the B box will get the 'active' class
        boxBClasses(){
            return { active: this.boxBSelected };
        }
    },

    methods: {
        boxSelected(select){
            // console.log(select)
            // Checking which box is selected and then changing the 
            switch(select){
                case 'A': this.boxASelected = !this.boxASelected;
                    break;
                case 'B': this.boxBSelected = !this.boxBSelected;
                    break;
                case 'C': this.boxCSelected = !this.boxCSelected;
            }
        }
    }
});
app.mount('#styling');