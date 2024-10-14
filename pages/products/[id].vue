<template>
    <div>
        <div class="container w-8/12 h-[70vh] flex items-center justify-center mx-auto gap-16 mt-10">
            <div class="w-1/2 h-full">
                <img :src="`${product?.image}`" alt="" class="w-full h-full object-contain">
            </div>
            <div class="flex flex-col justify-center gap-5 h-full w-1/2">
                <div class="flex flex-col gap-2">
                    <strong class="text-2xl font-bold">{{ product?.title.slice(0, 30) }}</strong>
                    <span class="text-[#2A54C7] text-xl flex items-center gap-2">${{ product?.price }} <span class="text-base text-[#787879] line-through">$42.00</span> <span class="bg-[#E9EDF9] text-xs p-1">7 left</span></span>
                    <div class="flex items-center gap-2">
                        <img src="/assets/images/stars.png" alt="">
                        <span class="text-[#1A308F] text-sm">({{ product?.rating.count }} ratings)</span>
                    </div>
                    <button class="bg-[#2A54C7] text-white flex w-full btn p-2 text-sm items-center gap-2 justify-center my-4" @click="addToCart">
                        <img src="/assets/icons/cart-white.svg" alt="" class="">
                        <span>Add to cart</span>
                    </button>
                </div>
                <div>
                    <small class="text-[#1E1F21] font-bold">PRODUCT DETAILS</small>
                    <p class="text-[#8a8a8a]">{{ product?.description }}</p>
                </div>
            </div>
        </div>
        <ProductsListing title="Top picks" />
    </div>
</template>

<script lang="ts" setup>
import { useCartStore } from '~/stores/cart';
import type { Product } from '~/types/product';

const cartStore = useCartStore();

const { id } = useRoute().params
const uri = `https://fakestoreapi.com/products/${id}`
const { data: product } = await useFetch<Product>(uri)

const addToCart = (product: Product) => {
    cartStore.addToCart(product)
}
</script>

<style scoped></style>