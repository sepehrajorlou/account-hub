<template>
    <div class="flex md:flex-row flex-col">
        <div class="md:w-1/6 w-full">
            <Navigation />
        </div>
        <div class="md:w-5/6 w-full">
            salaam
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
import Navigation from '../components/navigationbar.vue'

components: [
    Navigation
]

</script>