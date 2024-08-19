<template>
    <button :class="`${props.size} ${props.color}`">
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
    })


</script>
<style>
 button{
    margin: 5px;
    color: black;
    border-radius: 5px;
    text-align: center;
}
 .small{
    padding: 6px 6px;
    font-size: 1rem;
 }
 .medium{
    padding: 8px 10px;
    font-size: 1.2rem;
}
 .large{
    padding: 10px 12px;
    font-size: 1.4rem;
 }
 .color1{
    background-color: rgb(255, 208, 0);
}
 .color2{
    background-color: rgb(255, 61, 61);
 }
</style>