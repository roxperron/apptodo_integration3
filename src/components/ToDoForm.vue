<template>
  <form class="container-fluid py-5" action="POST">

    <div class="mb-2">
      <input v-model="userToDo" type="text" class="px-3 form-control" placeholder="Indiquez votre to do ici"
        aria-label="Indiquer le to do ici" aria-describedby="addToDo__button">
    </div>

    <div>
      <input type="date" class="px-3 form-control" placeholder="Sélectionner une date"
        aria-label="Sélectionner une date" aria-describedby="addToDo__button">
    </div>


    <div class="mt-2">
      <button v-on:click="addToDo" class="btn btn-outline-primary" type="button" id="addToDo__butto">Ajouter</button>
    </div>




  </form>

  <div class="d-flex justify-content-between py-2">
    <h3><span class="badge bg-secondary">Pas de limite</span></h3>
    <h3><span class="badge bg-secondary">En cours</span></h3>
    <h3><span class="badge bg-secondary">Dépassée</span></h3>
    <h3><span class="badge bg-secondary">Complétée</span></h3>
    <h3><span class="badge bg-secondary">Complétée en retard</span></h3>
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