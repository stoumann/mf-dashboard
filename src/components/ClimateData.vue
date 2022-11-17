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

        const res = await fetch(`/api/query?start=12h-ago&m=avg:TVOC`);
        const finalRes = await res.json();

        let result = Object.entries(finalRes[0].dps);
        let newResult = [];

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
                    borderColor: '#000000',
                    data: data,
                    radius: 0,
                    borderWidth: 1,
                }
            ]
        };

        // result.forEach((element) => {
        //     newResult.push({
        //         date: element[0],
        //         value: element[1]
        //     });
        // });

        // state.climateData = newResult;
    }

    getData();

    function formatDate (date) {
        return ('0' + new Date(parseInt(date) * 1000).getHours()).slice(-2) + ':00';;
    }
</script>