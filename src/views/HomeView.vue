<template>
	<div class="fixed inset-0 grid grid-cols-3 grid-rows-1 gap-10 bg-zinc-200 text-black p-24 box-border">
		<div class="col-span-2 grid grid-rows-2 gap-20 overflow-hidden">
			<div class="row-span-2">
				<SolarPanels></SolarPanels>
			</div>
		</div>
		<div class="grid grid-rows-4 gap-10">
			<div class="bg-white rounded-lg p-10 flex flex-col justify-between relative overflow-hidden row-span-3">
				<Weather />
			</div>
			<div class="bg-white rounded-lg p-10 flex justify-center items-center relative overflow-hidden outline-text">
				<CurrentTime></CurrentTime>
			</div>
		</div>
	</div>

	<LunchQueue></LunchQueue>
</template>

<script>
	import CurrentTime from '../components/CurrentTime.vue';
	import LunchQueue from '../components/LunchQueue.vue';
	import SolarPanels from '../components/SolarPanels.vue';
	import Weather from '../components/Weather.vue';

	export default {
		components: { Weather, CurrentTime, SolarPanels, LunchQueue },
	}
</script>