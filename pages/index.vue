<template>
    <div>
        <button class="btn">Shop Now</button>
        <div class="grid md:grid-cols-3 gap-5">
            <div v-for="product in products">
                <NuxtLink :to="`/products/${product.id}`">{{ product.title }}</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { Product } from '~/types/product';

const { data: products } = await useFetch<Product[]>('https://fakestoreapi.com/products')
</script>