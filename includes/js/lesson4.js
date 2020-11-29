const app = Vue.createApp({
    data (){
        return {
            todo : '',
            todos: [],
        }
    },
    methods: {
        addTodo() {
            if(this.todo !== ''){
                this.todos.push(this.todo);
                this.todo = '';
            }
        },
        removeTodo(index){
            this.todos.splice(index, 1);
        }
    }
}); 
app.mount('#todos');