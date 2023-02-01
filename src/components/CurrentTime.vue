<template>
    <div class="text-[6.5vw] break-words leading-none tracking-widest text-left font-bold">{{state.hour}}<span class="transition-all duration-500 ease-in-out">:</span>{{state.minutes}}<span class="transition-all duration-500 ease-in-out">:</span>{{state.seconds}}</div>
</template>

<script setup>
    import { reactive } from 'vue';

    const state = reactive({ hour: '', minutes: '', seconds: '', blinkOn: false });

    function updateTime () {
        let today = new Date();
        state.hour = ('0' + today.getHours().toLocaleString('da-DK')).slice(-2);
        state.minutes = ('0' + today.getMinutes().toLocaleString('da-DK')).slice(-2);
        state.seconds = ('0' + today.getSeconds().toLocaleString('da-DK')).slice(-2);
        state.blinkOn = !state.blinkOn;
    }

    updateTime();

    setInterval(() => {
        updateTime();
    }, 1000);
</script>