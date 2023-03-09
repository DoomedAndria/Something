<script setup>
import {useStore} from "vuex";
import {ref} from "vue"
import axios from "axios";

const store = useStore()

const email = ref("")
const password = ref("")

function changeEmail(e){
  email.value = e.target.value
}
function changePassword(e){
  password.value = e.target.value
  console.log(import.meta.env.VITE_AUTH_URL)
}
function sendRequest(){
  axios
      .post(import.meta.env.VITE_AUTH_URL,{
        email: email.value,
        password: password.value
      })
      .then((result) => {
        console.log(result)
      })
      .catch(console.error);
}
</script>

<template>
  <div class="w-full max-w-xs">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Email
        </label>
        <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email" type="email" placeholder="Email"
            @input="changeEmail">
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input
            class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password" type="password" placeholder="**********"
            @input="changePassword">>
        <p class="text-red-500 text-xs italic"></p>
      </div>
      <div class="flex items-center justify-between">
        <button
            class="bg-[#159ab7] hover:bg-[#1e5067] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            @click="sendRequest">
          Sign In
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>