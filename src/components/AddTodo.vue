<template>
  <b-col>
    <b-input-group class="w-75 mx-auto">
      <b-form-input
        class="mr-2"
        size="lg"
        v-model="todo"
        placeholder="Enter something to do..."
        @keyup.enter="onSubmit"
      ></b-form-input>
      <b-input-group-append>
        <button class="btn buttonAdd" :disabled="!todo" @click="onSubmit">
          Add a Todo
        </button>
      </b-input-group-append>
    </b-input-group>
  </b-col>
</template>

<script>
export default {
  name: "AddTodo",
  data() {
    return {
      todo: "",
    };
  },
  methods: {
    onSubmit() {
      this.$store.commit("addTodo", this.todo);
      this.todo = "";
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
