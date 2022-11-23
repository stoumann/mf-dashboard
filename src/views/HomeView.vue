<template>
	<div class="fixed inset-0 grid grid-cols-2 grid-rows-1 gap-10 bg-slate-900 text-slate-100 p-10 box-border">
		<div class="col-span-1 grid grid-rows-3 gap-10 overflow-hidden">
			<div class="row-span-2">
				<SolarPanels></SolarPanels>
			</div>
			<div class="bg-slate-800 rounded-lg p-10 flex justify-center items-center relative overflow-hidden outline-text">
				<CurrentTime></CurrentTime>
			</div>
		</div>
		<div class="grid grid-rows-2 gap-10">
			<div class="bg-slate-800 rounded-lg p-10 flex flex-col justify-between relative overflow-hidden row-span-2">
				<Weather />
			</div>
		</div>
	</div>
</template>

<script>
	import ClimateData from '../components/ClimateData.vue';
	import CurrentTime from '../components/CurrentTime.vue';
	import PriceRecords from '../components/PriceRecords.vue';
	import SolarPanels from '../components/SolarPanels.vue';
	import Weather from '../components/Weather.vue';

	export default {
		components: { PriceRecords, Weather, CurrentTime, ClimateData, SolarPanels },
	}
</script>