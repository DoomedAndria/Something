<script setup>
import {useStore} from "vuex";
import {ref} from "vue"
import axios from "axios";
import {useRouter} from "vue-router";
import NavbarLayout from "../layouts/NavbarLayout.vue";

const store = useStore()
const router = useRouter()

const email = ref("")
const password = ref("")
const error = ref("")

function changeEmail(e) {
  if (error.value !== "")
    error.value = ""
  email.value = e.target.value
}

function changePassword(e) {
  if (error.value !== "")
    error.value = ""
  password.value = e.target.value
}

function sendRequest() {
  store.dispatch("users/authorizeUser", {email: email.value, password: password.value})
}
</script>

<template>
  <NavbarLayout>
    <div class="min-h-screen flex justify-center items-center">
      <div class="bg-[#e1e4d9] shadow-md rounded px-[60px] py-[40px] mb-4">
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
          <p class="text-red-500 text-xs ">{{ error }}</p>
        </div>
        <router-link class="text-[13px] text-[#095971] float-right" to="/registration">don't have an account?
        </router-link>
        <div class="flex items-center justify-between">
          <button
              class="btn btn-blue"
              type="button"
              @click="sendRequest">
            Sign In
          </button>
        </div>
      </div>
    </div>
  </NavbarLayout>
</template>

<style scoped>

</style>