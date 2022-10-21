<template>
        <div class="task-component is-3 bg-white">
            <h2>New task</h2>
            <form class="task-container">
                <div class="task-element">
                    Title
                    <input v-model="title" class="text task-input bg-grey" placeholder="Title">

                </div>

                <div class="task-element">
                    Description
                    <textarea v-model="description" class="textarea task-input bg-grey"
                        placeholder="Write thing to do"></textarea>
                </div>

                <div class="task-button">
                    <button @click="onSubmit" class="button bg-blackish">Create</button>
                </div>
            </form>
        </div>



    <!-- Crear un componente para visualizar el post como el lab de Tweets
    Recorrer la array para mostrarlos todos -->
</template>
<script setup>
import { ref } from 'vue';
import { useTaskStore } from '../store/task'

const taskStore = useTaskStore();
// Al enviar el formulario hacer un push en el store de posts
// Tenemos que crear un action que se encarque de hacer el push
const description = ref('');
const title = ref('');


const onSubmit = (e) => {
    e.preventDefault(),
    console.log('AQUIII', title.value)
    console.log('ALLAAAA', description.value)
    if(! title.value == '' && !description.value == ''){
        taskStore.addTask(title.value, description.value);
    }
    title.value = '';
    description.value = '';
    taskStore.getTasks();
}
</script>
<style scoped>


.task-component {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px 36px 36px 36px;
    border-color: rgba(0, 0, 0, 1);
    border-width: 1px;
    border-style: solid;
}

.task-container {
    display: flex;
    flex-direction: column;
    padding: 15px 36px 36px 36px;
}

.task-container {
    display: flex;
    flex-direction: column;
    width: 70%;
    gap: 16px;
}
.task-element {
    font-size: 12px;
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
</style>