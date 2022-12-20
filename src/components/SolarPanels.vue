<template>
    <div class="grid gap-10 grid-cols-3 grid-rows-2 h-full" v-if="state.solarData.realKpi">
        <div class="space-y-4 bg-sky-800 rounded-lg p-10 flex items-center justify-between flex-col w-full h-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1" fill="currentColor" class="w-16 h-16">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
            <div><span class="text-[7vw] leading-none outline-text">{{state.solarData.realKpi.realTimePower}}</span><span class="text-[2vw] text-white">kW</span></div>
            <div class="text-[2vw] text-slate-500">Real-time Udbytte</div>
        </div>
        <div class="space-y-4 bg-red-800 rounded-lg p-10 flex items-center justify-between flex-col w-full h-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
            <div><span class="text-[7vw] leading-none outline-text">{{state.solarData.realKpi.dailyEnergy}}</span><span class="text-[2vw] text-white">kWh</span></div>
            <div class="text-[2vw] text-slate-500">Udbytte i dag</div>
        </div>
        <div class="space-y-4 bg-orange-600 rounded-lg p-10 flex items-center justify-between flex-col w-full h-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" fill="currentColor" class="w-16 h-16">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
            </svg>
            <div><span class="text-[7vw] leading-none outline-text">{{parseFloat(state.solarData.socialContribution.co2ReductionByYear / 1000).toFixed(2)}}</span><span class="text-[2vw] text-white">tons</span></div>
            <div class="text-[2vw] text-slate-500">Co2 sparet</div>
        </div>
        <div class="space-y-4 bg-pink-800 rounded-lg p-10 flex items-center justify-between flex-col w-full h-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" class="w-12 h-12">
                <path d="M210.6 5.9L62 169.4c-3.9 4.2-6 9.8-6 15.5C56 197.7 66.3 208 79.1 208H104L30.6 281.4c-4.2 4.2-6.6 10-6.6 16C24 309.9 34.1 320 46.6 320H80L5.4 409.5C1.9 413.7 0 419 0 424.5c0 13 10.5 23.5 23.5 23.5H192v32c0 17.7 14.3 32 32 32s32-14.3 32-32V448H424.5c13 0 23.5-10.5 23.5-23.5c0-5.5-1.9-10.8-5.4-15L368 320h33.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L344 208h24.9c12.7 0 23.1-10.3 23.1-23.1c0-5.7-2.1-11.3-6-15.5L237.4 5.9C234 2.1 229.1 0 224 0s-10 2.1-13.4 5.9z"/>
            </svg>
            <span class="text-[7vw] leading-none outline-text">{{state.solarData.socialContribution.equivalentTreePlanting}}</span>
            <div class="text-[2vw] text-slate-500">Svarer til træer plantet</div>
        </div>
        <div class="bg-green-800 rounded-lg p-10 flex flex-col justify-between relative overflow-hidden col-span-2">
            <span class="text-[2vw] uppercase tracking-wide">Dagens elpriser</span>
            <PriceRecords></PriceRecords>
        </div>
    </div>
</template>

<script setup>
    import { reactive } from 'vue';
    import PriceRecords from './PriceRecords.vue';

    const state = reactive({ solarData: {} });

    async function getData() {
        let today = new Date();
        today.setHours(0,0,0,0);

        const res = await fetch(`/rest/pvms/web/kiosk/v1/station-kiosk-file?kk=jos9GDgHHD7fa7Hly634Pe0dC7E6poMe`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=utf-8',
            }
        });
        
        let result = await res.json();
        result = result.data;
        result = result.replace(/&quot;/g, '"');

        result = JSON.parse(result);
        state.solarData = result;
    }

    getData();

    setInterval(() => {
        getData();
    }, 60000);

    function formatDate (date) {
        return ('0' + new Date(parseInt(date) * 1000).getHours()).slice(-2) + ':00';;
    }
</script>