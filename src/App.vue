<template>
  <div class="app text-monospace" :class="this.$store.state.mode">
    <Todo />
  </div>
</template>

<script>
import Todo from "./components/Todo.vue";
import { mapState } from "vuex";
export default {
  name: "App",
  components: {
    Todo,
  },
  watch: {
    todos: {
      handler() {
        localStorage.setItem("todos", JSON.stringify(this.todos));
      },
      deep: true,
    },
    mode: {
      handler() {
        localStorage.setItem("mode", JSON.stringify(this.mode));
      },
      deep: true,
    },
  },
  computed: mapState(["todos", "mode"]),
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  text-align: center;
  padding-top: 60px;
  transition: background 0.3s ease-in-out;
  width: 100%;
  min-height: 100vh;
}
.dark {
  background-color: #181a1b;
  color: #fddb2f;
  transition: background 0.3s ease-in-out;
}
</style>
