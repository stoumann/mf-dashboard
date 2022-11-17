<template>
	<div class="fixed inset-0 grid grid-cols-3 grid-rows-1 gap-10 bg-slate-100 text-slate-900 p-10 box-border">
		<div class="col-span-1 grid grid-rows-2 gap-10 overflow-hidden">
			<img class="rounded-lg w-full h-full object-cover" src="https://cdn.midjourney.com/1e25c4e4-3a34-4220-ac1d-fb6adf87f174/grid_0.png" alt="" />
			<div class="bg-white rounded-lg p-10 flex flex-col justify-between relative overflow-hidden">
				<Weather />
			</div>
		</div>
		<div class="grid col-span-2 grid-cols-3 grid-rows-2 gap-10">
			<div class="col-span-2 bg-white rounded-lg flex flex-col justify-between relative overflow-hidden p-10">
				<span class="text-[2vw] uppercase tracking-wide">Indeklima</span>
				<ClimateData></ClimateData>
			</div>
			<div class="bg-white rounded-lg p-10 flex justify-center items-center relative overflow-hidden">
				<CurrentTime></CurrentTime>
			</div>
			<!-- <div class="bg-white rounded-lg p-10 flex flex-col justify-between relative overflow-hidden">
				<span class="text-[2vw] uppercase tracking-wide">Kø til frokost</span>
				<div class="text-right text-[10vw] relative z-10 leading-[7vw]">{{ lunchQueue || '?' }}</div>
				<div class="text-[20vw] leading-none text-right text-slate-100 absolute -bottom-48 -right-5 transform rotate-12"> {{ lunchQueue || '?' }}</div>
			</div>
			<div class="bg-white rounded-lg p-10 flex flex-col justify-between relative overflow-hidden">
				<span class="text-[2vw] uppercase tracking-wide">Biler til opladning</span>
				<div class="text-right text-[10vw] relative z-10 leading-[7vw]">{{ chargingCars || '?' }}</div>
				<div class="text-[20vw] leading-none text-right text-slate-100 absolute -bottom-48 -right-5 transform rotate-12"> {{ chargingCars || '?' }}</div>
			</div>
			<div class="bg-white rounded-lg p-10 flex flex-col justify-between relative overflow-hidden">
				<span class="text-[2vw] uppercase tracking-wide">Janniks puls (bpm)</span>
				<div class="text-right text-[10vw] relative z-10 leading-[7vw]">{{ pulse || '?' }}</div>
				<div class="text-[20vw] leading-none text-right text-slate-100 absolute -bottom-48 -right-5 transform rotate-12"> {{ pulse || '?' }}</div>
			</div> -->

			<div class="bg-white col-span-3 rounded-lg p-10 flex flex-col justify-between relative overflow-hidden">
				<span class="text-[2vw] uppercase tracking-wide">Dagens elpriser</span>
				<PriceRecords></PriceRecords>
			</div>
		</div>
	</div>
</template>

<script>
	import ClimateData from '../components/ClimateData.vue';
	import CurrentTime from '../components/CurrentTime.vue';
	import PriceRecords from '../components/PriceRecords.vue';
	import Weather from '../components/Weather.vue';

	export default {
		components: { PriceRecords, Weather, CurrentTime, ClimateData },
		data () {
			return {
				lunchQueue: 0,
				chargingCars: 0,
				pulse: 0,
			};
		},
	}
</script>