<template>
  <form @submit.prevent="editData">
    <a class="idEdit">ID: {{ id }}</a>
    <input v-model="editMessage" required placeholder="message">
    <Button size="small" color="color1">Edit</Button>
  </form>
</template>
<script setup>
  import {ref, onMounted, watch} from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import axios from 'axios';

  import Button from './buttonComponent.vue'
  
  const router = useRouter();
  const route = useRoute();
  const link = 'https://66aba96d636a4840d7cb82a3.mockapi.io/'

  const editMessage = ref('')
  const id = route.params.id
  
  async function editData(){
    let message =  `${editMessage.value}`
    axios
      .put(`${link}activity/${id}`, {message})
      .then(() => router.push({name: 'Index'}))
  }
</script>
