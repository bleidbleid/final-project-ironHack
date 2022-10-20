<template>
     <!-- NO LI ESTIC PASSANT B LES DADES A SUPABASE -->
</template>
<script setup>
import { useTaskStore } from '../store/task'
const taskStore = useTaskStore();


// async getTasks() {
//             const { data: task } = await supabase
//                 .from("task")
//                 .select("*")
//                 .order("is_complete")
//                 .order("id", { ascending: false })

//             this.task = task
//             return this.task
//         },
</script>
<style scoped>
</style>