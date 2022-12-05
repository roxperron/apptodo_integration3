<template>
  <form class="container-fluid py-5" action="POST">

    <div class="mb-2">
      <input v-model="userToDo" type="text" class="px-3 form-control" placeholder="Indiquez vos tâches ici"
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
    <img src="../assets/complete.png" data-bs-toggle="tooltip" data-bs-title="Default tooltip" alt="Compléter une tâche">
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
        todos: ["Create the Trello board and the task", "Write down the algorithms", "Create the Vue app", "Start coding", "Make it beautiful with CSS"],
        
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