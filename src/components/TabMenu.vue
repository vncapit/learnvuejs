<template>
    <div class="container">
        <div class="tabmenu">
            <div class="background">

            </div>
            <div class="menu">
                <ul>
                    <li><a href="#!">First Tab</a></li>
                    <li><a href="#!">Second Tab</a></li>
                    <li><a href="#!">Third Tab</a></li>
                </ul>
            </div>
        </div>
    </div>

</template>

<script>

</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
}
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom, #2193b0, #6dd5ed);
    width: 100vh;
    height: auto;
    transform-style: preserve-3d;
}
.tabmenu {
    width: 500px;
    height: 400px;
    position: relative;
    z-index: 0;
}

.background {
    position: absolute;
    width: 500px;
    height: 400px;
    background-color: rgb(77, 75, 75);
    background-image: url('../assets/bg1.avif');
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
    background: transparent 1;
}

.menu {
    z-index: 1;
    background-color: #071011;

    li {
        display: inline-block;
        list-style: none;


        a {
            display: block;
            text-decoration: none;
            color: rgba($color: #fff, $alpha: 0.5);
            font-size: 18px;
            padding: 15px 15px;

            &:hover {
                background-color: #fff;
                color: #bbb;
            }

            transition: background-color 0.2s;
        }
    }

}
</style>