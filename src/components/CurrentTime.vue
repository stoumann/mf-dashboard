<template>
    <div class="text-[11vw] break-words leading-none text-left text-slate-600 font-bold">{{state.hour}}<span class="transition-all duration-1000 ease-in-out" :class="{'text-transparent': !state.blinkOn}">:</span><span class="block">{{state.minutes}}</span></div>
</template>

<script setup>
    import { reactive } from 'vue';

    const state = reactive({ hour: '', minutes: '', blinkOn: false });

    function updateTime () {
        let today = new Date();
        state.hour = ('0' + today.getHours().toLocaleString('da-DK')).slice(-2);
        state.minutes = ('0' + today.getMinutes().toLocaleString('da-DK')).slice(-2);
        state.blinkOn = !state.blinkOn;
    }

    updateTime();

    setInterval(() => {
        updateTime();
    }, 1000);
</script>