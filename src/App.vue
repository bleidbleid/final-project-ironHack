<template>
  <h1>Task App</h1>
  <router-view></router-view>
</template>

<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useAuthStore } from "./store/auth.js";
import { ref } from "vue";
const router = useRouter();
const authStore = useAuthStore();
const { user } = storeToRefs(authStore);
onMounted(async () => {
  const appReady = ref(null);
  try {
    // await authStore.fetchUser(); // here we call fetch user
    if (!authStore.user) {
      // redirect them to logout if the user is not there
      appReady.value = true;
      router.push({ path: "/auth/login" });
    } else {
      // continue to dashboard
      // router.push({ path: "/" });
    }
  } catch (e) {
    console.log(e);
  }
});
</script>

<style scoped>

</style>