<script setup>
  import {ref, onMounted, watch} from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import axios from 'axios';
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
<template>
  <form @submit.prevent="editData">
    <a>id: {{ id }}</a>
    <input v-model="editMessage" required placeholder="message">
    <button>edit</button>
  </form>
</template>