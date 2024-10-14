<template>
    <div>
        <header class="shadow-sm">
            <Navbar />
        </header>
        <div>
            <slot />
        </div>
        <footer>
            <Footer />
        </footer>
    </div>
</template>

<script>
import Footer from '~/components/Footer.vue';
import Navbar from '~/components/Navbar.vue';

</script>

<style scoped></style>