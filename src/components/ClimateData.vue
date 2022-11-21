<template>
    <LineChart :chart-data="state.chartData" class="w-full h-full" />
</template>

<script setup>
    import LineChart from './LineChart.ts';
    //http://pi-builder:6182/api/query?start=1600000000&m=avg:TVOC

    import { reactive } from 'vue';

    // const state = reactive({ climateData: [] });
    const state = reactive({ chartData: {} });

    async function getData() {
        let today = new Date();
        today.setHours(0,0,0,0);

        const res = await fetch(`/api/query?start=4h-ago&m=avg:CO2eq`);
        const finalRes = await res.json();

        let result = Object.entries(finalRes[0].dps);

        let labels = [];
        let data = [];

        result.forEach((element) => {
            labels.push(formatDate(element[0]));
            data.push(parseInt(element[1]));
        });

        state.chartData = {
            labels: labels,
            datasets: [
                {
                    borderColor: '#fcd34d',
                    data: data,
                    radius: 0,
                    borderWidth: 2,
                }
            ]
        };
    }

    getData();

    setInterval(() => {
        getData();
    }, 20000);

    function formatDate (date) {
        return ('0' + new Date(parseInt(date) * 1000).getHours()).slice(-2) + ':00';;
    }
</script>