<template>
    <div class="container mx-auto mt-8 w-10/12 p-5">
        <h1>Shopping Cart</h1>
        <div class="flex">
            <div class="w-2/3">
                <div v-for="item in cartStore.items" :key="item.id">
                    {{ item.title }}
                </div>
            </div>

            <div class="p-4 border border-[#E8E8E8] rounded-md w-[350px]">
                <span class="text-[#4B4B4D] text-sm">SUMMARY</span>
                <div class="my-4">
                    <div class="flex justify-between">
                        <span>Subtotal</span>
                        <span>$40</span>
                    </div>
                    <div  class="flex justify-between">
                        <span>Shipping fee</span>
                        <span>$40</span>
                    </div>
                </div>

                <div class="flex justify-between">
                    <span>Total</span>
                    <span>$40</span>
                </div>
                <button class="btn my-4 p-2 w-full">Proceed to checkout</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useCartStore } from '~/stores/cart';

const cartStore = useCartStore()
</script>