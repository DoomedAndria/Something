<script setup>

import {useStore} from "vuex";
import {onMounted} from "vue";

const store = useStore()

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')

onMounted(()=>{
  if(token&&user){
    store.commit('users/SET_USER',JSON.parse(user))
    store.commit('users/UPDATE_TOKEN',JSON.parse(token))
  }
})

</script>

<template>
  <router-view/>
</template>

<style scoped>

</style>
