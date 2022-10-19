<template>
     <!-- NO LI ESTIC PASSANT B LES DADES A SUPABASE -->
</template>
<script setup>
import { defineProps, computed } from 'vue'
const props = defineProps({
    post: Object
})

// Computed guarda en una variable un computo de una o mas variables reactivas
const date = computed(() => props.post.date.toLocaleString())
</script>
<style scoped>
</style>