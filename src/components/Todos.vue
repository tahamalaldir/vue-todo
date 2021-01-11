<template>
  <b-col class="mt-5 pr-4" md="12">
    <h1 class="font-weight-bold">
      <b-icon icon="list" v-if="!todos.length > 0"></b-icon
      ><b-icon icon="list-nested" v-else></b-icon> {{ title }} Todos
    </h1>
    <h3 v-if="!todos.length" class="mb-2 mt-5 text-muted">
      {{ title }} To Do Not Found
      <b-icon icon="exclamation-circle-fill" variant="danger"></b-icon>
    </h3>
    <b-row>
      <todos-card
        :style="dizayn"
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        :title="title"
      />
    </b-row>
  </b-col>
</template>

<script>
import TodosCard from "./TodosCard.vue";

export default {
  name: "Todos",
  components: { TodosCard },
  props: {
    title: String,
    todos: Array,
    dizayn: String,
  },
};
</script>

<style></style>
