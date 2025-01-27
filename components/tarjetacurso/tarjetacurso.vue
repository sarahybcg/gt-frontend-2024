<template src="./tarjetacurso.html"></template>

<script lang="ts">
import { defineProps } from 'vue';
import './tarjetacurso.css'; 

export default {
    name: 'TarjetaCurso', 
    props: {
        courseNumber: {
            type: Number,
            default: 6
        },
        courseType: {
            type: String,
            default: 'Cocina'
        }
    }
};
</script>

<style src="./tarjetacurso.css" scoped></style>