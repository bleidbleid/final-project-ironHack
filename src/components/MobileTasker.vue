<template>
    <div class="center">
        <button class="width-100 center block fontsize-24" @click="open = !open">
            NEW TASK
            <span v-if="!open" class="material-symbols-outlined">
                expand_more
            </span>
            <span v-if="open" class="material-symbols-outlined">
                expand_less
            </span>
        </button>

        <div v-if="open">
            <aside class="task-component bg-white">
                <form class="task-container">
                    <div class="task-element mt-24">
                        <span class="font-sg">
                            Title *
                        </span>

                        <input v-model="title" class="text task-input bg-grey" placeholder="Title">
                    </div>

                    <div class="task-element">
                        <span class="font-sg">
                            Description *
                        </span>

                        <textarea v-model="description" class="text task-input bg-grey autoExpand" name="" id=""
                            rows="3" data-min-rows="3" placeholder="New description"></textarea>
                    </div>
                    <div class="task-element">
                        <span class="font-sg">
                            Priority
                        </span>

                        <article class="flex space-around mt-5">
                            <button class="priority bg-grey border-green weight-regular font-lora"
                                :class="{ bgGreen: priority == 1 }" value="1" @click="myPriority(1)"> Low </button>
                            <button class="priority bg-grey border-yellow weight-regular font-lora"
                                :class="{ bgYellow: priority == 2 }" value="2" @click="myPriority(2)">Medium</button>
                            <button class="priority bg-grey border-red weight-regular font-lora"
                                :class="{ bgRed: priority == 3 }" value="3" @click="myPriority(3)">High</button>
                        </article>
                    </div>

                    <div class="task-button">
                        <button @click="onSubmit" class="button bg-blue">Create</button>
                    </div>
                </form>
            </aside>
        </div>
        
    </div>
    <PrioritySorter class="mobile width-100 center " @prior="emits('prior')" @date="emits('date')" />
</template>
<script setup>
import { ref } from 'vue';
import PrioritySorter from './PrioritySorter.vue';
const open = ref(false);
const emits = defineEmits(['prior', 'date']);

</script>
<style scoped>
.width-100 {
    width: 93% !important;
}
.prioContainer {
    justify-content: space-around;
}
.material-symbols-outlined {
    font-weight: 900;
}

.autoExpand {
    max-height: 250px;
}

textarea {
    height: auto !important;
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
    border-top: rgba(0, 0, 0, 1) 1px solid;
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