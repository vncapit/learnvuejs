<template>
    <div class="container">
        <div class="time">
            <FlipBox :num="countDown.hours_2" />
            <FlipBox :num="countDown.hours_1" />
        </div>

        <div class="time">
            <FlipBox :num="countDown.minutes_2" />
            <FlipBox :num="countDown.minutes_1" />
        </div>

        <div class="time">
            <FlipBox :num="countDown.seconds_2" />
            <FlipBox :num="countDown.seconds_1" />
        </div>
    </div>
</template>

<script>
import FlipBox from '@/components/commons/FlipBox.vue';
export default {
    name: 'FlipClock',
    components: {
        FlipBox,
    },
    data() {
        return {
            dateTime: new Date(),

        }
    },
    computed: {
        countDown() {
            const endDate = new Date(this.dateTime.getFullYear(), this.dateTime.getMonth(), this.dateTime.getDate(), 23, 59, 59, 999);
            const diff = endDate.getTime() - this.dateTime.getTime();
            let countDown = {
                hours: 0,
                minutes: 0,
                seconds: 0,
                seconds_1: 0,
                seconds_2: 0,
                minutes_1: 0,
                minutes_2: 0,
                hours_1: 0,
                hours_2: 0,
            };
            countDown.hours = Math.floor(diff / (1000 * 60 * 60));
            countDown.minutes = Math.floor((diff - countDown.hours * 60 * 60 * 1000) / (1000 * 60));
            countDown.seconds = Math.floor((diff - countDown.hours * 60 * 60 * 1000 - countDown.minutes * 60 * 1000) / 1000);
            countDown.seconds_1 = countDown.seconds%10;
            countDown.seconds_2 = (countDown.seconds - countDown.seconds_1)/10;
            countDown.minutes_1 = countDown.minutes%10;
            countDown.minutes_2 = (countDown.minutes - countDown.minutes_1)/10;
            countDown.hours_1 = countDown.hours%10;
            countDown.hours_2 = (countDown.hours - countDown.hours_1)/10;

            return countDown
        },
        style_flip() {
            return `transform: rotateX(${this.countDown.seconds * 180}deg)`
        }
    },
    methods: {
        getDateTime() {
            this.dateTime = new Date();
        }
    },
    created() {
        setInterval(() => {
            this.getDateTime();
        }, 100);
    },
}
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: radial-gradient(300px, rgb(231, 243, 162), rgb(238, 96, 195));

    .time {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 105px;
        height: 110px;
        margin-left: 15px;
    }
}
</style>