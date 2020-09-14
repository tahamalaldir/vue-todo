<template>
  <b-container>
    <b-row>
      <b-col><h1>Todos</h1></b-col>
    </b-row>
    <b-row class="mt-3">
      <b-col>
        <b-input-group class="w-75 mx-auto">
          <b-form-input
            v-model="todoText"
            @keyup.enter="addNewTodo"
          ></b-form-input>
          <b-input-group-append>
            <b-button
              variant="warning"
              :disabled="!todoText"
              @click="addNewTodo"
              >Add a Todo</b-button
            >
          </b-input-group-append>
        </b-input-group>
      </b-col>
    </b-row>
    <b-row class="mt-5">
      <b-col><ContinuesTodo :Todos="Todos"/></b-col>
      <b-col><CompletedTodo /></b-col>
    </b-row>
  </b-container>
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

<style scoped>

</style>
