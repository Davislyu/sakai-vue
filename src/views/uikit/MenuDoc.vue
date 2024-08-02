<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const nestedMenuitems = ref([
    {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        route: '/'
    },
    {
        label: 'Process',
        icon: 'pi pi-fw pi-spin pi-cog',
        route: '/processFlow'
    }
]);

const handleMenuItemClick = (item) => {
    if (item.route) {
        router.push(item.route);
    }
};
</script>

<template>
    <Menubar :model="nestedMenuitems" @item-click="handleMenuItemClick">
        <template #item="{ item }">
            <a @click.prevent="handleMenuItemClick(item)" href="javascript:void(0)"> <i :class="item.icon"></i> {{ item.label }} </a></template
        >
    </Menubar>
</template>

<style scoped>
.pi {
    font-size: 1.5rem;
}
.p-menubar {
    background-color: black;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    -webkit-backdrop-filter: blur(5px);
    border: none;
    position: fixed;
    width: 100%;
}

a {
    display: flex;
    padding: 0.6rem;
}
</style>
