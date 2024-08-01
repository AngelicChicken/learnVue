<script setup>
  import {ref} from 'vue'
  import axios from 'axios';

  const todoData = ref([])
  const newTodo = ref('')

  async function fetchData(){
    todoData.value = null
    axios 
      .get('https://66aba96d636a4840d7cb82a3.mockapi.io/activity')
      .then((response)=> {todoData.value = response.data})
  }

  async function sendData(){
    let message = newTodo.value
    axios
      .post('https://66aba96d636a4840d7cb82a3.mockapi.io/activity', message)
      .then(fetchData())
  }

  fetchData()
</script>

<template>
  <ul>
    <li v-for="item of todoData">{{ item }}</li>
  </ul>
  <form @submit.prevent="sendData">
    <input v-model="newTodo" required placeholder="message">
    <button>add to do</button>
  </form>
</template>
