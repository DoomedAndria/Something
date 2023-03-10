<script setup>
import {useStore} from "vuex";
import {ref} from "vue"
import axios from "axios";
import {useRouter} from "vue-router";

const store = useStore()
const router = useRouter()

const email = ref("")
const password = ref("")
const error = ref("")

function changeEmail(e) {
  if(error.value !== "")
    error.value = ""
  email.value = e.target.value
}

function changePassword(e) {
  if(error.value !== "")
    error.value = ""
  password.value = e.target.value
}

function sendRequest() {
  axios
      .post(import.meta.env.VITE_AUTH_URL, {
        email: email.value,
        password: password.value
      })
      .then((result) => {
        store.commit("users/UPDATE_TOKEN", result.data.token)
        router.push("/dashboard")
      })
      .catch((err) => {
        error.value = err.response.data.message
      });
}
</script>

<template>
  <div class="min-h-screen flex justify-center items-center">
    <div class="bg-[#e8eef1] shadow-md rounded px-[60px] py-[40px] mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Email
        </label>
        <input
            class="shadow appearance-none border rounded w-[400px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            @input="changePassword">
        <p class="text-red-500 text-xs italic">{{ error }}</p>
      </div>
      <div class="flex items-center justify-between">
        <button
            class="bg-[#159ab7] hover:bg-[#1e5067] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            @click="sendRequest">
          Sign In
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>