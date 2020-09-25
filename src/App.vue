<template>
  <div class="app text-monospace" :class="mode">
    <Todo :mode="mode" @toggle="toggle" />
  </div>
</template>

<script>
import Todo from "./components/Todo.vue";

export default {
  name: "App",
  data() {
    return {
      mode: "light",
    };
  },
  watch: {
    mode: {
      handler() {
        localStorage.setItem("mode", JSON.stringify(this.mode));
      },
      deep: true,
    },
  },
  mounted() {
    if (localStorage.getItem("mode"))
      this.mode = JSON.parse(localStorage.getItem("mode"));
  },
  components: {
    Todo,
  },
  methods: {
    toggle() {
      if (this.mode === "dark") {
        this.mode = "light";
      } else {
        this.mode = "dark";
      }
    },
  },
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
