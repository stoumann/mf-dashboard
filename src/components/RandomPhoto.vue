<template>
    <div class="w-full h-full object-cover rounded-lg bg-black">
        <img v-if="state.randomPhoto" :src="state.randomPhoto" class="w-full h-full object-cover rounded-lg" />
    </div>
</template>

<script setup>
    import { reactive } from 'vue';

    const state = reactive({ randomPhoto: '' });

    async function getRandomPhoto() {
        let today = new Date();
        today.setHours(0,0,0,0);

        const res = await fetch(`https://api.unsplash.com/photos/random?query=cake&client_id=gSZ544UTh2w4bF6Y9bH3dzvs62X9uWGaxnMKCE68it0&orientation=landscape`, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=utf-8',
            }
        });
        
        let result = await res.json();
        state.randomPhoto = result.urls.full;
    }

    getRandomPhoto();

    setInterval(() => {
        getRandomPhoto();
    }, parseInt(1000 * 60 * 60));
</script>