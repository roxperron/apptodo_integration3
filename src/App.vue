<template>
  <LoginForm />
   <Header />
   <ToDoForm />
</template>

<script>
import ToDoForm from './components/ToDoForm.vue';
import Header from './components/Header.vue';
import LoginForm from './components/LoginForm.vue';

export default {
  name: 'App',
  components: {
    LoginForm,
    ToDoForm,
    Header,
  }
}
</script>
