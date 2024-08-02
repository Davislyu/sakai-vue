=
<script setup>
import { ref, onMounted } from 'vue';
import Typed from 'typed.js';
import FieldsetCard from '../components/FieldsetCard.vue';

const typed = ref(null);

onMounted(() => {
    (typed.value = new Typed('#typedMessage', {
        strings: ['Covid 19', 'Analysis', 'Natural Language Processing', 'Pandemic', 'Predictive Analytics', 'S-bert', 'CT-bert', 'XG-Boost ', 'Embedding'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    })),
        (typed.value = new Typed('#typedMessage2', {
            strings: ['Bs.c Information systems Final project '],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true
        }));
});
</script>

<template>
    <main class="Homepage__wrapper">
        <div class="Homepage__title__wrapper">
            <h2 class="Homepage__title">Analysis and classification of tweets on the topic of corona vaccines With the help of natural language processing models</h2>
        </div>
        <div class="Homepage__wrapper__title__wrapper">
            <span class="container__title" id="typedMessage"></span>
        </div>
        <div class="Homepage__wrapper__title__wrapper2">
            <span class="container__title" id="typedMessage2"></span>
        </div>
        <div class="cards_container">
            <div class="card">
                <div class="mb-4 text-xl font-semibold">Fieldset</div>
                <FieldsetCard
                    cardTxt="                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, dolores. Labore a rerum sit unde reiciendis aliquid esse voluptas quod minima non. Officiis itaque velit distinctio nisi ipsum sunt asperiores?
"
                />
            </div>
            <div class="card">
                <div class="mb-4 text-xl font-semibold">Fieldset</div>
                <FieldsetCard
                    cardTxt="                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, dolores. Labore a rerum sit unde reiciendis aliquid esse voluptas quod minima non. Officiis itaque velit distinctio nisi ipsum sunt asperiores?
"
                />
            </div>
            <div class="card">
                <div class="mb-4 text-xl font-semibold">Fieldset</div>
                <FieldsetCard
                    cardTxt="                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, dolores. Labore a rerum sit unde reiciendis aliquid esse voluptas quod minima non. Officiis itaque velit distinctio nisi ipsum sunt asperiores?
"
                />
            </div>
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
    color: red;
    font-weight: 300;
    font-size: large;
}
.Homepage__wrapper__title__wrapper.typer-cursor {
    font-size: clamp(1rem, 10vw, 2rem);
}

.Homepage__wrapper__title__wrapper {
    display: flex;
    justify-content: center;
    text-align: center;
    justify-content: end;
}
.Homepage__wrapper__title__wrapper2 {
    display: flex;
    font-size: 150px;
    justify-content: center;
    text-align: center;
    justify-content: end;
}
.Homepage__title__wrapper {
    display: flex;
    justify-content: end;
    font-size: xx-large;
}
.Homepage__title {
    color: red;
    width: 60%;
}
.cards_container {
    display: grid;
    margin: 0 auto;
    grid-template-columns: repeat(3, 1fr);

    grid-auto-rows: auto;

    grid-gap: 1rem;
}
</style>
