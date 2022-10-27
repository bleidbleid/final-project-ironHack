<template>
     <div class="containerGrid">
          <figure>
               <div class="card"
                    :class="{ bgRed: props.task.priority == 3 && props.task.is_complete }, { bgGreen: props.task.priority == 1 && props.task.is_complete }, { bgYellow: props.task.priority == 2 && props.task.is_complete }, { colorDone: !props.task.is_complete }">

                    <div  class="task-delete">
                         <button v-if="!toEdit" @click="delTask()">
                              <span class="material-symbols-outlined close" :class="{ blue: props.task.priority == 0 && props.task.is_complete}">
                                   close
                              </span>
                         </button>
                         <p class="date">{{ date }}</p>

                    </div>

                    <div class="task-info">
                         <div v-if="!toEdit" class="task-title">
                              <button v-if="!props.task.is_complete" @click="tascaFeta(true, props.task.id)">
                                   <span class="material-symbols-outlined">
                                        check_box
                                   </span>
                              </button>
                              <button v-else @click="tascaFeta(false, props.task.id)">
                                   <span class="material-symbols-outlined" :class="{ blue: props.task.priority == 0 }">
                                        check_box_outline_blank
                                   </span>
                              </button>
                              <span class="title" :class="{ textDone: !props.task.is_complete }">{{ props.task.title
                              }}</span>

                         </div>
                         <div v-if="toEdit">
                              <div class="edit-element font-sg">
                                   Title
                              </div>
                              <input v-model="props.task.title" class="text task-input bg-trans"
                                   :placeholder="props.task.title">
                         </div>

                         <div v-if="!toEdit">
                              <div class="task-content" v-if="props.task.is_complete">
                                   <span class="description">{{ props.task.description }}</span>
                              </div>
                         </div>
                         <div v-if="toEdit" class="mt-16">
                              <div class="edit-element font-sg">
                                   Description
                              </div>
                              <textarea v-model="props.task.description" class="text task-input bg-trans autoExpand" name=""
                                   @input="onExpandableTextareaInput" data-min-rows="3"></textarea>


                         </div>

                         <div v-if="toEdit" class="mt-16 mb-16">
                              <div class="edit-element font-sg">
                                   Priority
                              </div>
                              <article class="flex space-around mt-5">
                                   <button class="priority bg-trans weight-regular font-lora"
                                        :class="{ bgGreen: priority == 1, borderBlackish: priority == 1 }" value="1"
                                        @click="myPriority(1)"> Low </button>
                                   <button class="priority bg-trans weight-regular font-lora"
                                        :class="{ bgYellow: priority == 2, borderBlackish: priority == 2 }" value="2"
                                        @click="myPriority(2)">Medium</button>
                                   <button class="priority bg-trans weight-regular font-lora"
                                        :class="{ bgRed: priority == 3, borderBlackish: priority == 3 }" value="3"
                                        @click="myPriority(3)">High</button>
                              </article>
                         </div>

                         <div class="task-actions mt-16" v-if="props.task.is_complete">
                              <button class="paddingr-0" v-if="!toEdit" @click="allowEdit()">
                                   <span class="material-symbols-outlined" :class="{ blue: props.task.priority == 0 }">
                                        edit_note
                                   </span>
                              </button>
                              <div v-if="toEdit" class="center width-100 mt-24 flex space-between">
                                   <button @click="toEdit = !toEdit" class="button blackish"
                                        :class="{ blue: props.task.priority == 0 }">
                                        Cancel
                                   </button>
                                   <button @click="submitEdit()" class="button bg-blackish"
                                        :class="{ bgBlue: props.task.priority == 0 }">
                                        Apply
                                   </button>
                              </div>
                         </div>
                    </div>
               </div>
          </figure>
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


const priority = ref(props.task.priority);
const date = ref(props.task.created_at.slice(0, 10));

const orderPlease = true;
const myPriority = (async (value) => {
     if (priority.value == value) {
          priority.value = 0
     } else {

          priority.value = value;
          return priority.value;
     }
})

// delete task
const delTask = (async () => {
     await taskStore.deleteTask(props.task.id);
     await taskStore.getTasks();
     toEdit.value = false;
})

// mark a task as done
const tascaFeta = (async (boolean, id) => {
     done.value = boolean;
     await taskStore.completeTask(props.task.id, boolean);
     await taskStore.getTasks();
})

// to expand text area
function getScrollHeight(elm) {
     var savedValue = elm.value
     elm.value = ''
     elm._baseScrollHeight = elm.scrollHeight
     elm.value = savedValue
}

function onExpandableTextareaInput({ target: elm }) {
     // make sure the input event originated from a textarea and it's desired to be auto-expandable
     if (!elm.classList.contains('autoExpand') || !elm.nodeName == 'TEXTAREA') return

     var minRows = elm.getAttribute('data-min-rows') | 0, rows;
     !elm._baseScrollHeight && getScrollHeight(elm)

     elm.rows = minRows
     rows = Math.ceil((elm.scrollHeight - elm._baseScrollHeight) / 16)
     elm.rows = minRows + rows
}


//change the task to editable
const prior = () => {
     emits('orderTasks')
} 


const allowEdit = () => {
     toEdit.value = true;
}
//send edit
const submitEdit = (async () => {
     await taskStore.editTask(props.task.title, props.task.description, props.task.id, priority.value);
     // await taskStore.getTasks();
     emits('edit')
   
     toEdit.value = false;     
})

const emits = defineEmits(['edit','orderTasks'])
</script>
<style scoped>
.date {
     font-size: 12px;
     padding-right: 5px;
}

.close {
     font-weight: 500;
}

.blue {
     color: var(--blue);
}

.bgYellow {
     background-color: var(--yellow);
}

.bgGreen {
     background-color: var(--green);
}

.bgRed {
     background-color: var(--red);
}

.bg-grey:hover {
     background-color: var(--whiteish);
     color: black;
}

.task-input {
     width: 100%;
}

.task-button {
     text-align: center;
     align-self: center;
     width: fit-content;
     padding: 5px 23px;
     font-size: 18px;
}

.card {
    
     gap: 12px;
     box-sizing: border-box;
     padding: 12px 16px;
     border-color: var(--blackish);
     border-width: 0.5px;
     border-style: solid;
     background-color: white;
}

.task-delete>button,
.task-title>button {
     padding: 0px;
     align-items: baseline;

}

.edit-element {
     font-size: 12px;
     text-align: left;
     width: 100%;
}

.colorDone {
     background-color: var(--grey);
}

.bgYellow {
     background-color: var(--yellow);
}

.bgGreen {
     background-color: var(--green);
}

.bgRed {
     background-color: var(--red);
}

.bgBlue {
     background-color: var(--blue);
}

.textDone {
     text-decoration: line-through;
     /* font-weight: 400; */
}

.task-delete {
     display: flex;
     flex-direction: column;
     width: 100%;
     justify-content: flex-end;
     align-items: flex-end;
     padding-top: 5px;
     padding-right: 5px;
     padding-bottom: 5px;
     padding-left: 5px;
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
     justify-content: right;
     width: 100%;
}
</style>