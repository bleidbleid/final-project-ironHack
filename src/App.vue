<template>
  <router-view></router-view>
</template>

<script setup>
import { onMounted } from "vue";
import { ref } from "vue";
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist';
import { useRouter } from "vue-router";
import { useAuthStore } from "./store/auth.js";
import { useTaskStore } from "./store/task.js";

const router = useRouter();
const authStore = useAuthStore();
const taskStore = useTaskStore();

const pinia = createPinia();
pinia.use(piniaPersist)

onMounted(async () => {
  const appReady = ref(null);
  try {
    if (!authStore.user) {
      appReady.value = true;
      router.push({ name: 'login' });
    } else {

    }
  } catch (e) {
    console.log(e);
  }
});
</script>

<style scoped>

</style>