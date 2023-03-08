<template>
    <div class="bg-black rounded-lg p-10 flex flex-col relative overflow-hidden text-[2vw] tracking-wider h-full w-full space-y-16">
        <div v-if="Object.keys(state.prusa1).length > 0" class="space-y-4">
            <div class="flex items-center justify-between">
                <div>
                    Prusa1
                </div>
                <div v-if="state.prusa1.state == 'Printing'">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 text-slate-400 animate-spin">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                    </svg>
                </div>
                <div v-if="state.prusa1.state == 'Operational'">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 text-green-600">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div v-if="state.prusa1.error">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 text-red-600">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                </div>
            </div>
            <div class="w-full h-6 rounded-full overflow-hidden bg-zinc-800 relative">
                <div v-if="state.prusa1.error" class="bg-red-600 rounded-full h-6 w-full"></div>
                <div v-else class="rounded-full h-6" :class="parseFloat(state.prusa1.progress.completion).toFixed(0) < 100 ? 'bg-slate-400' : 'bg-green-600'" :style="['width: ' + parseFloat(state.prusa1.progress.completion).toFixed(0) + '%']"></div>
            </div>
        </div>
        <div v-if="Object.keys(state.prusa2).length > 0" class="space-y-4">
            <div class="flex items-center justify-between">
                <div>
                    Prusa2
                </div>
                <div v-if="state.prusa2.state == 'Printing'">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 text-slate-400 animate-spin">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                    </svg>
                </div>
                <div v-if="state.prusa2.state == 'Operational'">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 text-green-600">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div v-if="state.prusa2.error">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 text-red-600">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                </div>
            </div>
            <div class="w-full h-6 rounded-full overflow-hidden bg-zinc-800 relative">
                <div v-if="state.prusa2.error" class="bg-red-600 rounded-full h-6 w-full"></div>
                <div v-else class="rounded-full h-6" :class="parseFloat(state.prusa2.progress.completion).toFixed(0) < 100 ? 'bg-slate-400' : 'bg-green-600'" :style="['width: ' + parseFloat(state.prusa2.progress.completion).toFixed(0) + '%']"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { reactive } from 'vue';

    const state = reactive({ prusa1: {}, prusa2: {} });

    async function getData() {
        const prusa1Job = await fetch('http://prusa1/api/job', {
            headers: {
                'X-API-KEY': import.meta.env.VITE_PRUSA_1_KEY,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });

        let prusa1Result = await prusa1Job.json();
        state.prusa1 = prusa1Result;
        
        const prusa2Job = await fetch('/prusa2/api/job', {
            headers: {
                'X-API-KEY': import.meta.env.VITE_PRUSA_2_KEY,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        let prusa2Result = await prusa2Job.json();
        state.prusa2 = prusa2Result;
    }

    getData();

    setInterval(() => {
        getData();
    }, 1000);

    function formatDate (updatedAt) {
        let date = new Date(updatedAt);

        return date.toLocaleString('da-DK', {
            weekday: 'long',
            month: 'short',
            day: 'numeric'
        })
    }
</script>