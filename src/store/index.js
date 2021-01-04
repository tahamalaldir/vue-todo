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
      let indexContinues = state.todos.continues.findIndex((c) => {
        if (c.id == todoID) {
          console.log(c);
          state.todos.continues.splice(indexContinues, 1);
        }
      });
      let indexCompleted = state.todos.completed.findIndex((c) => {
        if (c.id == todoID) {
          console.log(c);
          state.todos.completed.splice(indexCompleted, 1);
        }
      });
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
