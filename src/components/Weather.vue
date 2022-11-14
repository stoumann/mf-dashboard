<template>
    <div v-for="weather in state.weatherData" class="text-[0.8vw]">
        <div class="flex items-center justify-between">
            <div class="text-center">
                {{getTime(weather.time)}}
            </div>
            <div>
                <img :src="'/public/weather-svg/' + weather.data.next_1_hours.summary.symbol_code + '.svg'" alt="" class="h-[2vw] w-[2vw]" />
            </div>
            <div>
                {{parseInt(weather.data.instant.details.air_temperature)}}&deg;
            </div>
            <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6 transform" :style="['rotate: ' + weather.data.instant.details.wind_from_direction + 'deg']">
                    <path fill-rule="evenodd" d="M10 5a.75.75 0 01.75.75v6.638l1.96-2.158a.75.75 0 111.08 1.04l-3.25 3.5a.75.75 0 01-1.08 0l-3.25-3.5a.75.75 0 111.08-1.04l1.96 2.158V5.75A.75.75 0 0110 5z" clip-rule="evenodd" />
                </svg>
                <div>
                    {{parseInt(weather.data.instant.details.wind_speed)}} m/s
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { reactive } from 'vue';

    const state = reactive({ weatherData: [] });

    async function getData() {
        const res = await fetch(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=55.64061818381082&lon=12.261019808702475`);
        const finalRes = await res.json();

        let today = formatDate(new Date());

        const filteredTimes = finalRes.properties.timeseries.filter((timeserie) => {
            let tempDate = formatDate(new Date(timeserie.time));
            return tempDate == today;
        });

        state.weatherData = filteredTimes;
    }

    getData();

    setInterval(() => {
        getData();
    }, 60000*5);

    function formatDate (date) {
        return `${date.getFullYear()}-${('0' + (date.getMonth()+1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
    }

    function getTime (datetime) {
        datetime = new Date(datetime);
        return `${('0' + datetime.getHours().toLocaleString('da-DK')).slice(-2)}:${('0' + datetime.getMinutes().toLocaleString('da-DK')).slice(-2)}`;
    }
</script>