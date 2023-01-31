<template>
    <div class="container">
        <div class="img" :style="style_url">
            <div class="date">
                <div class="month">
                    {{ month }}
                </div>
                <div class="day">
                    {{ day }}
                </div>
            </div>
        </div>
        <div class="contents">
            <h1 class="title">{{ data.title }}</h1>
            <p class="time">{{ data.time }}</p>
            <p class="desc">{{ data.desc }}</p>
            <span class="location"><i class="fa-solid fa-location-dot"></i>{{ data.location }}</span>
        </div>

    </div>
</template>

<script>
export default {
    name: 'EventCard',
    computed: {
        month() {
            return this.data.startDate.toLocaleString('en-US', { month: 'short' });
        },
        day() {
            return this.data.startDate.getDate();
        },
        style_url() {
            return `background-image: url('${this.data.img}');`
        }
    },
    props: {
        data: {
            type: Object,
            default() {
                return {
                    title: 'Scuba Merit Badge',
                    time: 'August 28 | 8am - 3pm',
                    startDate: new Date('2023-12-14'),
                    desc: 'Earn your scuba diving merit badge. Pre-req: Requirement 1a, 2b, 4ab',
                    location: '503 Harbor Blvd, Destin, FL',
                    img: 'image/eventcard1.avif',
                }
            }
        },
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
    display: flex;
    flex-direction: row;
    width: 630px;
    height: 200px;
    border-radius: 5px;
    overflow: hidden;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;

    .img {
        height: 200px;
        width: 240px;
        background-size: cover;
        position: relative;

        .date {
            position: absolute;
            top: 0;
            left: 20px;
            width: 60px;
            background-color: #fd4949;

            &::before {
                position: absolute;
                content: '';
                top: 100%;
                left: 0;
                width: 0;
                height: 0;
                border-top: 12px solid #fd4949;
                border-bottom: 12px solid transparent;
                border-left: 25px solid #fd4949;
                border-right: 25px solid transparent;
            }

            &::after {
                position: absolute;
                content: '';
                width: 0;
                height: 0;
                top: 100%;
                right: 0%;

                border-top: 12px solid #fd4949;
                border-bottom: 12px solid transparent;
                border-left: 25px solid transparent;
                border-right: 25px solid #fd4949;
            }

            .month {
                font-size: 16px;
                font-weight: bold;
                letter-spacing: 0.1rem;
                color: #fff;
                margin-top: 3px;
            }
            .day {
                font-size: 30px;
                font-weight: bold;
                color: #fff;
            }
        }

    }

    .contents {
        height: 200px;
        width: 390px;
        background-color: rgb(255, 255, 255);
        padding-top: 16px;
        padding-left: 16px;
        padding-right: 16px;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        text-align: left;

        .title {
            font-size: 32px;
        }

        .time {
            font-size: 18px;
            font-weight: 600;
            color: #6d6d6d;
            margin-top: 10px;
        }

        .desc {
            margin-top: 25px;
            font-size: 16px;
            color: rgba(0, 0, 0, 0.87);
        }

        .location {
            font-size: 14px;
            margin-top: 10px;

            i {
                margin-right: 10px;
            }
        }

    }
}
</style>