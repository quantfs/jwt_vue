<template>
    <div>
        <router-link :to="{name: 'fruit.index'}"  class="mx-1">List</router-link>
        <router-link :to="{name: 'user.login'}" class="mx-1">Login</router-link>
        <router-link :to="{name: 'user.registration'}" class="mx-1">Registration</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
