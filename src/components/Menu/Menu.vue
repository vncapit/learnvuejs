<template>
    <ul class="menu">
        <li v-for="route in routes" :key="route.path">
            <router-link :to="route.path">{{ route.name }}</router-link>
        </li>
    </ul>
</template>

<script>
import routes from '../../router/index.js';
export default {
    name: "ElMenu",
    data() {
        return {
            routes: routes
        }
    },
}
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.menu {
    display: flex;
    flex-direction: row;
    justify-content: center;
    justify-items: center;
    list-style: none;

    li {
        display: inline-block;

        background: rgb(46, 44, 44);
        
        a {
            display: inline-block;
            padding: 10px 10px;
            text-decoration: none;
            color: rgb(200, 200, 200);

            &:active, &:visited {
                color: rgb(200, 200, 200);
            }
        }

        &:hover{
            background: rgb(100, 100, 100);
        }
    }

}
</style>