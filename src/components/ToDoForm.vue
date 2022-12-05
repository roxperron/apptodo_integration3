<template>
  <form class="container-fluid py-5" action="POST">
     
    <div class="mb-2">
      <input v-model="userToDo" type="text" class="px-3 form-control" placeholder="Indiquez votre to do ici"
        aria-label="Indiquer le to do ici" aria-describedby="addToDo__button" >
    </div>

     <div>
      <input type="date" class="px-3 form-control" placeholder="Sélectionner une date"
        aria-label="Sélectionner une date" aria-describedby="addToDo__button">
     </div>
      
      
    <div class="mt-2">
      <button v-on:click="addToDo" class="btn btn-outline-primary" type="button" id="addToDo__butto">Ajouter</button>
    </div>




  </form>

  <div class="py-5">
    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
      <button type="button" class="btn btn-secondary">Pas de limite</button>
      <button type="button" class="btn btn-primary">En cours</button>
      <button type="button" class="btn btn-warning">Dépassé<em></em></button>
      <button type="button" class="btn btn-success">Terminée sans délais</button>
      <button type="button" class="btn btn-danger">Terminée avec délais</button>
    </div>
  </div>

  <div class="py-2 d-flex justify-content-end">
    <button type="button" class="btn btn-outline-success">Compléter</button>
    <button type="button" class="btn btn-outline-warning">Modifier</button>
    <button type="button" class="btn btn-outline-danger">Supprimer</button>
  </div>

  <ul class="list-group">
    <li v-for="todo in todos" v-on:click="deleteToDo(todo)" class="list-group-item">
      <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckboxStretched">
      {{todo}}
    </li>
  </ul>


</template>


<script>
  export default {
    data() {
      return {
        todos: ["Learnig Vue 3", "Installing Bootstrap in my app", "Make it beautiful with CSS"],
        userToDo: '',

      }
    },
    methods: {
      addToDo() {
        this.todos.push(this.userToDo);
      },

      deleteToDo(todo) {
        let position = this.todos.indexOf(todo);
        this.todos.splice(position, 1);
      },



    }
  }
</script>

<style>


</style>