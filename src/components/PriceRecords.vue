<template>
    <div v-if="state.chartData" class="h-full">
        <BarChart :chart-data="state.chartData" class="w-full h-full" />
    </div>
    <div v-else>
        Elpriserne kunne ikke hentes
    </div>
</template>

<script setup>
    import BarChart from './BarChart.ts';
    import { reactive } from 'vue';

    let today = new Date();
    today = `${today.getFullYear()}-${('0' + (today.getMonth()+1)).slice(-2)}-${('0' + today.getDate()).slice(-2)}T08:00`;
    // today = `${today.getFullYear()}-${('0' + (today.getMonth()+1)).slice(-2)}-${('0' + today.getDate()).slice(-2)}T${('0' + today.getHours()).slice(-2)}:${('0' + today.getMinutes()).slice(-2)}`;

    let endToday = new Date();
    endToday.setDate(endToday.getDate() + 1);
    endToday = `${endToday.getFullYear()}-${('0' + (endToday.getMonth()+1)).slice(-2)}-${('0' + endToday.getDate()).slice(-2)}T00:00`;

    const state = reactive({ chartData: null });

    async function getData() {
        const res = await fetch(`https://api.energidataservice.dk/dataset/Elspotprices?offset=0&start=${today}&end=${endToday}&filter=%7B%22PriceArea%22:[%22DK2%22]%7D&sort=HourDK%20ASC&timezone=dk`);
        const finalRes = await res.json();
        
        let labels = [];
        let data = [];

        finalRes.records.forEach(record => {
            labels.push(formatDate(record.HourDK));
            data.push(parseFloat((record.SpotPriceDKK / 1000) * 1.25).toFixed(2));
        });

        state.chartData = {
            labels: labels,
            datasets: [
                {
                    backgroundColor: '#15803d',
                    data: data,
                    borderRadius: 5,
                }
            ]
        };
    }

    getData();

    function formatDate (date) {
        return ('0' + new Date(date).getHours()).slice(-2) + ':00';
    }
</script>