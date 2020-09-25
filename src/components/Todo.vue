<template>
  <b-container>
    <Toggle :mode="mode" @toggle="$emit('toggle')" />
    <b-row>
      <b-col><h1 class="font-weight-bold">Todos</h1></b-col>
    </b-row>
    <b-row class="mt-3">
      <AddTodo @add:todo="addTodo" />
    </b-row>
    <b-row class="mt-5">
      <ContinuesTodo
        :todos="todos"
        @delete:todo="deleteTodo"
        @completed:todo="completedTodo"
      />
      <CompletedTodo
        :completedTodos="completedTodos"
        @delete:todo="deleteTodo"
      />
    </b-row>
  </b-container>
</template>

<script>
import ContinuesTodo from "./ContinuesTodo.vue";
import CompletedTodo from "./CompletedTodo.vue";
import AddTodo from "./AddTodo.vue";
import Toggle from "./Toggle.vue";
export default {
  name: "Todo",
  components: { ContinuesTodo, CompletedTodo, AddTodo, Toggle },
  props: ["mode"],
  data() {
    return {
      todos: [],
      completedTodos: [],
    };
  },
  watch: {
    todos: {
      handler() {
        localStorage.setItem("todos", JSON.stringify(this.todos));
      },
      deep: true,
    },
    completedTodos: {
      handler() {
        localStorage.setItem(
          "completedTodos",
          JSON.stringify(this.completedTodos)
        );
      },
      deep: true,
    },
  },
  mounted() {
    if (localStorage.getItem("todos"))
      this.todos = JSON.parse(localStorage.getItem("todos"));
    if (localStorage.getItem("completedTodos"))
      this.completedTodos = JSON.parse(localStorage.getItem("completedTodos"));
  },
  methods: {
    addTodo: function(todo) {
      const newTodo = { ...todo };
      this.todos = [...this.todos, newTodo];
    },
    deleteTodo: function(todo) {
      this.todos = this.todos.filter(
        (todoToFilter) => todoToFilter.id !== todo.id
      );
      this.completedTodos = this.completedTodos.filter(
        (todoToFilter) => todoToFilter.id !== todo.id
      );
    },
    completedTodo: function(todo) {
      const newTodo = { ...todo };
      this.completedTodos = [...this.completedTodos, newTodo];
      this.todos = this.todos.filter(
        (todoToFilter) => todoToFilter.id !== todo.id
      );
    },
  },
};
</script>

<style></style>
