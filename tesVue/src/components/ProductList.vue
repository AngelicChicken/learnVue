<template>
  <Button
  @click="router.push({name: 'Create'})"
  size="small" color="color1"
  >Add
  </Button>
  <Table :fields="fields" :datas="todoData" :refetch="fetchData"></Table>
</template>
<script setup>
  import {ref, onMounted, watch} from 'vue'
  import {useRouter} from 'vue-router'
  import axios from 'axios';

  import Table from './tableComponent.vue'
  import Button from './buttonComponent.vue'

  const router = useRouter()
  const link = 'https://66aba96d636a4840d7cb82a3.mockapi.io/'

  const todoData = ref([])
  async function fetchData(){
    todoData.value = null
    await axios 
      .get(`${link}activity`)
      .then((response)=> {todoData.value = response.data})
  }
  const fields = ['id', 'message']

  onMounted(()=>{
    fetchData()
  })

  watch(todoData.value ,fetchData)
</script>