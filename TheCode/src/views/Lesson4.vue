<template>
  <section id="todos">
    <h2>My Todos</h2>
    <input type="text" v-model="todo" @keyup.enter="addTodo" />
    <button @click="addTodo">Add Todo</button>
    <h3 v-show="todos.length > 0">Click the todo to remove it!</h3>
    <h3 v-if="todos.length === 0">
      No todos have been added yet - please start adding some!
    </h3>
    <ul v-else>
      <li
        v-for="(Todo, index) in todos"
        @click="removeTodo(index)"
        :key="index"
      >
        {{ Todo }}
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  data() {
    return {
      todo: "",
      todos: [],
    };
  },
  methods: {
    addTodo() {
      if (this.todo !== "") {
        this.todos.push(this.todo);
        this.todo = "";
      }
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>

<style scoped>
section h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #1b995e;
  margin: 0 0 1rem 0;
}

#todos ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}

#todos li {
  margin: 1rem 0;
  font-size: 1.25rem;
  font-weight: bold;
  background-color: #8ddba4;
  padding: 0.5rem;
  color: #1f1f1f;
  border-radius: 25px;
}
</style>
