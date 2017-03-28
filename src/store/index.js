import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    todoStatuses: ["incomplete", "complete"]
  },
  mutations: {
    addTodo: function (state, label) {
      state.todos.push({name: label, status: "incomplete"})
      state.newTodo = ''
    },  
    findStatus: function (state, name) {
      if (state.statuses.includes(name)) {
        return name; }
      return null
    },
    isFinished: function (state, todo) {
      return todo.status === "complete"
    }
  }
})