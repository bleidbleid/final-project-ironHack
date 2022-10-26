<template>
  <NavBar class="sticky-0 z-index" />
  <section class="flex">
    <div class="task-creator is-4">
      <TaskCreator />
    </div>
    <div class="is-8 container">
        <!-- <Tasks :task="task" class=" task-div" v-for="task in taskStore.task"/> -->
                <Tasks :task="task" class=" task-div" v-for="task in taskStore.task"/>

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
img {
  max-width: 100%;
  display: block;
}

figure {
  margin: 0;
  display: grid;
  grid-template-rows: 1fr auto;
  margin-bottom: 10px;
  break-inside: avoid;
}

figure > img {
  grid-row: 1 / -1;
  grid-column: 1;
}

figure a {
  color: black;
  text-decoration: none;
}

figcaption {
  grid-row: 2;
  grid-column: 1;
  background-color: rgba(255,255,255,.5);
  padding: .2em .5em;
  justify-self: start;
}

.container {
  column-count: 4;
  column-gap: 5px;
}
.task-div {
  width: 25%;
  height: fit-content;
}



@media screen and (max-width:1023px) {
  .container {
  column-count: 2;
  /* column-gap: 5px; */
} 
}

@media screen and (max-width:768px) {
  .container {
  column-count: 1;
  column-gap: 0px;
}
}
</style>