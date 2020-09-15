<template>
  <b-col>
    <h1 class="font-weight-bold">
      <b-icon icon="list" v-if="!completedTodos.length > 0"></b-icon
      ><b-icon icon="list-nested" v-else></b-icon>
      Completed Todos
    </h1>
    <h3 v-if="!completedTodos.length" class="mb-2 mt-5 text-muted">
      Completed To Do Not Found
      <b-icon icon="exclamation-circle-fill" variant="danger"></b-icon>
    </h3>
    <b-list-group v-else
      class="mt-4 mb-4"
      v-for="(todo, index) in completedTodos"
      :key="index"
    >
      <b-list-group-item class="align-items-center item-color">
        {{ todo.text }}
        <b-button
          class="float-right"
          variant="outline-danger"
          @click="handleDelete(todo)"
        >
          <b-icon icon="x" scale="2" aria-hidden="true"></b-icon>
        </b-button>
      </b-list-group-item>
    </b-list-group>
  </b-col>
</template>

<script>
export default {
  name: "CompletedTodo",
  props: {
    completedTodos: Array,
  },
  methods: {
    handleDelete(todo) {
      this.$emit("delete:todo", todo);
    },
  },
};
</script>

<style></style>
