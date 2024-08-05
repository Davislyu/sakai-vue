<!-- Flowchart.vue -->
<script setup>
import { VueFlow, useVueFlow } from '@vue-flow/core';
import { onBeforeUnmount, onMounted, ref } from 'vue';

const nodes = ref([
    { id: '1', type: 'input', label: 'Data Collection', position: { x: 500, y: 50 }, style: { border: '2px solid red', color: 'black', backgroundColor: '#ffe6e6' } },
    { id: '2', label: 'Data Cleaning', position: { x: 500, y: 150 }, style: { border: '2px solid red', color: 'black', backgroundColor: '#ffe6e6' } },
    { id: '3', label: 'Embedding', position: { x: 500, y: 250 }, style: { border: '2px solid red', color: 'black', backgroundColor: '#ffe6e6' } },
    { id: '4', label: 'SBERT Embedding', position: { x: 300, y: 350 }, style: { border: '2px solid red', color: 'black', backgroundColor: '#ffe6e6' } },
    { id: '5', label: 'CT-BERT Embedding', position: { x: 700, y: 350 }, style: { border: '2px solid red', color: 'black', backgroundColor: '#ffe6e6' } },
    { id: '6', label: 'Dimensional Reduction (PCA)', position: { x: 500, y: 450 }, style: { border: '2px solid red', color: 'black', backgroundColor: '#ffe6e6' } },
    { id: '7', label: 'Test Different Classifiers', position: { x: 500, y: 550 }, style: { border: '2px solid red', color: 'black', backgroundColor: '#ffe6e6' } },
    { id: '8', label: 'Train the Model', position: { x: 500, y: 650 }, style: { border: '2px solid red', color: 'black', backgroundColor: '#ffe6e6' } },
    { id: '9', label: 'Make Classifications', position: { x: 500, y: 750 }, style: { border: '2px solid red', color: 'black', backgroundColor: '#ffe6e6' } },
    { id: '10', label: 'Results Analysis', position: { x: 500, y: 850 }, style: { border: '2px solid red', color: 'black', backgroundColor: '#ffe6e6' } }
]);

const edges = ref([
    { id: 'e1-2', source: '1', target: '2', animated: true, style: { stroke: 'red' } },
    { id: 'e2-3', source: '2', target: '3', animated: true, style: { stroke: 'red' } },
    { id: 'e3-4', source: '3', target: '4', animated: true, style: { stroke: 'red' } },
    { id: 'e3-5', source: '3', target: '5', animated: true, style: { stroke: 'red' } },
    { id: 'e4-6', source: '4', target: '6', animated: true, style: { stroke: 'red' } },
    { id: 'e5-6', source: '5', target: '6', animated: true, style: { stroke: 'red' } },
    { id: 'e6-7', source: '6', target: '7', animated: true, style: { stroke: 'red' } },
    { id: 'e7-8', source: '7', target: '8', animated: true, style: { stroke: 'red' } },
    { id: 'e8-9', source: '8', target: '9', animated: true, style: { stroke: 'red' } },
    { id: 'e9-10', source: '9', target: '10', animated: true, style: { stroke: 'red' } }
]);

const { fitView } = useVueFlow();

const onload = () => {
    fitView();
};

onMounted(async () => {
    setTimeout(() => {
        fitView();
        window.addEventListener('resize', onload);
    });
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', onload);
});
</script>

<template>
    <div class="flex justify-center vue-flow-container">
        <VueFlow v-model:nodes="nodes" v-model:edges="edges"></VueFlow>
    </div>
</template>

<style>
/* import the required styles */
@import '@vue-flow/core/dist/style.css';

/* import the default theme (optional) */
@import '@vue-flow/core/dist/theme-default.css';

/* Add styles for the VueFlow container */
.vue-flow-container {
    width: 100%;
    height: 100vh; /* Full viewport height */
    padding: 20px; /* Optional padding */
    box-sizing: border-box;
}
</style>
