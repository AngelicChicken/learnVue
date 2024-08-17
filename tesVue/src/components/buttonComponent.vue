<template>
    <button v-bind="props">
        <slot></slot>
    </button>
</template>
<script setup>
    const props = defineProps({
        //small medium large
        size:{
            type: String
        },
        //color1, color2
        color:{
            type: String
        },
        //add edit delete
        type:{
            type: String
        }
    })
</script>
<style>
 button{
    margin: 10px;
    color: black;
    border-radius: 10px;
    text-align: center;
}
 .small{
    padding: 2px 5px;
    font-size: 1.2rem;
 }
 .medium{
    padding: 5px 10px;
    font-size: 1.6rem;
}
 .large{
    padding: 10px 15px;

 }
 .color1{
    background-color: rgb(255, 208, 0);
}
 .color2{
    background-color: rgb(255, 61, 61);
 }
</style>