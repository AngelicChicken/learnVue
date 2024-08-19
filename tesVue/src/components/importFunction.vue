<template>

</template>
<script>
    import {useRouter} from 'vue-router'
    import axios from 'axios';
    const router = useRouter()
    const link = 'https://66aba96d636a4840d7cb82a3.mockapi.io/'

    async function fetchData(){
    todoData.value = null
    axios 
        .get(`${link}activity`)
        .then((response)=> {todoData.value = response.data})
    }
</script>