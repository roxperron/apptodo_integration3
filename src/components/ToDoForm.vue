<template>

  <form class="container-fluid py-5 form-floating">
    <div class="mb-2 form-floating">
      <input type="text" class="form-control" id="todoName">
      <label for="todoName">Incrire le nom de votre tâche</label>
    </div>

    <div class="mb-2 form-floating">
      <input type="date" class="form-control" id="date">
      <label for="date">Sélectionner une date</label>
    </div>

    <div class="mb-2 form-floating">
      <textarea type="text" class="form-control" id="description"></textarea>
      <label for="description">Inscrire une description</label>
    </div>

    <div class="mt-2">
      <button v-on:click="addToDo" class="btn btn-primary" type="button" id="addToDo__button">Ajouter</button>
    </div>


  </form>

  <div class="d-flex justify-content-between py-2">
    <h3><span class="badge bg-info">Pas de limite</span></h3>
    <h3><span class="badge bg-primary">En cours</span></h3>
    <h3><span class="badge bg-danger">Dépassée</span></h3>
    <h3><span class="badge bg-success">Complétée</span></h3>
    <h3><span class="badge bg-warning">Complétée en retard</span></h3>
  </div>



  <div v-for="todo in todos" v-on:click="deleteToDo(todo)" class="card mx-2">
    <div class=" d-flex justify-content-between card-body">
      <h5 class="card-title">{{todo}}</h5>
      <div>
        <img src="../assets/complete.png" data-bs-toggle="tooltip" data-bs-title="Default tooltip"
          alt="Compléter une tâche">
        <img src="../assets/edit.png" alt="Modifier une tâche">
        <img src="../assets/delete.png" alt="Supprimer un tâcher">
      </div>
    </div>
  </div>


</template>


<script>
  export default {
    data() {
      return {
        todos: ["Créer un tableau Trello", "Créer les cartes des tâches demandées",
          "Écrire les algorithmes pour les tâches difficiles", "Créer l'application Vue"
        ],

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