<template>
  <div id="app">

      <todos-list/>
      <todo-form/>
    
  </div>
</template>

<script>
import TodosList from './components/TodosList';
import TodoForm from './components/TodoForm'
export default {
  name: 'App',
  components: {
    TodosList,
    TodoForm
  }
}
</script>

<style>
#app {
  width: 400px;
  margin: 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
