<template>
    <div class="container">
        <div class="bgr">
            <HotSpotEl/>
        </div>

    </div>
</template>

<script>
import HotSpotEl from '@/components/commons/HotSpotEl.vue';
export default {
    name: 'HotSpot',
    components: {
        HotSpotEl,
    },
}

</script>

<style lang="css" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 800px;
    background: linear-gradient(45deg, #27A3F1, #BB1CF2);
}

.bgr {
    width: 800px;
    height: 550px;
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/437221/hotspot-image.jpg');
    background-size: cover;
}

</style>