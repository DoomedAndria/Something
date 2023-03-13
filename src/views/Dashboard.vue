<script setup>
import {computed, ref} from 'vue'
import {useStore} from "vuex";
import NavbarLayout from "../layouts/NavbarLayout.vue";

const store = useStore()
const token = computed(() => {
  return store.getters["users/getToken"]
})
</script>

<template>
  <NavbarLayout>
    <h1 class="text-[40px]">Dashboard</h1>
    <h2 class="text-[25px]">your token: {{ token }}</h2>
  </NavbarLayout>
</template>

<style scoped>

</style>