<template>
    <div class="bg-black rounded-lg p-10 flex flex-col relative overflow-hidden text-[2vw] tracking-wider h-full w-full space-y-4">
        <div>Smell-O-Meter</div>
        <div v-if="state.sensorData" class="text-[1.2vw]">
            <div v-if="state.sensorData.co2eq < 1000" class="bg-green-600 text-white p-2 px-4 rounded-lg text-center">#1 - Good to go!</div>
            <div v-else class="bg-red-600 text-white p-2 px-4 rounded-lg text-center">#1 - Be careful!</div>
            <!-- {{ state.sensorData.co2eq }} - {{ state.sensorData.tvoc }} -->
        </div>
    </div>
</template>

<script setup>
    import { reactive } from 'vue';
    import { supabase } from '../supabase';
    import LineChart from './LineChart.ts';

    const state = reactive({ sensorData: {}, chartData: [] });

    async function getData() {
        const { data, error } = await supabase.from('co2-sensor').select().order('created_at', { ascending: false }).limit(480);

        state.sensorData = data[0];
        state.chartData = data;
    }

    getData();

    setInterval(() => {
        getData();
    }, 60000);
</script>