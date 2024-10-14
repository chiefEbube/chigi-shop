<template>
    <div class="container mx-auto lg:p-10">
        <div class="relative my-8 w-full h-[60vh]">
            <img src="/assets/images/heroChigi.png" alt="" class="w-full h-full object-cover">
            <div class="absolute top-10 lg:top-14 left-1/2 transform -translate-x-1/2 text-center">
                <h1 class="text-2xl lg:text-3xl font-bold">New Arrivals in Computing</h1>
                <button class="btn mt-4 py-2">Shop now</button>
            </div>
        </div>
        <div class="my-20">
            <ProductsListing title="Top picks" />
            <ProductsListing title="New Arrivals" />
            <ProductsListing title="Best sellers" />
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>