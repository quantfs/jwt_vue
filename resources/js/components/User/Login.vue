<template>
    <div class="w-25 p-3">
        <input v-model="email" type="email" class="form-control mb-3" placeholder="email">
        <input v-model="password" type="password" class="form-control mb-3" placeholder="password">
        <input @click.prevent="login" type="submit" class="btn btn-primary">
        <div v-if="error" class="text-danger">{{ this.error }}</div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Login",

    data() {
        return {
            email: null,
            password: null,
            error: null
        }
    },

    methods: {
        login() {
            axios.post('/api/auth/login', {
                email: this.email,
                password: this.password,
            })
                .then(res => {
                    //console.log(res.data.access_token);
                    localStorage.access_token = res.data.access_token;
                    this.$router.push({ name: 'user.personal' });
                })
                .catch(err => {
                    this.error = err.response.data.error;
                    console.log(err.response);
                })
        }
    }
}
</script>

<style scoped>

</style>
