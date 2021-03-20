import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        todos:[
            {
                title: "Todo Item a",
                completed: true
            },

            {
                title: "Todo Item b",
                completed: true
            },
            {
                title: "Todo Item c",
                completed: false
            },
        ]
    },

    getters:{
        completedTodos(state){
            return state.todos.filter(todo => {
                return todo.completed == true;
            }).length;
        }
    },

    mutations:{
        NEW_TODO(state,todoItem){
            state.todos.push({
                title: todoItem,
                completed: false,
            })
        },

        DELETE_TODO(state,todo){
            let index = state.todos.indexOf(todo)
            state.todos.splice(index,1);
        },

        TOGGLE_TODO_STATUS(state,todoitem){
            todoitem.completed = !todoitem.completed;
        }
    },

    actions:{
        addNewTodo({commit}, todoItem){
            let com = commit('NEW_TODO',todoItem)
            console.log(com);
        },

        deleteTodo({commit}, todo){
            commit('DELETE_TODO',todo)
        },

        toggleStatus({commit},todoItem){
            commit('TOGGLE_TODO_STATUS',todoItem)
        }
    }
})