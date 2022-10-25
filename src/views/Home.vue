<template>
  <NavBar />
  <section class="flex">
    <div class="task-creator is-4">
      <TaskCreator />
    </div>
    <div class="taks-viewer is-8 flex flex-wrap">
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
.task-div{
  width: 25%
}
.flex {
  display: flex;
}

.flex-wrap {
  flex-wrap: wrap;
}

</style>