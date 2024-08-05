<script setup>
import Typed from 'typed.js';
import { onMounted, ref } from 'vue';
import ScrollDownAnimation from '../../composables/ScrollDownAnimation.vue';
const typed = ref(null);
const typed2 = ref(null);
onMounted(() => {
    typed.value = new Typed('#homepage__typed-message', {
        strings: ['Covid 19', 'Analysis', 'Natural Language Processing', 'Pandemic', 'Predictive Analytics', 'S-bert', 'CT-bert', 'XG-Boost', 'Embedding'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });

    typed2.value = new Typed('#homepage__typed-message2', {
        strings: ['BSc Information Systems Final Project'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });
});
</script>

<template>
    <div class="homepage__title-container">
        <h2 class="text-3xl homepage__title">Analysis and classification of tweets on the topic of corona vaccines With the help of natural language processing models</h2>
    </div>
    <div class="homepage__typed-container">
        <span class="homepage__typed-text" id="homepage__typed-message"></span>
    </div>
    <div class="homepage__typed-container homepage__typed-container--secondary">
        <span class="homepage__typed-text" id="homepage__typed-message2"></span>
    </div>
    <div class="absolute bottom-0 homepage__scroller left-1/2 translate-x-[-50%]"><ScrollDownAnimation /></div>
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
    color: red;
}

.homepage__typed-container .typed-cursor {
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
    margin-top: 60dvh;
}
</style>
