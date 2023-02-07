<template>
    <div class="container">
        <input type="text" class="search_bar" placeholder="Search" v-model="search">
        <div class="menu">
            <ul>
                <li :class="{ 'selected': (this.menu == 'important') }" @click="menuClickHandle('important')">Important
                </li>
                <li :class="{ 'selected': (this.menu == 'upcoming') }" @click="menuClickHandle('upcoming')">Upcoming
                </li>
                <li :class="{ 'selected': (this.menu == 'finished') }" @click="menuClickHandle('finished')">Finished
                </li>
                <div class="underline" :style="eventscard.style"></div>
            </ul>
            <span>FILTER <i class="fa-solid fa-bars"></i></span>
        </div>
        <div class="cards">
            <TransitionGroup name="fade" tag="ul">
                <li v-for="card in eventscard.cards" :key="card.title">
                    <EventCard :data="card" />
                </li>
            </TransitionGroup>
        </div>
    </div>
</template>

<script>
import EventCard from '@/components/commons/EventCard.vue';

class Event {
    constructor(title, isImportant, time, startDate, desc, location, img) {
        this.title = title;
        this.isImportant = isImportant;
        this.time = time;
        this.startDate = startDate;
        this.desc = desc;
        this.location = location;
        this.img = img;
    }
}


export default {
    name: 'EventsCard',
    components: {
        EventCard,
    },
    data() {
        return {
            events: [],
            menu: 'important',
            search: '',
        }
    },
    computed: {
        eventscard() {
            let events = { cards: [], style: '' }
            let cards = [];
            const compareDate = new Date('2023-01-01');
            switch (this.menu) {
                case 'important':
                    cards = this.events.filter((event) => { return event.isImportant });
                    events.style = 'left: 9px; width: 69px;';
                    break;
                case 'upcoming':
                    cards = this.events.filter((event) => { return event.startDate > compareDate });
                    events.style = 'left: 93px; width: 70px;';
                    break;
                case 'finished':
                    cards = this.events.filter((event) => { return event.startDate < compareDate });
                    events.style = 'left: 180px; width: 60px;';
                    break;

                default:
                    return this.events;
            }

            events.cards = cards.filter((card) => { return card.title.toLowerCase().includes(this.search.toLowerCase())});
            return events;
        },
    },
    methods: {
        menuClickHandle(menu) {
            this.menu = menu;
        },
        init() {
            this.events.push(new Event('Scuba Merit Badge', true, 'August 28 | 8am - 3pm',
                new Date('2024-08-28'), 'Earn your scuba diving merit badge. Pre-req: Requirement 1a, 2b, 4ab',
                '503 Harbor Blvd, Destin, FL', 'image/eventcard1.avif'));

            this.events.push(new Event('Backpacking Hike', false, 'June 4th, 2024',
                new Date('2024-07-04'), '10mi backpacking hike at Thunder Mountain. Remember to pack properly',
                'Thunder Mtn, Disney, FL', 'image/eventcard2.avif'));

            this.events.push(new Event('Black Forest Camp', false, 'March 3 - March 5, 2024',
                new Date('2024-03-03'), 'Weekend campout in the Black Forest',
                'Black Forest, Baden-Württemberg, DE', 'image/eventcard3.avif'));

            this.events.push(new Event('Artic Campout', false, 'December 14 - 18, 2022',
                new Date('2022-12-14'), 'Campout in the artic. Freeze your toes off. See cute penguins.',
                ' Barrow, Alaska, US', 'image/eventcard4.avif'));

            this.events.push(new Event('Sailing', false, 'April 23 | 11am - 7pm',
                new Date('2022-04-23'), 'Sail the high seas. Get lost in the Bermuda Triangle.',
                'Second star to the right, and straight on till morning', 'image/eventcard5.avif'));
        },


    },
    mounted() {
        this.init();
    },
}
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.fade-enter-active,
.fade-leave-active {
    transition: all 0.6s linear;
}

.fade-enter,
.fade-leave-active {
    position: absolute;
    opacity: 0;
    transform: translateY(-50px);
}


.fade-enter-active {
    position: relative;
    top: 0;
    left: 0;
}

.container {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    background: radial-gradient(900px, rgb(159, 230, 118), rgb(227, 124, 236));

    .search_bar {
        display: block;
        margin-top: 80px;
        width: 600px;
        padding: 16px 30px;
        font-size: 18px;
        border-radius: 60px;
        border: none;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 5px;

        &:focus {
            outline: none;
        }
    }

    .menu {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        width: 540px;
        padding: 15px;

        ul {
            position: relative;
            display: inline-block;

            li {
                display: inline-block;
                padding: 0px 8px;
                cursor: pointer;
            }

            .selected {
                color: rgb(235, 81, 81);
            }

            .underline {
                position: absolute;
                top: 130%;
                height: 2px;
                background-color: rgb(235, 81, 81);
                transition: all 0.3s ease;
            }
        }



        span {
            cursor: pointer;

            i {
                padding-left: 5px;
            }
        }
    }

    ul {
        list-style: none;
    }

    .cards {
        min-width: 630px;
    }
}
</style>