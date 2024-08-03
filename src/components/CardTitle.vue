<script setup>
import { defineProps } from 'vue';
const props = defineProps({ card_title: String, card_content: String });
</script>

<template>
    <Card>
        <template v-slot:title>
            <div class="flex items-center justify-between mb-0">
                <div class="mb-4 text-xl font-semibold">{{ props.card_title }}</div>
            </div>
            <Menu id="config_menu" ref="menuRef" :popup="true" />
        </template>

        <template v-slot:content>
            <p class="m-0 leading-normal">
                {{ props.card_content }}
            </p>
        </template>
    </Card>
</template>

<style lang="scss" scoped></style>
