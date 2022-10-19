<template>
    <section class="section">
    <div class="login-container bg-white">
        <form @submit.prevent="onSubmit" class="login-content">
            <div class="login-element">
                Email
                <input v-model="email" class="login-input bg-grey" type="email" placeholder="email@email.com"/>
            </div>

            <div class="login-element">
                Password
                <input v-model="password" class="login-input bg-grey" type="password" placeholder="************" />
                <!-- Forgot your password? -->
            </div>

            <div classe="login-button bg-blackish">
                <input class="button" type="submit" placeholder="Text input">
            </div>
    </form>
    </div>
</section>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { useAuthStore } from '../store/auth'

const router = useRouter();
const authStore = useAuthStore();
const name = ref('');
const email = ref('');
const password = ref('');

const onSubmit = () => {
    authStore.login(email.value, password.value);

    // Nos redirige al home
    router.push({ name: 'home' })
}
</script>
<style scoped>
.section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
}
.login-container {
    display: flex;
    flex-direction: column;
    width: 531px;
    justify-content: center;
    align-items: center;
    padding: 86px;
    border-color: rgba(0, 0, 0, 1);
    border-width: 1px;
    border-style: solid;
}

.login-content {
    display: flex;
    flex-direction: column;
    width: 70%;
    gap: 16px;

}

.login-element {
    font-size: 12px;
    text-align: left;
    width: 100%;
}

.login-input {
    display: flex;
    width: 90%;
    height: 53px;
    margin-top: 5px;
    padding: 0px 12px;
}


.login-button {
    text-align: center;
    align-self: center;
    max-width: 53px;
    margin-top: 24px;
    padding: 5px 23px;
    font-size: 18px;
}

.bg-blackish:hover {
background-color: black;
color: white;
}
</style>