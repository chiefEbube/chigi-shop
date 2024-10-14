<template>
    <div class="container mx-auto">
        <div class="flex flex-col gap-10">
            <div class="text-5xl font-bold">Logo</div>
            <div class="flex flex-col lg:flex-row justify-between">
                <div class="">
                    <h4 class="text-xl font-bold">New here?</h4>
                    <p class="text-[#D2D2D2] mt-2 mb-6 text-sm">Subscribe to our newsletter to get updates on our latest offers!</p>
                    <div>
                        <input type="text" placeholder="Email address" class="bg-white p-2 lg:p-3 rounded-lg lg:w-96 mr-2 lg:mr-4 outline-none">
                        <button  class="bg-[#2A54C7] p-2 lg:p-3 rounded-lg lg:w-32 font-medium">Subscribe</button>
                    </div>
                </div>
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-20 lg:mt-0">
                    <div>
                        <h5 class="font-bold">Categories</h5>
                        <ul>
                            <li v-for="link in footerLinks.categories" :key="link.text" class="my-3">
                                <NuxtLink :to="link.url" class="text-sm text-[#A5A5A6]">{{ link.text }}</NuxtLink>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 class="font-bold">Company</h5>
                        <ul>
                            <li v-for="link in footerLinks.company" :key="link.text" class="my-3">
                                <NuxtLink :to="link.url" class="text-sm text-[#A5A5A6]">{{ link.text }}</NuxtLink>
                            </li>
                        </ul>
                    </div>
                    
                    <div>
                        <h5 class="font-bold">Support</h5>
                        <ul>
                            <li v-for="link in footerLinks.support" :key="link.text" class="my-3">
                                <NuxtLink :to="link.url" class="text-sm text-[#A5A5A6]">{{ link.text }}</NuxtLink>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <img src="/assets/images/frame.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { footerLinks, footerInfo } from '~/data/footerData';
</script>