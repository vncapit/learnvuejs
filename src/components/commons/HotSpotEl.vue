<template>
    <div class="container_" :style="item_pos">
        <svg viewBox="0 0 24 24" class="icon">
            <path fill="currentColor" d="M18.984 12.984h-6v6h-1.969v-6h-6v-1.969h6v-6h1.969v6h6v1.969z"></path>
        </svg>
        <span>
            <p class="price" ref="price" :style="price_pos">{{ this.data.price }}$</p>
        </span>
    </div>
</template>

<script>
export default {
    name: "HotSpotEl",
    props: {
        data: {
            type: Object,
            default: () => { return { name: '', top: 0, left: 0, price: 0 } }
        },
    },
    data() {
        return {
            price_pos: ''
        }
    },
    computed: {
        item_pos() {
            return `top: ${this.data.top}%; left:${this.data.left}%`
        },
    },
    mounted() {
        setTimeout(() => {
            let priceWidth = this.$refs.price.clientWidth;
            let center = (24 - priceWidth) / 2;
            this.price_pos = `top: -27px; left: ${center}px`;
            console.log(priceWidth)
            console.log(this.price_pos);
        }, 100);
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

.container_ {
    width: 24px;
    height: 24px;
    position: absolute;
}


span {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0%;
    left: 0;
    z-index: 0;
    cursor: pointer;
    color: rgba($color: #000000, $alpha: 0);

    &::before {
        content: "";
        background-color: #CF00F1;
        position: absolute;

        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 50%;
        z-index: 10;
        animation: pulse 3s ease infinite;
    }

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgb(184, 176, 176);
        border-radius: 50%;
        z-index: 0;
        animation: wave 3s linear infinite;
    }

    &:hover {
        &::after {
            display: none;
        }

        &::before {
            position: absolute;
            animation: none;
            background-color: #fff;
            z-index: 0;
            outline: 3px solid rgb(255, 255, 255);
            outline-offset: 5px;
        }

        .price {
            position: absolute;
            text-align: center;
            align-content: center;
        }

        color: rgb(255, 255, 255);

    }
}

svg {
    position: absolute;
    top: 0;
    left: 0;
    fill: currentColor;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none;
}

.icon {
    color: #CF00F1;
}

@keyframes pulse {

    0%,
    100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.1);
    }
}

@keyframes wave {
    0% {
        opacity: 1;
        transform: scale(.8);
    }

    100% {
        opacity: 0;
        transform: scale(2);
    }
}
</style>