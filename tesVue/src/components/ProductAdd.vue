<template>
  <form @submit.prevent="sendData">
    <input v-model="newTodo" required placeholder="message">
    <Button size="medium" color="color1">Add</Button>
  </form>
</template>
<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import axios from 'axios';

  import Button from './buttonComponent.vue'

  const router = useRouter();
  const link = 'https://66aba96d636a4840d7cb82a3.mockapi.io/'

  const newTodo = ref('')

  async function sendData(){
    let message =  `${newTodo.value}`
    axios
      .post(`${link}activity`, {message})
      .then(() => router.push({name: 'Index'}))
  }
</script>