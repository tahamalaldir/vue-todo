import Vue from "vue";
import Vuex from "vuex";
import { uuid } from "vue-uuid";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: {
      continues: [
        { text: "deneme6", id: "948f2450-ba1c-477d-b65e-8766ac235cab" },
      ],
      completed: [],
    },
  },
  mutations: {
    addTodo(state, todo) {
      let id = uuid.v4();
      state.todos.continues.push({ text: todo, id: id });
    },
    deleteTodo(state, todoID) {
      if (state.todos.continues.find((c) => c.id === todoID)) {
        let index = state.todos.continues.findIndex((c) => c.id == todoID);
        if (index > -1) {
          state.todos.continues.splice(index, 1);
        }
      } else if (state.todos.completed.find((c) => c.id === todoID)) {
        let index = state.todos.completed.findIndex((c) => c.id == todoID);
        if (index > -1) {
          state.todos.completed.splice(index, 1);
        }
      }
    },
    completedTodo(state, todo) {
      let index = state.todos.continues.findIndex((c) => c.id == todo.id);
      if (index > -1) {
        state.todos.continues.splice(index, 1);
        state.todos.completed.push(todo);
      }
    },
    initialiseStore(state) {
      if (localStorage.getItem("todos")) {
        state.todos = JSON.parse(localStorage.getItem("todos"));
      }
    },
  },
  actions: {},
  getters: {
    getTodos(state) {
      return state.todos;
    },
  },
});
