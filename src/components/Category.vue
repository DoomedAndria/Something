<script setup>
import {computed} from "vue";
import {useStore} from "vuex";

const props = defineProps({
  isHead: Boolean,
  category: Object
})

const store = useStore()

const bg = computed(()=>{
    if(props.isHead){
      return {background: '#bbd0ff'}
    }
    return  {background: 'white'}
})

const openPopup = (type)=>{
  store.commit('categories/TOGGLE_POPUP_OPEN')
  store.commit('categories/SET_POPUP_TYPE',type)
  store.commit('categories/SET_CATEGORY_ID',props.category.id)
}
</script>

<template>
  <div :style="bg" class="flex shadow-[rgba(0,0,0,0.24)_0px_3px_8px] text-[15px] rounded my-[10px]">

    <div v-if="isHead" class="w-full flex p-[5px]  m-[5px]">
      <div class="row">id</div>
      <div class="row">name</div>
      <div class="row">type</div>
    </div>

    <div v-else class="w-full flex p-[5px]  m-[5px]">
      <div class="row">{{ category.id }}</div>
      <div class="row">{{ category.name }}</div>
      <div class="row">{{ category.type }}</div>
    </div>

    <div class="flex justify-center px-[50px] py-[10px] h-[70px]">
      <div v-if="isHead" class="px-[42px]">
        <button  class="btn btn-green ">Add</button>
      </div>
      <div v-else class="flex">
        <button class="btn btn-orange" @click="openPopup('edit')">Edit</button>
        <button class="btn btn-red" @click="openPopup('delete')">Delete</button>
      </div>
    </div>
  </div>


</template>

<style scoped>
.row {
  @apply flex justify-center items-center w-full text-xl font-bold
}
</style>