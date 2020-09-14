<template>
  <b-col>
    <h1 class="font-weight-bold">
      <b-icon icon="list" v-if="!todos.length"></b-icon
      ><b-icon icon="list-nested" v-else></b-icon> Continues Todos
    </h1>

    <h3 v-if="!todos.length" class="mb-2 mt-5 text-muted">
      Continues To Do Not Found
      <b-icon icon="exclamation-circle-fill" variant="danger"></b-icon>
    </h3>

    <b-list-group class="mt-4 mb-4" v-else>
      <b-list-group-item
        class="align-items-center item-color"
        v-for="(todo, index) in todos"
        :key="index"
      >
        <p v-if="!todo.isCompleted">
          {{ todo.text }}
          <b-button
            class="float-right"
            variant="outline-danger"
            @click="handleDelete(todo)"
          >
            <b-icon icon="x" scale="2" aria-hidden="true"></b-icon>
          </b-button>
          <b-button
            class="float-right mr-1"
            variant="outline-success"
            @click="handleCompleted"
          >
            <b-icon icon="check" scale="2" aria-hidden="true"></b-icon>
          </b-button>
        </p>
      </b-list-group-item>
    </b-list-group>
  </b-col>
</template>

<script>
export default {
  name: "ContinuesTodo",
  props: {
    todos: Array,
  },
  methods: {
    handleDelete(todo) {
      this.$emit("delete:todo", todo);
      console.log(todo);
    },
    handleCompleted(todo) {
      this.$emit("completed:todo", todo);
      console.log(todo);
    },
  },
};
</script>

<style scoped>
.item-color {
  background-color: #181a1b;
  color: #fddb3a;
  border: 2px solid #fddb3a;
}
</style>
