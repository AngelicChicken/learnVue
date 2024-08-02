<script setup>
  import {ref, onMounted} from 'vue'
  import axios from 'axios';

  const todoData = ref([])
  const newTodo = ref('')
  const editMessage = ref('')
  const editID = ref()
  const link = 'https://66aba96d636a4840d7cb82a3.mockapi.io/'

  async function fetchData(){
    todoData.value = null
    axios 
      .get(`${link}activity`)
      .then((response)=> {todoData.value = response.data})
  }

  async function sendData(){
    let message =  `${newTodo.value}`
    axios
      .post(`${link}activity`, {message})
      .then(fetchData())
  }

  async function editData(){
    let message =  `${editMessage.value}`
    let id = `${editID.value}`
    axios
      .put(`${link}activity/${id}`, {message})
      .then(fetchData())
  }

  onMounted(()=>{
    fetchData()
  })
</script>

<template>
  <ul>
    <li v-for="item of todoData">{{ item }}</li>
  </ul>
  <form @submit.prevent="sendData">
    <input v-model="newTodo" required placeholder="message">
    <button>add to do</button>
  </form>
  <form @submit.prevent="editData">
    <input v-model="editMessage" required placeholder="message">
    <input v-model="editID" required placeholder="id">
    <button>edit</button>
  </form>
</template>
