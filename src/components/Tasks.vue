<template>


     <div class="card is-3" :style="done ? {'background-color': 'var(--grey)'} : {'background-color':'#ffffff'}">

          <div class="task-delete">
               <button @click="delTask()">
                    <span class="material-symbols-outlined">
                         close
                    </span>
               </button>
          </div>

          <div class="task-info">
               <div class="task-title">
                    <button @click="doneTask()">
                         <span v-if="done" class="material-symbols-outlined">
                              select_check_box
                         </span>
                         <span v-else class="material-symbols-outlined">
                              check_box_outline_blank
                         </span>
                    </button>
                    <span class="title">{{props.task.title}}</span>
               </div>

               <div class="task-content">
                    <span class="description">{{props.task.description}}</span>
               </div>

               <div class="task-actions" v-if="!done">
                    <button>
                         <span class="material-symbols-outlined">
                              edit
                         </span>
                    </button>
               </div>
          </div>
     </div>

</template>
<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue'
import { useTaskStore } from "../store/task";
const props = defineProps(['task']);
const taskStore = useTaskStore();
const done = ref(false);
const delTask = (async () => {
     await taskStore.deleteTask(props.task.id);
     taskStore.getTasks();
})

// if (taskStore.task.is_complete.value == true) {
//      done = true;
// } else {
//      done = false;

// }
const doneTask = (async () => {
     await taskStore.completeTask(props.task.id);
     taskStore.completeTask();
})
</script>
<style scoped>
.card {
     position: relative;
     display: flex;
     flex-direction: column;
     align-items: center;
     gap: 12px;
     box-sizing: border-box;
     padding: 12px 16px 32px 16px;
     border-color: var(--blackish);
     border-width: 1px;
     border-style: solid;
     background-color: white;
}

.task-delete {
     display: flex;
     flex-direction: row;
     width: 100%;
     justify-content: flex-end;
     align-items: flex-end;
     padding-top: 5px;
     padding-right: 5px;
     padding-bottom: 5px;
     padding-left: 5px;
     display: flex;
     position: relative;
     min-width: 20px;
     min-height: 20px;
}

.task-info {
     display: flex;
     flex-direction: column;
     width: 100%;
}

.task-title {
     display: flex;
     justify-content: left;
     align-items: center;
     position: relative;
     width: 100%;
     text-transform: uppercase;

}

.task-content {
     padding-left: 18px;
     margin-top: 12px;
     text-transform: capitalize;

}

.task-actions {
     display: flex;
     justify-content: center;
     width: 100%;
}
</style>