import Vue from "vue";
import Vuex from "vuex";
import { uuid } from "vue-uuid";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: {
      continues: [],
      completed: [],
    },
    mode: "light",
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
      if (localStorage.getItem("mode")) {
        state.mode = JSON.parse(localStorage.getItem("mode"));
      }
    },
    toggle(state) {
      if (state.mode === "dark") {
        state.mode = "light";
      } else if (state.mode === "light") {
        state.mode = "dark";
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
