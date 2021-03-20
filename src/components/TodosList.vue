<template>
  <div>

      <h3>From TodosList.vue</h3>
      <h3>Completed: {{$store.getters.completedTodos}} </h3>
      <todo v-for="(todo,index) in todos" :key="index" :todo="todo"></todo>
  </div>
</template>

<script>
import Todo from './Todo'
export default {
    components:{
        Todo
    },

    computed:{
        todos(){
            console.log(this.$store.state);
            return this.$store.state.todos;
            
        }
    }
}
</script>

<style>

</style>