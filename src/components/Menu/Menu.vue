<template>
    <nav class="menu">
        <ul v-for="item in items" :key="item.id">
            <li>
                <router-link to="/ashdfasudhf"/>
            </li>
        </ul>
    </nav>
</template>

<script>
import {routes} from '@./router/index.js';
export default {
    name: "Menu",
    data() {
        return {
            key: value
        }
    },
}
</script>

<style lang="scss" scoped>

</style>