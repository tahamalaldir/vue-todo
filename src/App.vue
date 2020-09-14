<template>
  <div id="app" class="text-monospace">
    <Todo />
  </div>
</template>

<script>
import Todo from "./components/Todo.vue";

export default {
  name: "App",
  components: {
    Todo,
  },
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
