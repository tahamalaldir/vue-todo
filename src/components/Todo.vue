<template>
  <div>
    <h1>Todos</h1>
    <ContinuesTodo />
    <CompletedTodo />
  </div>
</template>

<script>
import ContinuesTodo from "./ContinuesTodo.vue";
import CompletedTodo from "./CompletedTodo.vue";
export default {
  name: "Todo",
  components: { ContinuesTodo, CompletedTodo },
};
</script>

<style></style>
