<script setup>
import { ref, onMounted } from 'vue';
import Navbar from './components/Navbar.vue';

const videoRef = ref(null);

onMounted(() => {
    if (videoRef.value) {
        videoRef.value.playbackRate = 1;
    }
});
</script>

<template>
    <div class="background-video">
        <video ref="videoRef" autoplay loop muted playsinline>
            <source src="./assets/covidBackground.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
    <Navbar />
    <div class="main-content">
        <router-view />
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
* {
    font-family: 'IBM Plex Mono', monospace;
}
#pv_id_1_list {
    background: transparent;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
}
.background-video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
}

.background-video video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(50%);
    pointer-events: none;
}
.main-content {
    padding-top: 4rem;
}
</style>
