<template>
    <section class="section">
        <div class="login-container is-4 bg-white">
            <h2>Welcome to <img src="/logoBlack.png" width="88"> </h2>
            <form @submit.prevent="onSubmit" class="login-content">
                <div class="login-element">
                    Email
                    <input v-model="email" class="login-input bg-grey" type="email" placeholder="email@email.com" />
                </div>

                <div class="login-element">
                    Password
                    <input v-model="password" class="login-input bg-grey" type="password" placeholder="************" />
                    <!-- Forgot your password? -->
                </div>

                <div class="login-button ">
                    <button class="button bg-blue" type="submit" placeholder="Text input">Log in</button>
                </div>
                <div class="login-element">
                    <article>

                        <router-link :to="{ name: 'register' }">
                            Not a member yet? <b>Sign up</b>
                        </router-link>
                    </article>

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
const email = ref('');
const password = ref('');

const onSubmit = (async () => {
    try {
        await authStore.login(email.value, password.value);
        router.push({ name: 'home' })

    }
    catch (error) {
        console.log(error)
    }

    // Nos redirige al home
})
</script>
<style scoped>
input:-webkit-autofill,
input:-internal-autofill-previewed,
input:-internal-autofill-selected,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active{
    box-shadow: 0 0 0 30px var(--grey) inset !important;
    -webkit-box-shadow: 0 0 0 30px var(--grey) inset !important;
    -webkit-text-fill-color: var(--blackish) !important;

}

article {
    text-align: center;
}

.section {
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-image: url(/background.jpg);
    background-size: cover;
    background-position: center;
}

.login-container {
    width: 380px;
    padding: 24px;
    border-color: rgba(0, 0, 0, 1);
    border-width: 1px;
    border-style: solid;
}

.login-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 16px;

}

.login-element {
    font-size: 12px;
    text-align: left;
    width: 100%;
}

.login-input {
    display: flex;
    width: 100%;
    height: 53px;
    margin-top: 5px;
}


.login-button {
    text-align: center;
    align-self: center;
    width: fit-content;
    margin-top: 24px;
    padding: 5px 23px;
    font-size: 18px;
}

.bg-blackish:hover {
    background-color: black;
    color: white;
}

@media screen and (max-width:425px) {
    .bg-white {
        background-color: transparent;
    }

    .login-container {
        width: 90%;
        margin: 16px;
        border-width: 0px;
    }
}
</style>