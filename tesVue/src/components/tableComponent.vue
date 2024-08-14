<script setup>
defineProps(['columns', 'heads', 'items'])
</script>
<template>
    <tr>
        <th scope="col" v-for="head in heads">{{ head }}</th>
    </tr>
    <tr v-for="column in columns">
        <th v-for="item in items">{{ item.id }}</th>
    </tr>
</template>