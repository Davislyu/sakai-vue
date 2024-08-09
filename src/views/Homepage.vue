<script setup>
import HomePageLower from './sectional/HomePageLower.vue';
import HomePageUpper from './sectional/HomePageUpper.vue';
</script>

<template>
    <main class="mt-0 homepage">
        <div v-motion-pop-visible class="h-[100dvh] homepage__upperPart">
            <HomePageUpper />
        </div>
        <div v-motion-pop-visible class="homepage_lowerPart w-4/5 mx-auto h-[100dvh]">
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
    margin-top: 10vh;
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
