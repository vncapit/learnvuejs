<template>
    <div class="container">
        <div class="preloader" :class="{ 'loader-done-1': next }">
            <div v-if="!done" class="percent">I'm {{ percent }} % done!</div>
            <div v-if="done">Let get crazy!</div>
            <div v-if="!done" class="progress-bar" :style="`left: ${percent - 100}%;`"></div>
        </div>
        <div class="main" :class="{ 'loader-done-2': next }">
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
            done: false,
            next: false,
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
                    setTimeout(() => {
                        this.done = true;
                        setTimeout(() => {
                            this.next = true;
                        }, 1500);
                    }, 1500);
                }
            }, 40)
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
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;

    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 36px;
    font-weight: 600;
    color: #fff;

    .preloader {
        background-color: #3498DB;
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 0;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        transition: all 2s linear;

        .percent {

        }

        .progress-bar {
            position: absolute;
            top: 55%;
            left: -100%;
            width: 100%;
            height: 4px;
            background-color: #fff;
        }

    }

    .loader-done-1 {
        top: -100%;
    }

    .loader-done-2 {
        top: 0% !important;
    }

    .main {
        background-color: #34495E;
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 100%;
        transition: all 2s linear;

        p {
            margin-top: 60px;
        }

    }
}
</style> 