<script setup>
  import {ref, onMounted, watch} from 'vue'
  import axios from 'axios';

  const todoData = ref([])
  const newTodo = ref('')
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
      .then(() => fetchData())
  }

  async function deleteData(id){
    axios
      .delete(`${link}activity/${id}`)
      .then(() => fetchData())
  }

  onMounted(()=>{
    fetchData()
  })

  watch(todoData.value ,fetchData)
</script>
<template>
    <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">message</th>
      <th scope="col">action</th>
    </tr>
    <tr v-for="item of todoData">
      <th>{{ item.id }}</th>
      <th>{{ item.message }}</th>
      <th>
        <router-link 
            :to="{name: 'Edit', params: {id: item.id}}" 
            class="button is-warning is-small"
            style="margin: 2px;">
            Edit
        </router-link>
        <a
            class="button is-danger is-small"
            style="margin: 2px;"
            @click="deleteData(item.id)">
            Delete
        </a>
      </th>
    </tr>
  </thead>
  <form @submit.prevent="sendData">
    <input v-model="newTodo" required placeholder="message">
    <button>add to do</button>
  </form>
</template>