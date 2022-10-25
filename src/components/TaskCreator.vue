<template>
    <aside class="task-component sticky-100 item1 bg-white">
        <h2>New task</h2>
        <form class="task-container">
            <div class="task-element">
                <span class="font-sg">
                    Title *
                </span>

                <input v-model="title" class="text task-input bg-grey" placeholder="Title">
            </div>

            <div class="task-element">
                <span class="font-sg">
                    Description *
                </span>

                <textarea v-model="description" class="textarea task-input bg-grey"
                    placeholder="Description of what I have to do">
                    </textarea>
            </div>
            <div class="task-element">
                <span class="font-sg">
                    Priority
                </span>
                <!-- <select v-model="priority" multiple class="bg-none">
                    <option @click="myPriority" class="priority bg-grey" value="1">Low</option>
                    <option @click="myPriority" class="priority bg-grey" value="2">Medium</option>
                    <option @click="myPriority" class="priority bg-grey" value="3">High</option>
                </select> -->
                <article class="flex space-around mt-5">
                    <button class="priority bg-grey weight-regular font-lora" :class="{bgGreen: priority == 1}" value="1"
                        @click="myPriority(1)"> Low </button>
                    <button class="priority bg-grey weight-regular font-lora" :class="{bgYellow: priority == 2}" value="2"
                        @click="myPriority(2)">Medium</button>
                    <button class="priority bg-grey weight-regular font-lora" :class="{bgRed: priority == 3}" value="3"
                        @click="myPriority(3)">High</button>
                </article>
            </div>

            <div class="task-button">
                <button @click="onSubmit" class="button bg-blue">Create</button>
            </div>
        </form>
    </aside>

</template>
<script setup>
import { ref } from 'vue';
import { useTaskStore } from '../store/task'

const taskStore = useTaskStore();

const description = ref('');
const title = ref('');
const priority = ref(0);
const low = ref(false);
const medium = ref(false);
const high = ref(false);

if (low == true) {
    medium = false;
    high = false;
} else if (medium == true) {
    low = false;
    high = false;
} else if (high == true) {
    low = false;
    medium = false;
}



const myPriority = (async (value) => {
    priority.value = value;
    console.log(priority.value);
    return priority.value;
})

const onSubmit = (async (e) => {
    e.preventDefault()
    if (!title.value == '' && !description.value == '') {
        await taskStore.addTask(title.value, description.value, priority.value);
        await taskStore.getTasks();
        title.value = '';
        description.value = '';
        priority.value = 0;
    }
})
</script>
<style scoped>

.bgYellow {
  background-color: var(--yellow);
}
.bgGreen {
  background-color: var(--green);
}

.bgRed {
  background-color: var(--red);
}
.priority {
    max-width: fit-content;
    padding: 6px 16px;
    margin-bottom: 4px;
    font-size: 1rem;
}

.task-component {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8px 20px 20px 20px;
    border-color: rgba(0, 0, 0, 1);
    border-width: 1px;
    border-style: solid;
    height: 88vh;
}

.task-container {
    display: flex;
    flex-direction: column;
    /* padding: 15px 36px 36px 36px; */
    width: 70%;
    gap: 16px;
}

.task-element {
    font-size: 14px;
    text-align: left;
    width: 100%;
    display: flex;
    flex-direction: column;
}

.task-input {
    display: flex;
    width: 90%;
    height: 53px;
    margin-top: 5px;
    padding: 0px 12px;
}

.task-button {
    text-align: center;
    align-self: center;
    width: fit-content;
    margin-top: 24px;
    padding: 5px 23px;
    font-size: 18px;
}
</style>