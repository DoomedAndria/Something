<script setup>
import {computed, ref} from 'vue'
import {useStore} from "vuex";

const store = useStore()
const token = computed(()=>{
  return store.getters["users/getToken"]
})
</script>

<template>
  <h1 class="text-[40px]">Dashboard</h1>
  <h2 class="text-[25px]">your token: {{token}}</h2>
</template>

<style scoped>

</style>