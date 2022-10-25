<template>
    <nav class="navbar bg-blue" role="navigation" aria-label="main navigation">
        <div class="navbar-start">
            <router-link :to="{ name: 'home' }">
                <img src="/logo.png" width="88" >
            </router-link>
        </div>


        <div class="navbar-end">
            <button @click="onClick()" class="button bg-grey">Log out</button>

        </div>
    </nav>
</template>
<script setup>
import { useAuthStore } from '../store/auth'
import { useRouter } from "vue-router";
const router = useRouter();
const authStore = useAuthStore();


async function onClick() {
    try {
        await authStore.logout();
        // redirects user to the homeView
        router.push({ name: 'login' });
    } finally {
    }
}

</script>
<style scoped>
.navbar {
    position: sticky;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 36px;
}

.navbar-start {
    align-items: stretch;
    display: flex;
    justify-content: flex-start;
    margin-right: auto
}

.navbar-end {
    display: flex;
    width: 100%;
    justify-content: right;
    margin: auto;
}

</style>