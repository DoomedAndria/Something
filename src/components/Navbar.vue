<script setup>
import {useStore} from "vuex";
import {computed} from "vue";

const store = useStore()
const user = computed(() => {
  return store.getters["users/getUser"]
})
const profilePopup = computed(()=>{
  return store.getters['users/getProfilePopup']
})
const links = [
  {
    id: 1,
    name: "DASHBOARD",
    path: "/dashboard",
  },
  {
    id: 2,
    name: "USERS",
    path: "/users",
  },
  {
    id: 3,
    name: "CATEGORIES",
    path: "/categories",
  },
]

</script>

<template>
  <div class="w-full flex border-b-2 border-b-[var(--blackblue)] border-solid px-[15px] text-[var(--blackblue)]">
    <router-link
        v-for="item in links"
        :to="item.path"
        class="hover:bg-[#e1e4d9] p-[15px] font-bold text-[15px] flex items-center"
    >
      {{ item.name }}
    </router-link>
    <div class="flex items-center ml-auto p-[5px]">
      <div v-if="!user">
        <router-link class="btn btn-blue" to="/authorization">Log In</router-link>
        <router-link class="btn btn-blue" to="/registration">Sign Up</router-link>
      </div>

      <div v-else class="flex items-center">

        <div @click="store.commit('users/TOGGLE_PROFILE_POPUP')" class="cursor-pointer h-[50px] aspect-square rounded-[100%] border-2 border-solid border-[var(--blackblue)]">
          <img class="rounded-[inherit] object-cover w-full h-full"
               src="https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352088-stock-illustration-default-placeholder-profile-icon.jpg"
               alt="pfp">
        </div>

        <div v-if="profilePopup" class="absolute top-0 right-[100px] p-[5px] bg-[white] border border-2 border-[var(--blackblue)] rounded">
          <button @click="store.dispatch('users/logOut')" class="btn btn-blue">log out</button>
        </div>

        <div class="ml-[10px] font-bold">{{user.user.name}}</div>
      </div>

    </div>
  </div>

</template>

<style scoped>
</style>