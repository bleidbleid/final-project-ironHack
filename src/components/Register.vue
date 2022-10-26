<template>
    <section class="section">
        <div class="login-container is-4 bg-white">
            <article class="welcome">
                <h2>Welcome to <img src="/logoBlack.png" width="88"> </h2>
                <p>A place where entropy does not exist</p>
            </article>
            <form @submit.prevent="onSubmit" class="login-content">
                <div class="login-element">
                    <!-- <label> -->
                        Email
                    <!-- </label> -->
                    <input v-model="email" class="login-input bg-grey" type="email" placeholder="email@email.com" />
                </div>

                <div class="login-element">
                    <!-- <label> -->
                        Password
                    <!-- </label> -->
                    <input v-model="password" class="login-input bg-grey" type="password" placeholder="************" />
                </div>
                <div class="login-element">
                    <!-- <label> -->
                        Confirm password
                    <!-- </label> -->
                    <input v-model="confirmPassword" id="confirmPassword" class="login-input bg-grey" type="password"
                        placeholder="************" />
                </div>

                <div class="login-button">
                    <button class="button bg-blue" type="submit" placeholder="Text input">Register</button>
                </div>
                <div class="login-element">
                    <article>

                        <router-link :to="{name: 'login'}">
                            Already a member? <b>Log in</b>
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
// const confirmationAlert = ref('Please, confirm your email adress')

const onSubmit = (async () => {
    if (password.value === confirmPassword.value) {
    try {
        await authStore.register(email.value, password.value);
        
    }
    catch (error) {
        console.log(error),
        alert('Check your email for confirmation link')
        router.push({ name: 'login' })
    }
} else {
    alert('Passwords do not match')
}}
)
</script>
<style scoped>
/* doesn't work */
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