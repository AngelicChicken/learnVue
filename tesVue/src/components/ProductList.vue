<script setup>
  import {ref, onMounted, watch} from 'vue'
  import {useRouter} from 'vue-router'
  import axios from 'axios';

  const router = useRouter()
  const link = 'https://66aba96d636a4840d7cb82a3.mockapi.io/'

  const todoData = ref([])
  async function fetchData(){
    todoData.value = null
    axios 
      .get(`${link}activity`)
      .then((response)=> {todoData.value = response.data})
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
  <button
  @click="router.push({name: 'Create'})"
  id="indexAddButton"
  class="button is-warning">
  Add
  </button>
  <table>
    <tr>
      <th scope="col">id</th>
      <th scope="col">message</th>
      <th scope="col">action</th>
    </tr>
    <tr v-for="item of todoData">
      <th>{{ item.id }}</th>
      <th>{{ item.message }}</th>
      <th>
        <button
          @click="router.push({name: 'Edit', params: {id: item.id}})"
          class="button is-warning is-small"
          style="margin: 2px;">
          Edit
        </button>
        <button
            class="button is-danger is-small"
            style="margin: 2px;"
            @click="deleteData(item.id)">
            Delete
        </button>
      </th>
    </tr>
  </table>
</template>