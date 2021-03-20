<template>
  <div style="display:flex;justify-content: space-between">
      <span @click="toggleStatus" v-if="todo.completed">{{todo.title}}  </span>  <del @click="toggleStatus" v-else>{{todo.title}}  </del>  <button type="button" @click="DeleteTodo()">Delete</button>
  </div> 
</template>

<script>
export default {
    props:[
        "todo",
    ],

    methods:{
        DeleteTodo(){
            this.$store.dispatch('deleteTodo',this.todo)
        },
        toggleStatus(){
            this.$store.dispatch('toggleStatus',this.todo)
        }
    }
}
</script>

<style>

</style>