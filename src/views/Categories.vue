<script setup>
import Category from "../components/Category.vue"
import NavbarLayout from "../layouts/NavbarLayout.vue";
import CategoryPopup from "../components/CategoryPopup.vue";
import {computed, onMounted} from "vue";
import {useStore} from "vuex";

const store = useStore()
const categories = computed(()=>{
  return store.getters['categories/getCategories']
})
const popupOpen = computed(() => {
  return store.getters["categories/getPopupOpen"]
})
onMounted(() => {
  store.dispatch('categories/fetchCategories')
})

</script>

<template>
  <NavbarLayout>
    <div class="p-[20px]">
      <Category :isHead="true"/>
      <Category v-for="item in categories" :isHead="false" :category="{id:item.id,name:item.name,type:item.type}"/>
    </div>
    <CategoryPopup v-if="popupOpen"/>
  </NavbarLayout>
</template>

<style scoped>

</style>