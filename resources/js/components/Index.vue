<template>
    <div>
        <router-link :to="{name: 'fruit.index'}"  class="mx-1">List</router-link>
        <router-link v-if="!accessToken" :to="{name: 'user.login'}" class="mx-1">Login</router-link>
        <router-link v-if="!accessToken" :to="{name: 'user.registration'}" class="mx-1">Registration</router-link>
        <router-link v-if="accessToken" :to="{name: 'user.personal'}" class="mx-1">Personal</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    const storageListener = () => {
        const key = localStorage.getItem('access_token');
        console.log(key);
    };
    window.addEventListener('storage', storageListener);

    export default {
        data() {
            return {
                accessToken: null,
            }
        },

        mounted() {
            this.getAccessToken();
        },

        updated() {
            console.log('updated');
            this.getAccessToken();
        },

        watch: {
            'localStorage.access_token' (newValue, oldValue) {
                console.log(newValue, oldValue)
            },
        },

        methods: {
            getAccessToken() {
                this.accessToken = localStorage.getItem('access_token');
            }
        }
    }
</script>
