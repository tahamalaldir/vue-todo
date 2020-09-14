<template>
  <b-container>
    <b-row>
      <b-col><h1 class="font-weight-bold">Todos</h1></b-col>
    </b-row>
    <b-row class="mt-3">
      <AddTodo @add:todo="addTodo" />
    </b-row>
    <b-row class="mt-5">
      <ContinuesTodo :todos="todos" @delete:todo="deleteTodo" />
      <CompletedTodo />
    </b-row>
  </b-container>
</template>

<script>
import ContinuesTodo from "./ContinuesTodo.vue";
import CompletedTodo from "./CompletedTodo.vue";
import AddTodo from "./AddTodo.vue";
export default {
  name: "Todo",
  components: { ContinuesTodo, CompletedTodo, AddTodo },

  data() {
    return {
      todos: [],
    };
  },
  methods: {
    addTodo: function(todo) {
      const newTodo = { ...todo };
      this.todos = [...this.todos, newTodo];
      //this.Todos.push(this.todoText);
    },
    deleteTodo: function(todo) {
      this.todos = this.todos.filter(
        (todoToFilter) => todoToFilter.id !== todo.id
      );
    },
  },
};
</script>

<style scoped>
.color {
  color: #181a1b;
}
</style>
