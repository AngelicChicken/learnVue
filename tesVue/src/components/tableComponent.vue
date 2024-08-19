<template>
    <table>
    <thead>
        <tr>
            <th v-for="field in fields" :key="field">{{ field }}</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="data in datas">
            <td :key="data.id">{{ data.id }}</td>
            <td :key="data.message">{{ data.message }}</td>
            <td>
                <Button 
                size="small" color="color1"
                @click="router.push({name: 'Edit', params: {id: data.id}})"
                >Edit
                </Button>
                <Button 
                size="small" color="color2" type="delete"
                @click="deleteData(data.id)"
                >Delete
                </Button>
            </td>
        </tr>
    </tbody>
    </table>
</template>
<script setup>
    import {getCurrentInstance} from 'vue'
    import {useRouter} from 'vue-router'
    import axios from 'axios';

    const router = useRouter()
    const link = 'https://66aba96d636a4840d7cb82a3.mockapi.io/'

    import Button from './buttonComponent.vue'

    const props = defineProps({
        datas:{
            type: Array,
            required: true
        },
        fields:{
            type: Array,
            required: true
        },
        refetch:{
            type: Function,
            required: false
        }
    })

    const methodThatForcesUpdate = () => {
        const instance = getCurrentInstance()
        instance.proxy.forceUpdate();
    }

    async function deleteData(id){
    await axios
      .delete(`${link}activity/${id}`)
      props.refetch()
    }
</script>