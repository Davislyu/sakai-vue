<script setup>
import { onMounted, ref } from 'vue';
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
            <source src="/covidBG.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <img src="/StaticBackgroundIMG.png" alt="Static Background" class="static-bg" />
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
.background-video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
    filter: brightness(25%);
}

.background-video video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
    filter: opacity(1.1);
}

.static-bg {
    display: none;
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}

/* Hide video and show static background image on small screens */
@media only screen and (max-width: 767px) {
    .background-video video {
        display: none;
    }

    .static-bg {
        display: block;
    }
}

.main-content {
    padding-top: 4rem;
}

.p-menubar-item-content {
    color: red;
}

a {
    color: red;
}
</style>
