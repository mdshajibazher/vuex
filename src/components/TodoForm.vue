<template>
  <div>
      <input type="text" v-model="newTodoItem">
      <button type="button" @click="addNewTodoItem">Add </button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            newTodoItem: "",
       }
    },

    methods:{
        addNewTodoItem(){
            this.$store.dispatch('addNewTodo',this.newTodoItem);
        }
    }
}
</script>

<style>

</style>