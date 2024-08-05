<script setup>
import HomePageLower from './sectional/HomePageLower.vue';
import HomePageUpper from './sectional/HomePageUpper.vue';
</script>

<template>
    <main class="mt-0 homepage">
        <div v-motion-pop-visible class="h-[100dvh] homepage__upperPart"><HomePageUpper /></div>
        <div v-motion-pop-visible class="homepage_lowerPart h-[100dvh]">
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

.homepage__typed-text {
    font-size: clamp(1rem, 10vw, 4rem);
    color: red;
    font-weight: 300;
    font-size: large;
}

.homepage__typed-container .typed-cursor {
    font-size: clamp(1rem, 10vw, 2rem);
    color: red;
}

.homepage__typed-container {
    display: flex;
    justify-content: center;
    text-align: center;
    justify-content: end;
}

.homepage__typed-container--secondary {
    font-size: 150px;
}

.homepage__title-container {
    display: flex;
    justify-content: end;
    font-size: xx-large;
}

.homepage__title {
    color: red;
    width: 60%;
}

.homepage__cards-container {
    display: grid;
    margin: 0 auto;
    grid-template-columns: repeat(1, 2fr);
    grid-auto-rows: auto;
    width: 50%;
}

.homepage__card-title {
    margin-bottom: 1rem;
    font-size: 1.25rem;
    font-weight: 600;
}
.homepage__researchContent {
    display: flex;
    width: 75vw;
    margin: 0 auto;
    justify-content: center;
}
</style>
