<template>
    <div class="center width-90 padding-20 bg-realwhite">
        <div class="center width-100 bgGrey  flex is-horitzontal space-between prioContainer" >
            <button class="fs-14 bg-blackish  width-50" :class="{ bgGrey: !isActive }" @click="dater"> by date</button>
           <button class="fs-14 width-50  bg-blackish" :class="{bgGrey: isActive }" @click="priori">by priority</button>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { defineEmits } from 'vue'
const isActive = ref(true)
const priori = () => {
    emits ('prior');
    isActive.value = false;
}
const dater = () => {
    emits ('date'); 
    isActive.value = true;
}
const emits = defineEmits(['prior', 'date'])
</script>

<style scoped>
.bgGrey {
  background-color: var(--grey);
  color: var(--blackish);
}
.prioContainer {
    border-radius: 50px;
} 
button {
    display: inline-block;
}

.bg-realwhite {
  background-color: white;
  color: var(--blackish);
}

</style>