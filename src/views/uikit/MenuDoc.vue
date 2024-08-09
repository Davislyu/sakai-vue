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
        icon: 'pi pi-list',
        route: '/processFlow'
    },
    {
        label: 'Results',
        icon: 'pi pi-chart-bar',
        route: '/Results'
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
            <div @click.prevent="handleMenuItemClick(item)" class="flex items-center justify-center text-center p-[2px] text-red-600 navitem cursor-pointer">
                <a class="p-[0.6rem]" href="javascript:void(0)"> {{ item.label }} </a>
                <i :class="item.icon"></i>
            </div>
        </template>
    </Menubar>
</template>

<style scoped>
.pi {
}
.p-menubar {
    background-color: black;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    -webkit-backdrop-filter: blur(5px);
    border: none;
    position: fixed;
    width: 100%;
    border-radius: 0px;
    z-index: 400000;
}

.p-menubar-item {
    background-color: red !important;
}
</style>
