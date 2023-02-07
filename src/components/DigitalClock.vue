<template>
    <div class="container">
        <div class="wrap">
            <p class="date">
                {{ date }}
            </p>
            <p class="time">
                {{ time }}
            </p>
            <p class="text">
                DIGITAL CLOCK with Vue.js
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "DigitalClock",
    data() {
        return {
            dateTime: new Date(),
        }
    },
    computed: {
        date() {
            return this.dateTime.getFullYear() + "-" + ((this.dateTime.getMonth() + 1) + "-").padStart(3, '0')
                + (this.dateTime.getDate() + "").padStart(2, '0') + " " + this.dateTime.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
        },
        time() {
            return (this.dateTime.getHours() + "").padStart(2, '0') + ":" + (this.dateTime.getMinutes() + "").padStart(2, '0')
                + ":" + (this.dateTime.getSeconds() + "").padStart(2, '0');
        },
    },
    methods: {
        getDateTime() {
            this.dateTime = new Date();
        }
    },
    mounted() {
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
    font-family: 'share tech mono', 'Arial Narrow', monospace;
    color: #bfeff5;
    text-shadow: 0px 0px 60px rgb(198, 235, 238);
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: radial-gradient(ellipse at center,  #0a2e38  0%, #000000 70%);
}

.wrap {
    .date {
        font-size: 26px;

    }

    .time {
        padding: 10px;
        font-size: 80px;
    }

    .text {
        margin-top: 20px;
        font-size: 14px;
    }
}
</style>