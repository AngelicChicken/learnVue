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
            <td v-for="field in fields">{{ data[field] }}</td>
            <!-- <td>
                <Button :size="medium" :color="color1" :type="edit">Edit</Button>
            </td> -->
        </tr>
    </tbody>
    </table>
</template>
<script setup>
    import Button from './buttonComponent.vue'
    const props = defineProps({
        datas:{
            type: Array,
            required: true
        },
        fields:{
            type: Array,
            required: true
        }
    })
</script>