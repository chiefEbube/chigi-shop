<template>
    <div class="my-12 lg:my-20 mx-4 lg:mx-16 inter">
        <p class="border-l-[4px] border-[#2A54C7] pl-4 mb-6">{{ title }}</p>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div v-for="product in products?.slice(0, 3)" :key="product.id">
                <NuxtLink :to="`/products/${product.id}`">
                    <div class="w-full h-[300px] overflow-hidden mx-auto">
                        <img :src="`${product.image}`" alt="" class="w-full h-full object-contain">
                    </div>
                    <div class="w-full mx-auto mt-2">
                        <strong class="text-[#1E1F21] text-lg font-bold">{{ product.title.slice(0, 25) }}</strong>
                        <p class="text-[#787879] font-bold">${{ product.price }}</p>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types/product';

const props = defineProps<{
    title: string;
}>();

const categories: { [key: string]: string } = {
    "Top picks": "men's clothing",
    "Best sellers": "women's clothing",
    "New Arrivals": "jewelery",
};

const category = categories[props.title] || "";
const config = useRuntimeConfig()
const baseUrl = config.public.apiUrl
const { data: products } = await useFetch<Product[]>(`${baseUrl}/category/${category}`);
</script>