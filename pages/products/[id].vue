<template>
    <div>
        <div class="container grid grid-cols-5 mx-auto gap-5">
            <div class="col-span-2">
                <div></div>
                <div class="">
                    <img :src="`${product?.image}`" alt="" class="w-full h-full">
                </div>
            </div>
            <div class="col-span-2">2</div>
        </div>
        <ProductsListing title="Electronics"/>
    </div>
</template>

<script lang="ts" setup>
import type { Product } from '~/types/product';

const { id } = useRoute().params
const uri = `https://fakestoreapi.com/products/${id}`
const {data: product} = await useFetch<Product>(uri)
</script>

<style scoped></style>