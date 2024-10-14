<template>
    <div class="container mx-auto mt-8 w-10/12 lg:p-5">
        <h1 class="text-xl">Shopping Cart</h1>
        <div v-if="cartStore.itemCount > 0" class="flex flex-col lg:flex-row items-start justify-between">
            <div class="w-full lg:w-2/3 mr-36">
                <div v-for="item in cartStore.items" :key="item.id"
                    class="flex items-center justify-start gap-3 lg:gap-5 w-full py-8 border-b mb-5 lg:mb-0">
                    <img :src="item.image" alt="" class="h-[120px] w-[120px] object-cover">
                    <div class="w-full">
                        <div class="mb-10">
                            <div class="flex justify-between w-full">
                                <p class="text-[#1E1F21]  text-base lg:text-lg">{{ item.title.slice(0, 15) }}</p>
                                <p>$20</p>
                            </div>
                            <div class="flex justify-between w-full">
                                <button @click="removeItem(item.id)" class="text-[#C33434] text-xs underline">Remove item</button>
                                <span>$40</span>
                            </div>
                        </div>
                        <div class="flex justify-between w-full">
                            <span class="text-sm">Qty:
                                <button class="ml-2">-</button>
                                <span class="px-4 py-1 border mx-2">1</span>
                                <button>+</button>
                            </span>
                            <span>$100</span>
                        </div>


                    </div>
                </div>
            </div>

            <div class="p-4 border border-[#E8E8E8] rounded-md w-full lg:w-[350px]">
                <span class="text-[#4B4B4D] text-xs font-bold">SUMMARY</span>
                <div class="my-4">
                    <div class="flex justify-between text-sm text-[#4B4B4D]">
                        <span>Subtotal</span>
                        <span>$40</span>
                    </div>
                    <div class="flex justify-between text-sm text-[#4B4B4D] my-2">
                        <span>Shipping fee</span>
                        <span>$40</span>
                    </div>
                </div>

                <div class="flex justify-between text-sm text-[#4B4B4D]">
                    <span>Total</span>
                    <span>$40</span>
                </div>
                <button class="btn my-4 p-2 w-full">Proceed to checkout</button>
            </div>
        </div>
        <div v-else class="my-20 text-center w-full text-[#848484]">Looks like your cart is empty</div>

        <ProductsListing title="Top picks" />

    </div>
</template>

<script lang="ts" setup>
import { useCartStore } from '~/stores/cart';

const cartStore = useCartStore()

const removeItem = (productId: number) => {
    cartStore.removeFromCart(productId)
}
</script>