<script setup>
import {useStore} from "vuex";
import {computed} from "vue";

const store = useStore()

const popType = computed(()=>{
  return store.getters["categories/getPopupType"]
})

const deleteCategory = async ()=>{
  await store.dispatch('categories/deleteCategory')
  store.commit('categories/TOGGLE_POPUP_OPEN')
  store.dispatch('categories/fetchCategories')
}
</script>
<template>
  <div class="popup">
    <div class="popup-content">

      <div v-if="popType==='delete'" class="my-[25px] font-bold">
        Are you sure you want to remove this category?
      </div>

      <div class="flex justify-between ">
        <button @click="store.commit('categories/TOGGLE_POPUP_OPEN')" class="btn btn-red">Close</button>
        <button v-if="popType==='delete'" @click="deleteCategory" class="btn btn-green">Yes</button>
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
