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
        <button class="btn buttonAdd" :disabled="!todo.text" @click="handleAdd">
          Add a Todo
        </button>
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

<style>
.light .buttonAdd {
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;
  transition: background 0.3s ease-in-out;
}
.light .buttonAdd:hover {
  color: #fff;
  background-color: #5a6268;
  border-color: #545b62;
}
.light .buttonAdd:focus {
  color: #fff;
  background-color: #5a6268;
  border-color: #545b62;
}
.dark .buttonAdd {
  background-color: #fddb2f;
  color: #181a1b;
  transition: background 0.3s ease-in-out;
}
.dark .buttonAdd:hover {
  background-color: #e0a800;
  color: #181a1b;
}
.dark .buttonAdd:focus {
  background-color: #e0a800;
  color: #181a1b;
}
</style>
