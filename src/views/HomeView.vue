<template>
	<div class="fixed inset-0 grid grid-cols-3 grid-rows-1 gap-10 bg-zinc-900 text-white p-24 box-border">
		<div class="col-span-2 grid grid-rows-2 gap-10 overflow-hidden">
			<!-- <SolarPanels /> -->
			<!-- <img src="@/assets/Jannick.jpg" alt="" class="object-cover h-full w-full rounded-lg object-top" /> -->
			<div class="w-full h-full bg-black rounded-lg flex items-center justify-center text-[2vw]">
				What should we have here?
			</div>

			<div class="grid grid-cols-3 gap-10">
				<div class="gap-10 flex flex-col">
					<PrusaJobs />
					<SmellOMeter />
				</div>
				<div class="col-span-2 grid grid-rows-6 gap-10">
					<div class="bg-black rounded-lg p-10 flex flex-col justify-between relative overflow-hidden row-span-2">
						<TodaysMenu />
					</div>
					<div class="bg-black rounded-lg p-10 flex flex-col justify-between relative overflow-hidden row-span-4">
						<span class="text-[2vw] uppercase tracking-wide">Dagens elpriser</span>
						<PriceRecords />
					</div>
				</div>
			</div>
		</div>
		<div class="grid grid-rows-4 gap-10">
			<div class="bg-black rounded-lg p-10 flex flex-col justify-between relative overflow-hidden row-span-3">
				<Weather />
			</div>
			<div class="bg-black rounded-lg p-10 flex justify-center items-center relative overflow-hidden outline-text">
				<CurrentTime />
			</div>
		</div>
	</div>

	<LunchQueue />
</template>

<script>
	import CurrentTime from '../components/CurrentTime.vue';
	import LunchQueue from '../components/LunchQueue.vue';
	import PrusaJobs from '../components/PrusaJobs.vue';
	import SolarPanels from '../components/SolarPanels.vue';
	import Weather from '../components/Weather.vue';
    import PriceRecords from '../components/PriceRecords.vue';
    import TodaysMenu from '../components/TodaysMenu.vue';
	import SmellOMeter from '../components/SmellOMeter.vue';

	export default {
		components: { Weather, CurrentTime, SolarPanels, LunchQueue, PrusaJobs, PriceRecords, TodaysMenu, SmellOMeter },
	}
</script>