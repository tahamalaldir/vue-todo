<template>
  <b-card
    border-variant="warning"
    bg-variant="secondary"
    text-variant="light"
    class="text-center "
  >
    <b-card-text> {{ todo.text }} </b-card-text>
    <b-card-footer>
      <b-button
        class="mr-2"
        variant="outline-danger"
        @click="handleDelete(todo)"
      >
        <b-icon icon="x" scale="2" aria-hidden="true"></b-icon>
      </b-button>
      <b-button
        v-if="title === 'Continues'"
        class="ml-2"
        variant="outline-success"
        @click="handleCompleted(todo)"
      >
        <b-icon icon="check" scale="2" aria-hidden="true"></b-icon>
      </b-button>
    </b-card-footer>
  </b-card>
</template>

<script>
export default {
  name: "TodosCard",
  props: { title: String, todo: Object },
  methods: {
    handleDelete(todo) {
      this.$store.commit("deleteTodo", todo.id);
    },
    handleCompleted(todo) {
      this.$store.commit("completedTodo", todo);
    },
  },
};
</script>

<style></style>
