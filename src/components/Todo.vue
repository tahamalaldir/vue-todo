<template>
  <div>
    <h1>Todos</h1>
    <input type="text" v-model="todoText" @keyup.enter="addNewTodo" />
    <button v-if="todoText.length > 0" @click="addNewTodo">Tıkla</button>

    <ContinuesTodo :Todos="Todos" />
    <CompletedTodo />
  </div>
</template>

<script>
//import { eventBus } from "../main";
import ContinuesTodo from "./ContinuesTodo.vue";
import CompletedTodo from "./CompletedTodo.vue";
export default {
  name: "Todo",
  components: { ContinuesTodo, CompletedTodo },
  data() {
    return {
      todoText: "",
      Todos: [],
    };
  },
  methods: {
    addNewTodo: function() {
      this.Todos.push(this.todoText);
      this.todoText = "";
    },
  },
};
</script>

<style></style>
