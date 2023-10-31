<template>
    <div class="text-[2vw] tracking-wider">
        Dagens menu, {{ today }} 
        <div v-if="state.weeklymenu" class="font-light text-slate-400 group-[.is-big]:text-[3vw] group-[.is-big]:text-white group-[.is-big]:font-bold">{{ todaysDish }}</div>
    </div>
</template>

<script setup>
    import { reactive, computed } from 'vue';
    import { supabase } from '../supabase';

    const state = reactive({ weeklymenu: {} });

    async function getData() {
        const { data, error } = await supabase.from('weeklymenu').select('id, monday, tuesday, wednesday, thursday, friday, updated_at').single();

        state.weeklymenu = data;
    }

    const todaysDish = computed(() => {
        let today = new Date().getDay();

        switch (today) {
            case 1:
                return state.weeklymenu?.monday;
                break;
            case 2:
                return state.weeklymenu?.tuesday;
                break;
            case 3:
                return state.weeklymenu?.wednesday;
                break;
            case 4:
                return state.weeklymenu?.thursday;
                break;
            case 5:
                return state.weeklymenu?.friday;
                break;
        
            default:
                return '?'
                break;
        }
    });

    const today = computed(() => {
        let today = new Date();
        return formatDate(today);
    });

    getData();

    setInterval(() => {
        getData();
    }, 60000);

    function formatDate (updatedAt) {
        let date = new Date(updatedAt);

        return date.toLocaleString('da-DK', {
            weekday: 'long',
            month: 'short',
            day: 'numeric'
        })
    }
</script>