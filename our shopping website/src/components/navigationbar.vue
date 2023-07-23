<template>
    <nav :class="hamVisibility">
        <div class="min-h-screen h-full bg-neutral-700">
            <div class="flex flex-row items-center justify-between pt-4 px-2">
                <div>
                    <h1 class="text-2xl font-bold text-white">
                        ناحیه کاربری
                    </h1>
                </div>
                <div>
                    <!-- LOGO -->
                </div>

            </div>

            <div class="w-full mt-3  text-center">

                <font-awesome-icon :icon="['fas', 'xmark']" class="fa-2xl text-white md:hidden inline-block"
                    v-on:click="closeHam()" />
                <img src="../assets/images/icons8-person-96.png" alt="profile" class="w-24 rounded-full mx-auto">

                <h3 class="text-white mt-3 text-lg font-bold">
                    09358890213
                </h3>
            </div>

            <div class="py-10 px-2">

                <div class="flex flex-row items-center py-2 hover:bg-neutral-500" v-for="(item, index) in nav">
                    <div class="w-1/6  text-center">
                        <font-awesome-icon :icon="['fas', item.icon]" class="text-gray-300  " />
                    </div>

                    <div class="w-5/6 ">
                        <span class=" text-gray-300 text-base">
                            {{ item.title }}
                        </span>
                    </div>

                </div>

            </div>
        </div>
    </nav>
    <nav :class="hamVisibility2" v-on:click="openHam()">
        <font-awesome-icon :icon="['fas', 'bars']" class="text-gray-300  fa-2xl" />
    </nav>
</template>
<script setup>
import { ref } from 'vue'

import nav from '../router/nav.js'

const hamVisibility = ref('md:block hidden');

const hamVisibility2 = ref('flex flex-row w-full bg-neutral-700 py-3 px-3');


const openHam = () => {
    hamVisibility.value = 'block';
    hamVisibility2.value = 'hidden';
}

const closeHam = () => {
    hamVisibility.value = 'md:block hidden';
    hamVisibility2.value = 'flex flex-row w-full bg-neutral-700 py-3 px-3';
}
</script>

