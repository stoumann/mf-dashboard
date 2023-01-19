<template>
	<div class="fixed inset-0 grid grid-rows-3 gap-10 text-slate-100 p-10 box-border">
        <div class="bg-black row-span-2 rounded-lg p-10 flex flex-col justify-between relative overflow-hidden">
            <span class="text-[2vw] uppercase tracking-wide">Dagens elpriser</span>
            <PriceRecords></PriceRecords>
        </div>
	</div>
</template>

<script>
	import PriceRecords from '../components/PriceRecords.vue';

	export default {
		components: { PriceRecords },
	}
</script>