<script setup>

</script>

<template>
  <div class="p-[20px] ">

    <router-link to="/registration"
                 class="btn btn-blue">
      Registration
    </router-link>

    <router-link to="authorization"
                 class="btn btn-blue">
      Authorization
    </router-link>

  </div>
</template>

<style scoped>
.btn {
  @apply font-bold py-2 px-4 rounded m-[5px];
}
.btn-blue {
  @apply bg-[#159ab7] text-white;
}
.btn-blue:hover {
  @apply bg-[#1e5067];
}
</style>