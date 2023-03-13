<script setup>
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import {ref} from "vue";
import axios from "axios";
import NavbarLayout from "../layouts/NavbarLayout.vue";

const store = useStore()
const router = useRouter()

const name = ref("")
const email = ref("")
const password = ref("")
const error_e = ref("")
const error_p = ref("")

function changeName(e) {
  name.value = e.target.value
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
  store.dispatch("users/registerUser", {name:name.value, email: email.value, password: password.value})
}


</script>

<template>
  <NavbarLayout>
    <div class="min-h-screen flex justify-center items-center">
      <form class="bg-[#e1e4d9] shadow-md rounded px-[60px] py-[40px] mb-4">
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
        <router-link class="text-[13px] text-[#095971] float-right" to="/authorization">already have an account?
        </router-link>
        <div class="flex items-center justify-between">
          <button @click="sendRequest"
                  class="btn btn-blue"
                  type="button">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  </NavbarLayout>
</template>

<style scoped>

</style>