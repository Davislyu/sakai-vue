<script setup>
import Typed from 'typed.js';
import { onMounted, ref } from 'vue';

import proccesFlowChart from '../components/ProcessFlowChart.vue';
const typed = ref(null);
onMounted(() => {
    typed.value = new Typed('#homepage__typed-message', {
        strings: ['Data Collection', 'Data Cleaning', 'Embedding', 'SBERT Embedding', 'CT-BERT Embedding', 'Dimensional Reduction (PCA)', 'Test Different Classifiers', 'Train the Model', 'Make Classifications', 'Results Analysis'],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true
    });
});
</script>

<template>
    <div v-motion-pop-visible class="flex flex-col">
        <div class="absolute bg-transparent homepage__typed-container">
            <span class="text-2xl bg-transparent sm:text-5xl homepage__typed-text" id="homepage__typed-message"></span>
        </div>
        <proccesFlowChart />
    </div>
</template>

<style lang="scss" scoped>
h1 {
    text-align: center;
}
span {
}
</style>
