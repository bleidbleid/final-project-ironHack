<template>
    <aside class="task-component item1 bg-white">
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
                <select v-model="priority" multiple class="bg-none">
                    <option @click="myPriority" class="priority bg-grey" value="1">Low</option>
                    <option @click="myPriority" class="priority bg-grey" value="2">Medium</option>
                    <option @click="myPriority" class="priority bg-grey" value="3">High</option>
                </select>
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
// Al enviar el formulario hacer un push en el store de posts
// Tenemos que crear un action que se encarque de hacer el push
const description = ref('');
const title = ref('');
const priority = ref();

const myPriority = (async (e) => {
    priority = priority.value;
    console.log(value.value);
})


const onSubmit = (async (e) => {
    e.preventDefault()
    // console.log('AQUIII', title.value)
    // console.log('ALLAAAA', description.value)
    if (!title.value == '' && !description.value == '') {
        await taskStore.addTask(title.value, description.value);
        await taskStore.getTasks();
        title.value = '';
        description.value = '';
    }
})
</script>
<style scoped>
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
    padding: 15px 36px 36px 36px;
    border-color: rgba(0, 0, 0, 1);
    border-width: 1px;
    border-style: solid;
    height: 80vh;
}

.task-container {
    display: flex;
    flex-direction: column;
    padding: 15px 36px 36px 36px;
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