<template>
    <div>
        <header class="shadow-sm">
            <Navbar />
        </header>
        <div>
            <slot />
        </div>
        <footer class="bg-[#1E1F21] text-[#F3F3F3] py-10 px-5 lg:p-20">
            <Footer />
        </footer>
    </div>
</template>

<script>
import Footer from '~/components/Footer.vue';
import Navbar from '~/components/Navbar.vue';

</script>

<style scoped></style>