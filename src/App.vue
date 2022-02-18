<script lang="ts" setup>
import Item from './components/Item.vue';
import ItemHeader from './components/ItemHeader.vue';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <div class="container mx-auto bg-white md:w-96 h-screen md:h-[48rem] md:mt-16 rounded relative">
    <div class="overflow-y-auto h-screen md:h-[48rem] pt-[56px]">
      <div>
        <ItemHeader class="sticky top-0">Biscuits</ItemHeader>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
      <div>
        <ItemHeader class="sticky top-0">Spices</ItemHeader>
        <Item />
        <Item />
        <Item />
      </div>
      <div> 
        <ItemHeader class="sticky top-0">Halua</ItemHeader>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
      <div>
        <ItemHeader class="sticky top-0">Lesun</ItemHeader>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
    <div class="font-bold py-2 shadow absolute bottom-0 w-full  bg-blue-500 text-white text-center">View Categories</div>
    <div class="h-[56px] font-bold text-lg p-2 shadow absolute top-0 w-full inline-flex items-center bg-white">Order Booking</div>

  </div>
</template>

<style>
</style>
