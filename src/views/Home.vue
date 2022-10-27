<template>
  <NavBar class="sticky-0 z-index" />
  <MobileTasker class="mobile"/>
  <section class="flex">
    <div class="task-creator is-4">
      <TaskCreator @create="fetchTask" />
    </div>
    <div class="is-8 container">
        <!-- <Tasks :task="task" class=" task-div" v-for="task in taskStore.task"/> -->
                <Tasks @edit="fetchTask" :task="task" class=" task-div" v-for="task in taskStore.task"/>

    </div>
  </section>
  <Footer />
</template>
<script setup>
import NavBar from '../components/NavBar.vue';
import TaskCreator from '../components/TaskCreator.vue';
import Tasks from '../components/Tasks.vue';
import Footer from '../components/Footer.vue';

import { useTaskStore } from '../store/task';
import MobileTasker from '../components/MobileTasker.vue';
import { onMounted } from 'vue';
const taskStore = useTaskStore();
const fetchTask = () => {

  taskStore.getTasks();
}

onMounted (() => {
  fetchTask();
})


</script>

<style scoped>
.mobile {
  display: none;
}
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
  column-count: 3;
  column-gap: 0px;
}
.task-div {
  width: 100%;
  height: fit-content;
}



@media screen and (max-width:1024px) {
  .container {
  column-count: 2;
  /* column-gap: 5px; */
} 
}
@media screen and (max-width:768px) {
  .container {
  column-count: 1;
  /* column-gap: 5px; */
} 
.is-4, .is-8 {
  width: 50%;
}
}

@media screen and (max-width:597px) {
  .container {
  column-count: 2;
  /* column-gap: 5px; */
} 
 
  .task-creator {
  display: none;
}
.mobile {
  display: block;
}
.is-4, .is-8 {
  width: 100%;
}
}

@media screen and (max-width:425px) {
  .container {
  column-count: 1;
  column-gap: 0px;
}
}


</style>