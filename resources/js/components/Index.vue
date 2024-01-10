<template>
    <div>
        <router-link :to="{name: 'fruit.index'}"  class="mx-1">List</router-link>
        <router-link :to="{name: 'user.login'}" class="mx-1">Login</router-link>
        <router-link :to="{name: 'user.registration'}" class="mx-1">Registration</router-link>
        <router-link :to="{name: 'user.personal'}" class="mx-1">Personal</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {

    }
</script>
