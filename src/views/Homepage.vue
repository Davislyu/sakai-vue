<script setup>
import HomePageLower from './sectional/HomePageLower.vue';
import HomePageUpper from './sectional/HomePageUpper.vue';
</script>

<template>
    <main class="mt-0 homepage">
        <div v-motion-pop-visible class="h-[100dvh] p-4 homepage__upperPart">
            <HomePageUpper />
        </div>
        <div class="w-4/5 mx-auto homepage_lowerPart">
            <HomePageLower />
        </div>
    </main>
</template>

<style>
.homepage {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.homepage__upperPart {
    transform: none !important;
}

.homepage__researchContent {
    display: flex;
    width: 75vw;
    margin: 0 auto;
    justify-content: center;
}
</style>
