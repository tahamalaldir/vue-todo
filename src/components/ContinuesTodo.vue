<template>
  <div>
    <h1>Continues Todos</h1>
    <ul v-if="!Todos.length">
      Todo Yok
    </ul>
    <ul v-else>
      <li v-for="todo in Todos" :key="todo">
        {{ todo }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ContinuesTodo",
  props: {
    Todos: Array,
  },
};
</script>

<style></style>
