<template>
    <input type="text" v-model="userToDo" />
    <button v-on:click="addToDo">Ajouter un To Do</button>

    <ul>
       <li 
       v-for="todo in todos" 
       v-on:click="deleteToDo(todo)">{{todo}}</li>
    </ul>
</template>


<script>
  export default {
  data() {
    return {
        todos : ["Learnig Vue 3", "Installing Bootstrap in my app", "Make it beautiful with CSS"],
        userToDo: '',
    
    }
  },
  methods: {
    addToDo(){
        this.todos.push(this.userToDo);
    },

    deleteToDo(todo){
        let position = this.todos.indexOf(todo);
        this.todos.splice(position, 1);
    },


  
  }
}

</script>

<style>
  

</style>
