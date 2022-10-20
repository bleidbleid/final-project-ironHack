<template>
  <NavBar/>
  <section >
    <TaskCreator />
    <div v-for="task in taskStore.task">
        <Tasks :task="task"/>
      </div>

  </section>
</template>
<script setup>
import NavBar from '../components/NavBar.vue';
import TaskCreator from '../components/TaskCreator.vue';
import Tasks from '../components/Tasks.vue';
import {useTaskStore} from '../store/task';
const taskStore = useTaskStore();

taskStore.getTasks();


</script>

<style scoped>

</style>