<template>
    <div>
        <header>
            <nav>
                <NuxtLink to="/">Logo</NuxtLink>
                <ul>
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/cart">Cart</NuxtLink></li>
                    <li><NuxtLink to="/products">Product</NuxtLink></li>
                </ul>
            </nav>
        </header>

        <div>
            <slot/>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>

</style>