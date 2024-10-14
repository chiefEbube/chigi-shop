<template>
    <div>
       <p>{{ product?.title }}</p>
       <small>{{ product?.description }}</small>
    </div>
</template>

<script lang="ts" setup>
import type { Product } from '~/types/product';

const { id } = useRoute().params
const uri = `https://fakestoreapi.com/products/${id}`
const {data: product} = await useFetch<Product>(uri)
</script>

<style scoped></style>