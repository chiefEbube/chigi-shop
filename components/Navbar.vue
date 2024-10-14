<template>
    <nav class="container py-6 px-5 lg:px-10 mx-auto">
        <div class="flex justify-between items-center">
            <div class="flex lg:gap-3 xl:gap-8 items-center">
                <NuxtLink to="/" class="text-2xl lg:text-3xl font-bold">Logo</NuxtLink>
                <ul class="hidden lg:flex gap-2">
                    <li>
                        <NuxtLink to="/" class="nav-link">Electronics</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/" class="nav-link">Health & Beauty</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/" class="nav-link">Home & Offfice</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/" class="nav-link">Computing</NuxtLink>
                    </li>
                </ul>
            </div>

            <div class="flex items-center gap-6">
                <div class="hidden lg:flex items-center gap-2 border border-[#E7EAF4] p-2 rounded-xl">
                    <img src="/assets/icons/search.svg" alt="">
                    <input type="text" placeholder="Search" class="outline-none" />
                </div>

                <NuxtLink to="/" class="flex items-center gap-2">
                    <img src="/assets/icons/Icon.svg" alt="">
                    <p class="hidden lg:flex">Account</p>
                </NuxtLink>

                <NuxtLink to="/cart" class="flex items-center gap-2">
                    <img src="/assets/icons/Vector.svg" alt="">
                    <p class="hidden lg:flex">Cart</p>
                </NuxtLink>

                <div class="flex lg:hidden items-center gap-2">
                    <img src="/assets/icons/menu.svg" alt="">
                </div>
            </div>

        </div>

        <div class="flex lg:hidden items-center gap-2 border border-[#E7EAF4] p-2 rounded-xl mt-4">
            <img src="/assets/icons/search.svg" alt="">
            <input type="text" placeholder="Search" class="outline-none text-sm" />
        </div>
    </nav>
</template>

<script setup lang="ts">

</script>