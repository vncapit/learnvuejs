<template>
    <div class="container_">
        <div class="card" ref="card">
            <div class="card_front" ref="cardFront">
                {{ num }}
            </div>
            <div class="card_back" ref="cardBack">
                {{ num }}
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'FlipBox',
    data() {
        return {
            isShowFront: true,

        }
    },
    props: {
        num: {
            type: Number,
            default: 0
        },
    },
    watch: {
        num(newValue) {
            console.log(newValue);
            this.isShowFront = !this.isShowFront;

            this.$refs.card.classList.add('flip')

            setTimeout(() => {
                this.$refs.card.classList.remove('flip')
            }, 800);
        }
    },
}
</script>

<style lang="scss" scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.container_ {
    perspective: 300px;
    user-select: none;
    width: 50px;
    height: 80px;


    .card {
        width: 100%;
        height: 100%;
        position: relative;

        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-size: 50px;
        transform-style: preserve-3d;

        .card_front {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0%;
            left: 0%;
            backface-visibility: hidden;
            background-image: linear-gradient(45deg, rgb(142, 238, 158), rgb(8, 196, 230));


            border-radius: 5px;

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }

        .card_back {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0%;
            left: 0%;
            backface-visibility: hidden;
            transform: rotateX(-180deg);
            background-image: linear-gradient(45deg, rgb(142, 238, 158), rgb(8, 196, 230));
            border-radius: 5px;

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }
    }

    .flip {
        transform: rotateX(-180deg);
        transition: transform 0.5s ease;
    }
}
</style>



