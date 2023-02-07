<template>
    <div class="container">
        <div class="bgr">
            <div v-for="item in items" :key="item.name">
                <HotSpotEl :data="item"/>
            </div>  
        </div>

    </div>
</template>

<script>
import HotSpotEl from '@/components/commons/HotSpotEl.vue';

function Item(name, top, left, price) {
    this.name = name;
    this.top = top;
    this.left = left;
    this.price = price;
}

export default {
    name: 'HotSpot',
    components: {
        HotSpotEl,
    },
    data() {
        return {
            items: [
                new Item('Mac', 20, 38, 1000), new Item('Keyboard', 84, 47, 99), new Item('Mouse', 84, 75, 120)
            ]
        }
    },
}

</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
}

.container {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: linear-gradient(45deg, #27A3F1, #BB1CF2);

    .bgr {
        position: relative;
        max-width: 800px;
        max-height: 550px;
        width: 80vw;
        height: 55vw;
        background-image: url('../../public/image/hotspot-image.jpg');
        background-size: contain;
        background-repeat: no-repeat;
    }

}
</style>