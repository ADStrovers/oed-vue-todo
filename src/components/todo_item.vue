<template lang="html">
  <div v-if="active" class="todo-item">
    <button class="button-complete" v-on:click="markComplete(true)">Complete</button>
    <button class="button-incomplete" v-on:click="markComplete(false)">Not Complete</button>
    <button class="button-cancel" v-on:click="isActive(false)">Cancel</button>
  </div>
  <div v-else class="todo-item">
    <div v-on:click="isActive(true)" v-bind:class="{ complete: isComplete }">{{ todo.name }}</div>
  </div>
</template>

<script>
export default {
  props: [
    'todo'
  ],
  data: function () {
    return {
      active: false
    }
  },
  computed: {
    isComplete: function () {
      return this.todo.status == "complete"
    }
  },
  methods: {
    markComplete: function (bool) {
      if (bool === true) {
        this.todo.status = "complete"
      } else {
        this.todo.status = "incomplete"
      }
      this.active = false
    },
    isActive: function (bool) {
      this.active = bool
    }
  }
}
</script>

<style>
.todo-item {
  width: 800px;
  margin: auto;
  margin-top: 20px;
  border: solid 1px;
  padding: 5px;
}

.complete {
  border-left: solid 10px green;
}

.button-complete {
  color: green;
}

.button-incomplete {
  color: red;
}

.button-cancel {
  color: blue;
}
</style>