<template>
    <div class="tabmenu">
        <div class="menu">
            <ul>
                <li><a href="#!">First Tab</a></li>
                <li><a href="#!">Second Tab</a></li>
                <li><a href="#!">Third Tab</a></li>
            </ul>
        </div>
        <div class="content">

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

.tabmenu {
    margin: 0 auto;
    width: 500px;
    height: 400px;
    background-color: rgb(77, 75, 75);
    background-image: url('../assets/bg1.avif');
    background-repeat: no-repeat;
    background-size: cover;

    .menu {
        width: 500px;
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

    .content {}
}
</style>