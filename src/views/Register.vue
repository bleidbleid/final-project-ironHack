<template>
    <section class="section">
    <div className="login-container bg-white">
        <div className="login-content">
            <div className="login-element">
                Email
                <input className="login-input bg-grey" placeholder="email@email.com"/>
            </div>

            <div className="login-element">
                Password
                <input className="login-input bg-grey" placeholder="************" />
                <!-- Forgot your password? -->
            </div>

            <div className="login-button bg-blackish">Register</div>
        </div>
    </div>
</section>

</template>
<script setup>
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