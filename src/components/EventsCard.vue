<template>
    <div class="container">
        <EventCard />

    </div>
</template>

<script>
import EventCard from '@/components/commons/EventCard.vue';

class Event {
    constructor(title, isUpcoming, isImportant, time, date, desc, location) {
        this.title = title;
        this.isUpcoming = isUpcoming;
        this.isImportant;
        this.time = time;
        this.date = date;
        this.desc = desc;
        this.location = location;
    }
}


export default {
    name: 'EventsCard',
    components: {
        EventCard,
    },
    data() {
        return {
            events: []
        }
    },
    methods: {
        init() {
            this.events.push(new Event('Scuba Merit Badge', true, true, 'August 28 | 8am - 3pm', new Date('2023-08-28')))
        }
    },
}
</script>

<style lang="scss" scoped>

</style>