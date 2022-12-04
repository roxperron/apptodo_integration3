<template>
   <h1>Bienvenue dans la To Do Liste</h1>
   <ToDoForm />
</template>

<script>
import ToDoForm from './components/ToDoForm.vue'

export default {
  name: 'App',
  components: {
    ToDoForm,
  }
}
</script>
