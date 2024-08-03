<script setup>
import { defineProps } from 'vue';

const props = defineProps({ cardTxt: String });
</script>

<template>
    <Fieldset legend="Toggle" class="" :toggleable="true">
        <p>
            {{ props.cardTxt }}
        </p>
    </Fieldset>
</template>

<style lang="scss"></style>
