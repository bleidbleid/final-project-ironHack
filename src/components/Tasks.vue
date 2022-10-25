<template>
     <div class="card" :class="{ colorDone: !props.task.is_complete }">

          <div class="task-delete">
               <button @click="delTask()">
                    <span class="material-symbols-outlined blackish">
                         close
                    </span>
               </button>
          </div>

          <div class="task-info">
               <div v-if="!toEdit" class="task-title">
                    <button v-if="!props.task.is_complete" @click="tascaFeta(true, props.task.id)">
                         <span class="material-symbols-outlined blackish">
                              check_box
                         </span>
                    </button>
                    <button v-else @click="tascaFeta(false, props.task.id)">
                         <span class="material-symbols-outlined blackish">
                              check_box_outline_blank
                         </span>
                    </button>
                    <span class="title" :class="{ textDone: !props.task.is_complete }">{{ props.task.title }}</span>

               </div>
               <div v-if="toEdit">
                    <div class="edit-element">
                         Title
                    </div>
                    <input v-model="newTitle" class="text task-input bg-grey" placeholder="New title">
               </div>

               <div v-if="!toEdit">
                    <div class="task-content" v-if="props.task.is_complete">
                         <span class="description">{{ props.task.description }}</span>
                    </div>
               </div>
               <div v-if="toEdit" class="mt-16">
                    <div class="edit-element">
                         Description
                    </div>
                    <textarea v-if="toEdit" v-model="newDescription" class="text task-input bg-grey" name="" id=""
                         cols="25" rows="10" placeholder="New description"></textarea>
               </div>

               <div class="task-actions" v-if="props.task.is_complete">
                    <button v-if="!toEdit" @click="allowEdit()">
                         <span class="material-symbols-outlined blackish">
                              edit
                         </span>
                    </button>
                    <button v-if="toEdit" @click="submitEdit()">
                         Apply changes
                    </button>
               </div>
          </div>
     </div>

</template>
<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue'
import { useTaskStore } from "../store/task";
const props = defineProps({ task: Object });
const taskStore = useTaskStore();
const done = ref(props.task.is_complete);
const toEdit = ref(false);
const newTitle = ref(props.task.title);
const newDescription = ref(props.task.description);

// delete task
const delTask = (async () => {
     await taskStore.deleteTask(props.task.id);
     await taskStore.getTasks();
})

// mark a task as done
const tascaFeta = (async (boolean, id) => {
     done.value = boolean;
     await taskStore.completeTask(props.task.id, boolean);
     await taskStore.getTasks();
     console.log(id)
})

const colorDone = ({
     active: true,
})

//change the task to editable
const allowEdit = () => {
     toEdit.value = true;
}
//send edit
const submitEdit = (async () => {
     await taskStore.editTask(newTitle.value, newDescription.value, props.task.id);
     await taskStore.getTasks();
     toEdit.value = false;
})
</script>
<style scoped>
.bg-grey:hover {
     background-color: var(--whiteish);
     color: black;
}

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
     width: 100%;
}

.edit-element {
     font-size: 12px;
     text-align: left;
     width: 100%;
}

.colorDone {
     background-color: var(--grey);
}

.textDone {
     text-decoration: line-through;
     /* font-weight: 400; */
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
     /* font-family: 'Oswald', sans-serif; */
     font-family: 'Space Grotesk', sans-serif;

     font-size: 1.5rem;
     font-weight: 600;
     justify-content: left;
     align-items: center;
     position: relative;
     width: 100%;
     text-transform: uppercase;

}

.task-content {
     padding-left: 18px;
     margin-top: 12px;
}

.task-actions {
     display: flex;
     justify-content: center;
     width: 100%;
}
</style>