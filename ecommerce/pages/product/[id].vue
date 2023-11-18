<script lang="ts" setup>
import type { Products } from "~/types/products";
import { products } from "~/composables/constants/products";
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const id = typeof route.params.id === 'string' ? parseInt(route.params.id) : null;
const product = ref(products.find((item: Products) => item.id === id));
</script>

<template>
  <DetailProduct :product="product"/>
</template>
