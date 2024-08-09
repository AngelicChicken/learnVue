<script setup>
  const link = 'https://66aba96d636a4840d7cb82a3.mockapi.io/'

  const editMessage = ref('')
  const editID = ref()
  
  async function editData(){
    let message =  `${editMessage.value}`
    let id = `${editID.value}`
    axios
      .put(`${link}activity/${id}`, {message})
      .then(() => fetchData())
  }
</script>
<template>
  <form @submit.prevent="editData">
    <input v-model="editMessage" required placeholder="message">
    <input v-model="editID" required placeholder="id">
    <button>edit</button>
  </form>
</template>