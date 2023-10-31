<template>
    <div class="fixed inset-0 rounded-3xl z-40 m-10 grid grid-rows-4 gap-20 text-white" :class="[state.queueData.bgClass]" v-if="state.queueData.status == 'on'">
        <div class="grid gap-20 grid-cols-2 row-span-3">
            <div class="w-full h-full flex items-center justify-center text-[24vh] text-center">
                <div>
                    {{ state.queueData.buffet }}
                    <div class="text-[6vh]">Personer i buffeten</div>
                </div>
            </div>
            <div class="w-full h-full flex items-center justify-center text-[24vh] text-center">
                <div>
                    {{ state.queueData.queue }}
                    <div class="text-[6vh]">Personer i kø</div>
                </div>
            </div>
        </div>
        <div class="text-center group is-big">
            <TodaysMenu />
            <CurrentTime class="text-center text-[3vw] mt-10" />
        </div>
    </div>
    <div class="fixed inset-0 z-50 flex items-center justify-center text-[40vh]" v-if="(state.queueData.buffet + state.queueData.queue) > 12">
        <svg class="w-1/4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#ffffff"><path d="M416 398.9c58.5-41.1 96-104.1 96-174.9C512 100.3 397.4 0 256 0S0 100.3 0 224c0 70.7 37.5 133.8 96 174.9c0 .4 0 .7 0 1.1v64c0 26.5 21.5 48 48 48h48V464c0-8.8 7.2-16 16-16s16 7.2 16 16v48h64V464c0-8.8 7.2-16 16-16s16 7.2 16 16v48h48c26.5 0 48-21.5 48-48V400c0-.4 0-.7 0-1.1zM224 256c0 35.3-28.7 64-64 64s-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64zm128 64c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"/></svg>
    </div>
</template>

<script setup>
    import { reactive } from 'vue';
    import TodaysMenu from './TodaysMenu.vue';
    import CurrentTime from './CurrentTime.vue';

    const state = reactive({ queueData: {status: 'off', buffet: 0, queue: 0, bgClass: 'bg-green-500'} });

     async function getQueueData() {
        const date = new Date();
        let hour = date.getHours();

        if (hour > 10 && hour < 14) { // Only run between 11 and 13
            try {
                const queue = await fetch('/nano5/api/get_queue_statistics');
    
                const buffet = await fetch('/nano4/api/get_queue_statistics');
    
                let buffetResult = await buffet.json();
                let buffetCount = buffetResult.count;
                state.queueData.buffet = buffetCount;
                
                let queueResult = await queue.json();
                let queueCount = queueResult.count;
                state.queueData.queue = queueCount;
                state.queueData.bgClass = 'bg-green-500';
    
                if (buffetCount > 4) {
                    state.queueData.bgClass = 'bg-red-400';
                }
    
                if ((buffetCount + queueCount) > 8) {
                    state.queueData.bgClass = 'bg-red-800';
                }
    
                state.queueData.status = 'on';
            } catch (error) {
                state.queueData.status = 'off';
            }
        }
    }
    
    getQueueData();

    setInterval(() => {
        getQueueData();
    }, 5000);

</script>