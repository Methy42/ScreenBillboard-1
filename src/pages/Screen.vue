<template>
    <div class="container" :style="{ height: `${screenHeight}px`,backgroundImage: `url(${ ScreenBackground })` }">
        <ThreeDemo class="three-demo" />
        <ScreenHeader class="screen-header" />
        <ScreenPanel class="screen-panel-1" :title="'多种图形展示样式'">
            <ScreenChart1 />
        </ScreenPanel>
        <ScreenPanel class="screen-panel-2" :title="'饼状图展示样式'">
            <ScreenChart2 />
        </ScreenPanel>
        <ScreenPanel class="screen-panel-3" :title="'柱状图展示样式'">
            <ScreenChart3 />
        </ScreenPanel>
        <ScreenPanel class="screen-panel-4" :title="'本周完成情况汇总'">
            <ScreenChart4 />
        </ScreenPanel>
        <ScreenPanel class="screen-panel-5" :title="'柱状图展示样式'">
            <ScreenChart5 />
        </ScreenPanel>
        <ScreenPanel class="screen-panel-6" :title="'柱状图展示样式'">
            <ScreenChart6 />
        </ScreenPanel>
    </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { Store } from '../Store';

import ThreeDemo from './ThreeDemo.vue';

import ScreenHeader from '../components/ScreenHeader.vue';
import ScreenPanel from '../components/ScreenPanel.vue';

import ScreenChart1 from '../charts/ScreenChart1.vue';
import ScreenChart2 from '../charts/ScreenChart2.vue';
import ScreenChart3 from '../charts/ScreenChart3.vue';
import ScreenChart4 from '../charts/ScreenChart4.vue';
import ScreenChart5 from '../charts/ScreenChart5.vue';
import ScreenChart6 from '../charts/ScreenChart6.vue';

const ScreenBackground = Store.assetsMap.ScreenBackground.src;
const screenHeight = ref<number>(window.innerWidth * 1080 / 1920);

onMounted(() => {
    window.addEventListener('resize', onWindowResize);
});

onUnmounted(() => {
    window.removeEventListener('resize', onWindowResize);
});

const onWindowResize = () => {
    screenHeight.value = window.innerWidth * 1080 / 1920;
}
</script>
<style scoped>
.container {
    width: 100vw;
    height: 100vh;

    position: relative;

    background-size: cover;
}

.three-demo {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0px;
    left: 0px;
}

.screen-header {
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
}

.screen-panel-1 {
    position: absolute;
    top: 92px;
    left: 15px;
}

.screen-panel-2 {
    position: absolute;
    top: 422px;
    left: 15px;
}

.screen-panel-3 {
    position: absolute;
    top: 752px;
    left: 15px;
}

.screen-panel-4 {
    position: absolute;
    top: 92px;
    right: 15px;
}

.screen-panel-5 {
    position: absolute;
    top: 422px;
    right: 15px;
}

.screen-panel-6 {
    position: absolute;
    top: 752px;
    right: 15px;
}
</style>