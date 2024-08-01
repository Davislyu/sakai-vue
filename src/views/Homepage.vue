<script setup>
import { ref, onMounted } from 'vue';
import Typed from 'typed.js';

const typed = ref(null);

onMounted(() => {
    typed.value = new Typed('#typedMessage', {
        strings: ['Covid 19', 'Analysis', 'Natural Language Processing', 'Pandemic', 'Predictive Analytics', 'S-bert', 'CT-bert', 'XG-Boost ', 'Embedding'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });
});
</script>

<template>
    <main class="Homepage__wrapper">
        <div class="Homepage__wrapper__title__wrapper">
            <span class="container__title" id="typedMessage"></span>
        </div>
    </main>
</template>

<style>
.Homepage__wrapper {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 20vh;
}
span {
    font-size: clamp(1rem, 10vw, 4rem);
    color: black;
}
.typer-cursor {
    font-size: clamp(1rem, 10vw, 2rem);
}
.Homepage__wrapper__title__wrapper {
    display: flex;
    justify-content: center;
    text-align: center;
    justify-content: center;
}
</style>
