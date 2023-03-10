<script setup>
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {ref} from "vue";
import axios from "axios";

const store = useStore()
const router = useRouter()

const full_name = ref("")
const email = ref("")
const password = ref("")
const error_e = ref("")
const error_p = ref("")

function changeName(e) {
  full_name.value = e.target.value
}

function changeEmail(e) {
  if (error_e.value !== "")
    error_e.value = ""

  email.value = e.target.value
}

function changePassword(e) {
  if (error_p.value !== "")
    error_p.value = ""

  password.value = e.target.value
}


function sendRequest() {
  axios
      .post(import.meta.env.VITE_REG_URL, {
        name: full_name.value,
        email: email.value,
        password: password.value
      })
      .then((result) => {
        store.commit("users/UPDATE_TOKEN", result.data.token)
        router.push("/dashboard")
      })
      .catch((err) => {
        error_e.value = err.response.data.errors.email[0]
        error_p.value = err.response.data.errors.password[0]
      });
}


</script>

<template>
  <div class="min-h-screen flex justify-center items-center">
    <form class="bg-[#e8eef1] shadow-md rounded px-[60px] py-[40px] mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="full_name">
          Full Name
        </label>
        <input @input="changeName"
               class="shadow appearance-none border rounded w-[400px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               id="full_name" type="text" placeholder="Full Name">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input @input="changeEmail"
               class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               id="email" type="email" placeholder="Email">
        <p class="text-red-500 text-xs bold ">{{ error_e }}</p>
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input @input="changePassword"
               class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
               id="password" type="password" placeholder="**********">
        <p class="text-red-500 text-xs bold ">{{ error_p }}</p>
      </div>
      <div class="flex items-center justify-between">
        <button @click="sendRequest"
                class="bg-[#159ab7] hover:bg-[#1e5067] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button">
          Sign Up
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>

</style>