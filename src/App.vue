<template>
  <div id="app">
    <h1>OED Sample Todo App</h1>
    <form v-on:submit.prevent="addTodo">
      <input v-model="label">
      <button>Add</button>
    </form>
    <div v-for="todo in todos">
      <todo-item :todo='todo'></todo-item>
    </div>
  </div>
</template>

<script>
import TodoItem from './components/todo_item.vue';

export default {
  name: 'app',
  data: function () {
    return {
      label: '',
      todos: this.$store.state.todos
    }
  },
  components: {
    'todo-item': TodoItem
  },
  computed: {
    finished: function () {
      this.todos.filter(isFinished);
    }
  },
  methods: {
    addTodo: function () {
      this.$store.commit('addTodo', this.label)
    },
    isFinished: function (todo) {
      return todo.status === "complete"
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
