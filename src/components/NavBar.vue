<template>
    <nav class="navbar bg-blackish" role="navigation" aria-label="main navigation">
        <div class="navbar-start">
            <a href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
            </a>
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