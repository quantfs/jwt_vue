<template>
    <div class="w-25 p-3">
        <input v-model="name" type="text" class="form-control mb-3" placeholder="name">
        <input v-model="email" type="email" class="form-control mb-3" placeholder="email">
        <input v-model="password" type="password" class="form-control mb-3" placeholder="password">
        <input v-model="password_confirmation" type="password" class="form-control mb-3" placeholder="confirm password">
        <input @click.prevent="store" type="submit" class="btn btn-primary">
        <div v-if="error" class="text-danger">{{ this.error }}</div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Registration",

    data() {
        return {
            name: null,
            email: null,
            password: null,
            password_confirmation: null,
            error: null
        }
    },

    methods: {
        store() {
            axios.post('/api/users', {
                name: this.name,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation,
            })
                .then(res => {
                    localStorage.setItem('access_token', res.data.access_token);
                    this.$router.push({name: 'user.personal'});
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                    this.error = err.response.data.error;
                })
        }
    }
}
</script>

<style scoped>

</style>
