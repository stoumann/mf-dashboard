<template>
    <div class="text-[2vw] tracking-wider">
        Dagens menu, {{ formatDate(state.todaysMenu.updated_at) }} 
        <div v-if="state.todaysMenu" class="font-light text-slate-400 group-[.is-big]:text-[3vw] group-[.is-big]:text-white group-[.is-big]:font-bold">{{ state.todaysMenu.dish }}</div>
    </div>
</template>

<script setup>
    import { reactive } from 'vue';
    import { supabase } from '../supabase';

    const state = reactive({ todaysMenu: {} });

    async function getData() {
        const { data, error } = await supabase.from('todaysmenu').select('id, dish, updated_at').single();

        state.todaysMenu = data;
    }

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