<template>
    <header class="w-full border-b border-slate-100 py-2 px-10 bg-[#618264]">
    <div class="container">
        <div class="flex justify-between items-center">
        <div>
            <NuxtLink to="/" class="text-xl font-bold text-[#D0E7D2]">BAZAAR</NuxtLink>
        </div>
        <nav class="flex items-center gap-5 text-[#D0E7D2]">
            <NuxtLink to="/" class="text-base">Home </NuxtLink> |
            <NuxtLink to="/product" class="text-base">Products</NuxtLink> |
            <NuxtLink to="/cart" class="text-base">Cart</NuxtLink>
        </nav>
        </div>
    </div>
    </header>
</template>