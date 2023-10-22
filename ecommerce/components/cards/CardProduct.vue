<script setup lang="ts">
const { product } = defineProps({
  product: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <section class="bg-white shadow-xl rounded-xl overflow-hidden">
    <div :class="`w-full h-[200px] p-5 bg-gray-300`">
      <img :src="product.image" class="w-full h-full object-contain" alt="Product Image" />
    </div>
    <div class="px-5 pb-5 pt-9 relative">
      <NuxtLink :to="`/product/${product.id}`">
        <h3 class="text-lg font-bold mb-4 text-limit limit-2">{{ product.name }}</h3>
      </NuxtLink>
      <div class="flex justify-between items-center">
        <span class="text-sm font-normal">{{ product.category }}</span>
        <span class="text-sm font-normal">${{ product.price }}</span>
      </div>
      <NuxtLink :to="`/product/${product.id}`">
      <div :class="`cursor-pointer absolute -top-5 right-7 w-[50px] h-[50px] bg-white shadow-xl rounded-full flex justify-center items-center hover:bg-blue-600 hover:text-white transition duration-300`">
        <i class="ri-shopping-cart-2-line"></i>
      </div>
      </NuxtLink>
    </div>
  </section>
</template>
