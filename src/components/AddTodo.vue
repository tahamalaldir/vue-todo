<template>
  <b-col>
    <b-input-group class="w-75 mx-auto">
      <b-form-input
        class="mr-2"
        size="lg"
        v-model="todo.text"
        @keyup.enter="handleAdd"
      ></b-form-input>
      <b-input-group-append>
        <b-button
          class="color"
          variant="warning"
          :disabled="!todo.text"
          @click="handleAdd"
          >Add a Todo</b-button
        >
      </b-input-group-append>
    </b-input-group>
  </b-col>
</template>

<script>
import { uuid } from "vue-uuid";
export default {
  name: "AddTodo",
  data() {
    return {
      queue: 0,
      todo: { id: "", text: "" },
    };
  },
  methods: {
    handleAdd() {
      this.todo.id = uuid.v4();
      this.$emit("add:todo", this.todo);
      this.todo.text = "";
    },
  },
};
</script>

<style></style>
