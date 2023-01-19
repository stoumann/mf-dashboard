<template>
    <div class="fixed inset-0 rounded-3xl z-40 m-10 grid gap-20 grid-cols-2 text-white" :class="[state.queueData.bgClass]" v-if="state.queueData.status == 'on'">
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
    <div class="fixed inset-0 z-50 flex items-center justify-center text-[40vh]" v-if="(state.queueData.buffet + state.queueData.queue) > 14">
        💀
    </div>
</template>

<script setup>
    import { reactive } from 'vue';

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