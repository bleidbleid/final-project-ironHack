<template>
     <div class="container">
     <figure>
     <div class="card"
          :class="{ bgRed: props.task.priority == 3 && props.task.is_complete}, { bgGreen: props.task.priority == 1 && props.task.is_complete }, { bgYellow: props.task.priority == 2 && props.task.is_complete }, { colorDone: !props.task.is_complete }">

          <div class="task-delete">
               <button @click="delTask()">
                    <span class="material-symbols-outlined" :class="{ blue: props.task.priority == 0 }">
                         close
                    </span>
               </button>
          </div>

          <div class="task-info">
               <div v-if="!toEdit" class="task-title">
                    <button v-if="!props.task.is_complete" @click="tascaFeta(true, props.task.id)">
                         <span class="material-symbols-outlined" :class="{ blue: props.task.priority == 0 }">
                              check_box
                         </span>
                    </button>
                    <button v-else @click="tascaFeta(false, props.task.id)">
                         <span class="material-symbols-outlined" :class="{ blue: props.task.priority == 0 }">
                              check_box_outline_blank
                         </span>
                    </button>
                    <span class="title" :class="{ textDone: !props.task.is_complete }">{{ props.task.title }}</span>

               </div>
               <div v-if="toEdit">
                    <div class="edit-element font-sg">
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
                    <div class="edit-element font-sg">
                         Description
                    </div>
                    <textarea  v-model="newDescription" class="text task-input bg-grey autoExpand" name="" id=""
                    data-min-rows="3" placeholder="New description"></textarea>
                    
                    
               </div>

               <div v-if="toEdit" class="mt-16">
                    <div class="edit-element font-sg">
                         Priority
                    </div>
                    <article class="flex space-around mt-5">
                    <button class="priority bg-grey border-green weight-regular font-lora" :class="{bgGreen: priority == 1, borderBlackish: priority == 1}" value="1"
                        @click="myPriority(1)"> Low </button>
                    <button class="priority bg-grey border-yellow weight-regular font-lora" :class="{bgYellow: priority == 2}" value="2"
                        @click="myPriority(2)">Medium</button>
                    <button class="priority bg-grey border-red weight-regular font-lora" :class="{bgRed: priority == 3}" value="3"
                        @click="myPriority(3)">High</button>
                </article>
               </div>

               <div class="task-actions" v-if="props.task.is_complete">
                    <button v-if="!toEdit" @click="allowEdit()">
                         <span class="material-symbols-outlined" :class="{ blue: props.task.priority == 0 }">
                              edit
                         </span>
                    </button>
                    <div v-if="toEdit">
                         <button @click="submitEdit()" class="button bg-blackish"
                              :class="{ bgBlue: props.task.priority == 0 }">
                              Apply
                         </button>
                         <button @click="toEdit = !toEdit" class="button blackish"
                              :class="{ blue: props.task.priority == 0 }">
                              Cancel
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
const newTitle = ref(props.task.title);
const newDescription = ref(props.task.description);

console.log(props.task.priority);

const priority = ref(props.task.priority);

const myPriority = (async (value) => {
    priority.value = value;
    console.log(priority.value);
    return priority.value;
})

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

function getScrollHeight(elm){
  var savedValue = elm.value
  elm.value = ''
  elm._baseScrollHeight = elm.scrollHeight
  elm.value = savedValue
}

function onExpandableTextareaInput({ target:elm }){
  // make sure the input event originated from a textarea and it's desired to be auto-expandable
  if( !elm.classList.contains('autoExpand') || !elm.nodeName == 'TEXTAREA' ) return
  
  var minRows = elm.getAttribute('data-min-rows')|0, rows;
  !elm._baseScrollHeight && getScrollHeight(elm)

  elm.rows = minRows
  rows = Math.ceil((elm.scrollHeight - elm._baseScrollHeight) / 16)
  elm.rows = minRows + rows
}


// global delegated event listener
document.addEventListener('input', onExpandableTextareaInput)

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
  column-gap: 10px;
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
     margin-top: 24px;
     padding: 5px 23px;
     font-size: 18px;
}

.card {
     position: relative;
     display: flex;
     flex-direction: column;
     align-items: center;
     gap: 12px;
     box-sizing: border-box;
     padding: 12px 16px 32px;
     border-color: var(--blackish);
     border-width: 1px;
     border-style: solid;
     background-color: white;
}
.task-delete > button, .task-title > button {
     padding: 0px;

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