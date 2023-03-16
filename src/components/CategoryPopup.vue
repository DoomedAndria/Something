<script setup>
import {useStore} from "vuex";
import {computed, ref} from "vue";

const store = useStore()

const popType = computed(()=>{
  return store.getters["categories/getPopupType"]
})

const category = {
  name: "",
  type: ""
}

const deleteCategory = async ()=>{
  await store.dispatch('categories/deleteCategory')
  store.commit('categories/TOGGLE_POPUP_OPEN')
  store.dispatch('categories/fetchCategories')
}

const editCategory = async ()=>{
  await store.dispatch('categories/editCategory',category)
  store.commit('categories/TOGGLE_POPUP_OPEN')
  store.dispatch('categories/fetchCategories')
}

const addCategory = async ()=>{
  await store.dispatch('categories/editCategory',category)
  store.commit('categories/TOGGLE_POPUP_OPEN')
  store.dispatch('categories/fetchCategories')
  console.log(category)
}
</script>
<template>
  <div class="popup">
    <div class="popup-content">

      <div v-if="popType==='delete'" class="my-[25px] font-bold">
        Are you sure you want to remove this category?
      </div>

      <div v-if="popType==='edit' || 'add'" class="my-[25px] font-bold flex flex-row">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Name
          </label>
          <input
              class="shadow appearance-none border rounded w-[400px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              @input="e=>category.name = e.target.value"
          >
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Type
          </label>
          <input
              class="shadow appearance-none border rounded w-[400px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              @input="e=>category.type = e.target.value"
          >
        </div>
      </div>

      <div class="flex justify-between ">
        <button @click="store.commit('categories/TOGGLE_POPUP_OPEN')" class="btn btn-red">Close</button>
        <button v-if="popType==='delete'" @click="deleteCategory" class="btn btn-green">Yes</button>
        <button v-if="popType==='edit'" @click="editCategory" class="btn btn-green">Save</button>
        <button v-if="popType==='add'" @click="addCategory" class="btn btn-green">Save</button>

      </div>

    </div>
  </div>
</template>

<style>
.popup {
  @apply fixed w-full h-full bg-[rgba(0,0,0,0.5)] flex justify-center items-center left-0 top-0;

}

.popup-content {
  @apply bg-[white] p-5 rounded-[5px];
}
</style>
