<template>
  <div class="app text-monospace" :class="this.$store.state.mode">
    <b-container>
      <toggle />
      <b-row>
        <b-col><h1 class="font-weight-bold">Todos</h1></b-col>
      </b-row>
      <b-row class="mt-3">
        <add-todo />
      </b-row>
      <b-row class="mt-5 pb-5">
        <todos title="Continues" :todos="$store.state.todos.continues" />
        <todos
          title="Completed"
          :dizayn="dizayn"
          :todos="$store.state.todos.completed"
        />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AddTodo from "@/components/AddTodo.vue";
import Toggle from "@/components/Toggle.vue";
import Todos from "@/components/Todos.vue";
import { mapState } from "vuex";
export default {
  name: "App",
  components: {
    Todos,
    AddTodo,
    Toggle,
  },
  data() {
    return {
      dizayn: "text-decoration: line-through;",
    };
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
