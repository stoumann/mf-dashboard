<template>
    <div class="fixed inset-0 grid grid-cols-2 grid-rows-2 gap-10 bg-zinc-900 text-white box-border p-[2vw]">
        <div>
            <div class="gap-10 flex flex-col">
                <TodaysMenu class="!text-[3vw]" />
                <div class="bg-black rounded-lg p-10 flex flex-col justify-between relative overflow-hidden row-span-3">
                    <Weather />
                </div>
            </div>
        </div>
        <div>
            <div class="gap-10 flex flex-col">
                <PrusaJobs />
                <SmellOMeter />
                <div class="bg-black rounded-lg p-10 flex items-center justify-center">
                    <CurrentTime />
                </div>
            </div>
        </div>
    </div>

    <LunchQueue />
</template>

<script setup>
    import LunchQueue from '../components/LunchQueue.vue';
    import TodaysMenu from '../components/TodaysMenu.vue';
	import SmellOMeter from '../components/SmellOMeter.vue';
	import PrusaJobs from '../components/PrusaJobs.vue';
    import Weather from '../components/Weather.vue';
    import CurrentTime from '../components/CurrentTime.vue';
</script>