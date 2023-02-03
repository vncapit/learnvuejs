<template>
    <div class="container">
        <div class="preloader"   :class="{'hide-preloader' : (percent == 100)}">
            <div>I'm {{ percent }} % done!</div>
            <div class="crazy">Let get crazy!</div>
            <div class="progress-bar"></div>
        </div>
        <div class="main" >
            <p>Nice to meet you, i'm a title!</p>
        </div>

    </div>
</template>

<script>
export default {
    name: 'PreLoader',
    data() {
        return {
            percent: 0,
            timer: null,
        }
    },
    mounted() {
        this.counter();
    },
    methods: {
        counter() {
            this.timer = setInterval(() => {
                this.percent++;
                if (this.percent == 100) {
                    clearInterval(this.timer);
                }
            }, 20)
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

.container {
    display: flex;
    flex-direction: column;


    .preloader {
        width: 100%;
        height: 110vh;
        background-color: aqua;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        transition: all 3s linear;
    }

    .hide-preloader {
        transform: translateY(-110vh);
    }

    .main {
        background-color: blueviolet;
        width: 100%;
        height: 110vh;
    }
}
</style> 