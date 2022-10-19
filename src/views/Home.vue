<template>
    <h2>Home</h2>
    <button @click="onClick()" class="button">Log out</button>

</template>
<script setup>
import { useAuthStore } from '../store/auth'
import { useRouter } from "vue-router";
const router = useRouter();
const authStore = useAuthStore();


async function onClick () {
    try {
    await authStore.logout();
    // redirects user to the homeView
    router.push({ path: "/auth/login" });
  } finally {
  }
}



</script>

<style scoped>

</style>