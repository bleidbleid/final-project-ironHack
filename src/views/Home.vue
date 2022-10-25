<template>
  <NavBar class="sticky-0 z-index" />
  <section class="flex">
    <div class="task-creator is-4 is-1-tablet">
      <TaskCreator />
    </div>
    <div class="taks-viewer is-8 is-2-tablet flex flex-wrap">
      <div class="task-div" v-for="task in taskStore.task">
        <Tasks :task="task" />
      </div>
    </div>

  </section>
</template>
<script setup>
import NavBar from '../components/NavBar.vue';
import TaskCreator from '../components/TaskCreator.vue';
import Tasks from '../components/Tasks.vue';
import { useTaskStore } from '../store/task';
const taskStore = useTaskStore();

taskStore.getTasks();


</script>

<style scoped>
.task-div {
  width: 25%;
  height: fit-content;
}

@media screen and (max-width:1023px) {
  .task-div {
  width: 33%;
  height: fit-content;
}
}
</style>