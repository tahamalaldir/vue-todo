<template>
  <b-container>
    <Toggle />
    <b-row>
      <b-col><h1 class="font-weight-bold">Todos</h1></b-col>
    </b-row>
    <b-row class="mt-3">
      <AddTodo />
    </b-row>
    <b-row class="mt-5 pb-5">
      <Todos title="Continues" :todos="$store.state.todos.continues" />
      <Todos
        title="Completed"
        :dizayn="dizayn"
        :todos="$store.state.todos.completed"
      />
    </b-row>
  </b-container>
</template>
<script>
import AddTodo from "./AddTodo.vue";
import Toggle from "./Toggle.vue";
import Todos from "./Todos.vue";
export default {
  name: "Todo",
  components: { Todos, AddTodo, Toggle },
  data() {
    return {
      dizayn: "text-decoration: line-through;",
    };
  },
};
</script>

<style></style>
